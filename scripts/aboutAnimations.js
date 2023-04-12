gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline({defaults: {duration: 0.65, opacity: 0}});
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

// Second Section Photo Gallery Animations (fade in and swing, first time only)
let tl2 = gsap.timeline({scrollTrigger: {
    trigger: ".section2",
    toggleActions: "play none none none"},
    defaults: {duration: 2}});

tl2.fromTo(".photoGallery", {y: 20, opacity: 0}, {opacity: 1, y: 0, repeat: 0});
tl2.fromTo(".soundPhoto", {rotation: 90}, 
    {rotation: 0, transformOrigin: "top 50%", ease: Elastic.easeOut.config(1, 0.3)}, "<");
tl2.fromTo(".beachPhoto", {rotation: 90}, 
    {duration: 2.5, rotation: 0, transformOrigin: "top 50%", ease: Elastic.easeOut.config(1, 0.3)}, "<");
tl2.fromTo(".beachPhoto2", {rotation: 90}, 
    {duration: 2.3, rotation: 0, transformOrigin: "top 50%", ease: Elastic.easeOut.config(1, 0.3)}, "<");

// Second Section Photo Gallery Animations (repeating swing)
let tl2_2 = gsap.timeline({scrollTrigger: {
    trigger: ".section2",
    toggleActions: "restart pause restart pause"},
    defaults: {duration: 2}});

tl2_2.fromTo(".soundPhoto", {rotation: 90}, 
    {rotation: 0, transformOrigin: "top 50%", ease: Elastic.easeOut.config(1, 0.3)}, "<");
tl2_2.fromTo(".beachPhoto", {rotation: 90}, 
    {duration: 2.5, rotation: 0, transformOrigin: "top 50%", ease: Elastic.easeOut.config(1, 0.3)}, "<");
tl2_2.fromTo(".beachPhoto2", {rotation: 90}, 
    {duration: 2.3, rotation: 0, transformOrigin: "top 50%", ease: Elastic.easeOut.config(1, 0.3)}, "<");

// "Where am I From" text fade in and arrow animations
let tl3 = gsap.timeline({scrollTrigger: {
    trigger: ".section2",
    toggleActions: "play none none none"},
    defaults: {opacity: 0}});

tl3.fromTo(".whereImFromTitle", {y: -20}, {duration: 1, opacity: 1, y: 0});
tl3.fromTo(".outerBanks", {x: 20}, {duration: 1, opacity: 1, x:0}, "-=0.5");
tl3.fromTo(".biotext", {y: 20}, {duration: 1, opacity: 1, y: 0}, "-=0.5");
tl3.fromTo(".secondScrollArrow1", {}, {duration: 2, opacity: 1});
tl3.fromTo(".secondScrollArrow2", {}, {duration: 2, opacity: 1, onComplete: move(".secondScrollArrow1", ".secondScrollArrow2")}, "<");

// Hobbies Arrow Animations
let tl4 = gsap.timeline({scrollTrigger: {
    trigger: ".section3",
    toggleActions: "play none none none"},
    defaults: {opacity: 0}});

tl4.fromTo(".thirdScrollArrow1", {}, {duration: 2, opacity: 1});
tl4.fromTo(".thirdScrollArrow2", {}, {duration: 2, opacity: 1, onComplete: move(".thirdScrollArrow1", ".thirdScrollArrow2")}, "<");

/* handles arrow movement animation; called upon 2nd arrow fade in completion*/
function move(arrow1, arrow2) {
    gsap.to(arrow1, {duration: 0.5, y:10, yoyo: true, repeat: -1, repeatDelay: 0.5});
    gsap.to(arrow2, {duration: 0.5, y:10, yoyo: true, repeat: -1, repeatDelay: 0.5}, "-=0.25");  
}