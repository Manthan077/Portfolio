export default function Footer() {
  return (
    <footer className="relative bg-[#020b1f]">

      <div className="absolute -top-24 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#020b1f]" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10 flex flex-col items-center text-center gap-5 relative">
        <p className="text-sm text-slate-400">
          Manthan Sharma — Full-Stack & GenAI Systems Engineer
        </p>

        <div className="flex items-center gap-6 text-xs text-slate-500">
          <a
            href="mailto:manthan10041004@gmail.com"
            className="hover:text-sky-400 transition"
          >
            Email
          </a>
          <a
            href="https://github.com/Manthan077"
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-400 transition"
          >
            LinkedIn
          </a>
        </div>

        <p className="text-[11px] text-slate-600 mt-1">
          © {new Date().getFullYear()} Manthan Sharma · Built with React & Tailwind
        </p>
      </div>
    </footer>
  );
}
