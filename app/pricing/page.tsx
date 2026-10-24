import { ArrowRight, Check } from 'lucide-react'
import { Button, Footer, Header } from '@/components/site'

const plans = [
  {
    name: 'Small',
    residents: 'Fewer than 100 residents',
    textCredits: '50,000',
    voiceCredits: '5,000',
    setup: '$99',
    monthly: '$49',
    variant: 'outline' as const,
  },
  {
    name: 'Medium',
    residents: '100–500 residents',
    textCredits: '100,000',
    voiceCredits: '10,000',
    setup: '$199',
    monthly: '$79',
    variant: 'amber' as const,
  },
  {
    name: 'Large',
    residents: 'More than 500 residents',
    textCredits: '200,000',
    voiceCredits: '50,000',
    setup: '$399',
    monthly: '$129',
    variant: 'teal' as const,
  },
]

export default function Pricing() {
  return (
    <>
      <Header />
      <main className="px-6 pb-24 pt-40 md:px-10">
        <section className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#0b7f70]">Straightforward plans</p>
            <h1 className="mt-5 text-balance text-5xl font-semibold tracking-[-.07em] text-[#0f1f3d] md:text-7xl">
              A clearer society at a clear price.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#5b6678]">
              Choose a plan based on the number of residents. Every plan includes monthly text and voice credits.
            </p>
          </div>

          <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
            {plans.map(plan => (
              <article
                key={plan.name}
                className={`flex flex-col rounded-[2rem] border p-7 md:p-8 ${plan.name === 'Medium' ? 'border-[#0b7f70] bg-white shadow-[0_18px_60px_rgba(11,127,112,.12)]' : 'border-[#dbe7e6] bg-white'}`}
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.2em] text-[#0b7f70]">{plan.name}</p>
                  <h2 className="mt-3 text-xl font-semibold text-[#0f1f3d]">{plan.residents}</h2>
                </div>
                <div className="mt-8 border-b border-[#dbe7e6] pb-7">
                  <p className="flex items-baseline gap-2">
                    <span className="text-5xl font-semibold tracking-[-.06em] text-[#0f1f3d]">{plan.monthly}</span>
                    <span className="text-sm text-[#5b6678]">/ month</span>
                  </p>
                  <p className="mt-3 text-sm text-[#5b6678]">{plan.setup} one-time setup fee</p>
                </div>
                <div className="flex-1 py-7">
                  <p className="text-xs font-bold uppercase tracking-[.15em] text-[#5b6678]">Monthly credits</p>
                  <ul className="mt-5 flex flex-col gap-4 text-sm text-[#30405d]">
                    <li className="flex items-center gap-3"><Check size={17} className="shrink-0 text-[#0b7f70]" /> {plan.textCredits} text credits</li>
                    <li className="flex items-center gap-3"><Check size={17} className="shrink-0 text-[#0b7f70]" /> {plan.voiceCredits} voice credits</li>
                  </ul>
                </div>
                <Button variant={plan.variant} className="w-full">
                  Choose {plan.name} <ArrowRight size={16} />
                </Button>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-[#5b6678]">
            Monthly subscription and one-time setup fees are shown in USD. Credit allowances renew monthly. To get started or ask about the right plan for your society, continue to SocietalPro.
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
