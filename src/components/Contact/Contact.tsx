"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Contact.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current?.querySelectorAll("." + styles.animItem) || [],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <h2 className={`${styles.title} ${styles.animItem}`}>¿Listo para <span className={styles.titleAccent}>abastecer tu negocio</span>?</h2>
            <p className={`${styles.subtitle} ${styles.animItem}`}>Contáctanos hoy y recibe una cotización personalizada sin compromiso.</p>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={`${styles.inputGroup} ${styles.animItem}`}>
                <label className={styles.label}>Nombre</label>
                <input type="text" placeholder="Tu nombre completo" className={styles.input} />
              </div>
              <div className={`${styles.inputGroup} ${styles.animItem}`}>
                <label className={styles.label}>Email</label>
                <input type="email" placeholder="correo@ejemplo.com" className={styles.input} />
              </div>
              <div className={`${styles.inputGroup} ${styles.animItem}`}>
                <label className={styles.label}>Teléfono</label>
                <input type="tel" placeholder="+58 414-1234567" className={styles.input} />
              </div>
              <div className={`${styles.inputGroup} ${styles.animItem}`}>
                <label className={styles.label}>Mensaje</label>
                <textarea placeholder="¿En qué podemos ayudarte?" className={`${styles.input} ${styles.textarea}`} />
              </div>
              <button type="submit" className={`${styles.submitBtn} ${styles.animItem}`}>Enviar Mensaje</button>
            </form>
          </div>
          <div>
            <div className={styles.infoCards}>
              <div className={`${styles.infoCard} ${styles.animItem}`}>
                <div className={styles.infoIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <div className={styles.infoLabel}>Llámanos o Escríbenos</div>
                  <a href="https://wa.me/584126677039" target="_blank" rel="noopener noreferrer" className={styles.infoValue} style={{ color: '#00AEEF' }}>0412-6677039</a>
                </div>
              </div>

              <div className={`${styles.infoCard} ${styles.animItem}`}>
                <div className={styles.infoIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <div className={styles.infoLabel}>Ubicación Principal</div>
                  <div className={styles.infoValue}>Punto Fijo, Península de Paraguaná, Estado Falcón</div>
                </div>
              </div>

              <div className={`${styles.infoCard} ${styles.animItem}`}>
                <div className={styles.infoIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                </div>
                <div>
                  <div className={styles.infoLabel}>Horario de Atención</div>
                  <div className={styles.infoValue}>Lunes a Sábado: 7:00 AM - 6:00 PM</div>
                </div>
              </div>
            </div>

            <div className={`${styles.socialHub} ${styles.animItem}`}>
              <div className={styles.qrContainer}>
                <Image src="/images/qr.jpg" alt="Escanea el código QR" width={140} height={140} className={styles.qrImage} />
                <span className={styles.qrText}>Escanea QR</span>
              </div>
              <div className={styles.channels}>
                <a href="https://www.instagram.com/ccardon20/" target="_blank" rel="noopener noreferrer" className={styles.channelLink}>
                  <div className={styles.channelIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </div>
                  <div>
                    <div className={styles.channelLabel}>Instagram</div>
                    <div className={styles.channelValue}>@ccardon20</div>
                  </div>
                </a>
                <a href="https://wa.me/584126677039" target="_blank" rel="noopener noreferrer" className={styles.channelLink}>
                  <div className={styles.channelIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <div className={styles.channelLabel}>WhatsApp</div>
                    <div className={styles.channelValue}>0412-6677039</div>
                  </div>
                </a>
                <a href="https://www.tiktok.com/@ccardon20" target="_blank" rel="noopener noreferrer" className={styles.channelLink}>
                  <div className={styles.channelIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
                  </div>
                  <div>
                    <div className={styles.channelLabel}>TikTok</div>
                    <div className={styles.channelValue}>@ccardon20</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
