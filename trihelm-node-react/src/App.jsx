import React from "react";

export default function App() {
  return <TrihelmLanding />;
}

function TrihelmLanding() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-amber-400/40 selection:text-neutral-900">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 grid place-items-center shadow-lg shadow-amber-500/20">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-neutral-900">
                <path fill="currentColor" d="M4 20h16v-2H4v2Zm2-3h2v-5h2v5h2v-8h2v8h2v-6h2v6h2V9h-2V7h-2V4h-2v3h-2v2h-2v3H8v-2H6v8Z"/>
              </svg>
            </div>
            <span className="font-semibold tracking-wide text-lg">Trihelm Innovation Group</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="hover:text-amber-400">Services</a>
            <a href="#about" className="hover:text-amber-400">About</a>
            <a href="#projects" className="hover:text-amber-400">Projects</a>
            <a href="#contact" className="hover:text-amber-400">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:inline-flex rounded-2xl px-4 py-2 text-sm font-medium bg-amber-500 text-neutral-900 hover:bg-amber-400 transition shadow">
              Get a Quote
            </a>
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(245,158,11,0.20),transparent_60%)]"/>
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-to-b from-amber-500/10 to-transparent rounded-full blur-3xl"/>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span>Licensed & Insured</span>
              <span className="h-1 w-1 rounded-full bg-amber-400"/>
              <span>Serving South Florida</span>
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
              General Contractors for High‑End Builds & Interiors
            </h1>
            <p className="mt-5 text-neutral-300 md:text-lg max-w-xl">
              From whole‑home renovations to precision countertop manufacturing, we deliver craftsmanship that stands the test of time—on schedule and on budget.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="rounded-2xl px-5 py-3 font-medium bg-amber-500 text-neutral-900 hover:bg-amber-400 transition">Request a Consultation</a>
              <a href="#projects" className="rounded-2xl px-5 py-3 font-medium border border-white/15 hover:border-amber-400/60 hover:text-amber-300 transition">View Projects</a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-neutral-400">
              <div className="flex items-center gap-2"><StarIcon/> <span>Premium Materials</span></div>
              <div className="flex items-center gap-2"><ShieldIcon/> <span>Warranty Backed</span></div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/10 p-1">
              <div className="w-full h-full rounded-[22px] bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"/>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <p className="text-xs text-neutral-300">In‑house countertop fabrication • Quartz • Granite • Marble</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">What We Do</h2>
        <p className="mt-3 text-neutral-300 max-w-2xl">A full‑service partner from pre‑construction through final walkthrough, with a specialty in premium surfaces and interior finishes.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard title="General Contracting" desc="Ground‑up builds and complex renovations managed end‑to‑end: permits, schedules, trades, and QA." icon={<HardHatIcon/>} />
          <ServiceCard title="Interior Remodeling" desc="Kitchens, baths, millwork, flooring, lighting, and luxury finish packages for residential & commercial." icon={<HomeIcon/>} />
          <ServiceCard title="Countertop Manufacturing" desc="In‑house templating, CNC fabrication, and precision installation across quartz, granite, and marble." icon={<SparkIcon/>} />
          <ServiceCard title="Design‑Build" desc="Value‑engineered solutions that align scope, budget, and timeline under one accountable team." icon={<PlanIcon/>} />
          <ServiceCard title="Commercial TI" desc="White‑box, retail, hospitality, medical, and office build‑outs with minimal downtime." icon={<OfficeIcon/>} />
          <ServiceCard title="Maintenance & Warranty" desc="Post‑project care plans to keep your property looking and performing like new." icon={<ShieldIcon/>} />
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-white/5 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Built by Craftspeople. Led by Owners.</h2>
            <p className="mt-4 text-neutral-200">Horizon Development Group was founded by three working owners with equal ownership and a shared belief in doing things the right way—clear communication, meticulous execution, and respect for your time and space.</p>
            <ul className="mt-6 space-y-3 text-neutral-300">
              <li className="flex items-start gap-3"><CheckIcon/> <span>One accountable team from estimate to handoff</span></li>
              <li className="flex items-start gap-3"><CheckIcon/> <span>Transparent budgets and milestone reporting</span></li>
              <li className="flex items-start gap-3"><CheckIcon/> <span>In‑house surface fabrication for tighter control</span></li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-40 rounded-2xl bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center border border-white/10"/>
            <div className="h-40 rounded-2xl bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center border border-white/10"/>
            <div className="h-40 rounded-2xl bg-[url('https://images.unsplash.com/photo-1523419409543-88f8d4f2ad22?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center border border-white/10"/>
            <div className="h-40 rounded-2xl bg-[url('https://images.unsplash.com/photo-1622025340638-ff8a6dc6d607?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center border border-white/10"/>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Featured Work</h2>
            <p className="mt-3 text-neutral-300">A snapshot of our recent builds and custom surfaces.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-2xl px-4 py-2 text-sm font-medium border border-white/15 hover:border-amber-400/60 hover:text-amber-300 transition">Start Your Project</a>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1,2,3,4,5,6].map((i) => (
            <article key={i} className="group rounded-2xl overflow-hidden border border-white/10 bg-neutral-900/40">
              <div className="aspect-[4/3] bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center transition group-hover:scale-[1.03]"/>
              <div className="p-4">
                <h3 className="font-medium">Project {i}</h3>
                <p className="text-sm text-neutral-400">Miami, FL • Kitchen Remodel</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Our Process</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            <Step n={1} title="Consult" desc="We align on goals, budget, and timeline, then provide a clear estimate."/>
            <Step n={2} title="Plan" desc="Permits, selections, and scheduling with transparent milestone updates."/>
            <Step n={3} title="Build" desc="Skilled trades + in‑house fabrication deliver precise, clean work."/>
            <Step n={4} title="Handoff" desc="Final walkthrough, warranties, and post‑project care options."/>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">What Clients Say</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ["Flawless countertops and on‑time install.", "Residential Remodel"],
            ["Communication was proactive and clear throughout.", "Commercial TI"],
            ["They left the site spotless and the work is stunning.", "Kitchen + Bath"]
          ].map(([quote, tag], i)=> (
            <blockquote key={i} className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6">
              <p className="text-neutral-200">“{quote}”</p>
              <footer className="mt-4 text-sm text-neutral-400">— {tag}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-gradient-to-b from-neutral-950 to-neutral-900 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-2 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Request a Free Consultation</h2>
            <p className="mt-3 text-neutral-300 max-w-xl">Tell us about your project and we’ll follow up within one business day.</p>
            <ul className="mt-6 space-y-3 text-neutral-300">
              <li className="flex items-start gap-3"><PhoneIcon/> <span>(305) 555‑0199</span></li>
              <li className="flex items-start gap-3"><MailIcon/> <span>estimates@trihelmIG.com</span></li>
              <li className="flex items-start gap-3"><MapPinIcon/> <span>Miami, Florida • Serving the Southeast</span></li>
            </ul>
          </div>
          <form className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 space-y-4" onSubmit={(e)=>{e.preventDefault(); alert('Thanks! We will get back to you shortly.')}}>
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block text-sm">Name
                <input required className="mt-1 w-full rounded-xl bg-neutral-800/80 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400" placeholder="Jane Doe"/>
              </label>
              <label className="block text-sm">Email
                <input type="email" required className="mt-1 w-full rounded-xl bg-neutral-800/80 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400" placeholder="you@example.com"/>
              </label>
            </div>
            <label className="block text-sm">Phone
              <input className="mt-1 w-full rounded-xl bg-neutral-800/80 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400" placeholder="(305) 555‑0199"/>
            </label>
            <label className="block text-sm">Project Details
              <textarea rows={5} className="mt-1 w-full rounded-xl bg-neutral-800/80 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400" placeholder="Tell us about scope, timeline, and address..."/>
            </label>
            <button type="submit" className="w-full rounded-2xl px-5 py-3 font-medium bg-amber-500 text-neutral-900 hover:bg-amber-400 transition">Send Request</button>
            <p className="text-xs text-neutral-400">By submitting, you agree to be contacted about your project. We respect your privacy.</p>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-6 md:grid-cols-3 text-sm">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 grid place-items-center">
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-neutral-900"><path fill="currentColor" d="M4 20h16v-2H4v2Zm2-3h2v-5h2v5h2v-8h2v8h2v-6h2v6h2V9h-2V7h-2V4h-2v3h-2v2h-2v3H8v-2H6v8Z"/></svg>
              </div>
              <span className="font-medium">Trihelm Innovation Group</span>
            </div>
            <p className="text-neutral-400">High‑end general contracting, interior remodeling, and in‑house countertop fabrication for South Florida.</p>
          </div>
          <div>
            <p className="text-neutral-500 mb-3">Services</p>
            <ul className="space-y-2 text-neutral-300">
              <li>General Contracting</li>
              <li>Interior Remodeling</li>
              <li>Countertop Manufacturing</li>
              <li>Design‑Build</li>
              <li>Commercial TI</li>
            </ul>
          </div>
          <div>
            <p className="text-neutral-500 mb-3">Contact</p>
            <ul className="space-y-2 text-neutral-300">
              <li>(305) 555‑0199</li>
              <li>estimates@trihelmIG.com</li>
              <li>Miami, Florida</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-xs text-neutral-500">© {new Date().getFullYear()} Horizon Development Group. All rights reserved.</div>
      </footer>
    </div>
  );
}

function ServiceCard({title, desc, icon}){
  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6">
      <div className="h-11 w-11 rounded-xl bg-amber-500/15 grid place-items-center text-amber-300 mb-4">{icon}</div>
      <h3 className="font-medium text-lg">{title}</h3>
      <p className="mt-2 text-neutral-300 text-sm">{desc}</p>
    </div>
  );
}

function Step({n, title, desc}){
  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
        <span className="h-5 w-5 grid place-items-center rounded-full bg-amber-500 text-neutral-900 font-semibold">{n}</span>
        <span>Step</span>
      </div>
      <h3 className="mt-3 font-medium">{title}</h3>
      <p className="mt-2 text-sm text-neutral-300">{desc}</p>
    </div>
  );
}

function StarIcon(){
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9"/></svg>
  );
}
function ShieldIcon(){
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>
  );
}
function HardHatIcon(){
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 18a8 8 0 0 1 20 0"/><path d="M6 18v-3a6 6 0 0 1 12 0v3"/><path d="M12 2v6"/></svg>
  );
}
function HomeIcon(){
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l9-8 9 8"/><path d="M9 22V12h6v10"/></svg>
  );
}
function SparkIcon(){
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3l4 7H3l4 7"/><path d="M12 6l7 12"/></svg>
  );
}
function PlanIcon(){
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><path d="M10 7h4M7 10v4M14 10v4"/></svg>
  );
}
function OfficeIcon(){
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="8" height="18"/><rect x="13" y="8" width="8" height="13"/><path d="M7 7h0M7 11h0M7 15h0M17 12h0M17 16h0"/></svg>
  );
}
function CheckIcon(){
  return (
    <svg className="mt-1 h-4 w-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
  );
}
function PhoneIcon(){
  return (
    <svg className="mt-0.5 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .65 2.57 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.51-1.22a2 2 0 0 1 2.11-.45 12.05 12.05 0 0 0 2.57.65A2 2 0 0 1 22 16.92Z"/></svg>
  );
}
function MailIcon(){
  return (
    <svg className="mt-0.5 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/></svg>
  );
}
function MapPinIcon(){
  return (
    <svg className="mt-0.5 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 1 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>
  );
}
