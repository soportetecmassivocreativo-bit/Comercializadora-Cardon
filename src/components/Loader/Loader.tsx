"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import styles from "./Loader.module.css";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const scanLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Safety fallback: if animation doesn't complete, force dismiss after 5s
    const fallback = setTimeout(() => {
      onComplete();
    }, 5000);

    // Initial setup: logo hidden under clip-path, scan line at the starting left edge
    gsap.set(logoRef.current, { clipPath: "inset(0 100% 0 0)" });
    gsap.set(scanLineRef.current, { left: "0%", opacity: 0 });

    // 1. Fade in the laser scan line
    tl.to(scanLineRef.current, { opacity: 1, duration: 0.3 })
      // 2. Scan sweep: animate clipPath and scan line in tandem to "draw" the logo
      .to(logoRef.current, {
        clipPath: "inset(0 0% 0 0)",
        duration: 1.8,
        ease: "power2.inOut"
      }, "+=0.1")
      .to(scanLineRef.current, {
        left: "100%",
        duration: 1.8,
        ease: "power2.inOut"
      }, "<")
      // 3. Fade out the scan line once completed
      .to(scanLineRef.current, { opacity: 0, duration: 0.3 })
      // 4. Slide panel up to reveal homepage
      .to(loaderRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power4.inOut",
        delay: 0.6,
        onComplete: () => {
          clearTimeout(fallback);
          onComplete();
        }
      });

    return () => { clearTimeout(fallback); tl.kill(); };
  }, [onComplete]);

  return (
    <div ref={loaderRef} className={styles.loader}>
      {/* Background digital warehouse image matching the right-side hero theme */}
      <div className={styles.bgWrapper}>
        <Image src="/images/proposal_hero_3.jpg" alt="Logística Digital de Fondo" fill className={styles.bgImage} priority />
        <div className={styles.bgOverlay} />
      </div>

      <div className={styles.content}>
        <div className={styles.logoWrapper}>
          {/* Logo container that is drawn by the clip-path */}
          <div ref={logoRef} className={styles.logoContainer}>
            <Image src="/images/logo.png" alt="Comercializadora Cardón" width={280} height={78} className={styles.logoImg} priority />
          </div>
          {/* Laser scanning line */}
          <div ref={scanLineRef} className={styles.scanLine} />
        </div>
      </div>
    </div>
  );
}
