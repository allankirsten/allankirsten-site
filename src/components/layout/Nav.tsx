"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const threshold = window.innerHeight * 0.1;

    const onScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 transition-all duration-500 ease-in-out"
      style={{
        paddingTop: scrolled ? "16px" : "24px",
        paddingBottom: scrolled ? "16px" : "24px",
        backgroundColor: scrolled ? "var(--color-bg)" : "transparent",
        boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.06)" : "none",
      }}
    >
      <Link href="/" aria-label="Allan Kirsten">
        <Image
          src="/images/ak-logo.png"
          alt="Allan Kirsten"
          width={40}
          height={40}
          priority
        />
      </Link>

      <ul className="flex items-center gap-8">
        {links.map(({ href, label }) => {
          const active = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                className="text-xs font-medium tracking-widest uppercase transition-colors duration-300"
                style={{
                  color: active
                    ? "var(--color-accent)"
                    : scrolled
                    ? "var(--color-muted)"
                    : "rgba(255,255,255,0.75)",
                }}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

