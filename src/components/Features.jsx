import { Search, Filter, Bell, ExternalLink } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Unified search across boards",
    desc: "We scan top job sources and aggregate openings into one simple feed.",
  },
  {
    icon: Filter,
    title: "Precision filters",
    desc: "Role, location, salary, tech stack, remote-only—dial in exactly what you want.",
  },
  {
    icon: Bell,
    title: "Real-time alerts",
    desc: "Set it and relax. Get notified the moment a matching role appears.",
  },
  {
    icon: ExternalLink,
    title: "Direct to original post",
    desc: "Every result links to the source listing on the major job boards.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Everything you need to land faster</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Stop tab-hopping. Start finding.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-500 text-white flex items-center justify-center mb-4">
                <f.icon size={20} />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white">{f.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
