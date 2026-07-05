export function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="eyebrow">© 2026 Aryan Kulkarni</p>
        <p className="eyebrow">Mumbai, India</p>
        <a href="#top" className="eyebrow link-draw hover:text-ink transition-colors duration-300">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
