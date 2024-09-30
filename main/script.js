class $238488ee7814c080$export$bd0fa428528371b2 {
    chars = [];
    constructor(selector){
        const element = document.querySelector(selector);
        const initialText = element.innerText.split("");
        element.innerText = "";
        if (element) initialText.forEach((char)=>{
            const span = document.createElement("span");
            span.textContent = char;
            this.chars.push(span);
            element.appendChild(span);
        });
    }
}


gsap.registerPlugin(ScrollTrigger);
// AFFORDABLE
const $0102d920810385a3$var$affordableLinePath = document.querySelector("#affordable-line > path");
const $0102d920810385a3$var$affordableLinePathLength = $0102d920810385a3$var$affordableLinePath.getTotalLength();
gsap.set("#affordable-line", {
    opacity: 0,
    strokeDasharray: $0102d920810385a3$var$affordableLinePathLength,
    strokeDashoffset: $0102d920810385a3$var$affordableLinePathLength
});
gsap.timeline({
    scrollTrigger: {
        trigger: "#affordable-line",
        start: "top 70%"
    }
}).to("#affordable-line", {
    opacity: 1,
    duration: 0
}).to("#affordable-line", {
    strokeDashoffset: 0,
    duration: 1
});
// THE PROBLEM
const $0102d920810385a3$var$problemParagraph1chars = new (0, $238488ee7814c080$export$bd0fa428528371b2)("#the-problem__paragraph--1").chars;
const $0102d920810385a3$var$problemParagraph2chars = new (0, $238488ee7814c080$export$bd0fa428528371b2)("#the-problem__paragraph--2").chars;
gsap.set($0102d920810385a3$var$problemParagraph1chars, {
    opacity: 0.05
});
gsap.set($0102d920810385a3$var$problemParagraph2chars, {
    opacity: 0.05
});
gsap.timeline({
    scrollTrigger: {
        trigger: "#the-problem__text",
        start: "top 50%",
        end: "bottom 50%",
        scrub: 0.5
    }
}).to($0102d920810385a3$var$problemParagraph1chars, {
    opacity: 1,
    stagger: 0.01
}).to($0102d920810385a3$var$problemParagraph2chars, {
    opacity: 1,
    stagger: 0.01
});
// METRICS
gsap.set(gsap.utils.toArray(".metrics__cards > li"), {
    opacity: 0,
    y: 60
});
gsap.timeline({
    scrollTrigger: {
        trigger: "#metrics",
        endTrigger: ".metrics__cards",
        start: "top center",
        end: "bottom center",
        scrub: true
    }
}).to(gsap.utils.toArray(".metrics__cards > li"), {
    opacity: 1,
    y: 0,
    stagger: 0.1
});
// PROBLEM SOLUTION LINE
const $0102d920810385a3$var$problemSolutionLinePath = document.querySelector("#problem-solution-line-path");
const $0102d920810385a3$var$problemSolutionLinePathLength = $0102d920810385a3$var$problemSolutionLinePath.getTotalLength();
gsap.set($0102d920810385a3$var$problemSolutionLinePath, {
    opacity: 0,
    strokeDasharray: $0102d920810385a3$var$problemSolutionLinePathLength,
    strokeDashoffset: $0102d920810385a3$var$problemSolutionLinePathLength
});
gsap.timeline({
    scrollTrigger: {
        trigger: $0102d920810385a3$var$problemSolutionLinePath,
        start: "top center",
        end: "bottom center",
        scrub: true
    }
}).to($0102d920810385a3$var$problemSolutionLinePath, {
    opacity: 1,
    duration: 0
}).to($0102d920810385a3$var$problemSolutionLinePath, {
    strokeDashoffset: 0
});
// OUR SOLUTION
gsap.set(gsap.utils.toArray(".our-solution__cards > li"), {
    opacity: 0,
    y: 60
});
gsap.timeline({
    scrollTrigger: {
        trigger: "#our-solution",
        endTrigger: ".our-solution__cards",
        start: "top center",
        end: "bottom center",
        scrub: true
    }
}).to(gsap.utils.toArray(".our-solution__cards > li"), {
    opacity: 1,
    y: 0,
    stagger: 0.1
});


//# sourceMappingURL=script.js.map
