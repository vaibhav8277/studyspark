import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { WhatHappens } from '@/components/what-happens'
import { Features } from '@/components/features'
import { WhyItMatters } from '@/components/why-it-matters'
import { JoinSession } from '@/components/join-session'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <WhatHappens />
        <Features />
        <WhyItMatters />
        <JoinSession />
      </main>
      <SiteFooter />
    </>
  )
}
