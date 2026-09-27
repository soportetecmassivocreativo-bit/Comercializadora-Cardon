"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Testimonials.module.css";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "Desde que trabajamos con Comercializadora Cardón, nuestro inventario siempre está completo. Su servicio de entrega es puntual y la calidad de los productos es excepcional.",
    author: "María González",
    company: "Supermercado El Pueblo",
    initial: "M",
  },
  {
    quote: "Los mejores precios mayoristas de Paraguaná. Además, su equipo siempre está dispuesto a asesorarnos sobre qué productos tienen mayor rotación.",
    author: "José Hernández",
    company: "Abasto La Esquina",
    initial: "J",
  },
  {
    quote: "La cadena de frío que manejan es impecable. Nuestros productos lácteos siempre llegan en perfectas condiciones. Son nuestro proveedor de confianza.",
    author: "Ana Rodríguez",
    company: "Mini Market Express",
    initial: "A",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll("." + styles.card);
      if (cards) {
        gsap.fromTo(cards, { y: 50, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        });
      }
    });
    return () => ctx.revert();
  }, []);

  const StarIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#00AEEF" stroke="#00AEEF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
    </svg>
  );

  return (
    <section id="testimonials" ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>Testimonios</div>
          <h2 className={styles.title}>Lo que dicen <span className={styles.titleAccent}>nuestros clientes</span></h2>
        </div>
        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.author} className={styles.card}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (<StarIcon key={i} />))}
              </div>
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              <div className={styles.authorInfo}>
                <div className={styles.avatar}>{t.initial}</div>
                <div>
                  <div className={styles.author}>{t.author}</div>
                  <div className={styles.company}>{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
