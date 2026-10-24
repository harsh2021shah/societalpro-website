import { ArrowRight, Mail, MessageCircle } from 'lucide-react'
import { Button, Footer, Header } from '@/components/site'

export default function Contact() {
  return (
    <>
      <Header />
      <main className="px-6 pb-24 pt-40 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#0b7f70]">Contact</p>
            <h1 className="mt-5 max-w-xl text-5xl font-semibold leading-tight tracking-[-.07em] text-[#0f1f3d] md:text-7xl">
              Questions are welcome.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-[#5b6678]">
              We&apos;re here to help your society take its next step toward clearer records and easier participation.
            </p>
            <Button className="mt-8">Open your society <ArrowRight size={16} /></Button>
          </div>

          <div className="grid content-start gap-4">
            <a
              href="mailto:support@societalpro.com"
              className="group rounded-3xl border border-[#dbe7e6] bg-white p-7 transition hover:border-[#0b7f70]/40 hover:shadow-[0_12px_40px_rgba(15,31,61,.06)]"
            >
              <div className="flex size-11 items-center justify-center rounded-2xl bg-[#e3f4f1] text-[#0b7f70]"><Mail size={20} /></div>
              <h2 className="mt-6 text-xl font-semibold text-[#0f1f3d]">Email support</h2>
              <p className="mt-2 text-[#5b6678]">support@societalpro.com</p>
            </a>
            <a
              href="https://wa.me/917400043868"
              className="group rounded-3xl border border-[#dbe7e6] bg-white p-7 transition hover:border-[#0b7f70]/40 hover:shadow-[0_12px_40px_rgba(15,31,61,.06)]"
            >
              <div className="flex size-11 items-center justify-center rounded-2xl bg-[#e3f4f1] text-[#0b7f70]"><MessageCircle size={20} /></div>
              <h2 className="mt-6 text-xl font-semibold text-[#0f1f3d]">Message us on WhatsApp</h2>
              <p className="mt-2 text-[#5b6678]">+91 74000 43868</p>
            </a>
            <p className="px-1 text-sm leading-6 text-[#5b6678]">
              Tell us about your society and what would make day-to-day management clearer. We&apos;ll get back to you.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
