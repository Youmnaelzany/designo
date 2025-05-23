import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "dark" | "light";
}

export default function Logo({ variant = "dark" }: LogoProps) {
  const logoSrc =
    variant === "dark"
      ? "/assets/shared/desktop/logo-dark.png"
      : "/assets/shared/desktop/logo-light.png";

  return (
    <Link href="/" className="hoverEffect">
      <Image src={logoSrc} alt="Logo" width={202} height={27} />
    </Link>
  );
}
