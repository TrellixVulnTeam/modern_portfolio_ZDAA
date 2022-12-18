// select DOM Items
const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const menuBranding = document.querySelector('.menu-branding')
const menuNav = document.querySelector('.menu-nav')
const navItems = document.querySelectorAll('.nav-item')

// console.log(menuBtn);

let showMenu = true
menuBtn.addEventListener('click',toggleMenu)

function toggleMenu () {
    // console.log('clicked');
    if(showMenu){
        menuBtn.classList.add('close')
        menu.classList.add('show')
        menuNav.classList.add('show')
        menuBranding.classList.add('show')
        navItems.forEach(item=>item.classList.add('show'))
        showMenu = false
        
    }
    else{
        menuBtn.classList.remove('close')
        menu.classList.remove('show')
        menuNav.classList.remove('show')
        menuBranding.classList.remove('show')
        navItems.forEach(item=>item.classList.remove('show'))
        showMenu = true

    }
}