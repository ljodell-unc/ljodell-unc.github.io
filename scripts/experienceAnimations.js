gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline({defaults: {duration: 0.75, opacity: 0, y: 20}});
tl.fromTo(".coursesSuchAs", {}, {opacity: 1, y:0});
tl.fromTo(".class1", {}, {opacity: 1, y:0});
tl.fromTo(".class2", {}, {opacity: 1, y:0}, "-=0.3");
tl.fromTo(".class3", {}, {opacity: 1, y:0}, "-=0.3");
tl.fromTo(".class4", {}, {opacity: 1, y:0}, "-=0.3");
tl.fromTo(".ledMeToHave", {}, {opacity: 1, y:0});
tl.fromTo(".skill1", {}, {opacity: 1, y:0});
tl.fromTo(".skill2", {}, {opacity: 1, y:0}, "-=0.3");
tl.fromTo(".skill3", {}, {opacity: 1, y:0}, "-=0.3");
tl.fromTo(".skill4", {}, {opacity: 1, y:0}, "-=0.3");
tl.fromTo(".skill5", {}, {opacity: 1, y:0}, "-=0.3");
tl.fromTo(".skill6", {}, {opacity: 1, y:0}, "-=0.3");
tl.fromTo(".skill7", {}, {opacity: 1, y:0}, "-=0.3");
tl.fromTo(".scrollArrow1", {y: 0, duration: 3}, {y:0, opacity: 1});
tl.fromTo(".scrollArrow2", {y: 0, duration: 3}, {y:0, opacity: 1, onComplete: move(".scrollArrow1", ".scrollArrow2")}, "<");


ScrollTrigger.defaults({scroller: ".content"});

//second section background/text change
let tl2 = gsap.timeline({scrollTrigger: {
    trigger: ".section2",
    toggleActions: "restart pause restart pause"}});

tl2.fromTo(".pastProjectsTitle", {opacity: 0}, {duration: 2, opacity: 1});
tl2.fromTo(".pastProjects", {}, {duration: 1.5, backgroundColor: "#866258"}, "<");

let tl2_2 = gsap.timeline({scrollTrigger: {
    trigger: ".section2",
    toggleActions: "play none none none"},
    defaults: {opacity: 0}});

tl2_2.fromTo(".website", {y: -20}, {delay: 0.8, duration: 1, y:0, opacity: 1});
tl2_2.fromTo(".lmm", {y: -20}, {duration: 1, y:0, opacity: 1}, "-=0.5");
tl2_2.fromTo(".dor", {y: -20}, {duration: 1, y:0, opacity: 1}, "-=0.5");
tl2_2.fromTo(".secondScrollArrow1", {y: 0, duration: 3}, {y:0, opacity: 1});
tl2_2.fromTo(".secondScrollArrow2", {y: 0, duration: 3}, {y:0, opacity: 1, onComplete: move(".secondScrollArrow1", ".secondScrollArrow2")}, "<");

//third section background/text change
gsap.to(".work", {scrollTrigger: {
    trigger: ".section3",
    toggleActions: "restart pause restart pause"}, duration: 1.5, backgroundColor: "#446670"});

let tl3_2 = gsap.timeline({scrollTrigger: {
    trigger: ".section3",
    toggleActions: "play none none none"}});

tl3_2.fromTo(".pastWork", {opacity: 0, y: 20}, {duration: 1, opacity: 1, y: 0});
tl3_2.fromTo(".kdhSeal", {opacity: 0, rotation: -45, x: -5}, { delay: 1, duration: 0.8, opacity: 1, rotation: 0, x:0}, "-=0.8");
tl3_2.fromTo(".business", {opacity: 0, x: 20}, {duration: 0.8, x: 0, opacity: 1}, "<");
tl3_2.fromTo(".jobTitle", {opacity: 0, x: 20}, {duration: 0.8, x: 0, opacity: 1}, "<");
tl3_2.fromTo(".desc1", {opacity: 0, y: 20}, {duration: 0.8, y: 0, opacity: 1}, "-=0.4");
tl3_2.fromTo(".desc2", {opacity: 0, y: 20}, {duration: 0.8, y: 0, opacity: 1}, "-=0.4");
tl3_2.fromTo(".desc3", {opacity: 0, y: 20}, {duration: 0.8, y: 0, opacity: 1}, "-=0.4");

/* handles arrow movement animation; called upon 2nd arrow fade in completion*/
function move(arrow1, arrow2) {
    gsap.to(arrow1, {duration: 0.5, y:10, yoyo: true, repeat: -1, repeatDelay: 0.5});
    gsap.to(arrow2, {duration: 0.5, y:10, yoyo: true, repeat: -1, repeatDelay: 0.5}, "-=0.25");  
    }