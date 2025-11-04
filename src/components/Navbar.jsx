import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight text-neutral-900">
            <span className="inline-block h-8 w-8 rounded bg-neutral-900 text-white grid place-items-center text-sm">CB</span>
            <span className="text-base sm:text-lg">Carter Business</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-700">
            <a href="#services" className="hover:text-neutral-900">Services</a>
            <a href="#about" className="hover:text-neutral-900">About</a>
            <a href="#contact" className="hover:text-neutral-900">Contact</a>
            <a href="#contact" className="ml-2 inline-flex items-center rounded-md bg-neutral-900 px-3 py-2 text-white hover:bg-neutral-800">Book Consultation</a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-neutral-400"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 text-sm text-neutral-700">
              <a href="#services" className="px-2 py-2 rounded hover:bg-neutral-100" onClick={() => setOpen(false)}>Services</a>
              <a href="#about" className="px-2 py-2 rounded hover:bg-neutral-100" onClick={() => setOpen(false)}>About</a>
              <a href="#contact" className="px-2 py-2 rounded hover:bg-neutral-100" onClick={() => setOpen(false)}>Contact</a>
              <a href="#contact" className="mt-2 inline-flex items-center justify-center rounded-md bg-neutral-900 px-3 py-2 text-white hover:bg-neutral-800">Book Consultation</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
