const NAV_BG = "#0A0C10";

export function Footer() {
  return (
    <footer style={{ backgroundColor: NAV_BG }} className="border-t border-slate-800/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} itenx technologies limited.</span>
        <span>All rights reserved.</span>
      </div>
    </footer>
  );
}
