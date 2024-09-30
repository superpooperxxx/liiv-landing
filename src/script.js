import { SplitText } from "./scripts/SplitText";

gsap.registerPlugin(ScrollTrigger);

// AFFORDABLE
const affordableLinePath = document.querySelector(".affordable-line > path");
const affordableLinePathLength = affordableLinePath.getTotalLength();

gsap.set(".affordable-line", {
  opacity: 0,
  strokeDasharray: affordableLinePathLength,
  strokeDashoffset: affordableLinePathLength,
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".affordable-line",
      start: "top 70%",
    },
  })
  .to(".affordable-line", {
    opacity: 1,
    duration: 0,
  })
  .to(".affordable-line", {
    strokeDashoffset: 0,
    duration: 1,
  });

// THE PROBLEM
const problemParagraph1chars = new SplitText("#the-problem__paragraph--1")
  .chars;
const problemParagraph2chars = new SplitText("#the-problem__paragraph--2")
  .chars;

gsap.set(problemParagraph1chars, { opacity: 0.05 });
gsap.set(problemParagraph2chars, { opacity: 0.05 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#the-problem__text",
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
      trigger: "#metrics",
      endTrigger: ".metrics__cards",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
  })
  .to(gsap.utils.toArray(".metrics__cards > li"), {
    opacity: 1,
    y: 0,
    stagger: 0.1,
  });

// PROBLEM SOLUTION LINE
const problemSolutionLinePath = document.querySelector(
  "#problem-solution-line-path"
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
      trigger: "#our-solution",
      endTrigger: ".our-solution__cards",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
  })
  .to(gsap.utils.toArray(".our-solution__cards > li"), {
    opacity: 1,
    y: 0,
    stagger: 0.1,
  });
