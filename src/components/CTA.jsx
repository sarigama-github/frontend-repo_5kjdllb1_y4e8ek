export default function CTA() {
  return (
    <section id="download" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-10 text-white shadow-xl">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-extrabold">Get bigfishdartleague on your phone</h3>
              <p className="mt-2 text-blue-50">Find events near you, register fast, and never miss your match.</p>
            </div>
            <div className="flex gap-3 md:justify-end">
              <a href="#" className="bg-white text-blue-700 px-4 py-2 rounded-md font-semibold hover:bg-blue-50">App Store</a>
              <a href="#" className="bg-white text-blue-700 px-4 py-2 rounded-md font-semibold hover:bg-blue-50">Google Play</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
