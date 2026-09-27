import Image from "next/image";
import styles from "./Footer.module.css";

const quickLinks = [
  { label: "Inicio", href: "#home" },
  { label: "Nosotros", href: "#about" },
  { label: "Filosofía", href: "#philosophy" },
  { label: "Servicios", href: "#features" },
  { label: "Productos", href: "#products" },
  { label: "Testimonios", href: "#testimonials" },
  { label: "Contacto", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <Image src="/images/logo_v3.png" alt="Comercializadora Cardón" width={160} height={45} className={styles.logoImg} />
            <p className={styles.desc}>Distribución mayorista de alimentos y productos de consumo masivo en la Península de Paraguaná, Estado Falcón.</p>
          </div>
          <div>
            <h4 className={styles.heading}>Empresa</h4>
            <ul className={styles.linksList}>
              {quickLinks.map((link) => (
                <li key={link.href} className={styles.linkItem}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className={styles.heading}>Oficina</h4>
            <div className={styles.contactInfo}>
              <p>Punta Cardón, Falcón, Venezuela.</p>
              <p>Teléfono: <a href="https://wa.me/584126677039" target="_blank" rel="noopener noreferrer">0412-6677039</a></p>
              <span className={styles.rifText}>RIF: J-40776210-9</span>
            </div>
          </div>
          <div>
            <h4 className={styles.heading}>Síguenos</h4>
            <div className={styles.socialLinks}>
              <a href="https://www.instagram.com/ccardon20/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://www.tiktok.com/@ccardon20" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="TikTok">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100063755515974" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>&copy; {new Date().getFullYear()} Comercializadora Cardón de Paraguaná. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
