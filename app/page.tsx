'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check, ChevronRight, Sparkles } from 'lucide-react'
import { Button, FeatureGrid, Footer, Header, Reveal, SectionIntro } from '@/components/site'

function HeroLedger() {
  return (
    <div className="relative mx-auto min-h-[440px] max-w-[520px]">
      <div className="absolute inset-8 rounded-[3rem] bg-[#e3f4f1] blur-3xl" />
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="absolute left-2 top-14 w-[88%] rotate-[-4deg] rounded-3xl border border-[#c7e7e2] bg-white/75 p-5 shadow-[0_25px_80px_rgba(11,127,112,.16)] backdrop-blur"
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-[#5b6678]">Sample monthly report</span>
          <span className="rounded-full bg-[#e3f4f1] px-2 py-1 text-[10px] font-bold text-[#0b7f70]">On record</span>
        </div>
        <div className="mt-8 flex items-end justify-between">
          <div>
            <p className="text-3xl font-semibold tracking-tight text-[#0f1f3d]">₹4,82,500</p>
            <p className="mt-1 text-xs text-[#5b6678]">illustrative monthly total</p>
          </div>
          <div className="text-right text-xs text-[#0b7f70]">Income<br /><span className="text-[#5b6678]">sample</span></div>
        </div>
        <div className="mt-8 h-20 rounded-2xl bg-[#f6f8fb] p-3">
          <div className="flex h-full items-end gap-2">
            {[36, 52, 43, 70, 55, 82, 66, 90, 75, 88].map((height, index) => (
              <motion.div
                key={index}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="flex-1 rounded-t bg-[#0b7f70]/70"
              />
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.35 }}
        className="absolute right-0 top-2 w-52 rounded-3xl border border-white bg-[#0f1f3d] p-5 text-white shadow-xl"
      >
        <p className="text-[10px] uppercase tracking-widest text-[#14b8a6]">Activity note</p>
        <p className="mt-4 text-sm leading-5">Treasurer added a note</p>
        <p className="mt-1 text-xs text-white/45">Sample entry</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
        className="absolute bottom-10 right-5 w-56 rounded-3xl border border-[#dbe7e6] bg-white p-5 shadow-xl"
      >
        <p className="text-xs font-semibold text-[#0f1f3d]">A decision, together</p>
        <div className="mt-4 flex items-center gap-3">
          <div className="grid size-12 place-items-center rounded-full border-4 border-[#0b7f70] text-xs font-bold text-[#0b7f70]">70%</div>
          <div>
            <p className="text-sm font-semibold text-[#0f1f3d]">42 of 60 flats</p>
            <p className="text-xs text-[#5b6678]">sample participation</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero-grid overflow-hidden px-6 pb-20 pt-36 md:px-10 md:pb-28 md:pt-48">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_.92fr]">
            <div>
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#bfe3dc] bg-white/70 px-3 py-1.5 text-xs font-semibold text-[#0b7f70]">
                <Sparkles size={13} /> A calmer way to run your society
              </p>
              <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[1.02] tracking-[-.07em] text-[#0f1f3d] md:text-7xl">
                Honest societies.<br /><span className="text-[#0b7f70]">Honest country.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[#5b6678]">
                SocietalPro helps put payments, decisions and everyday work on record, so residents can see where things stand and trust can grow together.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button>Start with your society <ArrowRight size={16} /></Button>
                <a href="#habit" className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#0b7f70]/30 px-5 text-sm font-semibold text-[#0b7f70] transition hover:bg-[#e3f4f1]">
                  See how it works
                </a>
              </div>
              <p className="mt-6 text-xs text-[#5b6678]">A private, non-partisan platform for housing societies.</p>
            </div>
            <HeroLedger />
          </div>
        </section>

        <section id="habit" className="bg-white px-6 py-24 md:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionIntro eyebrow="The habit loop" title="See. Ask. Decide." body="The habit of transparency, built into your society." />
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {[
                ['01', 'See', 'where the money goes'],
                ['02', 'Ask', 'raise requests, vote, question'],
                ['03', 'Decide', 'together, on record'],
              ].map(([number, title, description], index) => (
                <Reveal key={title}>
                  <div className="relative rounded-3xl border border-[#dbe7e6] bg-[#f6f8fb] p-7">
                    <span className="text-sm font-bold text-[#0b7f70]">{number}</span>
                    <h3 className="mt-14 text-3xl font-semibold tracking-tight text-[#0f1f3d]">{title}</h3>
                    <p className="mt-2 text-[#5b6678]">{description}</p>
                    {index < 2 && <ChevronRight className="absolute -right-5 top-1/2 hidden text-[#14b8a6] md:block" />}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f6f8fb] px-6 py-24 md:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Nothing hidden. Everything sorted."
              title="Honest committees deserve proof."
              body="From a payment note to the final vote, give your society a clearer record people can follow."
            />
            <div className="mt-12 grid gap-4 lg:grid-cols-2">
              <div className="rounded-3xl border border-[#eadfd1] bg-[#fffaf2] p-7">
                <p className="text-xs font-bold uppercase tracking-widest text-[#9c7a45]">The familiar tangle</p>
                <h3 className="mt-5 text-2xl font-semibold text-[#0f1f3d]">Good people, too many loose ends.</h3>
                <div className="mt-8 rounded-2xl border border-[#eadfd1] bg-white p-5 font-mono text-xs leading-7 text-[#9c7a45]">
                  “Who approved the lift AMC?”<br />Excel_final_v7_FINAL.xlsx<br />B-204 paid cash?
                </div>
              </div>
              <div className="rounded-3xl bg-[#0f1f3d] p-7 text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-[#14b8a6]">A clearer record</p>
                <h3 className="mt-5 text-2xl font-semibold">A decision with useful context.</h3>
                <div className="mt-8 rounded-2xl bg-white/10 p-5 text-sm">
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span>Water tank repair</span><span className="text-[#14b8a6]">₹38,000</span>
                  </div>
                  <p className="mt-3 text-xs text-white/55">Sample entry · approval note attached</p>
                  <div className="mt-6 flex items-center gap-2 text-xs text-white/65">
                    <Check size={15} className="text-[#14b8a6]" /> Ready to include in a monthly report
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="product" className="px-6 py-24 md:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionIntro eyebrow="The open toolkit" title="The everyday work, made visible." body="One calm place for the things that keep a society moving." />
            <div className="mt-12"><FeatureGrid /></div>
          </div>
        </section>

        <section className="bg-[#0f1f3d] px-6 py-24 text-white md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[.2em] text-[#14b8a6]">Open society practices</p>
                <h2 className="text-4xl font-semibold tracking-[-.055em] md:text-5xl">A badge for practices,<br />never a moral rating.</h2>
                <p className="mt-5 max-w-md leading-7 text-white/60">
                  A society can show the habits it is building: payment notes, shared reports and recorded votes.
                </p>
                <Button className="mt-8">Start with your society <ArrowRight size={16} /></Button>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8">
                <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                  <div className="grid size-14 place-items-center rounded-2xl bg-[#f59e0b] text-[#0f1f3d]"><Check /></div>
                  <div>
                    <p className="font-semibold">This society runs in the open</p>
                    <p className="text-xs text-white/45">Illustrative badge preview</p>
                  </div>
                </div>
                <div className="flex flex-col gap-5 pt-6 text-sm text-white/75">
                  {['Payments with notes', 'Published monthly reports', 'Recorded votes'].map(item => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="grid size-5 place-items-center rounded-full bg-[#0b7f70]"><Check size={12} /></span>{item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#e3f4f1] px-6 py-24 md:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#0b7f70]">A simple belief</p>
            <blockquote className="mt-8 font-serif text-3xl leading-tight tracking-[-.03em] text-[#0f1f3d] md:text-5xl">
              “A country is not its government. A country is its people, and people are shaped by the places they learn to live together.”
            </blockquote>
            <Button variant="outline" className="mt-9">Build the habit in your society <ArrowRight size={16} /></Button>
          </div>
        </section>

        <section className="px-6 py-24 md:px-10">
          <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[2rem] bg-[#f6f8fb] p-8 md:p-14 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#0b7f70]">Clear plans, no surprises</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-.055em] text-[#0f1f3d] md:text-5xl">Made for societies of every size.</h2>
              <p className="mt-4 text-[#5b6678]">Explore plans for small, medium and large communities.</p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <Button>Open your society <ArrowRight size={16} /></Button>
              <a href="/pricing" className="text-sm font-semibold text-[#0b7f70] hover:underline">View pricing</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
