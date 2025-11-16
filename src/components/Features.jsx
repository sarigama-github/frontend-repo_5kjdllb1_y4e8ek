export default function Features() {
  const features = [
    {
      title: 'Find tournaments nearby',
      desc: 'Search by date, skill level, prize pool, or venue. See live capacity and check-in status.',
      icon: (
        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414a4 4 0 10-5.657 5.657L12 22l5.657-5.343z"/>
        </svg>
      )
    },
    {
      title: 'One-tap registration',
      desc: 'Save your player profile and join brackets instantly. Apple Pay and Google Pay supported.',
      icon: (
        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2v6a3 3 0 006 0v-6c0-1.105-1.343-2-3-2z"/>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10v2a7 7 0 0014 0v-2"/>
        </svg>
      )
    },
    {
      title: 'Live brackets & standings',
      desc: 'Follow matches in real time. Get notifications when it’s your turn to throw.',
      icon: (
        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18"/>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 13l3 3 7-7"/>
        </svg>
      )
    },
    {
      title: 'Verified venues',
      desc: 'Photos, amenities, table quality, and ratings so you always know what to expect.',
      icon: (
        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l7 7-7 7-7-7 7-7z"/>
        </svg>
      )
    }
  ]

  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Built for players and organizers</h2>
          <p className="mt-3 text-gray-600">Everything you need to discover great events, join quickly, and compete with confidence.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-xl border border-gray-200 p-6 hover:shadow-md transition bg-white">
              <div className="h-10 w-10 rounded-lg bg-blue-50 grid place-items-center mb-4">{f.icon}</div>
              <h3 className="font-semibold text-gray-900">{f.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
