"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Products.module.css";

gsap.registerPlugin(ScrollTrigger);

const products = [
  { num: "01", name: "Alimentos Secos y Víveres", image: "/images/products_dry_food_v2.jpg", desc: "Harina, arroz, pasta, granos, cereales y enlatados de marcas reconocidas para el abastecimiento diario de tu comercio." },
  { num: "02", name: "Bebidas y Cervezas", image: "/images/products_beverages_v2.jpg", desc: "Aguas, jugos, refrescos y cervezas nacionales e importadas con alta demanda y rotación constante." },
  { num: "03", name: "Vinos y Bodegón", image: "/images/products_wines_v2.jpg", desc: "Selección variada de vinos tintos, blancos y rosados ideales para abastecer bodegones, restaurantes y licorerías." },
  { num: "04", name: "Licores Importados", image: "/images/products_liquors_v2.jpg", desc: "Whiskys, rones, vodkas y destilados premium de las marcas más prestigiosas del mercado internacional." },
];

export default function Products() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } });
      
      const cards = cardsRef.current?.querySelectorAll("." + styles.card);
      if (cards) {
        gsap.fromTo(cards, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.15, scrollTrigger: { trigger: cardsRef.current, start: "top 80%" } });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="products" ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div ref={headerRef} className={styles.header}>
          <div className={styles.badge}>Productos</div>
          <h2 className={styles.title}>Variedad y <span className={styles.titleAccent}>calidad</span> en cada categoría</h2>
          <p className={styles.description}>Ofrecemos el catálogo más completo de productos alimenticios y de consumo masivo para abastecer tu negocio.</p>
        </div>
        <div ref={cardsRef} className={styles.grid}>
          {products.map((product) => (
            <div key={product.num} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image src={product.image} alt={product.name} fill className={styles.image} />
                <div className={styles.imageOverlay} />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.cardNumber}>{product.num}</span>
                <h3 className={styles.cardName}>{product.name}</h3>
                <p className={styles.cardDesc}>{product.desc}</p>
                <a href="#contact" className={styles.cardLink}>
                  Consultar disponibilidad
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
