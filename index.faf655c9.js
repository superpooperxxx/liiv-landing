class t{chars=[];words=[];constructor(t){let e="object"==typeof t?t:document.querySelector(t),r=e.innerText.split(/(\s+)/);e&&(e.innerText="",r.forEach(t=>{let r=document.createElement("span");t.split("").forEach(t=>{let e=document.createElement("span");e.textContent=t,t.trim()&&(r.style.display="inline-block",e.style.display="inline-block"),this.chars.push(e),r.appendChild(e)}),this.words.push(r),e.appendChild(r)}))}}gsap.registerPlugin(ScrollTrigger);const e=new Lenis({lerp:.05});requestAnimationFrame(function t(r){e.raf(r),requestAnimationFrame(t)});const r=gsap.utils.toArray(".hero-title__text").map(e=>new t(e).chars);gsap.set(r,{yPercent:100}),gsap.set(".hero__tags",{opacity:0,y:10}),gsap.set(".hero__dashboard",{opacity:0,y:40}),gsap.timeline({}).to(r,{yPercent:0,stagger:.05,duration:1,ease:"back.out"}).to(".hero__tags",{opacity:1,y:0,ease:"back.out",duration:1}).to(".hero__dashboard",{opacity:1,y:0,ease:"back.out",duration:1},"<"),gsap.set(".problem-metrics",{backgroundColor:"#fffdf9"}),gsap.to(".problem-metrics",{scrollTrigger:{trigger:".problem-metrics",end:"top 40%",scrub:!0},backgroundColor:"#EBF2EF"});const o=new t(".the-problem__paragraph--1").chars,s=new t(".the-problem__paragraph--2").chars;gsap.set(o,{opacity:.05}),gsap.set(s,{opacity:.05}),gsap.timeline({scrollTrigger:{trigger:".the-problem__text",start:"top 50%",end:"bottom 50%",scrub:.5}}).to(o,{opacity:1,stagger:.01}).to(s,{opacity:1,stagger:.01}),gsap.set(gsap.utils.toArray(".metrics__cards > li"),{opacity:0,y:60}),gsap.timeline({scrollTrigger:{trigger:".metrics",endTrigger:".metrics__cards",start:"top 70%",end:"bottom 70%",scrub:!0}}).to(gsap.utils.toArray(".metrics__cards > li"),{opacity:1,y:0,stagger:.1,ease:"back.out(2)"});const a=document.querySelector(".problem-solution-line-path"),i=a.getTotalLength();gsap.set(a,{opacity:0,strokeDasharray:i,strokeDashoffset:i}),gsap.timeline({scrollTrigger:{trigger:a,start:"top center",end:"bottom center",scrub:!0}}).to(a,{opacity:1,duration:0}).to(a,{strokeDashoffset:0}),gsap.set(gsap.utils.toArray(".our-solution__cards > li"),{opacity:0,y:60}),gsap.timeline({scrollTrigger:{trigger:".our-solution",endTrigger:".our-solution__cards",start:"top 70%",end:"bottom 70%",scrub:!0}}).to(gsap.utils.toArray(".our-solution__cards > li"),{opacity:1,y:0,stagger:.1,ease:"back.out(2)"}),gsap.to(".contact__text--highlighted",{scrollTrigger:{trigger:".contact__text--highlighted",start:"bottom 90%"},color:"#379392",duration:1});
//# sourceMappingURL=index.faf655c9.js.map
