import Link from "next/link";
import { BookOpen } from "lucide-react";

const navLinks = [
  { href: "/books", label: "Books" },
  { href: "/store", label: "Store" },
  { href: "/about", label: "About" },
  { href: "/become-an-author", label: "Become an Author" },
  { href: "/contact", label: "Contact" },
];

function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.738l7.728-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const socialLinks = [
  { href: "https://twitter.com", label: "Twitter / X", icon: XIcon },
  { href: "https://instagram.com", label: "Instagram", icon: InstagramIcon },
  { href: "https://goodreads.com", label: "Goodreads", icon: BookOpen },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-parchment py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10 pb-10 border-b border-parchment/10">
          <p className="font-display text-2xl font-semibold">Rev. Acheampong E.S. Builderman</p>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-parchment/50 hover:text-parchment text-sm tracking-wide transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-parchment/40 text-sm">
            &copy; {new Date().getFullYear()} Rev. Acheampong E.S. Builderman. All rights
            reserved.
          </p>

          <nav aria-label="Social media links">
            <ul className="flex gap-5">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-parchment/40 hover:text-parchment transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
