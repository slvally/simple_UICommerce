document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('navbarsec').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbarsec').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
}); 

// Disable Scroll


const bodycont = document.getElementById('back');
const signupbutton = document.getElementById('signupbutton');
const signinbutton = document.getElementById('signinbutton');
const signupform = document.getElementById('signupform');
const signinform = document.getElementById('signinform');
function signup(){
  signinform.classList.replace("d-block", "d-none");
  signupform.classList.replace("d-none","d-block");
  bodycont.classList.add('back');
}
function signin(){
  signupform.classList.replace("d-block", "d-none");
  signinform.classList.replace("d-none","d-block");
  bodycont.classList.add('back');
}
bodycont.addEventListener('click', function(){
  if(signupform.classList.contains("d-block")||(signinform.classList.contains("d-block"))){
  signupform.classList.replace("d-block", "d-none");
  signinform.classList.replace("d-block", "d-none");
  bodycont.classList.remove('back');
  };
});

