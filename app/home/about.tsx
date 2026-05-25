import Section from "@/components/section/section";

export default function About() {
  return (
    <Section id="about" noBackground>
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight">About</h2>
        <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Welcome to the UTM Tennis Club! A place for everyone interested in tennis at UTM. 
          Whether you play competitively or just love the game, this is the hub for all things tennis at UTM. 
          Join us for practices, university matches, tournaments, watch parties, and socials. 
          It&apos;s the perfect way to meet other players, support the team, and get involved on campus!
        </p>
      </div>
    </Section>
  );
}
