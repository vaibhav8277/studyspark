import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
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
        <Features />
        <WhyItMatters />
        <JoinSession />
      </main>
      <SiteFooter />
    </>
  )
}
