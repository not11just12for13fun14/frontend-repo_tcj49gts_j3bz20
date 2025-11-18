import { useEffect, useMemo, useState } from "react";
import { Search, MapPin, SlidersHorizontal, Loader2, ExternalLink } from "lucide-react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "";

export default function JobSearch() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [jobType, setJobType] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const apiBase = useMemo(() => BACKEND_URL || window.location.origin.replace(":3000", ":8000"), []);

  const runSearch = async (e) => {
    e?.preventDefault();
    setLoading(true);
    setError("");
    try {
      const params = new URLSearchParams();
      if (query) params.set("query", query);
      if (category) params.set("category", category);
      if (jobType) params.set("job_type", jobType);
      const res = await fetch(`${apiBase}/api/jobs?${params.toString()}`);
      if (!res.ok) throw new Error("Failed to fetch jobs");
      const data = await res.json();
      setResults(data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // initial featured search
    runSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="search" className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Search live openings</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">We direct you to the original post with one click.</p>
        </div>

        <form onSubmit={runSearch} className="p-4 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <div className="grid md:grid-cols-4 gap-3">
            <div className="relative md:col-span-2">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"><Search size={18} /></div>
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="e.g. React, Data Analyst, Product Designer" className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full px-3 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white">
                <option value="">Any category</option>
                <option value="software-dev">Software Development</option>
                <option value="customer-support">Customer Support</option>
                <option value="design">Design</option>
                <option value="marketing">Marketing</option>
                <option value="product">Product</option>
                <option value="sales">Sales</option>
                <option value="data">Data</option>
              </select>
            </div>
            <div>
              <select value={jobType} onChange={(e) => setJobType(e.target.value)} className="w-full px-3 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white">
                <option value="">Any type</option>
                <option value="full_time">Full-time</option>
                <option value="part_time">Part-time</option>
                <option value="contract">Contract</option>
                <option value="freelance">Freelance</option>
                <option value="internship">Internship</option>
              </select>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <button type="submit" className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-medium flex items-center gap-2">
              <Search size={18} /> Search
            </button>
            <button type="button" onClick={() => {setQuery(""); setCategory(""); setJobType(""); runSearch();}} className="px-4 py-2.5 rounded-lg border border-slate-300/70 dark:border-slate-700/70 text-slate-700 dark:text-slate-200 flex items-center gap-2">
              <SlidersHorizontal size={18} /> Reset
            </button>
          </div>
        </form>

        <div className="mt-8">
          {loading && (
            <div className="flex items-center justify-center py-10 text-slate-600 dark:text-slate-300">
              <Loader2 className="animate-spin mr-2" /> Fetching jobs...
            </div>
          )}
          {error && (
            <div className="p-4 rounded-lg bg-red-50 text-red-700 border border-red-200">{error}</div>
          )}
          {!loading && !error && (
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {results.map((job) => (
                <li key={job.id} className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-md transition">
                  <div className="text-sm text-blue-600 font-medium">{job.source}</div>
                  <h3 className="mt-1 font-semibold text-slate-900 dark:text-white">{job.title}</h3>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">{job.company || ""}</div>
                  <div className="mt-2 text-xs text-slate-500 flex gap-3">
                    {job.location && <span className="inline-flex items-center gap-1"><MapPin size={14} /> {job.location}</span>}
                    {job.type && <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">{job.type}</span>}
                  </div>
                  <a href={job.url} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-blue-700 dark:text-blue-300 font-medium">
                    View posting <ExternalLink size={16} />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
