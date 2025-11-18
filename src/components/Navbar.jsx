import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 dark:bg-slate-900/70 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-lg shadow-blue-600/30" />
          <span className="font-semibold text-slate-900 dark:text-white">JobReach</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600 dark:text-slate-300">
          <a href="#features" className="hover:text-slate-900 dark:hover:text-white transition">Features</a>
          <a href="#search" className="hover:text-slate-900 dark:hover:text-white transition">Live Jobs</a>
          <a href="#pricing" className="hover:text-slate-900 dark:hover:text-white transition">Pricing</a>
          <a href="#faq" className="hover:text-slate-900 dark:hover:text-white transition">FAQ</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="#pricing" className="px-4 py-2 text-sm font-medium rounded-lg border border-slate-300/70 dark:border-slate-700/70 hover:bg-slate-50 dark:hover:bg-slate-800 transition">Sign in</a>
          <a href="#search" className="px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow hover:opacity-90 transition">Start free</a>
        </div>
        <button className="md:hidden p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-200">
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
}
