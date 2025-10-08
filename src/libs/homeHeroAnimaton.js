import { gsap } from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export const homeHeroAnimation = (container) => {
  const ctx = gsap.context(() => {
    // Target elements inside the container
    const mark = container.querySelector(".title-left");
    const eting = container.querySelector(".title-right");
    const heroText = container.querySelector(".hero__text-animation");

    const split_creatives = new SplitText(mark, { type: "chars" });
    const split_solutions = new SplitText(eting, { type: "chars" });
    const split_text_animation = new SplitText(heroText, { type: "words" });

    const tl = gsap.timeline();

    tl.from(split_creatives.chars, { duration: 1.5, x: 100, autoAlpha: 0, stagger: 0.1 })
      .from(split_solutions.chars, { duration: 1, x: 100, autoAlpha: 0, stagger: 0.05 }, "-=1")
      .from(split_text_animation.words, { duration: 1, x: 50, autoAlpha: 0, stagger: 0.03 }, "-=0.5");
  }, container);

  return () => ctx.revert(); // cleanup when component unmounts
};
