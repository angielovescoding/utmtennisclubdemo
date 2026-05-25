import Marquee2 from "@/components/marqee/marqee";
import Section from "@/components/section/section";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const menuItems = [1, 2, 3, 4, 5, 6].map((item) => (
  <div
    key={item}
    className="group/menu-display overflow-hidden relative w-50 sm:w-75 h-50 sm:h-75 rounded-xl mx-4 transform-gpu"
  >
    <Image
      src={`./assets/marquee/${"placeholder"}.jpg`}
      alt="placeholder"
      fill
      sizes="(max-width: 300px)"
      className={twMerge(
        "object-cover transform-gpu will-change-transform",
        "transition-transform duration-(--duration-animate) ease-out",
        "group-hover/menu-display:scale-140 group-active/menu-display:scale-140",
      )}
    />

    <div
      className="
          transition-opacity duration-(--duration-animate)
          opacity-100 group-hover/menu-display:opacity-0 group-active/menu-display:opacity-0"
    >
      <div
        className="absolute inset-0
                bg-linear-to-t from-0% to-20%
                dark:from-(--brand-black) dark:to-transparent
                from-(--brand-white) to-transparent
                transition-colors duration-(--duration-animate)"
      />
    </div>

    <div
      className="
          transition-opacity duration-(--duration-animate)
          opacity-100 group-hover/menu-display:opacity-0 group-active/menu-display:opacity-0"
    >
      <div
        className="absolute inset-0
                bg-linear-to-b from-0% to-20%
                dark:from-(--brand-black) dark:to-transparent
                from-(--brand-white) to-transparent
                transition-colors duration-(--duration-animate)"
      />
    </div>
  </div>
));

export default function Showcase() {
  return (
    <Section noBackground>
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-6">
          Meet the Members
        </h2>

        <Marquee2
          autoFill
          pauseOnHover
          className="w-full transition-colors duration-(--duration-animate)"
        >
          {menuItems}
        </Marquee2>
      </div>
    </Section>
  );
}
