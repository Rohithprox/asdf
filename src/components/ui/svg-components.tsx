interface SVGProps {
  className?: string;
}

export const WavyLine = ({ className = "" }: SVGProps) => (
  <svg className={`${className}`} viewBox="0 0 1200 120" preserveAspectRatio="none">
    <path 
      d="M0,0 C150,40 350,-40 500,20 C650,80 700,-40 900,20 C1050,80 1150,40 1200,0 V120 H0 Z"
      className="fill-current opacity-20"
    />
    <path 
      d="M0,0 C150,60 350,-20 500,40 C650,100 700,-20 900,40 C1050,100 1150,60 1200,0 V120 H0 Z"
      className="fill-current opacity-40"
    >
      <animate
        attributeName="d"
        dur="10s"
        repeatCount="indefinite"
        values="
          M0,0 C150,60 350,-20 500,40 C650,100 700,-20 900,40 C1050,100 1150,60 1200,0 V120 H0 Z;
          M0,0 C300,80 350,20 500,60 C650,120 700,0 900,60 C1050,120 1100,80 1200,0 V120 H0 Z;
          M0,0 C150,60 350,-20 500,40 C650,100 700,-20 900,40 C1050,100 1150,60 1200,0 V120 H0 Z"
      />
    </path>
    <path 
      d="M0,0 C150,80 350,0 500,60 C650,120 700,0 900,60 C1050,120 1150,80 1200,0 V120 H0 Z"
      className="fill-current opacity-60"
    >
      <animate
        attributeName="d"
        dur="15s"
        repeatCount="indefinite"
        values="
          M0,0 C150,80 350,0 500,60 C650,120 700,0 900,60 C1050,120 1150,80 1200,0 V120 H0 Z;
          M0,0 C300,100 350,40 500,80 C650,140 700,20 900,80 C1050,140 1100,100 1200,0 V120 H0 Z;
          M0,0 C150,80 350,0 500,60 C650,120 700,0 900,60 C1050,120 1150,80 1200,0 V120 H0 Z"
      />
    </path>
  </svg>
);

export const HandDrawnCircle = ({ className = "" }: SVGProps) => (
  <svg className={`${className}`} viewBox="0 0 100 100" fill="none">
    <path 
      d="M20 50 Q20 20 50 20 Q80 20 80 50 Q80 80 50 80 Q20 80 20 50 Z" 
      stroke="currentColor" 
      strokeWidth="3" 
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

export const HandDrawnStar = ({ className = "" }: SVGProps) => (
  <svg className={`${className}`} viewBox="0 0 100 100" fill="currentColor">
    <path d="M50 10 L60 35 L85 35 L67 52 L75 80 L50 65 L25 80 L33 52 L15 35 L40 35 Z" />
  </svg>
); 