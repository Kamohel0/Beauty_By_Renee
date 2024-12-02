/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");
  
    if(menuBtn.className === "nav-menu") {
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }
  
  /* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};
  
  function headerShadow() {
    const navHeader = document.getElementById("header");
  
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";
    } else {
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";
    }
  }
  
  /* ----- TYPING EFFECT ----- */
  // var typingEffect = new Typed(".typedText", {
  //   strings: [],
  //   loop: true,
  //   typeSpeed: 100,
  //   backSpeed: 80,
  //   backDelay: 2000
  // });
  
  /* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
  const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
  });
  
  /* -- HOME -- */
  sr.reveal('.hero-text', {});
  sr.reveal('.hero-logo', { delay: 300 });
  
  /* -- CATEGORIES SECTION -- */
  sr.reveal('.category-grid', { delay: 200 });
  
  /* -- PRODUCTS SECTION -- */
  sr.reveal('.product-grid', { delay: 300 });
  
  /* ----- CHANGE ACTIVE LINK ----- */
  const sections = document.querySelectorAll('section[id]');
  
  function scrollActive() {
    const scrollY = window.scrollY;
  
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id');
  
      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
        document.querySelector('.nav-links a[href*=' + sectionId + ']').classList.add('active-link');
      } else {
        document.querySelector('.nav-links a[href*=' + sectionId + ']').classList.remove('active-link');
      }
    });
  }
  
  window.addEventListener('scroll', scrollActive);
  