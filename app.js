const mobileMenu = document.getElementById('mobile-bar');
const navBar = document.getElementById('navbar')
const closeBar = document.getElementById('close-mobile')
if(mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navBar.classList.add('active')
    })
}
if(closeBar){
    closeBar.addEventListener('click', () => {
        navBar.classList.remove('active')
    })
}

