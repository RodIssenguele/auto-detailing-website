function navBtn(){
  const navMobileBtn = document.querySelector('.js-nav-mobile-btn');

  navMobileBtn.addEventListener('click', ()=>{

    const navContainer = document.querySelector('.js-nav-container');

    navContainer.classList.toggle('nav-container-visible')

  })
}

navBtn();