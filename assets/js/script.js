/* Author: Reshma Lihe */
// --------------Fixed navigation--------------------------
const nav = document.querySelector('.l-header');
let navTop = nav.offsetTop;

function fixedNav() {
  if (window.scrollY != navTop) {    
    nav.classList.add('fixed');
  } else {
    nav.classList.remove('fixed');    
  }
}

window.addEventListener('scroll', fixedNav);

$(document).ready(function(){
  setTimeout(function() {
    document.querySelector('.home').classList.toggle('active-section');
  }, 1000);
});


// --------------menu show--------------------------
const showMenu = (toogleId, navId) => {
  const toggle = document.getElementById(toogleId),
  nav = document.getElementById(navId)

  if(toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
      document.querySelector('html').classList.toggle('no-scroll');
    });
  }
}
showMenu('nav-toggle', 'nav-menu');

// --------------remove menu mobile ------------------------------------
const navLink = document.querySelectorAll('.nav__link');
function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// ---------------scroll sections active link --------------------------
const sections = document.querySelectorAll('section[id]')
window.addEventListener('scroll', scrollActive)
function scrollActive(){
  const scrollY = window.pageYOffset
  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
    }else{
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
    }
  })
}

// ---------------------- animation ------------------------------------------------------------
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '80px',
  duration: 2000,
  // reset: true
})
sr.reveal('.about__img', { origin: 'left', delay: 300 })
sr.reveal('.about__content', { origin: 'right', delay: 300 })
sr.reveal('.skills__box li', { delay: 100, interval: 100 })
sr.reveal('.contact__info', { origin: 'left', delay: 400 })
sr.reveal('.contact__image', { origin: 'right', delay: 400 })

$(document).ready(function(){
  $('a#filter-a').click(function(){
    //hide all works by default 
    $(".projects__img").addClass('filter-hide');
    //show slected works based on the menu clicked
    $(".projects__img[data-filter='"+$(this).attr('data-filter')+"']").removeClass("filter-hide");
    //remove selected class to the link      
    $('a#filter-a').removeClass('selected');
    //add selected class to the active link
    $(this).addClass('selected');
    return false;
   });
   //show all works for "all" menu
  $('a[data-filter="*"]').click(function(event) {    
     $(".projects__img").removeClass('filter-hide');
     return false;
  });
});