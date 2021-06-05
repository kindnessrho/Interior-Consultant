/*===== active and remove menu =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    //active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //remove menu mobile
    // const navMenu = document.getElementById('nav-menu')
    // navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))