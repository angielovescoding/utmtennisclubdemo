import Background from "@/components/background/background";
import Section from "@/components/section/section";

export default function Features() {
  return (
    <Section id="features" noBackground>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-center">
          What We Offer
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative p-6">
            <Background className="rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950"/>
            <h3 className="text-lg font-semibold">Services</h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              We offer stringing racket services, private tennis coaching, and free use of tennis equipment.
            </p>
          </div>
          <div className="relative p-6">
            <Background className="rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950"/>
            <h3 className="text-lg font-semibold">Events</h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Enjoy public coaching weekly and watch parties.
            </p>
          </div>
          <div className="relative p-6">
            <Background className="rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950"/>
            <h3 className="text-lg font-semibold">Tournaments</h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Join us for tournaments at UTM and tournaments across universities.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
