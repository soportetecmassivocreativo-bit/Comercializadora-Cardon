"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Hero.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleLines = useRef<(HTMLSpanElement | null)[]>([]);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const leftBgRef = useRef<HTMLDivElement>(null);
  const rightBgRef = useRef<HTMLDivElement>(null);
  const brandCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 2.8 });
    
    // Background split entrance animation on load
    tl.fromTo(leftBgRef.current, { xPercent: -100 }, { xPercent: 0, duration: 1.4, ease: "power3.out" }, 0)
      .fromTo(rightBgRef.current, { xPercent: 100 }, { xPercent: 0, duration: 1.4, ease: "power3.out" }, 0)
      .fromTo(
        titleLines.current.filter(Boolean),
        { y: 80, opacity: 0, rotateX: 10 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1, ease: "power3.out", stagger: 0.15 },
        "-=0.6"
      )
      .fromTo(subtitleRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.4")
      .fromTo(
        ctaRef.current ? Array.from(ctaRef.current.children) : [],
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", stagger: 0.1 },
        "-=0.3"
      )
      .fromTo(
        brandCardRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      );

    // Scroll-triggered split animation (slides apart on scroll down, slides together on scroll up)
    const leftScroll = gsap.fromTo(leftBgRef.current, 
      { xPercent: 0 },
      {
        xPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
          invalidateOnRefresh: true,
        }
      }
    );

    const rightScroll = gsap.fromTo(rightBgRef.current,
      { xPercent: 0 },
      {
        xPercent: 100,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
          invalidateOnRefresh: true,
        }
      }
    );

    return () => {
      tl.kill();
      leftScroll.scrollTrigger?.kill();
      rightScroll.scrollTrigger?.kill();
      leftScroll.kill();
      rightScroll.kill();
    };
  }, []);

  return (
    <section id="home" ref={sectionRef} className={styles.hero}>
      <div className={styles.background}>
        <div ref={leftBgRef} className={`${styles.bgHalf} ${styles.bgLeft}`}>
          <Image src="/images/proposal_hero_1.jpg" alt="Almacén Físico Comercializadora Cardón" fill className={styles.bgImage} priority />
        </div>
        <div ref={rightBgRef} className={`${styles.bgHalf} ${styles.bgRight}`}>
          <Image src="/images/proposal_hero_3.jpg" alt="Logística Digital Comercializadora Cardón" fill className={styles.bgImage} priority />
        </div>
        <div className={styles.overlay} />
      </div>
      <div className={styles.shapes}>
        <div className={`${styles.shape} ${styles.shape1}`} />
        <div className={`${styles.shape} ${styles.shape2}`} />
        <div className={`${styles.shape} ${styles.shape3}`} />
        <div className={`${styles.shape} ${styles.shape4}`} />
      </div>
      <div className={styles.content}>
        <div className={styles.titleBlock}>
          <h1 className={styles.title}>
            <span ref={(el) => { titleLines.current[0] = el; }} className={styles.titleLine}>Conectamos</span>
            <span ref={(el) => { titleLines.current[1] = el; }} className={`${styles.titleLine} ${styles.titleAccent}`}>Calidad y Confianza</span>
          </h1>
          <p ref={subtitleRef} className={styles.subtitle}>
            Distribución mayorista e importación inteligente de alimentos. Proporcionamos a tu comercio la eficiencia, puntualidad y el compromiso que tu negocio merece.
          </p>
        </div>
        <div ref={ctaRef} className={styles.cta}>
          <a href="#products" className={styles.btnPrimary}>Nuestros Productos</a>
          <a href="#contact" className={styles.btnOutline}>Contáctanos</a>
        </div>
      </div>

      <div ref={brandCardRef} className={styles.brandCard}>
        <div className={styles.brandCardInner}>
          <div className={styles.brandCardIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h3 className={styles.brandCardTitle}>Compromiso y Calidad</h3>
          <p className={styles.brandCardText}>
            "Garantizamos un abastecimiento constante, eficiente y con productos importados de primer nivel, facilitando el desarrollo diario de cada comercio a nivel global."
          </p>
          <div className={styles.brandCardFooter}>
            Sede Principal: <strong>Punta Cardón, Falcón</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
