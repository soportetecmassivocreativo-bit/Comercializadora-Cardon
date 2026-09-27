"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Inicio", href: "#home" },
  { label: "Nosotros", href: "#about" },
  { label: "Filosofía", href: "#philosophy" },
  { label: "Servicios", href: "#features" },
  { label: "Productos", href: "#products" },
  { label: "Testimonios", href: "#testimonials" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    gsap.fromTo(headerRef.current, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 2.8 });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileNavRef.current) {
      if (isMobileOpen) {
        gsap.to(mobileNavRef.current, { clipPath: "circle(150% at top right)", duration: 0.6, ease: "power3.inOut" });
        gsap.fromTo(
          mobileNavRef.current.querySelectorAll("." + styles.mobileLink),
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.08, duration: 0.4, ease: "power2.out", delay: 0.2 }
        );
      } else {
        gsap.to(mobileNavRef.current, { clipPath: "circle(0% at top right)", duration: 0.4, ease: "power3.inOut" });
      }
    }
  }, [isMobileOpen]);

  const handleLinkClick = () => setIsMobileOpen(false);

  return (
    <header ref={headerRef} className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <nav className={styles.nav}>
        <a href="#home" className={styles.logoLink}>
          <Image src="/images/logo_v3.png" alt="Comercializadora Cardón" width={200} height={55} className={styles.logoImage} priority />
        </a>
        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.link}>{link.label}</a>
            </li>
          ))}
        </ul>
        <button
          className={`${styles.hamburger} ${isMobileOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle Menu"
        >
          <span /><span /><span />
        </button>
      </nav>
      <div ref={mobileNavRef} className={styles.mobileNav}>
        <ul className={styles.mobileLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.mobileLink} onClick={handleLinkClick}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
