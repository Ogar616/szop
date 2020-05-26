document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('hamburger').addEventListener('click', showMobileMenu)
    document.getElementById('hamburger-mobile').addEventListener('click', hideMobileMenu)
  })

var showMobileMenu = function() {
document.getElementById('mobile-menu').style.display = 'block';    
}

var hideMobileMenu = function() {
document.getElementById('mobile-menu').style.display = '';    
}