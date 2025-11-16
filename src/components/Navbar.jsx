import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-blue-600 text-white grid place-items-center font-bold">B</div>
            <span className="text-xl font-bold tracking-tight">bigfishdartleague</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#how" className="hover:text-gray-900">How it works</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#faqs" className="hover:text-gray-900">FAQs</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#download" className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">Download</a>
            <a href="#get-started" className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">Get started</a>
          </div>

          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#features" className="block px-2 py-2 rounded hover:bg-gray-50">Features</a>
            <a href="#how" className="block px-2 py-2 rounded hover:bg-gray-50">How it works</a>
            <a href="#pricing" className="block px-2 py-2 rounded hover:bg-gray-50">Pricing</a>
            <a href="#faqs" className="block px-2 py-2 rounded hover:bg-gray-50">FAQs</a>
            <div className="flex gap-2 pt-2">
              <a href="#download" className="flex-1 px-4 py-2 rounded-md border border-gray-300 text-gray-700 text-center hover:bg-gray-50">Download</a>
              <a href="#get-started" className="flex-1 px-4 py-2 rounded-md bg-blue-600 text-white text-center hover:bg-blue-700">Get started</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
