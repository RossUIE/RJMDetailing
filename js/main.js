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

const handleMap = () => {
    var coll = document.getElementsByClassName("c-map");
    var content = '';
    var mapText = document.getElementById('mapText');
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() { 
            content = document.getElementById("mapToggle")
            content.classList.toggle("slidedown");

            if(mapText.innerHTML === 'SHOW MAP') {
                mapText.innerHTML = "HIDE MAP"
            } else {
                mapText.innerHTML = "SHOW MAP"
            }
        });
    }
}

const formValidation = (event) => {
    event.preventDefault();
    // inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const form = document.getElementById('contact-form');

    // formFieldBoxes
    const nameFormField = document.querySelector('.nameFormfield');
    const emailFormField = document.querySelector('.emailFormfield');
    const messageFormField = document.querySelector('.messageFormField');

    const successMessage = document.querySelector('.form-success-message');

    var emailValid = false;
    var nameValid = false;
    var messageValid = false;

    if(name == null || name == "") {
        nameFormField.classList.add('error');
        nameValid = false;
    } else {
        nameFormField.classList.remove('error');
        nameValid = true;
    }
    if(email == null || email == "") {
        emailFormField.classList.add('error');
        emailValid = false;
    } else {
        emailFormField.classList.remove('error');
        emailValid = true;
    }
     if(message == null || message == "") {
        messageFormField.classList.add('error');
        messageValid = false;
    } else {
        messageFormField.classList.remove('error');
        messageValid = true;
    }


    if(emailValid && nameValid && messageValid) {
		$.ajax({
			url: "https://formspree.io/xnqgzprz",
			method: "POST",
			data: {
				Name: `${name}`,
				Email: `${email}`,
				Phone: `${phone}`,
				Message: `${message}`
			},
			dataType: "json",
			success: function (data, status, xhr) {// success callback function
				successMessage.style.display = "flex";
				setTimeout(function(){ 
					successMessage.style.display = "none";
				}, 10000);
				form.reset();
			},
			error: function (error) {
				alert('There was an error trying to send your email.');
			}
		  });
		return true
	} else {
		return false
	}
}

var TopscrollTo = function () {
    if(window.scrollY!=0) {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
}

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

const handlePrice = (type) => {
    console.log('car selected ', type);
    var btnContainer = document.getElementById("c-packages-vehicle");

    var btns = btnContainer.getElementsByClassName("vehicle-item");

    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace(" active", "");
          this.className += " active";
          getCarType(this.id);
        });
      }
}

getCarType = (car) => {
    var maintenance = 20;
    var interior = 25;
    var exterior = 60;
    var full = 75;
    var oneStage = 120;
    var fullCorrection = 250;

    console.log(car)

    if(car === 'small') {
        maintenance = 20;
        interior = 25;
        exterior = 60;
        full = 75;
        oneStage = 120;
        fullCorrection = 250;
    }

    if(car === 'medium') {
        maintenance = 25;
        interior = 30;
        exterior = 70;
        full = 90;
        oneStage = 140;
        fullCorrection = 300;
    }

    if(car === 'large') {
        maintenance = 30;
        interior = 35;
        exterior = 80;
        full = 105;
        oneStage = 160;
        fullCorrection = 350;
    }

    if(car === 'suv/jeep') {
        maintenance = 35;
        interior = 40;
        exterior = 85;
        full = 115;
        oneStage = 190;
        fullCorrection = 400;
    }

    var maintenanceValue = document.getElementById('maintenance').innerHTML = maintenance;
    var interiorValue = document.getElementById('interior').innerHTML = interior;
    var exteriorValue = document.getElementById('exterior').innerHTML = exterior;
    var fullValue = document.getElementById('full').innerHTML = full;
    var oneStageValue = document.getElementById('oneStage').innerHTML = oneStage;
    var fullCorrectionValue = document.getElementById('fullCorrection').innerHTML = fullCorrection;
}

const app = () => {
    navSlide();
    handleMap();
    handlePrice();
}

app();

