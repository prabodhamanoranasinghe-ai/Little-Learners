/** Cute cartoon illustration of children learning with ABC, books, and shapes */
export function HeroIllustration({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Happy children learning English with colorful letters, books, animals and shapes"
    >
      {/* Soft ground */}
      <ellipse cx="260" cy="400" rx="200" ry="28" fill="#E0F2FE" opacity="0.8" />

      {/* Book */}
      <g transform="translate(40, 250)">
        <rect x="0" y="20" width="90" height="70" rx="8" fill="#F9A8D4" />
        <rect x="8" y="28" width="74" height="54" rx="4" fill="#FFFBF5" />
        <path d="M20 42h50M20 54h40M20 66h45" stroke="#C4B5FD" strokeWidth="4" strokeLinecap="round" />
        <circle cx="70" cy="18" r="14" fill="#FBBF24" />
        <text x="70" y="24" textAnchor="middle" fontSize="14" fontFamily="Fredoka, sans-serif" fill="#1E3A5F" fontWeight="700">A</text>
      </g>

      {/* Pencil */}
      <g transform="translate(420, 200) rotate(25)">
        <rect x="0" y="0" width="16" height="90" rx="4" fill="#FDE68A" />
        <polygon points="0,90 16,90 8,110" fill="#F9A8D4" />
        <rect x="0" y="0" width="16" height="14" rx="3" fill="#86EFAC" />
      </g>

      {/* Circle shape */}
      <circle cx="460" cy="320" r="28" fill="#7DD3FC" opacity="0.9" />
      <circle cx="460" cy="320" r="16" fill="#FFFBF5" />

      {/* Triangle */}
      <polygon points="80,180 110,130 140,180" fill="#A78BFA" />

      {/* Square */}
      <rect x="390" y="120" width="36" height="36" rx="6" fill="#86EFAC" />

      {/* Left child */}
      <g transform="translate(130, 160)">
        {/* Body */}
        <ellipse cx="50" cy="160" rx="42" ry="50" fill="#7DD3FC" />
        {/* Head */}
        <circle cx="50" cy="70" r="48" fill="#FEF3C7" />
        {/* Hair */}
        <path d="M10 55c8-35 72-35 80 0-8 8-20 12-40 12s-32-4-40-12z" fill="#FBBF24" />
        {/* Eyes */}
        <circle cx="32" cy="70" r="5" fill="#1E3A5F" />
        <circle cx="68" cy="70" r="5" fill="#1E3A5F" />
        <circle cx="33.5" cy="68.5" r="1.5" fill="white" />
        <circle cx="69.5" cy="68.5" r="1.5" fill="white" />
        {/* Cheeks */}
        <ellipse cx="20" cy="82" rx="8" ry="5" fill="#F9A8D4" opacity="0.7" />
        <ellipse cx="80" cy="82" rx="8" ry="5" fill="#F9A8D4" opacity="0.7" />
        {/* Smile */}
        <path d="M35 90c5 10 25 10 30 0" stroke="#1E3A5F" strokeWidth="3" strokeLinecap="round" fill="none" />
        {/* Arms */}
        <ellipse cx="-5" cy="140" rx="16" ry="28" fill="#FEF3C7" transform="rotate(-25 -5 140)" />
        <ellipse cx="105" cy="140" rx="16" ry="28" fill="#FEF3C7" transform="rotate(25 105 140)" />
        {/* Letter block in hand */}
        <rect x="95" y="100" width="40" height="40" rx="8" fill="#C4B5FD" />
        <text x="115" y="128" textAnchor="middle" fontSize="22" fontFamily="Fredoka, sans-serif" fill="white" fontWeight="700">B</text>
      </g>

      {/* Right child */}
      <g transform="translate(270, 150)">
        {/* Body */}
        <ellipse cx="55" cy="165" rx="44" ry="52" fill="#F9A8D4" />
        {/* Head */}
        <circle cx="55" cy="72" r="50" fill="#FEF3C7" />
        {/* Hair */}
        <path d="M12 50c5-32 80-32 86 5-15 18-30 22-43 22-18 0-35-8-43-27z" fill="#1E3A5F" />
        <circle cx="20" cy="70" r="12" fill="#1E3A5F" />
        <circle cx="90" cy="68" r="12" fill="#1E3A5F" />
        {/* Eyes */}
        <circle cx="38" cy="74" r="5" fill="#1E3A5F" />
        <circle cx="72" cy="74" r="5" fill="#1E3A5F" />
        <circle cx="39.5" cy="72.5" r="1.5" fill="white" />
        <circle cx="73.5" cy="72.5" r="1.5" fill="white" />
        {/* Cheeks */}
        <ellipse cx="24" cy="86" rx="8" ry="5" fill="#F9A8D4" opacity="0.8" />
        <ellipse cx="86" cy="86" rx="8" ry="5" fill="#F9A8D4" opacity="0.8" />
        {/* Smile */}
        <path d="M40 94c5 10 25 10 30 0" stroke="#1E3A5F" strokeWidth="3" strokeLinecap="round" fill="none" />
        {/* Arms holding apple */}
        <ellipse cx="0" cy="145" rx="16" ry="28" fill="#FEF3C7" transform="rotate(-30 0 145)" />
        <ellipse cx="110" cy="145" rx="16" ry="28" fill="#FEF3C7" transform="rotate(20 110 145)" />
        {/* Apple */}
        <circle cx="-5" cy="115" r="18" fill="#F472B6" />
        <path d="M-5 97c0-6 8-10 10-4" stroke="#4ADE80" strokeWidth="3" strokeLinecap="round" fill="none" />
        <ellipse cx="-2" cy="110" rx="4" ry="6" fill="white" opacity="0.35" />
      </g>

      {/* Dog friend */}
      <g transform="translate(230, 300)">
        <ellipse cx="30" cy="40" rx="28" ry="22" fill="#FDE68A" />
        <circle cx="30" cy="18" r="18" fill="#FDE68A" />
        <ellipse cx="12" cy="8" rx="8" ry="12" fill="#FBBF24" />
        <ellipse cx="48" cy="8" rx="8" ry="12" fill="#FBBF24" />
        <circle cx="24" cy="16" r="3" fill="#1E3A5F" />
        <circle cx="36" cy="16" r="3" fill="#1E3A5F" />
        <ellipse cx="30" cy="24" rx="5" ry="3.5" fill="#F9A8D4" />
        <path d="M26 28c2 3 6 3 8 0" stroke="#1E3A5F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </g>

      {/* Star sparkle */}
      <path d="M250 80l4 12 12 4-12 4-4 12-4-12-12-4 12-4z" fill="#FBBF24" />
      <path d="M160 120l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="#C4B5FD" />
    </svg>
  )
}
