import { SplitText } from "./scripts/SplitText";

gsap.registerPlugin(ScrollTrigger);

// LENIS
const lenis = new Lenis({
  lerp: 0.05,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// HERO
const heroTitleChars = gsap.utils
  .toArray(".hero-title__text")
  .map((word) => new SplitText(word).chars);

gsap.set(heroTitleChars, {
  yPercent: 100,
});

gsap.set(".hero__tags", {
  opacity: 0,
  y: 10,
});

gsap.set(".hero__dashboard", {
  opacity: 0,
  y: 40,
});

gsap
  .timeline({
    // onStart: () => {
    //   lenis.stop();
    // },
    // onComplete: () => {
    //   lenis.start();
    // },
  })
  .to(heroTitleChars, {
    yPercent: 0,
    stagger: 0.05,
    duration: 1,
    ease: "back.out",
  })
  .to(".hero__tags", {
    opacity: 1,
    y: 0,
    ease: "back.out",
    duration: 1,
  })
  .to(
    ".hero__dashboard",
    {
      opacity: 1,
      y: 0,
      ease: "back.out",
      duration: 1,
    },
    "<"
  );

// PROBLEM METRICS
gsap.set(".problem-metrics", {
  backgroundColor: "#fffdf9",
});

gsap.to(".problem-metrics", {
  scrollTrigger: {
    trigger: ".problem-metrics",
    end: "top 40%",
    scrub: true,
  },
  backgroundColor: "#EBF2EF",
});

// THE PROBLEM
const problemParagraph1chars = new SplitText(".the-problem__paragraph--1")
  .chars;
const problemParagraph2chars = new SplitText(".the-problem__paragraph--2")
  .chars;

gsap.set(problemParagraph1chars, { opacity: 0.05 });
gsap.set(problemParagraph2chars, { opacity: 0.05 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".the-problem__text",
      start: "top 50%",
      end: "bottom 50%",
      scrub: 0.5,
    },
  })
  .to(problemParagraph1chars, {
    opacity: 1,
    stagger: 0.01,
  })
  .to(problemParagraph2chars, {
    opacity: 1,
    stagger: 0.01,
  });

// METRICS
gsap.set(gsap.utils.toArray(".metrics__cards > li"), {
  opacity: 0,
  y: 60,
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".metrics",
      endTrigger: ".metrics__cards",
      start: "top 70%",
      end: "bottom 70%",
      scrub: true,
    },
  })
  .to(gsap.utils.toArray(".metrics__cards > li"), {
    opacity: 1,
    y: 0,
    stagger: 0.1,
    ease: "back.out(2)",
  });

// PROBLEM SOLUTION LINE
const problemSolutionLinePath = document.querySelector(
  ".problem-solution-line-path"
);
const problemSolutionLinePathLength = problemSolutionLinePath.getTotalLength();

gsap.set(problemSolutionLinePath, {
  opacity: 0,
  strokeDasharray: problemSolutionLinePathLength,
  strokeDashoffset: problemSolutionLinePathLength,
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: problemSolutionLinePath,
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
  })
  .to(problemSolutionLinePath, {
    opacity: 1,
    duration: 0,
  })
  .to(problemSolutionLinePath, {
    strokeDashoffset: 0,
  });

// OUR SOLUTION
gsap.set(gsap.utils.toArray(".our-solution__cards > li"), {
  opacity: 0,
  y: 60,
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".our-solution",
      endTrigger: ".our-solution__cards",
      start: "top 70%",
      end: "bottom 70%",
      scrub: true,
    },
  })
  .to(gsap.utils.toArray(".our-solution__cards > li"), {
    opacity: 1,
    y: 0,
    stagger: 0.1,
    ease: "back.out(2)",
  });

// CONTACT
gsap.to(".contact__text--highlighted", {
  scrollTrigger: {
    trigger: ".contact__text--highlighted",
    start: "bottom 90%",
  },
  color: "#379392",
  duration: 1,
});
