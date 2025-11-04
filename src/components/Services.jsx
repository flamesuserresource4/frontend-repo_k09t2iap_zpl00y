import { Building2, Calculator, FileCheck, CreditCard, Stamp, Lightbulb } from 'lucide-react';

const items = [
  {
    icon: Building2,
    title: 'Business Formation',
    desc: 'LLC, S-Corp, Nonprofit, DBA, Operating Agreements, EIN setup, registered agent.',
  },
  {
    icon: Calculator,
    title: 'Bookkeeping & Payroll',
    desc: 'Monthly bookkeeping, payroll processing, financial statements, clean-up and catch-up.',
  },
  {
    icon: FileCheck,
    title: 'Taxes & Compliance',
    desc: 'Sales and use tax, franchise tax, annual reports, 1099s, quarterlies, and reminders.',
  },
  {
    icon: CreditCard,
    title: 'Credit & Funding',
    desc: 'Business credit profiles, lending readiness, grant guidance, and funding strategies.',
  },
  {
    icon: Stamp,
    title: 'Notary & Apostille',
    desc: 'Mobile notary, e-notarization assistance, apostille facilitation for business docs.',
  },
  {
    icon: Lightbulb,
    title: 'Consulting & Strategy',
    desc: 'Operations, systems, and growth strategy designed around your stage and goals.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="mb-10 sm:mb-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">Services tailored for small businesses</h2>
          <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">
            Flexible, transparent support—choose a single service or an ongoing package.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-neutral-900 text-white grid place-items-center">
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-neutral-900">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-neutral-600 leading-relaxed">{desc}</p>
              <div className="mt-5">
                <a href="#contact" className="text-sm font-medium text-neutral-900 hover:underline">Get started →</a>
              </div>
            </div>
          ))}
        </div>

        <div id="about" className="mt-16 rounded-2xl border border-neutral-200 bg-neutral-50 p-8 sm:p-10">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-semibold text-neutral-900">Why Carter Business?</h3>
              <ul className="mt-4 space-y-3 text-neutral-700">
                <li>• Practical guidance from practitioners who work with hundreds of small businesses.</li>
                <li>• Clear pricing with no surprises—scope and deliverables agreed upfront.</li>
                <li>• Responsive support and proactive reminders to keep you compliant.</li>
                <li>• Tools and systems that scale as you grow.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <p className="text-sm text-neutral-600">What clients say</p>
              <blockquote className="mt-2 text-neutral-900 font-medium">
                “Professional, fast, and reliable. Carter Business set up our LLC and keeps our books spotless.”
              </blockquote>
              <p className="mt-2 text-sm text-neutral-500">— Jordan R., Retail Owner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
