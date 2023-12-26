// Esta funcion se encarga de activar el menu para mobile a partir del clicck en el icono de el menu hamburguesa. 
function handleClickMobileMenuTrigger() {
    const mobileMenu = document.querySelector('.main-header-section-menu');
    const overlayMenu = document.querySelector('.overlay_mobile_menu');
    
    if (!mobileMenu.classList.contains('active')) {
      mobileMenu.classList.add('active');
      overlayMenu.classList.add('active');
    } else {
      mobileMenu.classList.remove('active');
      overlayMenu.classList.remove('active');
    }
}


// Esta funcion se encarga de mostrar los hijos de segundo nivel en el menu de mobile.
function mobileMenuShowChild(){
    const menuHasChild = document.querySelectorAll('.menu-links_contain.has-child .menu-links_first_level');
    menuHasChild.forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            const parent = element.closest('.menu-links_contain.has-child');
            const childLevel = parent.querySelector('.menu-links_second_level');
            childLevel.classList.toggle('active');    
        });
    });
}

if (screen.width < 1024){
    mobileMenuShowChild();
}
  
 