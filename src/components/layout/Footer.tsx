const socialLinks = [
  { href: "https://linkedin.com/in/allankirsten", label: "LinkedIn" },
  { href: "https://behance.net/allankirsten", label: "Bē" },
  { href: "https://dribbble.com/allankirsten", label: "Dribbble" },
  { href: "https://facebook.com/allan.kirsten", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer
      className="py-10 px-8 text-center"
      style={{ backgroundColor: "var(--color-footer)" }}
    >
      <p className="text-xs text-white/40 tracking-widest">
        © {new Date().getFullYear()} Allan Kirsten
      </p>
    </footer>
  );
}
