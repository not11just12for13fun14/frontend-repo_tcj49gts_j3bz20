export default function Hero() {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200/60 text-blue-700 bg-blue-50 dark:bg-blue-950/40 dark:text-blue-200 dark:border-blue-900/50 text-xs mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              Live job discovery powered by AI
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Find real-time jobs that match your exact filters.
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Plug in your role, skills, and preferences. We surface fresh openings and send you straight to the original posting across top job boards.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#search" className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-medium shadow hover:opacity-90">Start free</a>
              <a href="#features" className="px-6 py-3 rounded-lg border border-slate-300/70 dark:border-slate-700/70 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-50 dark:hover:bg-slate-800">See how it works</a>
            </div>
            <div className="mt-6 text-sm text-slate-500 dark:text-slate-400">
              No credit card. No spam. Cancel anytime.
            </div>
          </div>
          <div>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-tr from-blue-600/20 to-indigo-500/20 blur-2xl rounded-3xl" />
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop" alt="dashboard" className="relative rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
