import { Lightbulb, Timer, Trophy } from 'lucide-react'

const features = [
  { icon: Lightbulb, title: 'Share study tips', text: 'Classmates share study tips with each other.' },
  { icon: Timer, title: 'Organize focused sessions', text: 'Classmates organize focused study sessions.' },
  { icon: Trophy, title: 'Celebrate small wins', text: 'Classmates celebrate small learning wins.' },
]

export function Features() {
  return (
    <section id="what" aria-labelledby="what-heading" className="border-t bg-muted/60">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 id="what-heading" className="text-sm font-medium uppercase tracking-widest text-primary">
          What it is
        </h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, text }) => (
            <li key={title} className="rounded-xl border bg-card p-6">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
