'use-strict';
//Animation card load

// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       const target1 = entry.target.getElementById('test');
  
//       if (entry.isIntersecting) {
//         target1.classList.add('lazy-load-card');
//         return; // if we added the class, exit the function
//       }
  
//       // We're not intersecting, so remove the class!
//       target1.classList.remove('lazy-load-card');
//     });
//   });
  
//   observer.observe(document.getElementById('test'));

//Toggling the navbar😋

const navbarToggleBtn = document.getElementById('hamburger');
const navList = document.getElementById('navList');
const navbar = document.getElementById('navbar');
const specialListItem1 = document.getElementById('specialListItem1');
const specialListItem2 = document.getElementById('specialListItem2');
const specialListItem3 = document.getElementById('specialListItem3');
const specialListItem4 = document.getElementById('specialListItem4');
const specialListItem5 = document.getElementById('specialListItem5');
const toggleContainer = document.querySelector('.toggle__container');
const navbarInner = document.querySelector('.navbar__inner');

navbarToggleBtn.addEventListener('click', function() {
    navList.classList.toggle('hidden');
    navbar.classList.toggle('navStyle');
    specialListItem1.classList.toggle('hidden');
    specialListItem2.classList.toggle('hidden');
    specialListItem3.classList.toggle('hidden');
    specialListItem4.classList.toggle('hidden');
    specialListItem5.classList.toggle('hidden');

   
});



//Navbar Mode change Toggle

const toggle = document.getElementById("toggleBtn");
const moon = document.querySelector(".moon");
const moonHide = document.querySelector(".moon__hide");

let elems = document.querySelectorAll(".sunrays");
function sunraysShow() {
	for (let i = 0; i < elems.length; i++) {
		console.log(elems[i]);

		const test = function () {
			elems[i].classList.toggle("hide");
		};

		setTimeout(test(), 3000); //FIXME Im still nodelist single value is still unknown

		//St1. Convert fctn expression to fctn declaration
	}
}


//Popup Functionality😉
const html = document.querySelector('html');
const terms = document.getElementById('terms');
const popup = document.getElementById('popup');
const overlayTerms = document.getElementById('overlayTerms');
const popupClose = document.getElementById('popupClose');

//Accept or decline popup😁
const acceptPopup = document.querySelector('.popup__accept');
const declinePopup = document.querySelector('.popup__decline');

terms.addEventListener('click', function() {
    html.classList.toggle('u-overflow-hidden');
    popup.classList.toggle('hidden');
    overlayTerms.classList.toggle('hidden');
});

overlayTerms.addEventListener('click', function() {
    html.classList.toggle('u-overflow-hidden');
    popup.classList.toggle('hidden');
    overlayTerms.classList.toggle('hidden');
})

let popupResponse = true;

acceptPopup.addEventListener('click', function(e) {
    e.preventDefault();
    popup.classList.toggle('hidden');
    overlayTerms.classList.toggle('hidden');
    html.classList.toggle('u-overflow-hidden');

    popupResponse = true;
});
// console.log(popupResponse);

declinePopup.addEventListener('click', function(e) {
    e.preventDefault();
    popup.classList.toggle('hidden');
    overlayTerms.classList.toggle('hidden');
    html.classList.toggle('u-overflow-hidden');
    popupResponse = false;
});

if(!popupResponse) {
    console.log(`You havnt agreed to terms & conditions`);
}




//Thankyou popup functioning😗
const popupThanks = document.getElementById('popupThanks');
const bookSession1 = document.getElementById('bookSession1');
const bookSession2 = document.getElementById('bookSession2');
const closePopup = document.getElementById('closePopup');
const fillFeedback = document.getElementById('fillFeedback');
const overlayThanks = document.querySelector('.overlay--thanks');

bookSession1.addEventListener('click', function() {
    popupThanks.classList.toggle('hidden');
    overlayThanks.classList.toggle('hidden');
    html.classList.toggle('u-overflow-hidden');
});

bookSession2.addEventListener('click', function() {
    popupThanks.classList.toggle('hidden');
    overlayThanks.classList.toggle('hidden');
    html.classList.toggle('u-overflow-hidden');
});

closePopup.addEventListener('click', function() {
    popupThanks.classList.toggle('hidden');
    overlayThanks.classList.toggle('hidden');
    html.classList.toggle('u-overflow-hidden');
});

fillFeedback.addEventListener('click', function() {
    popupThanks.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
    html.classList.toggle('u-overflow-hidden');
});


//Slide show functionality

var slideIndex = 1;
showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}