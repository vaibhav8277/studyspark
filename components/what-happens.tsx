const steps = ['Share a tip', 'Join a focused session', 'Celebrate a learning win']

export function WhatHappens() {
  return (
    <section id="what-happens" aria-labelledby="what-happens-heading" className="border-t">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2
          id="what-happens-heading"
          className="text-sm font-medium uppercase tracking-widest text-primary"
        >
          What happens
        </h2>
        <ol className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step} className="flex items-center gap-4 rounded-xl border bg-card p-6">
              <span
                className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <span className="text-lg font-semibold">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
