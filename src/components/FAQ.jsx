export default function FAQ() {
  const faqs = [
    { q: "Which job boards do you support?", a: "We aggregate from multiple public sources and link you directly to the original listing on boards like Remotive, LinkedIn, Indeed, and more." },
    { q: "How real-time are the alerts?", a: "We check for new matches frequently and can notify you as soon as a role appears, depending on your plan." },
    { q: "Do I need a credit card to start?", a: "No. You can try the product for free without adding payment details." },
  ];
  return (
    <section id="faq" className="py-16 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white text-center">Frequently asked questions</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {faqs.map((f) => (
            <div key={f.q} className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <h3 className="font-semibold text-slate-900 dark:text-white">{f.q}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
