/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById('nav-close');

    /* Menu show */
if (navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */

if (navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    })
}

/*=============== REMOVE MENU MOBILE ===============*/

const navlink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementByIdI("nav-menu")
    navMenu.classList.remove("show-menu")
}
navlink.forEach(n => n.addEventListener('click',linkAction))



/*=============== ADD SHADOW HEADER ===============*/


/*=============== SWIPER POPULAR ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
