function navBtn(){
  const navMobileBtn = document.querySelector('.js-nav-mobile-btn');
  const navContainer = document.querySelector('.js-nav-container');
  const menuIcon = document.querySelector(".hamburger-icon");


  navMobileBtn.addEventListener('click', ()=>{

    navContainer.classList.toggle('nav-container-visible');

    navMobileBtn.classList.toggle('nav-mobile-btn-open')

    const menuIsOpen = navContainer.classList.contains('nav-container-visible');

    navMobileBtn.setAttribute("aria-expanded", menuIsOpen);
  
    if(menuIsOpen){
       navMobileBtn.setAttribute("aria-label", "Menü schließen")
    } else {
      navMobileBtn.setAttribute("aria-label", "Menü öffnen")
    }
  })
}

navBtn();