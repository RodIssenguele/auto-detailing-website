function navBtn(){
  const navMobileBtn = document.querySelector('.js-nav-mobile-btn');
  const navContainer = document.querySelector('.js-nav-container');
  const menuIcon = document.querySelector(".hamburger-icon");


  navMobileBtn.addEventListener('click', ()=>{

    navContainer.classList.toggle('nav-container-visible');

    const menuIsOpen = navContainer.classList.contains('nav-container-visible');

    
    navMobileBtn .setAttribute("aria-expanded", menuIsOpen);
  
    if(menuIsOpen){
      menuIcon.innerHTML = 'X'  
    } else{
      menuIcon.innerHTML = '☰'
    }
    console.log(navMobileBtn.attributes)
  })
}

navBtn();