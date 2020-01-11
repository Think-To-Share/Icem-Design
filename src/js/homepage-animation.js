import { TimelineLite, TweenLite, Bounce, Elastic, gsap, Back, Power2 } from "gsap";
gsap.install(window);


// Scrolling Animation Starts Here
console.clear();
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7
}

$(document).ready(function(){

	const observer = new IntersectionObserver(animHandler, options);
	let targets = document.querySelectorAll('.homepage-section');
	let ar = [].slice.call(targets);
	let animations = [];

	let count = 0;

	for (let target of ar) {
	  animations[count] = new TimelineLite({paused:true});  
	  observer.observe(target);
	  count++;
	}

	let animationDone = [0, 0, 0, 0, 0, 0];

	// Slider Section
	animations[0].fromTo('.slider-section .slide .slider-heading-1', {x: "-100%"}, {duration: 1.2, x: 0, ease: Bounce.easeOut});
	animations[0].to('.slider-section .slide .slider-heading-1', 0.5, {rotate: 360})
	animations[0].fromTo('.slider-section .slide .slider-heading-2', 0.8, {scale: 0}, {scale: 1, ease: Elastic.easeOut.config(1, 0.3)});
	animations[0].fromTo('.slider-section .slide .slider-button', 0.2, {scale: 0}, {scaleX: 2, scaleY: 1});
	animations[0].to('.slider-section .slide .slider-button', 0.3, {scaleX: 1});

	// About Section
	animations[1].fromTo('.about-section .about-text-area .area-heading', 0.8, {scale: 0, alpha: 0.3}, {scale: 1, alpha: 1});
	animations[1].from('.about-section .about-text-area .area-text', 0.6, {alpha: 0, ease: Back.easeOut})
	animations[1].from('.about-section .about-text-area .about-section-button', 0.8, {scale: 0, ease: Bounce.easeOut});

	// Products Section
	animations[2].from('.product-carousel-section .section-heading .head', 1.2, {alpha: 0, y: "30px", ease: Power2.easeOut})
	animations[2].from('.product-carousel-section .owl-carousel', 1, {scaleX: 0, ease: Bounce.easeOut})

	// Best Quality Section
	animations[3].staggerFrom('.quality-product-section .section-content ul li', 1, {scale: 0, ease: 'elastic.out(1, 0.3)'})

	//
	animations[4].from('.client-carousel-section .section-heading .head', 1.2, {alpha: 0, y: "30px", ease: Power2.easeOut})
	animations[4].from('.client-carousel-section .owl-carousel', 1, {scaleX: 0, ease: Bounce.easeOut})

	// 
	animations[5].from('.achivement-section .section-heading .head', 1.2, {alpha: 0, y: "30px", ease: Power2.easeOut})
	animations[5].from('.achivement-section .owl-carousel', 1.5, {alpha: 0, ease: Power2.easeOut})

	function animHandler(targets, observer) {
		for (let entry of targets) {
			let i = ar.indexOf(entry.target);
			
			if (entry.intersectionRatio > 0.7) {
				if(animationDone[i] == 0) {
					animationDone[i] = 1;
					animations[i].restart();
				}
			}

			// if(entry.isIntersecting) {
				
			// }else {
			//     // animations[i].reverse();
			//     return;
			// }
		}
	}
});
