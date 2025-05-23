export default function TriangleStroke({ useGradient = false }) {
  return (
    <svg width="12" height="12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: "0 5px" }}>
      {/* Define gradient */}
      {useGradient && (
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1" gradientTransform="rotate(122.37)">
            <stop offset="0%" stopColor="#0043FF" />
            <stop offset="100%" stopColor="#A370F1" />
          </linearGradient>
        </defs>
      )}

      {/* Left-pointing triangle outline */}
      <polygon
        points="60,10 4,60 60,60"
        strokeWidth="3"
        fill={useGradient ? "url(#grad)" : "black"}
        strokeLinejoin="round"
      />
    </svg>
  );
}
