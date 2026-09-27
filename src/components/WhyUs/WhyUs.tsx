"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./WhyUs.module.css";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    title: "Compromiso",
    desc: "Nos dedicamos a garantizar el suministro constante de productos, priorizando siempre la satisfacción de nuestros clientes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
  {
    title: "Eficiencia",
    desc: "Optimizamos nuestros procesos logísticos y operativos para ofrecer tiempos de entrega rápidos y un servicio impecable.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Calidad",
    desc: "Mantenemos altos estándares en los productos que importamos y comercializamos, asegurando durabilidad y cumplimiento de normativas.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
  },
  {
    title: "Innovación",
    desc: "Buscamos mejorar constantemente nuestras operaciones, implementando nuevas tecnologías y prácticas que favorezcan la eficiencia y el crecimiento de nuestros clientes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <line x1="9" y1="18" x2="15" y2="18" />
        <line x1="10" y1="22" x2="14" y2="22" />
      </svg>
    ),
  },
  {
    title: "Responsabilidad",
    desc: "Nos comprometemos con el desarrollo económico de nuestros clientes y con el bienestar de los consumidores, garantizando la disponibilidad de productos esenciales.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Esencia card
      gsap.fromTo(`.${styles.esenciaCard}`, { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: `.${styles.esenciaCard}`, start: "top 85%" }
      });

      const cards = cardsRef.current?.querySelectorAll("." + styles.mvCard);
      if (cards) {
        gsap.fromTo(cards, { y: 50, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.2,
          scrollTrigger: { trigger: cardsRef.current, start: "top 80%" },
        });
      }

      const valCards = valuesRef.current?.querySelectorAll("." + styles.valueCard);
      if (valCards) {
        gsap.fromTo(valCards, { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.6, ease: "power2.out", stagger: 0.1,
          scrollTrigger: { trigger: valuesRef.current, start: "top 80%" },
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="philosophy" ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>Nuestra Filosofía</div>
          <h2 className={styles.title}>Propósito e <span className={styles.titleAccent}>Identidad</span></h2>
        </div>

        <div className={styles.esenciaCard}>
          <div className={styles.esenciaHeader}>
            <div className={styles.esenciaIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <path d="M2 12h20" />
              </svg>
            </div>
            <h3 className={styles.esenciaTitle}>Nuestra Esencia</h3>
          </div>
          <p className={styles.esenciaText}>
            En Comercializadora Cardón, nuestra esencia radica en ser el motor de abastecimiento y crecimiento para el comercio local y regional. Nos definimos por la perfecta sincronía entre la visión de liderazgo nacional, la misión de un suministro ininterrumpido con altos estándares de calidad, y un arraigado conjunto de valores fundamentados en la eficiencia, el compromiso y la responsabilidad. No somos simplemente un distribuidor mayorista; somos el aliado estratégico que impulsa la rentabilidad y estabilidad de cada negocio, garantizando confianza en cada entrega.
          </p>
        </div>

        <div ref={cardsRef} className={styles.mvGrid}>
          <div className={`${styles.mvCard} ${styles.misionCard}`}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Misión</h3>
            </div>
            <p className={styles.cardText}>
              Importamos y comercializamos productos al mayor, ofreciendo un servicio eficiente y confiable. Nos enfocamos en garantizar un suministro constante y de calidad a través de nuestros almacenes siempre surtidos, con el objetivo de satisfacer las necesidades del mercado, optimizando la logística y brindando precios competitivos que contribuyan al crecimiento de nuestros clientes.
            </p>
          </div>

          <div className={`${styles.mvCard} ${styles.visionCard}`}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Visión</h3>
            </div>
            <p className={styles.cardText}>
              Ser la empresa líder en la importación y distribución mayorista de productos de primera necesidad en el país, reconocida por nuestra capacidad de ofrecer un amplio stock y soluciones logísticas innovadoras. Aspiramos a convertirnos en el aliado estratégico de los principales abastecimientos, garantizando disponibilidad, eficiencia y la más alta calidad en nuestros productos y servicios.
            </p>
          </div>
        </div>

        <div className={styles.valuesSection}>
          <h3 className={styles.valuesTitle}>Nuestros Valores</h3>
          <div ref={valuesRef} className={styles.valuesGrid}>
            {values.map((value) => (
              <div key={value.title} className={styles.valueCard}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <h4 className={styles.valueTitle}>{value.title}</h4>
                <p className={styles.valueDesc}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
