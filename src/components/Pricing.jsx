export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Simple, fair pricing</h2>
          <p className="mt-3 text-gray-600">Start free and upgrade when you’re ready to compete more often.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {name: 'Free', price: '$0', features: ['Search local events', 'Save favorite venues', 'Basic profile']},
            {name: 'Pro', price: '$4.99/mo', features: ['Priority registration', 'Advanced filters', 'Match history export']},
            {name: 'Organizer', price: '$19/mo', features: ['Create events', 'Manage brackets', 'Payout tools']},
          ].map((tier, i) => (
            <div key={i} className={`rounded-2xl border ${i===1 ? 'border-blue-400 ring-2 ring-blue-200' : 'border-gray-200'} bg-white p-8 flex flex-col`}>
              <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
              <p className="mt-2 text-4xl font-extrabold text-gray-900">{tier.price}</p>
              <ul className="mt-6 space-y-2 text-sm text-gray-600">
                {tier.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#get-started" className={`mt-8 w-full text-center px-4 py-2 rounded-md font-semibold ${i===1 ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border border-gray-300 text-gray-700 hover:bg-gray-50'}`}>Get started</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
