import ScrollToPlugin from 'gsap/ScrollToPlugin';

const plugins = [ ScrollToPlugin ];

(function(window, document, cutme, undefined) {

    const Helpers = function() {
        return {
            isInView: isInView,
        	scrollTo: scrollTo
        };
    };

    const isInView = function(el) {
        let bottomOfWindow = (window.pageYOffset || window.scrollY) + window.innerHeight;
        
        if ( el.getBoundingClientRect().top + (window.pageYOffset || window.scrollY) < bottomOfWindow ) {
            return true;
        }
    };

    const scrollTo = function (target, speed, offset) {    
		TweenLite.to(window, speed, {
			scrollTo: {
				y: target - 80,
				autoKill: false
			},
			ease: Power1.easeOut
		});
	};

    cutme.Helpers = new Helpers();

    

}(window, document, window.cutme = window.cutme  || {}));
