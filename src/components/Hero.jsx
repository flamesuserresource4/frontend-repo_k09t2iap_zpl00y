export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 to-white pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-neutral-900/5 px-3 py-1 text-xs font-medium text-neutral-700 ring-1 ring-neutral-900/10 mb-4">Small Business Specialists</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900">
              Start, grow, and manage your business with confidence
            </h1>
            <p className="mt-4 text-neutral-700 text-lg leading-relaxed">
              Carter Business helps entrepreneurs with formation, bookkeeping, payroll, tax preparation, and ongoing compliance—so you can focus on building what matters.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-5 py-3 text-white hover:bg-neutral-800">Book a consultation</a>
              <a href="#services" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-neutral-900 ring-1 ring-neutral-200 hover:bg-neutral-50">Explore services</a>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-6 text-center">
              <div className="rounded-lg border border-neutral-200 p-4">
                <dt className="text-sm text-neutral-600">Years experience</dt>
                <dd className="text-2xl font-semibold text-neutral-900">10+</dd>
              </div>
              <div className="rounded-lg border border-neutral-200 p-4">
                <dt className="text-sm text-neutral-600">Businesses served</dt>
                <dd className="text-2xl font-semibold text-neutral-900">500+</dd>
              </div>
              <div className="rounded-lg border border-neutral-200 p-4">
                <dt className="text-sm text-neutral-600">Avg. response</dt>
                <dd className="text-2xl font-semibold text-neutral-900">24h</dd>
              </div>
            </dl>
          </div>
          <div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100" />
              <div className="relative h-full w-full p-6 grid grid-cols-2 gap-4">
                <div className="rounded-lg border border-neutral-200 p-4 bg-white">
                  <p className="text-sm font-medium text-neutral-900">Business Formation</p>
                  <p className="mt-1 text-sm text-neutral-600">LLC, S-Corp, EIN, Operating Agreements</p>
                </div>
                <div className="rounded-lg border border-neutral-200 p-4 bg-white">
                  <p className="text-sm font-medium text-neutral-900">Bookkeeping & Payroll</p>
                  <p className="mt-1 text-sm text-neutral-600">Monthly books, payroll runs, reports</p>
                </div>
                <div className="rounded-lg border border-neutral-200 p-4 bg-white">
                  <p className="text-sm font-medium text-neutral-900">Taxes & Compliance</p>
                  <p className="mt-1 text-sm text-neutral-600">Sales tax, annual filings, 1099s</p>
                </div>
                <div className="rounded-lg border border-neutral-200 p-4 bg-white">
                  <p className="text-sm font-medium text-neutral-900">Credit & Funding</p>
                  <p className="mt-1 text-sm text-neutral-600">Build business credit, access capital</p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-neutral-500 text-center lg:text-left">Everything you need to run your back office—handled by experts.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
