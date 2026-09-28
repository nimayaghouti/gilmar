type FaqToggleGlyphProps = {
  expanded?: boolean;
  size?: number;
};

export default function FaqToggleGlyph({
  expanded = false,
  size = 10,
}: FaqToggleGlyphProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M1 5H9"
        stroke="#FFFFFF"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      {!expanded && (
        <path
          d="M5 1V9"
          stroke="#FFFFFF"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}
