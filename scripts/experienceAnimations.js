gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline({defaults: {duration: 0.75}});
tl.fromTo(".coursesSuchAs", {opacity: 0, y:20}, {opacity: 1, y:0});
tl.fromTo(".class1", {opacity: 0, y:20}, {opacity: 1, y:0});
tl.fromTo(".class2", {opacity: 0, y:20}, {opacity: 1, y:0}, "-=0.3");
tl.fromTo(".class3", {opacity: 0, y:20}, {opacity: 1, y:0}, "-=0.3");
tl.fromTo(".class4", {opacity: 0, y:20}, {opacity: 1, y:0}, "-=0.3");
tl.fromTo(".ledMeToHave", {opacity: 0, y:20}, {opacity: 1, y:0});
tl.fromTo(".skill1", {opacity: 0, y:20}, {opacity: 1, y:0});
tl.fromTo(".skill2", {opacity: 0, y:20}, {opacity: 1, y:0}, "-=0.3");
tl.fromTo(".skill3", {opacity: 0, y:20}, {opacity: 1, y:0}, "-=0.3");
tl.fromTo(".skill4", {opacity: 0, y:20}, {opacity: 1, y:0}, "-=0.3");
tl.fromTo(".skill5", {opacity: 0, y:20}, {opacity: 1, y:0}, "-=0.3");
tl.fromTo(".skill6", {opacity: 0, y:20}, {opacity: 1, y:0}, "-=0.3");
tl.fromTo(".skill7", {opacity: 0, y:20}, {opacity: 1, y:0}, "-=0.3");

ScrollTrigger.defaults({scroller: ".content"});

//second section background/text change
gsap.to(".pastProjectsTitle", {scrollTrigger: {
    trigger: ".pastProjects",
    toggleActions: "restart pause restart pause"},
    duration: 2,
    opacity: 1});

gsap.to(".pastProjects", {scrollTrigger: {
    trigger:".pastProjects",
    toggleActions: "restart pause restart pause"}, 
    duration: 1.5,
    backgroundColor: "#866258"});