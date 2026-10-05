export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <p className="text-sm font-medium uppercase tracking-widest text-primary">
        A student-led hub
      </p>
      <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
        Study<span className="text-primary">Spark</span>
      </h1>
      <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
        StudySpark is a simple student-led hub that helps classmates share study tips, organize
        focused study sessions, and celebrate small learning wins.
      </p>
      <div className="mt-10">
        <a
          href="#join"
          className="inline-flex items-center rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90"
        >
          Join our next study session
        </a>
      </div>
    </section>
  )
}
