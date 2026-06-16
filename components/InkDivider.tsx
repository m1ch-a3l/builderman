export default function InkDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full flex justify-center my-16 ${className}`}>
      <svg
        width="320"
        height="18"
        viewBox="0 0 320 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M4 10.5C4 10.5 18 6 32 9C46 12 54 7 68 8.5C82 10 88 13 102 11C116 9 122 6 136 8C150 10 158 12.5 172 10.5C186 8.5 192 6 206 7.5C220 9 228 12 242 10C256 8 262 6 276 8C290 10 298 13 312 10.5"
          stroke="#8C7B6B"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M24 11C24 11 36 9 48 11.5C60 14 66 9.5 78 10"
          stroke="#8C7B6B"
          strokeWidth="0.75"
          strokeLinecap="round"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}
