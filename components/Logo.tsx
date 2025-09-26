"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface LogoProps {
  size: "sm" | "md" | "lg";
}

function Logo({ size = "md" }: LogoProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before using theme
  useEffect(() => {
    setMounted(true);
  }, []);

  // Define size variants
  const sizeVariants = {
    sm: { width: 129, height: 20 },
    md: { width: 100, height: 50 },
    lg: { width: 140, height: 50 },
  };

  const { width, height } = sizeVariants[size];

  // Use light theme as default during SSR to prevent hydration mismatch
  const logoSrc =
    mounted && theme === "dark"
      ? "/logo/moneter-logo-dark.svg"
      : "/logo/moneter-logo-light.svg";

  return (
    <Link href="/">
      <Image
        src={logoSrc}
        alt="Moneter Logo"
        width={width}
        height={height}
        priority
      />
    </Link>
  );
}

export default Logo;
