document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('hamburger').addEventListener('click', showMobileMenu)
    document.getElementById('hamburger-mobile').addEventListener('click', hideMobileMenu)
    document.getElementsByClassName('slide')[0].addEventListener('click', clickSlide1)
    document.getElementsByClassName('slide')[1].addEventListener('click', clickSlide2)
    document.getElementsByClassName('slide')[2].addEventListener('click', clickSlide3)
  })

var showMobileMenu = function() {
document.getElementById('mobile-menu').style.display = 'block';    
}

var hideMobileMenu = function() {
document.getElementById('mobile-menu').style.display = '';    
}

var clickSlide1 = function() {
  document.getElementById('radio-1').checked = false;
  document.getElementById('radio-2').checked = true;
}
var clickSlide2 = function() {
  document.getElementById('radio-2').checked = false;
  document.getElementById('radio-3').checked = true;
}

var clickSlide3 = function() {
  document.getElementById('radio-3').checked = false;
  document.getElementById('radio-1').checked = true;
}