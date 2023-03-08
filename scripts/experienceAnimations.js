gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline({defaults: {duration: 0.75}});
tl.fromTo(".secondaryBackground", {opacity: 0, x:-50}, {opacity: 1, x:0});
tl.fromTo(".coursesSuchAs", {opacity: 0, y:20}, {opacity: 1, y:0});
tl.fromTo(".class1", {opacity: 0, y:20}, {opacity: 1, y:0});
tl.fromTo(".class2", {opacity: 0, y:20}, {opacity: 1, y:0});
tl.fromTo(".class3", {opacity: 0, y:20}, {opacity: 1, y:0});
tl.fromTo(".class4", {opacity: 0, y:20}, {opacity: 1, y:0});
tl.fromTo(".ledMeToHave", {opacity: 0, y:20}, {opacity: 1, y:0});
tl.fromTo(".skill1", {opacity: 0, y:20}, {opacity: 1, y:0}, ">");
tl.fromTo(".skill2", {opacity: 0, y:20}, {opacity: 1, y:0});
tl.fromTo(".skill3", {opacity: 0, y:20}, {opacity: 1, y:0});
tl.fromTo(".skill4", {opacity: 0, y:20}, {opacity: 1, y:0});
tl.fromTo(".skill5", {opacity: 0, y:20}, {opacity: 1, y:0});
tl.fromTo(".skill6", {opacity: 0, y:20}, {opacity: 1, y:0});

//background scroll animation
gsap.to(".secondaryBackground", {scrollTrigger: {
    trigger:".secondaryBackground",
    start: "100px 20px",
    end: "600px 10px",
    //markers: true,
    scrub: true,
    toggleActions: "restart pause reverse pause"}, 
    x: () => window.innerWidth * -1,
    duration: 10});