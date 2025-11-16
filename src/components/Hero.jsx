export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-cyan-50 to-white" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium mb-4">
              <span>Find • Register • Play</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Discover nearby dart tournaments and join in seconds
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              bigfishdartleague helps players find events, register with one tap, and track standings — all in one sleek mobile app.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#download" className="px-6 py-3 rounded-md bg-blue-600 text-white font-semibold shadow hover:bg-blue-700">Download the app</a>
              <a href="#demo" className="px-6 py-3 rounded-md border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50">Watch a quick demo</a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green-500"/> Live events</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-500"/> Verified venues</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-purple-500"/> Ratings & reviews</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-8 -right-8 h-64 w-64 bg-blue-200/40 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 h-64 w-64 bg-cyan-200/40 rounded-full blur-3xl" />
            <div className="relative mx-auto w-[320px] h-[640px] rounded-[2rem] border border-gray-200 shadow-2xl overflow-hidden bg-white">
              <div className="h-6 bg-gray-100 flex items-center justify-center text-[10px] text-gray-500">bigfishdartleague</div>
              <div className="p-4 space-y-3">
                <div className="h-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white grid place-items-center font-semibold">Nearby Tournaments</div>
                <div className="grid grid-cols-2 gap-3">
                  {['Downtown Throwdown','Friday Flights','City Cup','Board Masters'].map((t,i) => (
                    <div key={i} className="rounded-lg border border-gray-200 p-3 hover:shadow-md transition">
                      <div className="h-20 rounded bg-gray-100 mb-2" />
                      <p className="text-xs font-semibold text-gray-800">{t}</p>
                      <p className="text-[10px] text-gray-500">2.4 mi • Tonight 7pm</p>
                      <button className="mt-2 w-full text-[11px] px-2 py-1 rounded bg-blue-600 text-white">Register</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
