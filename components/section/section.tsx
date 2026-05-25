import Background from "../background/background";
import FadeIn from "../framer/fade-in";
import LazyLoad from "../lazy-load/lazy-load";

interface SectionProps extends React.ComponentPropsWithoutRef<"section"> {
  noBackground?: boolean;
}

export default function Section({
  id,
  children,
  noBackground = false,
  className,
  ...props
}: SectionProps) {
  return (
    <LazyLoad>
      <section id={id} className={className} {...props}>
        {!noBackground && <Background defaultColors />}
        <FadeIn>{children}</FadeIn>
      </section>
    </LazyLoad>
  );
}
