import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-[#020617]/70 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
      
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          {/* LOGO */}
          <a
            href="#"
            className="text-lg font-semibold tracking-wider text-white"
          >
            MS
          </a>

          {/* LINKS */}
          <div className="hidden md:flex items-center gap-10 text-sm text-gray-300">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                className="hover:text-white transition"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-6 py-2 rounded-md bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
