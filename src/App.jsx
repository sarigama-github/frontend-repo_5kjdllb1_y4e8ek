import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function Footer() {
  return (
    <footer className="py-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} bigfishdartleague. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-900">Privacy</a>
          <a href="#" className="hover:text-gray-900">Terms</a>
          <a href="/test" className="hover:text-gray-900">System Status</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <CTA />

        <section id="faqs" className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center">FAQs</h2>
            <div className="mt-10 space-y-6">
              {[{
                q: 'Is the app free to use?',
                a: 'Yes. You can search events and build your profile for free. Pro features are optional.'
              },{
                q: 'Do I need an account to register?',
                a: 'Creating a free player profile allows one-tap registration and faster check-in.'
              },{
                q: 'Can organizers list their events?',
                a: 'Absolutely. Use the Organizer plan to publish events, manage brackets, and handle payouts.'
              }].map((item, i) => (
                <details key={i} className="group border border-gray-200 rounded-lg p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                    {item.q}
                    <span className="ml-4 h-6 w-6 grid place-items-center rounded-full bg-gray-100 text-gray-600 group-open:rotate-45 transition">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-gray-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
