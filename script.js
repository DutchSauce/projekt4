const navslide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks =  document.querySelectorAll(' ');

  burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');
  })
  //Animate links
  navLinks.forEach((link, index)=>{
    link.style.animation = `navLinkFade 0.5 ease forwards ${index / 7 + 0.5}s`; 
  });
}



navslide();
