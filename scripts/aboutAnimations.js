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

// Second Section Photo Gallery Animations (repeating swing right when scrolling down)
let tl2_2 = gsap.timeline({scrollTrigger: {
    trigger: ".section2",
    toggleActions: "restart none none none"},
    defaults: {duration: 2}});

tl2_2.fromTo(".soundPhoto", {rotation: 90}, 
    {rotation: 0, transformOrigin: "top 50%", ease: "elastic.out(1, 0.3)"}, "<");
tl2_2.fromTo(".beachPhoto", {rotation: 90}, 
    {duration: 2.5, rotation: 0, transformOrigin: "top 50%", ease: "elastic.out(1, 0.3)"}, "<");
tl2_2.fromTo(".beachPhoto2", {rotation: 90}, 
    {duration: 2.3, rotation: 0, transformOrigin: "top 50%", ease: "elastic.out(1, 0.3)"}, "<");

// Second Section Photo Gallery Animations (repeating swing left when scrolling up)
let tl2_3 = gsap.timeline({scrollTrigger: {
    trigger: ".section2",
    toggleActions: "none none restart none"},
    defaults: {duration: 2}});

tl2_3.fromTo(".soundPhoto", {rotation: -90}, 
    {rotation: 0, transformOrigin: "top 50%", ease: "elastic.out(1, 0.3)"}, "<");
tl2_3.fromTo(".beachPhoto", {rotation: -90}, 
    {duration: 2.5, rotation: 0, transformOrigin: "top 50%", ease: "elastic.out(1, 0.3)"}, "<");
tl2_3.fromTo(".beachPhoto2", {rotation: -90}, 
    {duration: 2.3, rotation: 0, transformOrigin: "top 50%", ease: "elastic.out(1, 0.3)"}, "<");

// Second section "Where am I From" text fade in and arrow animations
let tl3 = gsap.timeline({scrollTrigger: {
    trigger: ".section2",
    toggleActions: "play none none none"},
    defaults: {opacity: 0}});

tl3.fromTo(".whereImFromTitle", {y: -20}, {duration: 1, opacity: 1, y: 0});
tl3.fromTo(".outerBanks", {x: 20}, {duration: 1, opacity: 1, x:0}, "-=0.5");
tl3.fromTo(".biotext", {y: 20}, {duration: 1, opacity: 1, y: 0}, "-=0.5");
tl3.fromTo(".secondScrollArrow1", {}, {duration: 2, opacity: 1});
tl3.fromTo(".secondScrollArrow2", {}, {duration: 2, opacity: 1, onComplete: move(".secondScrollArrow1", ".secondScrollArrow2")}, "<");

// Hobbies text and Arrow Animations
let tl4 = gsap.timeline({scrollTrigger: {
    trigger: ".section3",
    start: "top center",
    toggleActions: "play none none none"},
    defaults: {opacity: 0, duration: 0.35}});

tl4.fromTo(".favoriteHobbies", {y: 30}, {duration: 1, opacity: 1, y: 0});
tl4.fromTo(".hobby1", {rotation: -45}, {opacity: 1, rotation: 0, transformOrigin: "left bottom", ease: "power4.out"});
tl4.fromTo(".hobby2", {rotation: -45}, {opacity: 1, rotation: 0, transformOrigin: "left bottom", ease: "power4.out"}, "-=.15");
tl4.fromTo(".hobby3", {rotation: -45}, {opacity: 1, rotation: 0, transformOrigin: "left bottom", ease: "power4.out"}, "-=.15");
tl4.fromTo(".hobby4", {rotation: -45}, {opacity: 1, rotation: 0, transformOrigin: "left bottom", ease: "power4.out"}, "-=.15");
tl4.fromTo(".hobby5", {rotation: -45}, {opacity: 1, rotation: 0, transformOrigin: "left bottom", ease: "power4.out"}, "-=.15");
tl4.fromTo(".hobby6", {rotation: -45}, {opacity: 1, rotation: 0, transformOrigin: "left bottom", ease: "power4.out"}, "-=.15");
tl4.fromTo(".hobby7", {rotation: -45}, {opacity: 1, rotation: 0, transformOrigin: "left bottom", ease: "power4.out"}, "-=.15");
tl4.fromTo(".likeMovies", {y: 20}, {duration: 1, opacity: 1, y: 0}, "+=2");
tl4.fromTo(".thirdScrollArrow1", {}, {duration: 2, opacity: 1});
tl4.fromTo(".thirdScrollArrow2", {}, {duration: 2, opacity: 1, onComplete: move(".thirdScrollArrow1", ".thirdScrollArrow2")}, "<");

/* Movies/TV Shows text/image animations */
gsap.fromTo(".selectionsContainer", {opacity: 0, y: 20}, {scrollTrigger: {
    trigger:".section4",
    start: "top center",
    toggleActions: "play none none none"}, 
    duration: 1.5,
    y: 0,
    opacity: 1});

/* handles arrow movement animation; called upon 2nd arrow fade in completion*/
function move(arrow1, arrow2) {
gsap.to(arrow1, {duration: 0.5, y:10, yoyo: true, repeat: -1, repeatDelay: 0.5});
gsap.to(arrow2, {duration: 0.5, y:10, yoyo: true, repeat: -1, repeatDelay: 0.5}, "-=0.25");  
}



/*ELASTIC EASES: ARE THEY "elastic.out(1, 0.3)" OR Elastic.easeOut.config(1, 0.3)*/