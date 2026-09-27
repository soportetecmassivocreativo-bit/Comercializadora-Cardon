"use client";
import styles from "./HologramOverlay.module.css";

export default function HologramOverlay() {
  const C = "#00AEEF"; // Cian brillante
  const C2 = "#0099D8"; // Azul claro
  const C3 = "#1A75B8"; // Azul medio

  return (
    <div className={styles.overlay} aria-hidden="true">
      {/* ═══════════════════════════════════════════
          LAYER 1 — Circuit Board Grid
          Dense grid of vertical + horizontal lines
       ═══════════════════════════════════════════ */}
      <svg className={styles.circuitLayer} viewBox="0 0 1440 5000" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Vertical circuit lines */}
        {[120, 280, 440, 600, 720, 840, 1000, 1160, 1320].map((x, i) => (
          <line key={`v${i}`} x1={x} y1="0" x2={x} y2="5000" stroke={C} strokeWidth="0.5" opacity="0.5" />
        ))}
        {/* Horizontal circuit lines */}
        {[200, 500, 800, 1100, 1400, 1700, 2000, 2300, 2600, 2900, 3200, 3500, 3800, 4100, 4400, 4700].map((y, i) => (
          <line key={`h${i}`} x1="0" y1={y} x2="1440" y2={y} stroke={C} strokeWidth="0.5" opacity="0.4" />
        ))}
        {/* Circuit junctions — small squares at intersections */}
        {[
          [120, 500], [440, 800], [720, 200], [1000, 1100], [280, 1400],
          [840, 1700], [1160, 2000], [600, 2300], [1320, 2600], [120, 2900],
          [720, 3200], [440, 3500], [1000, 3800], [280, 4100], [840, 4400],
          [1160, 500], [600, 1400], [1320, 2000], [120, 1700], [720, 4700],
        ].map(([x, y], i) => (
          <rect key={`j${i}`} x={x - 3} y={y - 3} width="6" height="6" stroke={C} strokeWidth="1" fill="none" opacity="0.6" />
        ))}
        {/* Circuit branch paths */}
        <path d="M120,500 L120,550 L200,550 L200,600 L280,600 L280,500" stroke={C} strokeWidth="1" opacity="0.4" className={styles.dashLine} />
        <path d="M720,200 L720,300 L840,300 L840,400 L1000,400" stroke={C2} strokeWidth="1" opacity="0.35" className={styles.dashLine} />
        <path d="M440,800 L500,800 L500,900 L600,900 L600,1100" stroke={C} strokeWidth="1" opacity="0.4" className={styles.dashLineSlow} />
        <path d="M1160,2000 L1160,2100 L1320,2100 L1320,2200 L1440,2200" stroke={C2} strokeWidth="1" opacity="0.35" className={styles.dashLine} />
        <path d="M280,1400 L350,1400 L350,1500 L440,1500 L440,1700" stroke={C} strokeWidth="1" opacity="0.4" className={styles.dashLineFast} />
        <path d="M840,4400 L840,4500 L1000,4500 L1000,4700" stroke={C} strokeWidth="1" opacity="0.3" className={styles.dashLine} />
        <path d="M600,2300 L700,2300 L700,2400 L840,2400 L840,2600" stroke={C2} strokeWidth="0.75" opacity="0.35" className={styles.dashLineSlow} />
        <path d="M1000,3800 L1100,3800 L1100,3900 L1160,3900 L1160,4100" stroke={C} strokeWidth="1" opacity="0.4" className={styles.dashLine} />
      </svg>

      {/* ═══════════════════════════════════════════
          LAYER 2 — Flowing Holographic Curves
          Long sweeping curves across the page
       ═══════════════════════════════════════════ */}
      <svg className={styles.holoLayer} viewBox="0 0 1440 5000" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="hGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={C} stopOpacity="0" />
            <stop offset="20%" stopColor={C} stopOpacity="0.6" />
            <stop offset="80%" stopColor={C} stopOpacity="0.6" />
            <stop offset="100%" stopColor={C} stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={C2} stopOpacity="0" />
            <stop offset="30%" stopColor={C2} stopOpacity="0.5" />
            <stop offset="70%" stopColor={C2} stopOpacity="0.5" />
            <stop offset="100%" stopColor={C2} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Sweeping curves — top zone */}
        <path d="M-50,300 C300,100 500,500 800,300 S1200,600 1500,400" stroke="url(#hGrad1)" strokeWidth="2" className={styles.dashLine} />
        <path d="M-50,350 C250,200 480,550 830,370 S1150,650 1500,480" stroke="url(#hGrad2)" strokeWidth="1.5" className={styles.dashLineSlow} />
        <path d="M-50,280 C350,80 600,430 900,250 S1300,550 1500,350" stroke={C} strokeWidth="1" opacity="0.2" className={styles.dashLineFast} />

        {/* Sweeping curves — mid zone */}
        <path d="M-50,1200 C400,1000 700,1400 1000,1200 S1300,1500 1500,1300" stroke="url(#hGrad1)" strokeWidth="2" className={styles.dashLineSlow} />
        <path d="M-50,1250 C350,1100 650,1450 950,1250 S1250,1550 1500,1370" stroke="url(#hGrad2)" strokeWidth="1.5" className={styles.dashLine} />

        {/* Sweeping curves — lower-mid zone */}
        <path d="M-50,2200 C300,2000 600,2400 900,2200 S1200,2500 1500,2300" stroke="url(#hGrad1)" strokeWidth="2" className={styles.dashLine} />
        <path d="M-50,2250 C280,2080 630,2430 920,2250 S1230,2530 1500,2350" stroke="url(#hGrad2)" strokeWidth="1" className={styles.dashLineFast} />

        {/* Sweeping curves — bottom zone */}
        <path d="M-50,3400 C350,3200 650,3600 950,3400 S1250,3700 1500,3500" stroke="url(#hGrad1)" strokeWidth="2" className={styles.dashLineSlow} />
        <path d="M-50,3450 C300,3280 600,3630 930,3430 S1280,3730 1500,3550" stroke="url(#hGrad2)" strokeWidth="1.5" className={styles.dashLine} />

        {/* Sweeping curves — near-footer zone */}
        <path d="M-50,4400 C400,4200 700,4600 1000,4400 S1300,4700 1500,4500" stroke="url(#hGrad1)" strokeWidth="1.5" className={styles.dashLine} />

        {/* Diagonal data-transfer lines */}
        <line x1="0" y1="0" x2="1440" y2="2500" stroke={C} strokeWidth="1" opacity="0.12" className={styles.dashLineSlow} />
        <line x1="1440" y1="0" x2="0" y2="2500" stroke={C2} strokeWidth="0.75" opacity="0.1" className={styles.dashLineSlow} />
        <line x1="200" y1="2000" x2="1440" y2="4500" stroke={C} strokeWidth="0.75" opacity="0.1" className={styles.dashLine} />
        <line x1="1200" y1="2000" x2="0" y2="4500" stroke={C2} strokeWidth="0.5" opacity="0.08" className={styles.dashLineFast} />
      </svg>

      {/* ═══════════════════════════════════════════
          LAYER 3 — Concentric Rings (Top-Right)
       ═══════════════════════════════════════════ */}
      <svg className={`${styles.ringsLayer} ${styles.ringsTopRight}`} viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow1" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <circle cx="350" cy="350" r="40" stroke={C} strokeWidth="2" className={styles.pulseRing} />
        <circle cx="350" cy="350" r="80" stroke={C} strokeWidth="1.5" strokeDasharray="8 4" className={styles.dashLine} />
        <circle cx="350" cy="350" r="120" stroke={C2} strokeWidth="1" className={styles.pulseRingSlow} />
        <circle cx="350" cy="350" r="160" stroke={C} strokeWidth="1.5" strokeDasharray="20 8" className={styles.dashLineSlow} />
        <circle cx="350" cy="350" r="200" stroke={C2} strokeWidth="0.75" className={styles.pulseRing} />
        <circle cx="350" cy="350" r="250" stroke={C} strokeWidth="1" strokeDasharray="3 9" />
        <circle cx="350" cy="350" r="300" stroke={C} strokeWidth="0.5" strokeDasharray="5 15" opacity="0.4" />
        {/* Cross hairs */}
        <line x1="350" y1="50" x2="350" y2="650" stroke={C} strokeWidth="0.5" opacity="0.3" />
        <line x1="50" y1="350" x2="650" y2="350" stroke={C} strokeWidth="0.5" opacity="0.3" />
        {/* Rotating arc segments */}
        <g className={styles.rotateArc}>
          <path d="M 350 110 A 240 240 0 0 1 590 350" stroke={C} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </g>
        <g className={styles.rotateArcReverse}>
          <path d="M 350 150 A 200 200 0 0 0 150 350" stroke={C2} strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>
        {/* Central glow */}
        <circle cx="350" cy="350" r="8" fill={C} filter="url(#glow1)" className={styles.glowNode} />
        <circle cx="350" cy="350" r="3" fill="#ffffff" />
      </svg>

      {/* ═══════════════════════════════════════════
          LAYER 3B — Concentric Rings (Mid-Left)
       ═══════════════════════════════════════════ */}
      <svg className={`${styles.ringsLayer} ${styles.ringsMidLeft}`} viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="350" cy="350" r="50" stroke={C} strokeWidth="1.5" className={styles.pulseRingSlow} />
        <circle cx="350" cy="350" r="100" stroke={C2} strokeWidth="1" strokeDasharray="15 5" className={styles.dashLine} />
        <circle cx="350" cy="350" r="150" stroke={C} strokeWidth="2" className={styles.pulseRing} />
        <circle cx="350" cy="350" r="200" stroke={C2} strokeWidth="1" strokeDasharray="6 6" className={styles.dashLineSlow} />
        <circle cx="350" cy="350" r="260" stroke={C} strokeWidth="0.75" strokeDasharray="3 12" />
        <circle cx="350" cy="350" r="320" stroke={C} strokeWidth="0.5" opacity="0.3" />
        {/* Rotating arc */}
        <g className={styles.rotateArc}>
          <path d="M 350 130 A 220 220 0 0 1 570 350" stroke={C} strokeWidth="2" fill="none" />
          <path d="M 350 570 A 220 220 0 0 1 130 350" stroke={C} strokeWidth="2" fill="none" />
        </g>
        {/* Cross hairs */}
        <line x1="350" y1="100" x2="350" y2="600" stroke={C} strokeWidth="0.5" opacity="0.25" />
        <line x1="100" y1="350" x2="600" y2="350" stroke={C} strokeWidth="0.5" opacity="0.25" />
        {/* Center */}
        <circle cx="350" cy="350" r="6" fill={C} className={styles.glowNode} />
      </svg>

      {/* ═══════════════════════════════════════════
          LAYER 3C — Concentric Rings (Bottom-Right)
       ═══════════════════════════════════════════ */}
      <svg className={`${styles.ringsLayer} ${styles.ringsBottomRight}`} viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="350" cy="350" r="60" stroke={C} strokeWidth="2" strokeDasharray="10 5" className={styles.dashLine} />
        <circle cx="350" cy="350" r="110" stroke={C2} strokeWidth="1.5" className={styles.pulseRing} />
        <circle cx="350" cy="350" r="170" stroke={C} strokeWidth="1" strokeDasharray="25 8" className={styles.dashLineSlow} />
        <circle cx="350" cy="350" r="230" stroke={C} strokeWidth="0.75" className={styles.pulseRingSlow} />
        <circle cx="350" cy="350" r="290" stroke={C2} strokeWidth="0.5" strokeDasharray="4 10" />
        <g className={styles.rotateArcReverse}>
          <path d="M 350 120 A 230 230 0 0 1 580 350" stroke={C} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </g>
        <line x1="350" y1="80" x2="350" y2="620" stroke={C} strokeWidth="0.5" opacity="0.2" />
        <line x1="80" y1="350" x2="620" y2="350" stroke={C} strokeWidth="0.5" opacity="0.2" />
        <circle cx="350" cy="350" r="7" fill={C} className={styles.glowNode} />
      </svg>

      {/* ═══════════════════════════════════════════
          LAYER 4 — Hexagonal Grid Pattern
       ═══════════════════════════════════════════ */}
      <svg className={styles.hexLayer} viewBox="0 0 1440 5000" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Hex cluster — top-left */}
        {[
          [50, 150], [110, 150], [170, 150],
          [80, 202], [140, 202], [200, 202],
          [50, 254], [110, 254], [170, 254],
        ].map(([cx, cy], i) => (
          <polygon key={`htl${i}`} points={`${cx},${cy - 20} ${cx + 17},${cy - 10} ${cx + 17},${cy + 10} ${cx},${cy + 20} ${cx - 17},${cy + 10} ${cx - 17},${cy - 10}`} stroke={C} strokeWidth="1" fill="none" />
        ))}
        {/* Hex cluster — bottom-right */}
        {[
          [1250, 3600], [1310, 3600], [1370, 3600],
          [1280, 3652], [1340, 3652], [1400, 3652],
          [1250, 3704], [1310, 3704], [1370, 3704],
          [1280, 3756], [1340, 3756],
        ].map(([cx, cy], i) => (
          <polygon key={`hbr${i}`} points={`${cx},${cy - 20} ${cx + 17},${cy - 10} ${cx + 17},${cy + 10} ${cx},${cy + 20} ${cx - 17},${cy + 10} ${cx - 17},${cy - 10}`} stroke={C} strokeWidth="1" fill="none" />
        ))}
        {/* Hex cluster — mid-right */}
        {[
          [1300, 1800], [1360, 1800],
          [1330, 1852], [1390, 1852],
          [1300, 1904], [1360, 1904],
        ].map(([cx, cy], i) => (
          <polygon key={`hmr${i}`} points={`${cx},${cy - 20} ${cx + 17},${cy - 10} ${cx + 17},${cy + 10} ${cx},${cy + 20} ${cx - 17},${cy + 10} ${cx - 17},${cy - 10}`} stroke={C2} strokeWidth="1" fill="none" />
        ))}
        {/* Hex cluster — mid-left */}
        {[
          [60, 2500], [120, 2500],
          [90, 2552], [150, 2552],
          [60, 2604], [120, 2604],
          [90, 2656],
        ].map(([cx, cy], i) => (
          <polygon key={`hml${i}`} points={`${cx},${cy - 20} ${cx + 17},${cy - 10} ${cx + 17},${cy + 10} ${cx},${cy + 20} ${cx - 17},${cy + 10} ${cx - 17},${cy - 10}`} stroke={C} strokeWidth="1" fill="none" />
        ))}
      </svg>

      {/* ═══════════════════════════════════════════
          LAYER 5 — Data Nodes & Connection Lines
       ═══════════════════════════════════════════ */}
      <svg className={styles.nodeLayer} viewBox="0 0 1440 5000" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Node positions scattered throughout the page */}
        {[
          [200, 400], [600, 250], [1100, 500], [350, 800], [900, 700],
          [150, 1200], [750, 1000], [1300, 1100], [500, 1500], [1050, 1400],
          [250, 1800], [850, 1700], [1200, 1900], [100, 2200], [700, 2100],
          [1350, 2300], [400, 2600], [950, 2500], [200, 2900], [1100, 2800],
          [600, 3100], [300, 3400], [800, 3300], [1250, 3200], [500, 3700],
          [1000, 3600], [150, 3900], [750, 4000], [1300, 3900], [400, 4300],
          [900, 4200], [1150, 4500], [250, 4600], [650, 4700],
        ].map(([cx, cy], i) => (
          <g key={`n${i}`}>
            <circle cx={cx} cy={cy} r="3" fill={C} filter="url(#nodeGlow)" className={styles.glowNode} style={{ animationDelay: `${(i * 0.4) % 3}s` }} />
            <circle cx={cx} cy={cy} r="8" stroke={C} strokeWidth="0.75" opacity="0.4" />
          </g>
        ))}

        {/* Connection lines between nearby nodes */}
        {[
          [[200, 400], [600, 250]],
          [[600, 250], [1100, 500]],
          [[350, 800], [900, 700]],
          [[150, 1200], [750, 1000]],
          [[750, 1000], [1300, 1100]],
          [[500, 1500], [1050, 1400]],
          [[250, 1800], [850, 1700]],
          [[850, 1700], [1200, 1900]],
          [[100, 2200], [700, 2100]],
          [[700, 2100], [1350, 2300]],
          [[400, 2600], [950, 2500]],
          [[200, 2900], [1100, 2800]],
          [[600, 3100], [1250, 3200]],
          [[300, 3400], [800, 3300]],
          [[500, 3700], [1000, 3600]],
          [[150, 3900], [750, 4000]],
          [[750, 4000], [1300, 3900]],
          [[400, 4300], [900, 4200]],
          [[900, 4200], [1150, 4500]],
          [[250, 4600], [650, 4700]],
        ].map(([[x1, y1], [x2, y2]], i) => (
          <line key={`cl${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke={C} strokeWidth="0.75" opacity="0.25" strokeDasharray="5 5" className={styles.dashLine} style={{ animationDelay: `${(i * 0.7) % 5}s` }} />
        ))}
      </svg>

      {/* ═══════════════════════════════════════════
          LAYER 6 — Scanning Beam
       ═══════════════════════════════════════════ */}
      <div className={styles.scanBeam} />
    </div>
  );
}
