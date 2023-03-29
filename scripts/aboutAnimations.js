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

/* handles arrow movement animation; called upon 2nd arrow fade in completion*/
function move(arrow1, arrow2) {
    gsap.to(arrow1, {duration: 0.5, y:10, yoyo: true, repeat: -1, repeatDelay: 0.5});
    gsap.to(arrow2, {duration: 0.5, y:10, yoyo: true, repeat: -1, repeatDelay: 0.5}, "-=0.25");  
}