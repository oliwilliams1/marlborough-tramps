"use client"

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import BookTrampModal from "./book_tramp_modal";

export default function Header() {
  const pathname = usePathname();

  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        setVisible(true);
      }
      else if (currentScrollY > lastScrollY) {
        setVisible(false);
        setMenuOpen(false);
      }
      else {
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Tramps", href: "/tramps" },
    { name: "Advice", href: "/advice" },
    { name: "Join", href: "/join" },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 z-50 w-full
        flex items-center justify-between
        h-[4rem] p-4
        bg-gray-800 text-white
        transition-transform duration-300
        ${visible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <p>logo</p>

      <nav className="hidden md:flex space-x-4">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`hover:text-gray-200 ${
              pathname === link.href
                ? "text-gray-100"
                : "text-gray-300"
            }`}
          >
            {link.name}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <div className="hidden md:block">
          <BookTrampModal />
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <nav className="absolute top-[4rem] left-0 w-full bg-gray-800 border-t border-gray-700 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`
                block px-4 py-3
                hover:bg-gray-700
                ${
                  pathname === link.href
                    ? "text-gray-100"
                    : "text-gray-300"
                }
              `}
            >
              {link.name}
            </a>
          ))}

          <div className="px-4 py-3">
            <BookTrampModal />
          </div>
        </nav>
      )}
    </header>
  );
}
