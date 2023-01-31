var cursor = document.querySelector(".cursor"),
    follower = document.querySelector(".cursor-follower");
const homeCursor = document.querySelector(".cursor-hover");

TweenMax.set(".cursor-follower", {
  xPercent: -50,
  yPercent: -50
});

homeCursor.addEventListener("mousemove", moveCircle);

function moveCircle(e) {
  TweenMax.to(".cursor-follower", 0.3, {
    stagger: .3,
    x: e.clientX,
    y: e.clientY,
    ease: "power4.easeOut"
  });
}

var cursorAnime = new TimelineMax()
    .from(".cursor-follower",{ 
        duration: .1,
        scale: 0,
        ease: "circ.out"
    })
    .reverse();

homeCursor.addEventListener("mouseenter", () => {
    cursorAnime.reversed(!cursorAnime.reversed());
})

homeCursor.addEventListener("mouseleave", () => {
    cursorAnime.reversed(!cursorAnime.reversed());
})

// End of mouse tracking

// autoscroll from Splide.js

document.addEventListener('DOMContentLoaded', function () {
  var works = new Splide('#collab', {
    type   : 'loop',
    drag   : false,
    height : '3.5rem',
    gap    : '3em',
    arrows : false,
    pagination : false,
    focus  : 'center',
    perPage: 5,
    autoScroll: {
      speed: 2,
      pauseOnHover : false,
    },
    breakpoints: {
      699: {
        perPage: 2,
      },
    }
  });

  var purposes = new Splide('#purposes', {
    type   : 'fade',
    // drag   : false,
    // height : '3rem',
    width: '50%',
    rewind: true,
    pauseOnHover: false,
    // maxWidth: "500px",
    autoplay: true,
    gap    : '3em',
    arrows : false,
    pagination : false,
    focus  : 'center',
    perPage: 1,
    breakpoints: {
      699: {
        width: '100%',
      },
    }
  });

  works.mount( window.splide.Extensions );
  purposes.mount();

});

// Lazy load for images

const observer = lozad('.lozad', {
  rootMargin: '10px 0px', // syntax similar to that of CSS Margin
  threshold: 0.1, // ratio of element convergence
  enableAutoReload: true // it will reload the new image when validating attributes changes
});
observer.observe();


// Navbar mobile toggler

const toggler = document.querySelector(".hamburger"),
      html = document.querySelector("html"),
      menuList = document.querySelector(".menu-list"),
      lists = document.querySelectorAll(".menu-list ul li");

toggler.addEventListener("click", () => {
  toggler.classList.toggle("active");
  menuList.classList.toggle("active");
  html.classList.toggle("active");
})

lists.forEach(list => {
  list.addEventListener("click", () => {
    menuList.classList.remove("active");
    // setTimeout(() => {
    //   html.classList.remove("active");
    // }, 5000)
  })
})