gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline({defaults: {duration: 0.65, opacity: 0}});
let arrowSequence = gsap.timeline();
tl.fromTo(".whoAmI", {y: 30}, {duration: 1, opacity: 1, y:0});
tl.fromTo(".headshot", {x: 30}, {duration: 1, opacity: 1, x:0}, "<");
tl.fromTo("#swirl", {x:-30}, {duration: 1, opacity: 1, x:0}, "<");
tl.fromTo(".trait1", {y: 20}, {opacity: 1, y:0});
tl.fromTo(".trait2", {y: 20}, {opacity: 1, y:0});
tl.fromTo(".trait3", {y: 20}, {opacity: 1, y:0});
tl.fromTo(".trait4", {y: 20}, {opacity: 1, y:0});
tl.fromTo(".scrollArrow1", {}, {duration: 3, opacity: 1});
tl.fromTo(".scrollArrow2", {}, {duration: 3, opacity: 1, onComplete: move(".scrollArrow1", ".scrollArrow2")}, "<");

ScrollTrigger.defaults({scroller:".content"});

// Photo Gallery Animations (fade in and swing)
gsap.set(".photoGallery", {y: 20});
gsap.set(".soundPhoto", {y: 20, rotation: 90});
gsap.set(".beachPhoto", {y: 20, rotation: 90});
gsap.set(".beachPhoto2", {y: 20, rotation: 90});

gsap.to(".photoGallery", {scrollTrigger: {
    trigger: ".section2",
    toggleActions: "restart pause restart pause"},
    immediateRender: false,
    duration: 1.5,
    opacity: 1,
    y: 0});

gsap.to(".soundPhoto", {scrollTrigger: {
    trigger: ".section2",
    toggleActions: "restart pause restart pause"},
    immediateRender: false,
    duration: 2,
    transformOrigin: "top 50%",
    rotation: 0,
    ease: Elastic.easeOut.config(1, 0.3)});

gsap.to(".beachPhoto", {scrollTrigger: {
    trigger: ".section2",
    toggleActions: "restart pause restart pause"},
    immediateRender: false,
    duration: 2.5,
    transformOrigin: "top 50%",
    rotation: 0,
    ease: Elastic.easeOut.config(1, 0.3)});

gsap.to(".beachPhoto2", {scrollTrigger: {
    trigger: ".section2",
    toggleActions: "restart pause restart pause"},
    immediateRender: false,
    duration: 2.3,
    transformOrigin: "top 50%",
    rotation: 0,
    ease: Elastic.easeOut.config(1, 0.3)});


/* handles arrow movement animation; called upon 2nd arrow fade in completion*/
function move(arrow1, arrow2) {
    gsap.to(arrow1, {duration: 0.5, y:10, yoyo: true, repeat: -1, repeatDelay: 0.5});
    gsap.to(arrow2, {duration: 0.5, y:10, yoyo: true, repeat: -1, repeatDelay: 0.5}, "-=0.25");  
}