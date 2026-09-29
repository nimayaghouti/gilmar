type TwitterXGlyphProps = {
  size?: number;
};

export default function TwitterXGlyph({ size = 20 }: TwitterXGlyphProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M15.2718 1.58667H18.0831L11.9414 8.60625L19.1666 18.1583H13.5093L9.07828 12.365L4.00821 18.1583H1.19528L7.76445 10.6501L0.833252 1.58667H6.63418L10.6394 6.88195L15.2718 1.58667ZM14.2852 16.4757H15.8429L5.78775 3.18095H4.11614L14.2852 16.4757Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}
