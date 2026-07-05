const INK = "#FAFAFA";
const MUTED = "#52525B";
const FAINT = "#27272A";
const ACCENT = "#3B82F6";

/** TradeCast — historical line + dashed ML forecast with confidence band. */
function ForecastChart() {
  return (
    <svg viewBox="0 0 560 340" fill="none" className="h-full w-full" aria-hidden>
      {[60, 120, 180, 240].map((y) => (
        <line key={y} x1="48" x2="536" y1={y} y2={y} stroke={FAINT} strokeWidth="1" />
      ))}
      {["2011", "2015", "2019", "2023", "2025"].map((year, i) => (
        <text key={year} x={60 + i * 108} y="316" fill={MUTED} fontSize="10" fontFamily="JetBrains Mono, monospace">
          {year}
        </text>
      ))}
      <text x="48" y="44" fill={MUTED} fontSize="10" fontFamily="JetBrains Mono, monospace" letterSpacing="2">
        TRADE DEFICIT — USD B
      </text>
      {/* confidence band on forecast segment */}
      <path d="M392 158 L448 138 L504 118 L504 190 L448 196 L392 204 Z" fill={ACCENT} opacity="0.08" />
      {/* historical series */}
      <path
        d="M60 236 L114 218 L168 244 L222 196 L276 208 L330 172 L392 180"
        stroke={INK}
        strokeWidth="1.5"
      />
      {/* forecast */}
      <path d="M392 180 L448 166 L504 152" stroke={ACCENT} strokeWidth="1.5" strokeDasharray="5 5" />
      <circle cx="392" cy="180" r="3.5" fill={INK} />
      <circle cx="504" cy="152" r="4" fill={ACCENT} />
      <text x="416" y="132" fill={ACCENT} fontSize="10" fontFamily="JetBrains Mono, monospace" letterSpacing="1">
        FORECAST
      </text>
      <text x="440" y="262" fill={MUTED} fontSize="10" fontFamily="JetBrains Mono, monospace">
        RMSE ≈ 1.79B
      </text>
    </svg>
  );
}

/** Grounded — claim extraction → evidence retrieval → confidence score. */
function EvidencePipeline() {
  return (
    <svg viewBox="0 0 560 340" fill="none" className="h-full w-full" aria-hidden>
      <text x="48" y="44" fill={MUTED} fontSize="10" fontFamily="JetBrains Mono, monospace" letterSpacing="2">
        EVIDENCE-GROUNDED VALIDATION
      </text>
      {/* LLM output block */}
      <rect x="48" y="76" width="150" height="88" stroke={MUTED} strokeWidth="1" />
      <text x="64" y="100" fill={INK} fontSize="11" fontFamily="JetBrains Mono, monospace">LLM OUTPUT</text>
      {[118, 132, 146].map((y, i) => (
        <line key={y} x1="64" x2={182 - i * 24} y1={y} y2={y} stroke={FAINT} strokeWidth="4" />
      ))}
      {/* claim node */}
      <rect x="248" y="90" width="120" height="60" stroke={INK} strokeWidth="1" />
      <text x="264" y="124" fill={INK} fontSize="11" fontFamily="JetBrains Mono, monospace">CLAIM #1</text>
      {/* evidence nodes */}
      <rect x="248" y="204" width="120" height="44" stroke={MUTED} strokeWidth="1" />
      <text x="264" y="230" fill={MUTED} fontSize="10" fontFamily="JetBrains Mono, monospace">EVIDENCE A</text>
      <rect x="392" y="204" width="120" height="44" stroke={MUTED} strokeWidth="1" />
      <text x="408" y="230" fill={MUTED} fontSize="10" fontFamily="JetBrains Mono, monospace">EVIDENCE B</text>
      {/* confidence badge */}
      <rect x="416" y="84" width="96" height="72" stroke={ACCENT} strokeWidth="1" />
      <text x="432" y="110" fill={MUTED} fontSize="9" fontFamily="JetBrains Mono, monospace">CONFIDENCE</text>
      <text x="432" y="138" fill={ACCENT} fontSize="20" fontFamily="JetBrains Mono, monospace">0.92</text>
      {/* connectors */}
      <path d="M198 120 L248 120" stroke={MUTED} strokeWidth="1" />
      <path d="M368 120 L416 120" stroke={ACCENT} strokeWidth="1" strokeDasharray="4 4" />
      <path d="M308 150 L308 204" stroke={FAINT} strokeWidth="1" />
      <path d="M330 150 L452 204" stroke={FAINT} strokeWidth="1" />
      <text x="48" y="300" fill={MUTED} fontSize="10" fontFamily="JetBrains Mono, monospace">
        extract → retrieve → score
      </text>
    </svg>
  );
}

/** Curely — minimal clinical interface wireframe. */
function ClinicalInterface() {
  return (
    <svg viewBox="0 0 560 340" fill="none" className="h-full w-full" aria-hidden>
      <text x="48" y="44" fill={MUTED} fontSize="10" fontFamily="JetBrains Mono, monospace" letterSpacing="2">
        PATIENT ↔ DOCTOR WORKFLOWS
      </text>
      {/* sidebar */}
      <rect x="48" y="72" width="110" height="216" stroke={FAINT} strokeWidth="1" />
      {[100, 128, 156, 184].map((y, i) => (
        <line key={y} x1="66" x2="140" y1={y} y2={y} stroke={i === 0 ? ACCENT : MUTED} strokeWidth={i === 0 ? 2 : 1} opacity={i === 0 ? 1 : 0.5} />
      ))}
      {/* appointment cards */}
      {[0, 1].map((i) => (
        <g key={i}>
          <rect x={186 + i * 172} y="72" width="152" height="96" stroke={MUTED} strokeWidth="1" />
          <circle cx={210 + i * 172} cy="100" r="10" stroke={MUTED} strokeWidth="1" />
          <line x1={230 + i * 172} x2={314 + i * 172} y1="96" y2="96" stroke={MUTED} strokeWidth="3" opacity="0.6" />
          <line x1={230 + i * 172} x2={290 + i * 172} y1="108" y2="108" stroke={FAINT} strokeWidth="3" />
          <line x1={202 + i * 172} x2={314 + i * 172} y1="140" y2="140" stroke={FAINT} strokeWidth="6" />
        </g>
      ))}
      {/* records table */}
      <rect x="186" y="192" width="326" height="96" stroke={FAINT} strokeWidth="1" />
      {[216, 240, 264].map((y, i) => (
        <g key={y}>
          <line x1="202" x2="360" y1={y} y2={y} stroke={MUTED} strokeWidth="3" opacity="0.45" />
          <line x1="392" x2="440" y1={y} y2={y} stroke={i === 1 ? ACCENT : FAINT} strokeWidth="3" />
        </g>
      ))}
      <text x="452" y="112" fill={ACCENT} fontSize="10" fontFamily="JetBrains Mono, monospace" />
      <text x="48" y="316" fill={MUTED} fontSize="10" fontFamily="JetBrains Mono, monospace">
        appointments · records · access control
      </text>
    </svg>
  );
}

const VISUALS: Record<string, () => JSX.Element> = {
  "01": ForecastChart,
  "02": EvidencePipeline,
  "03": ClinicalInterface,
};

export function ProjectVisual({ index, title }: { index: string; title: string }) {
  const Visual = VISUALS[index] ?? ForecastChart;
  return (
    <figure className="group relative overflow-hidden border border-line bg-surface">
      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <span className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
          {title} — case study
        </span>
        <span className="font-mono text-[10px] text-muted/60">{index}</span>
      </div>
      <div className="aspect-[16/10] p-2 transition-transform duration-700 ease-out group-hover:scale-[1.015]">
        <Visual />
      </div>
    </figure>
  );
}
