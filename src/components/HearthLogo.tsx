interface HearthLogoProps {
  className?: string;
}

export default function HearthLogo({
  className = "h-10 w-10",
}: HearthLogoProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      role="img"
      aria-label="Hearth"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="22" fill="#F2EAE2" />

      <path
        d="M15 34V14M33 34V14M15 24H33"
        stroke="#A96345"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      <path
        d="M24 31C20.5 29 20 26.5 22 24C23.5 22 24 20 24 18C28.5 21.5 30 25 28.5 28C27.7 29.5 26.2 30.5 24 31Z"
        fill="#A96345"
      />
    </svg>
  );
}