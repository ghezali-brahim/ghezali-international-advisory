'use client';

import type { Locale } from '@/i18n/config';

const size = 24;
const ratio = 3 / 2;
const w = size;
const h = Math.round(size / ratio);
const halfW = Math.round(w / 2);

type Props = { locale: Locale; className?: string };

/** Drapeau UK (Union Jack). */
function FlagUK({ style, className }: { style: React.CSSProperties; className: string }) {
  return (
    <svg viewBox="0 0 60 30" style={style} className={`rounded-sm overflow-hidden${className}`} aria-hidden>
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="8" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="5" />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="12" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="7" />
    </svg>
  );
}

/** Drapeau US (simplifié : canton bleu + bandes rouges et blanches). */
function FlagUS({ style, className }: { style: React.CSSProperties; className: string }) {
  const stripeH = 20 / 13;
  const whiteYs = [1, 3, 5, 7, 9, 11].map((i) => i * stripeH);
  return (
    <svg viewBox="0 0 38 20" style={style} className={`rounded-sm overflow-hidden${className}`} aria-hidden>
      <rect width="38" height="20" fill="#B22234" />
      {whiteYs.map((y) => (
        <rect key={y} y={y} width="38" height={stripeH} fill="#fff" />
      ))}
      <rect width="15.2" height="10" fill="#3C3B6E" />
      <g fill="#fff">
        {[2, 5, 8, 11].map((cx) => (
          <circle key={cx} cx={cx} cy={3} r="0.6" />
        ))}
        {[3.5, 6.5, 9.5].map((cx) => (
          <circle key={cx} cx={cx} cy={5} r="0.6" />
        ))}
        {[2, 5, 8, 11].map((cx) => (
          <circle key={`b-${cx}`} cx={cx} cy={7} r="0.6" />
        ))}
      </g>
    </svg>
  );
}

/** Drapeaux SVG aux couleurs officielles de chaque pays/langue. Pour l’anglais : UK + US. */
export default function FlagIcon({ locale, className = '' }: Props) {
  const style = { width: w, height: h };
  const c = className ? ` ${className}` : '';

  switch (locale) {
    case 'fr':
      return (
        <svg viewBox="0 0 3 2" style={style} className={`rounded-sm overflow-hidden${c}`} aria-hidden>
          <rect width="1" height="2" fill="#002395" />
          <rect x="1" width="1" height="2" fill="#fff" />
          <rect x="2" width="1" height="2" fill="#ED2939" />
        </svg>
      );
    case 'en':
      return (
        <span className={`inline-flex items-stretch${c}`} style={{ width: w, height: h }} aria-hidden>
          <FlagUK style={{ width: halfW, height: h }} className={c} />
          <FlagUS style={{ width: halfW, height: h }} className={c} />
        </span>
      );
    case 'de':
      return (
        <svg viewBox="0 0 3 2" style={style} className={`rounded-sm overflow-hidden${c}`} aria-hidden>
          <rect width="3" height="0.666" fill="#000" />
          <rect y="0.666" width="3" height="0.666" fill="#DD0000" />
          <rect y="1.332" width="3" height="0.668" fill="#FFCC00" />
        </svg>
      );
    case 'nl':
      return (
        <svg viewBox="0 0 3 2" style={style} className={`rounded-sm overflow-hidden${c}`} aria-hidden>
          <rect width="3" height="0.666" fill="#AE1C28" />
          <rect y="0.666" width="3" height="0.666" fill="#fff" />
          <rect y="1.332" width="3" height="0.668" fill="#21468B" />
        </svg>
      );
    case 'es':
      return (
        <svg viewBox="0 0 3 2" style={style} className={`rounded-sm overflow-hidden${c}`} aria-hidden>
          <rect width="3" height="0.5" fill="#AA151B" />
          <rect y="0.5" width="3" height="1" fill="#F1BF00" />
          <rect y="1.5" width="3" height="0.5" fill="#AA151B" />
        </svg>
      );
    case 'it':
      return (
        <svg viewBox="0 0 3 2" style={style} className={`rounded-sm overflow-hidden${c}`} aria-hidden>
          <rect width="1" height="2" fill="#009246" />
          <rect x="1" width="1" height="2" fill="#fff" />
          <rect x="2" width="1" height="2" fill="#CE2B37" />
        </svg>
      );
    case 'ar':
      return (
        <svg viewBox="0 0 3 2" style={style} className={`rounded-sm overflow-hidden${c}`} aria-hidden>
          <rect width="0.75" height="2" fill="#CE1126" />
          <rect x="0.75" width="2.25" height="0.666" fill="#00732F" />
          <rect x="0.75" y="0.666" width="2.25" height="0.666" fill="#fff" />
          <rect x="0.75" y="1.332" width="2.25" height="0.668" fill="#000" />
        </svg>
      );
    case 'he':
      return (
        <svg viewBox="0 0 3 2" style={style} className={`rounded-sm overflow-hidden${c}`} aria-hidden>
          <rect width="3" height="2" fill="#fff" />
          <rect width="0.4" height="2" fill="#0038B8" />
          <rect x="2.6" width="0.4" height="2" fill="#0038B8" />
          <polygon points="1.5,0.4 1.7,0.9 2.2,0.9 1.8,1.2 2,1.7 1.5,1.4 1,1.7 1.2,1.2 0.8,0.9 1.3,0.9" fill="#0038B8" />
        </svg>
      );
    case 'zh':
      return (
        <svg viewBox="0 0 3 2" style={style} className={`rounded-sm overflow-hidden${c}`} aria-hidden>
          <rect width="3" height="2" fill="#DE2910" />
          <g fill="#FFDE00">
            <polygon points="0.5,0.3 0.6,0.5 0.8,0.5 0.65,0.65 0.7,0.85 0.5,0.75 0.3,0.85 0.35,0.65 0.2,0.5 0.4,0.5" />
            <polygon points="1.2,0.25 1.25,0.3 1.3,0.25 1.28,0.32 1.35,0.35 1.27,0.38 1.28,0.45 1.2,0.42 1.12,0.45 1.13,0.38 1.05,0.35 1.12,0.32" />
            <polygon points="1.75,0.35 1.78,0.42 1.85,0.4 1.8,0.46 1.82,0.53 1.75,0.5 1.68,0.53 1.7,0.46 1.65,0.4 1.72,0.42" />
            <polygon points="2.2,0.6 2.22,0.67 2.28,0.65 2.24,0.7 2.26,0.77 2.2,0.75 2.14,0.77 2.16,0.7 2.12,0.65 2.18,0.67" />
            <polygon points="2.1,1.05 2.12,1.1 2.18,1.08 2.14,1.14 2.16,1.2 2.1,1.18 2.04,1.2 2.06,1.14 2.02,1.08 2.08,1.1" />
            <polygon points="1.5,1.2 1.52,1.26 1.58,1.24 1.54,1.3 1.56,1.36 1.5,1.34 1.44,1.36 1.46,1.3 1.42,1.24 1.48,1.26" />
            <polygon points="0.85,1.15 0.87,1.2 0.92,1.18 0.88,1.24 0.9,1.3 0.85,1.28 0.8,1.3 0.82,1.24 0.78,1.18 0.83,1.2" />
          </g>
        </svg>
      );
    default:
      return null;
  }
}
