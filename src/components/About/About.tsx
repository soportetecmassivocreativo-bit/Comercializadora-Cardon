"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./About.module.css";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { target: 100, suffix: "%", label: "Eficacia" },
  { target: 100, suffix: "%", label: "Atención Especializada" },
  { target: 100, suffix: "%", label: "Disponibilidad en Productos" },
  { target: 100, suffix: "%", label: "Compromiso" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const infraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(textRef.current, { x: -60, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 70%" } });
      gsap.fromTo(imageRef.current, { x: 60, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 70%" }, delay: 0.2 });
      
      const infraCards = infraRef.current?.querySelectorAll(`.${styles.infraCard}`);
      if (infraCards) {
        gsap.fromTo(infraCards, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.2, scrollTrigger: { trigger: infraRef.current, start: "top 75%" } });
      }

      const statValues = textRef.current?.querySelectorAll(`.${styles.statValue}`);
      statValues?.forEach((el: any) => {
        const target = parseInt(el.getAttribute("data-target") || "0", 10);
        const suffix = el.getAttribute("data-suffix") || "";
        const obj = { val: 0 };

        gsap.to(obj, {
          val: target,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "restart reset restart reset",
          },
          onUpdate: () => {
            el.innerText = Math.round(obj.val) + suffix;
          },
          onComplete: () => {
            el.innerText = target + suffix;
          }
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className={styles.about}>
      <div className={styles.container}>
        {/* Main Grid */}
        <div className={styles.grid}>
          <div ref={textRef}>
            <div className={styles.badge}>Sobre Nosotros</div>
            <h2 className={styles.title}>
              Tu aliado en distribución de alimentos
            </h2>
            <p className={styles.description}>
              En Comercializadora Cardón nos especializamos en la comercialización y distribución mayorista de alimentos y productos de consumo masivo. Abastecemos negocios con la más amplia variedad de productos, garantizando calidad, disponibilidad y precios competitivos.
            </p>
            <div className={styles.statsGrid}>
              {stats.map((stat) => (
                <div key={stat.label} className={styles.statItem}>
                  <span className={styles.statValue} data-target={stat.target} data-suffix={stat.suffix}>0{stat.suffix}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div ref={imageRef} className={styles.imageWrapper}>
            <div className={styles.imageContainer}>
              <Image src="/images/about_food_logistics.jpg" alt="Logística de Alimentos" fill className={`${styles.image} ${styles.image1}`} />
              <Image src="/images/about_liquor_logistics.jpg" alt="Logística de Vinos y Licores" fill className={`${styles.image} ${styles.image2}`} />
              <Image src="/images/about_general_logistics.jpg" alt="Logística de Productos de Higiene" fill className={`${styles.image} ${styles.image3}`} />
              <div className={styles.shine} />
            </div>
          </div>
        </div>

        {/* Sub-Sección: Infraestructura y Almacenamiento */}
        <div ref={infraRef} className={styles.infraSection}>
          <div className={styles.infraHeader}>
            <div className={styles.badge}>Infraestructura & Almacenamiento</div>
            <h3 className={styles.infraTitle}>
              Capacidad Logística y <span className={styles.titleAccent}>Almacenes de Gran Escala</span>
            </h3>
            <p className={styles.infraSubtitle}>
              Contamos con instalaciones industriales de amplia superficie equipadas con estanterías de alta capacidad, zonas de empaque y logística eficiente.
            </p>
          </div>

          <div className={styles.infraGrid}>
            {/* Card 1: Daily Logistics Warehouse */}
            <div className={styles.infraCard}>
              <div className={styles.infraImageWrapper}>
                <Image
                  src="/images/warehouse_daily_logistics.jpg"
                  alt="Almacén Comercial de Alimentos y Gran Capacidad"
                  fill
                  className={styles.infraImage}
                />
                <div className={styles.infraTag}>Almacén Principal</div>
              </div>
              <div className={styles.infraContent}>
                <h4 className={styles.infraCardTitle}>Distribución Masiva & Clasificación Continua</h4>
                <p className={styles.infraCardText}>
                  Instalaciones industriales equipadas con estanterías pesadas y transporte continuo para la recepción, organización y despacho de grandes volúmenes de alimentos hacia toda la región.
                </p>
              </div>
            </div>

            {/* Card 2: Daily Shelving Warehouse */}
            <div className={styles.infraCard}>
              <div className={styles.infraImageWrapper}>
                <Image
                  src="/images/warehouse_daily_shelves.jpg"
                  alt="Anaqueles Comerciales y Stock Organizado"
                  fill
                  className={styles.infraImage}
                />
                <div className={styles.infraTag}>Stock Organizado</div>
              </div>
              <div className={styles.infraContent}>
                <h4 className={styles.infraCardTitle}>Anaqueles Industriales & Stock Permanente</h4>
                <p className={styles.infraCardText}>
                  Estanterías metálicas de alta resistencia y pasillos amplios diseñados para el resguardo impecable, control de inventarios y rotación constante de productos de primera necesidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
