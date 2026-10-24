import { ArrowRight } from 'lucide-react'
import { Button, Footer, Header } from '@/components/site'

export default function Manifesto() {
  return (
    <>
      <Header />
      <main className="px-6 pb-24 pt-40 md:px-10">
        <article className="mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#0b7f70]">The manifesto</p>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-tight tracking-[-.07em] text-[#0f1f3d] md:text-7xl">
            We learn honesty at home.
          </h1>
          <div className="mt-16 max-w-3xl font-serif text-2xl leading-relaxed text-[#30405d] md:text-4xl md:leading-relaxed">
            <p>A country is not its government. A country is its people, and people are shaped by the places they learn to live together.</p>
            <p className="mt-12">We learn honesty at home. The next place we practice it is our society: who collects the money, where it goes, how decisions get made.</p>
            <p className="mt-12">When a society is open, people get used to asking questions and getting answers. They get used to doing the right thing when no one is forcing them to.</p>
            <p className="mt-12">Habits travel. A person who expects transparency from their society will one day expect it everywhere.</p>
            <p className="mt-12">SocietalPro is a private company with a simple belief: honest societies build an honest country. We start with yours.</p>
          </div>
          <div className="my-20 h-px bg-[#dbe7e6]" />
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#0b7f70]">Mission</p>
              <p className="mt-4 text-xl leading-8 text-[#0f1f3d]">Help every housing society run in the open, so transparency becomes an everyday habit.</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#0b7f70]">Vision</p>
              <p className="mt-4 text-xl leading-8 text-[#0f1f3d]">A country where people grew up expecting openness, because they lived it in their own society first.</p>
            </div>
          </div>
          <Button className="mt-14">Start with your society <ArrowRight size={16} /></Button>
        </article>
      </main>
      <Footer />
    </>
  )
}
