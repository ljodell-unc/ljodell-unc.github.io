let tl = gsap.timeline({defaults: {opacity: 0, y: 20, duration: 1.2}});
tl.fromTo(".biopic", {y: 0, x: 20}, {y: 0, opacity: 1, x: 0});
tl.fromTo(".greeting", {}, {opacity: 1, y: 0}, "-=0.8");
tl.fromTo(".name", {}, {opacity: 1, y: 0}, "-=0.9");
tl.fromTo(".closing", {}, {opacity: 1, y: 0}, "+=0.8");