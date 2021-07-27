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
// const sr = ScrollReveal({
//   origin: 'top',
//   distance: '80px',
//   duration: 2000,
//   reset: true
// })
// sr.reveal('.home__title', {})
// sr.reveal('.home__scroll', { delay: 200 })
// sr.reveal('.home__img', { origin: 'right', delay: 400 })
// sr.reveal('.about__img', { delay: 500 })
// sr.reveal('.about__subtitle', { delay: 300 })
// sr.reveal('.about__profession', { delay: 400 })
// sr.reveal('.about__button', { delay: 500 })
// sr.reveal('.skills__box', { distance: '20px', delay: 50, interval: 100 })
// sr.reveal('.skills__img', {delay: 400})
// sr.reveal('.portfolio__img', { interval: 200 })
// sr.reveal('.contact__info', { delay: 400 })
// sr.reveal('.contact__form', { delay: 400 })

// ----------------------- form validation -------------------------------------------------------
const name = document.getElementById('name').parentNode;
const email = document.getElementById('email').parentNode;
const message = document.getElementById('message');

const RegexExpression = {
  username_regex: /^[a-zA-Z ]*$/,
  email_regex: /^([0-9a-zA-Z\_\.\-]+)@([0-9a-zA-Z\_\.\-]+)\.([a-zA-Z]+)$/
}

let inputArray = Array.from(document.querySelectorAll('.contact__inputs input'));

inputArray.forEach(element => {
  element.addEventListener('keyup', () => {
    validateInput(element);
  });
});

let validateInput = (input) => {
  var requiredRegex = input.getAttribute('data-regex');
  var parent = input.parentNode;
  
  if(input.value == "") {
    parent.classList = "form-group";
  }
  else if(RegexExpression[requiredRegex].test(input.value)) {
    parent.classList = "form-group success"
  } else {
    parent.classList = "form-group error"
  }
}

message.addEventListener('keyup', () => {
  const lng = message.value.length;
  document.getElementById('charNum').innerHTML = `${lng} out of 200 characters`;
  if(lng < 1 || lng > 200) {
    message.parentNode.classList = "form-group error"
  } else {
    message.parentNode.classList = "form-group success"
  }
})



var button = document.querySelector('.contact__button');

button.addEventListener('click', notify);
function notify() {
  if(name.classList.contains('success') && email.classList.contains('success')
      && message.parentNode.classList.contains('success')) {
    // alert('Your submission has been received. We will be in touch shortly.');
    window.location.reload();
  } else {
    alert('Error: Fill up all the fields correctly.');
  }
}

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