'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  CircleDollarSign,
  FileText,
  Languages,
  Menu,
  MessageCircle,
  Mic2,
  ShieldCheck,
  Vote,
  Users,
  X,
} from 'lucide-react'

const APP_URL = 'https://app.societalpro.com'

const navItems = [
  { label: 'Product', href: '/#product' },
  { label: 'How it works', href: '/#habit' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Free tools', href: '/free-tools' },
  { label: 'About', href: '/manifesto' },
  { label: 'Blog', href: 'https://blog.societalpro.com', external: true },
]

export function Logo({ light = false, iconOnly = false }: { light?: boolean; iconOnly?: boolean }) {
  const markColor = light ? '#14b8a6' : '#0b7f70'

  return (
    <span className={`inline-flex items-center gap-2.5 font-semibold tracking-[-0.04em] ${light ? 'text-white' : 'text-[#0f1f3d]'}`}>
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-label="SocietalPro logo">
        <path d="M4 13.2 15 4l11 9.2v11.1H4V13.2Z" stroke={markColor} strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M10.2 24.3V14.8h9.6v9.5M15 14.8v5.8" stroke={markColor} strokeWidth="2.2" strokeLinecap="round" />
        <path d="M15 4v4" stroke={markColor} strokeWidth="2.2" strokeLinecap="round" />
      </svg>
      {!iconOnly && <span className="text-[20px]">Societal<span className={light ? 'text-[#14b8a6]' : 'text-[#0b7f70]'}>Pro</span></span>}
    </span>
  )
}

export function Button({
  children,
  variant = 'amber',
  className = '',
}: {
  children: React.ReactNode
  variant?: 'amber' | 'outline' | 'teal'
  className?: string
}) {
  const styles = {
    amber: 'bg-[#f59e0b] text-[#0f1f3d] hover:bg-[#fbbf24]',
    outline: 'border border-[#0b7f70]/30 text-[#0b7f70] hover:bg-[#e3f4f1]',
    teal: 'bg-[#0b7f70] text-white hover:bg-[#096c60]',
  }

  return (
    <a
      href={APP_URL}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  )
}

function NavigationLink({ item, onClick }: { item: (typeof navItems)[number]; onClick?: () => void }) {
  const className = 'text-sm text-[#5b6678] transition hover:text-[#0b7f70]'

  return item.external ? (
    <a href={item.href} className={className} onClick={onClick}>
      {item.label}
    </a>
  ) : (
    <Link href={item.href} className={className} onClick={onClick}>
      {item.label}
    </Link>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/70 bg-white/75 px-4 py-3 shadow-[0_10px_40px_rgba(15,31,61,.08)] backdrop-blur-xl md:px-6">
        <Link href="/" aria-label="SocietalPro home"><Logo /></Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
          {navItems.map(item => <NavigationLink key={item.label} item={item} />)}
          <Button className="min-h-10 px-4">Open your society <ArrowRight size={15} /></Button>
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="grid size-10 place-items-center rounded-full bg-[#e3f4f1] text-[#0b7f70] lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-2 mt-2 flex flex-col gap-1 rounded-3xl border bg-white p-3 shadow-xl lg:hidden"
          >
            {navItems.map(item => (
              <NavigationLink
                key={item.label}
                item={item}
                onClick={() => setOpen(false)}
              />
            ))}
            <Button className="mt-1">Open your society <ArrowRight size={15} /></Button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="bg-[#0f1f3d] px-6 py-14 text-white md:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/"><Logo light /></Link>
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/60">
            Honest societies build an honest country. Start with yours.
          </p>
        </div>
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#14b8a6]">Explore</p>
          <div className="flex flex-col gap-3 text-sm text-white/65">
            <Link href="/#product">Product</Link>
            <Link href="/#habit">How it works</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/free-tools">Free tools</Link>
          </div>
        </div>
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#14b8a6]">Company</p>
          <div className="flex flex-col gap-3 text-sm text-white/65">
            <Link href="/manifesto">Our belief</Link>
            <Link href="/contact">Contact</Link>
            <a href="https://blog.societalpro.com">Blog</a>
            <a href={APP_URL}>Open your society</a>
          </div>
        </div>
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#14b8a6]">We&apos;re here to help</p>
          <div className="flex flex-col gap-3 text-sm text-white/65">
            <a href="mailto:support@societalpro.com">support@societalpro.com</a>
            <a href="https://wa.me/917400043868">WhatsApp: +91 74000 43868</a>
          </div>
          <p className="mt-5 text-sm leading-6 text-white/50">
            For guidance only. Check your society&apos;s bye-laws and local regulations.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-5 text-xs text-white/40">
        Payments processed securely via Razorpay.
      </div>
    </footer>
  )
}

export const Reveal = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 22 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.65, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
)

export function SectionIntro({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="mb-4 text-xs font-bold uppercase tracking-[.2em] text-[#0b7f70]">{eyebrow}</p>
      <h2 className="text-balance text-4xl font-semibold tracking-[-.055em] text-[#0f1f3d] md:text-5xl">{title}</h2>
      {body && <p className="mt-5 text-lg leading-8 text-[#5b6678]">{body}</p>}
    </div>
  )
}

const featureData = [
  { icon: CircleDollarSign, title: 'Every payment explains itself.', text: 'Clear notes help members understand what each payment is for.' },
  { icon: FileText, title: 'A useful activity history.', text: 'Keep important actions and context easier to follow.' },
  { icon: Vote, title: 'Decisions made together.', text: 'Voting gives residents a clear way to participate.' },
  { icon: ShieldCheck, title: 'A clear monthly picture.', text: 'Reports help members follow income, expenses and balance.' },
  { icon: Users, title: 'Visitor logs with care.', text: 'Restricted access helps respect residents and their privacy.' },
  { icon: MessageCircle, title: 'Updates where residents are.', text: 'WhatsApp payment updates and notices keep people informed.' },
  { icon: Languages, title: 'Every resident can follow along.', text: 'Language preferences help make participation more inclusive.' },
  { icon: Mic2, title: 'Speak a request, hear a reply.', text: 'AI voice on Telegram. Replies are AI-generated.' },
]

export function FeatureGrid() {
  const [voted, setVoted] = useState(false)

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {featureData.map(({ icon: Icon, title, text }, index) => (
        <motion.article
          whileHover={{ y: -5 }}
          key={title}
          className={`group rounded-3xl border border-[#dbe7e6] bg-white p-6 shadow-[0_8px_30px_rgba(15,31,61,.04)] ${index === 0 ? 'bg-[#e3f4f1] lg:col-span-2 lg:row-span-2' : ''}`}
        >
          <div className="mb-10 flex size-10 items-center justify-center rounded-2xl bg-[#e3f4f1] text-[#0b7f70] transition group-hover:bg-[#0b7f70] group-hover:text-white">
            <Icon size={19} />
          </div>
          <h3 className="text-lg font-semibold text-[#0f1f3d]">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-[#5b6678]">{text}</p>
          {index === 0 && (
            <div className="mt-7 rounded-2xl border border-[#c6e4df] bg-white p-4">
              <div className="flex justify-between text-xs text-[#5b6678]">
                <span>Illustrative example · B-204</span>
                <span className="font-semibold text-[#16a34a]">Paid</span>
              </div>
              <p className="mt-2 text-sm font-medium text-[#0f1f3d]">₹2,500 · paid via UPI</p>
              <p className="mt-1 text-xs text-[#5b6678]">Note: October maintenance</p>
            </div>
          )}
          {index === 2 && (
            <button
              onClick={() => setVoted(!voted)}
              className="mt-6 w-full rounded-2xl border border-[#dbe7e6] bg-[#f6f8fb] p-3 text-left text-xs text-[#0f1f3d]"
            >
              Lift AMC renewal
              <span className="float-right font-semibold text-[#0b7f70]">{voted ? '42 votes' : 'Vote now'}</span>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#e3f4f1]">
                <motion.div animate={{ width: voted ? '70%' : '38%' }} className="h-full rounded-full bg-[#0b7f70]" />
              </div>
            </button>
          )}
        </motion.article>
      ))}
    </div>
  )
}
