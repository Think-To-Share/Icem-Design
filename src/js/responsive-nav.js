import gsap from "gsap";

$(document).ready(function(){
    if($('.responsive-nav-btn').length > 0) {
        $('.responsive-nav-btn').click(function() {
            gsap.to('.responsive-menu', {x: 0, duration: 0.5, ease: "expo.out"});
        })

        $('.responsive-close-btn').click(function() {
            gsap.to('.responsive-menu', {x: "-100%", duration: 0.5, ease: "expo.out"})
        })
    }
});

