import { Sparkles } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <a href="#top" className="flex items-center gap-2 font-semibold text-primary">
          <Sparkles className="size-5" aria-hidden="true" />
          StudySpark
        </a>
        <nav aria-label="Main">
          <ul className="flex items-center gap-6 text-sm text-muted-foreground">
            <li className="hidden sm:block">
              <a href="#what" className="hover:text-primary">
                What it is
              </a>
            </li>
            <li className="hidden sm:block">
              <a href="#why" className="hover:text-primary">
                Why it matters
              </a>
            </li>
            <li>
              <a
                href="#join"
                className="rounded-full bg-primary px-4 py-2 font-medium text-primary-foreground hover:bg-primary/90"
              >
                Join a session
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
