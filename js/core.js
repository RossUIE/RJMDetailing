const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.c-header_links');
	const navLinks = document.querySelectorAll('.c-header li');
	const backdrop = document.querySelector('.c-backdrop');

	burger.addEventListener('click', ()=> {
		nav.classList.toggle('nav-active');
		backdrop.classList.toggle('backdrop-active')
		navLinks.forEach((link, index)=> {
			if(link.style.animation) {
				link.style.animation = ''
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0}s`
			}   
		})

		burger.classList.toggle('toggle')
	});

	backdrop.addEventListener('click', ()=> {
		backdrop.classList.remove('backdrop-active');
		nav.classList.remove('nav-active');
		burger.classList.remove('toggle');
		navLinks.forEach((link, index)=> {
			if(link.style.animation) {
				link.style.animation = ''
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0}s`
			}   
		})
	})
	for (const link of navLinks) {
		link.addEventListener('click', function(event) {
			nav.classList.remove('nav-active')
			backdrop.classList.remove('backdrop-active');
			navLinks.forEach((link, index)=> {
				if (screen.width <= 659) {
					if(link.style.animation) {
						link.style.animation = ''
					} else {
						link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0}s`
					}  
				}
				 
			})
			burger.classList.toggle('toggle')
		  })
	}
};

const navScroll = () => {
	var navbar = document.querySelector('nav')
	var nodes  = document.querySelector('.burger').getElementsByTagName("div");
	const btn = document.querySelector('.back-to-top');
	

		// pageYOffset or scrollY
		if (window.pageYOffset > 0) {
			navbar.classList.add('scrolled');
			// burger.style.fill = "#707070"
			for(var i=0; i<nodes.length; i++) {
				nodes[i].style.background = "#707070";
			}
			
		} else {
			navbar.classList.remove('scrolled')
		}

		btn.addEventListener('click', TopscrollTo); 
}



var TopscrollTo = function () {
    if(window.scrollY!=0) {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
}

const backToTop = () => {
	const btn = document.querySelector('.back-to-top');

	// pageYOffset or scrollY
	if (window.pageYOffset > 800) {
		btn.classList.add('show');
		
	} else {
		btn.classList.remove('show')
	}
}

window.onscroll = function() {
	navScroll();
	backToTop();
}

const app = () => {
    navSlide();
}

app();