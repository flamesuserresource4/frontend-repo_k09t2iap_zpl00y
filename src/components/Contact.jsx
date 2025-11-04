import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Consultation request');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:hello@carterbusiness.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">Let’s talk about your business</h2>
            <p className="mt-3 text-neutral-700">Tell us what you’re building and where you need support. We’ll respond within one business day.</p>

            <div className="mt-8 space-y-4">
              <a href="mailto:hello@carterbusiness.com" className="flex items-center gap-3 text-neutral-700 hover:text-neutral-900">
                <span className="h-10 w-10 rounded-lg bg-white border border-neutral-200 grid place-items-center"><Mail size={18} /></span>
                hello@carterbusiness.com
              </a>
              <div className="flex items-center gap-3 text-neutral-700">
                <span className="h-10 w-10 rounded-lg bg-white border border-neutral-200 grid place-items-center"><Phone size={18} /></span>
                (555) 000-0000
              </div>
              <div className="flex items-center gap-3 text-neutral-700">
                <span className="h-10 w-10 rounded-lg bg-white border border-neutral-200 grid place-items-center"><MapPin size={18} /></span>
                Remote-first • Serving clients nationwide
              </div>
            </div>

            <div className="mt-10 rounded-xl border border-neutral-200 bg-white p-6">
              <p className="text-sm text-neutral-600">Office hours</p>
              <p className="mt-1 text-neutral-900 font-medium">Mon–Fri · 9am–6pm</p>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm">
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700">Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-400" placeholder="Your full name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-400" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700">How can we help?</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} required className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-400" placeholder="Briefly describe your needs" />
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center rounded-md bg-neutral-900 px-5 py-3 text-white hover:bg-neutral-800">
                Send message
              </button>
              <p className="text-xs text-neutral-500">By reaching out, you agree to be contacted about services. We respect your privacy.</p>
            </form>
          </div>
        </div>

        <div className="mt-16 border-t border-neutral-200 pt-8 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} Carter Business. All rights reserved.
        </div>
      </div>
    </section>
  );
}
