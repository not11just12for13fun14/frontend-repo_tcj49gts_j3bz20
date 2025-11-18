export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Simple pricing</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Start free. Upgrade when you're ready.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[{
            name: 'Free', price: '$0', features: ['10 searches/day', 'Email alerts', 'Basic filters']
          },{
            name: 'Pro', price: '$19/mo', features: ['Unlimited searches', 'Advanced filters', 'Instant alerts']
          },{
            name: 'Team', price: '$49/mo', features: ['Seats for 5 users', 'Shared saved searches', 'Priority support']
          }].map((t, i) => (
            <div key={t.name} className={`p-6 rounded-2xl border ${i===1 ? 'border-blue-300 bg-blue-50/50 dark:bg-blue-950/20' : 'border-slate-200 dark:border-slate-800'} `}>
              <div className="flex items-baseline justify-between">
                <h3 className="font-semibold text-slate-900 dark:text-white">{t.name}</h3>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">{t.price}</div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {t.features.map(f => <li key={f}>• {f}</li>)}
              </ul>
              <a href="#search" className={`mt-6 inline-flex px-4 py-2 rounded-lg font-medium ${i===1 ? 'bg-gradient-to-r from-blue-600 to-indigo-500 text-white' : 'border border-slate-300/70 dark:border-slate-700/70'}`}>{i===1 ? 'Start Pro' : 'Get started'}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
