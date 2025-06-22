$(function() {
  // Quick Links Chevron Navigation
  var $quickLinksList = $('.quick-links-list');
  var $chevron = $quickLinksList.find('.chevron');
  var $items = $quickLinksList.find('li');

  $items.on('mouseenter focus', function() {
    var $li = $(this);
    var offsetTop = $li.position().top + ($li.outerHeight() - $chevron.outerHeight()) / 2;
    $chevron.css({
      top: offsetTop + 'px',
      opacity: 1
    });
  });

  $items.on('mouseleave blur', function() {
    $chevron.css('opacity', 0);
  });

  // Accordion functionality
  $('.accordion-header').on('click', function() {
    var $header = $(this);
    var expanded = $header.attr('aria-expanded') === 'true';
    $header.attr('aria-expanded', !expanded);
    var $content = $header.parent().find('.accordion-content');
    if (!expanded) {
      $content.css('max-height', $content[0].scrollHeight + 'px');
    } else {
      $content.css('max-height', '');
    }
  });




  // Swiper.js initialization
  if (document.querySelector('.swiper')) {
    const swiper = new Swiper('.swiper', {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 30,
      loop: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 1.2,
          centeredSlides: true,
        },
        1024: {
          slidesPerView: 1.5,
          centeredSlides: true,
        }
      }
    });

  }

  // Scroll to top button logic
  const $scrollTopBtn = $('.scroll-to-top');
  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 200) {
      $scrollTopBtn.addClass('visible');
    } else {
      $scrollTopBtn.removeClass('visible');
    }
  });
  $scrollTopBtn.on('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });






  //GSAP ANIMATIONS //////////////////////////////////////////////////////////////////////////////////////////////



  // GSAP SVG path animation with ScrollTrigger
  if (window.gsap && window.ScrollTrigger) {
    const path1 = document.getElementById('sjia-path');
    const path2 = document.getElementById('aosd-path');
    const path3 = document.getElementById('arrow');
    const path4 = document.getElementById('stills-text');
    const path5 = document.getElementById('person-icon');
    if (path1 && path2 && path3) {
      const length1 = path1.getTotalLength();
      const length2 = path2.getTotalLength();
      path1.style.strokeDasharray = length1;
      path1.style.strokeDashoffset = length1;
      path2.style.strokeDasharray = length2;
      path2.style.strokeDashoffset = length2;
      path3.style.opacity = 0;
      path4.style.opacity = 0;
      path5.style.opacity = 0;

      // Helper to fade in and reset a path with ScrollTrigger
      function fadeInReset(path, delay = 0) {
        gsap.fromTo(path,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.6,
            delay: delay,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: path2, // or the relevant trigger
              start: "top 80%",
              //markers: true, // Enable markers for debugging
              toggleActions: "play reset play reset",
              invalidateOnRefresh: true
            }
          }
        );
      }

      gsap.to(path1, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: path1,
          start: "top 80%",
          toggleActions: "play reset play reset",
          invalidateOnRefresh: true
        }
      });
      gsap.to(path2, {
        strokeDashoffset: 0,
        duration: 2,
        delay: 0.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: path2,
          start: "top 80%",
          toggleActions: "play reset play reset",
          invalidateOnRefresh: true
        }
      });
      fadeInReset(path3, 2.5); // adjust delay as needed
      fadeInReset(path4, 3.1); // example for path4
      fadeInReset(path5, 3.7); // example for path5
    }
  }


  // GSAP mask animation Part 1

  gsap.to("#mask-rect1", {
  attr: { width: "100%" },
  duration: 3,
  ease: "power1.inOut",
    scrollTrigger: {
        trigger: ".graph-one",
        start: "top 80%",
        //markers: true,
        toggleActions: "play reverse play reverse",
        invalidateOnRefresh: true
    }
});

// GSAP mask animation Part 2

  gsap.to("#mask-rect2", {
  attr: { width: "100%" },
  duration: 3,
  ease: "power1.inOut",
    scrollTrigger: {
        trigger: ".graph-two",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
        invalidateOnRefresh: true
    }
});



// GSAP animation for circle-arc-wrapper
  if (document.querySelector('.circle-arc-wrapper')) {
    // Only run GSAP arc animation on tablet and up
    if (window.matchMedia('(min-width: 768px)').matches) {
      const mainCircle = document.querySelector('.main-circle');
      const mainText = mainCircle.querySelector('.main-text');
      const arc1 = document.querySelector('.arc-icon-1');
      const arc2 = document.querySelector('.arc-icon-2');
      const arc3 = document.querySelector('.arc-icon-3');

      // Hide elements initially
      gsap.set(mainCircle, { scale: 0 });
      gsap.set(mainText, { autoAlpha: 0 });
      gsap.set(arc1, { top: '50%', left: '50%', xPercent: -50, yPercent: -50, autoAlpha: 0 });
      gsap.set(arc2, { top: '50%', left: '50%', xPercent: -50, yPercent: -50, autoAlpha: 0 });
      gsap.set(arc3, { top: '50%', left: '50%', xPercent: -50, yPercent: -50, autoAlpha: 0 });

      gsap.timeline({
        scrollTrigger: {
          trigger: '.circle-arc-wrapper',
          start: 'top 80%',
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true
        }
      })
        .to(mainCircle, { scale: 1, duration: 1.2, ease: 'elastic.out(1, 0.6)' })
        .to(mainText, { autoAlpha: 1, duration: 0.5 }, '-=0.4')
        .to(arc1, {
          top: '0%', left: '50%', xPercent: -50, yPercent: 0, autoAlpha: 1, duration: 0.7, ease: 'power2.out'
        }, '-=0.2')
        .to(arc2, {
          top: '14%', left: '131%', xPercent: -50, yPercent: 0, autoAlpha: 1, duration: 0.7, ease: 'power2.out'
        }, '-=0.5')
        .to(arc3, {
          top: '15%', left: '-23%', xPercent: -50, yPercent: 0, autoAlpha: 1, duration: 0.7, ease: 'power2.out'
        }, '-=0.5');
    }
  }

  // Animate subheading circles on scroll with GSAP
  if (window.gsap && window.ScrollTrigger) {
    document.querySelectorAll('.subheading').forEach((el, i) => {
      const beforeCircle = el;
      gsap.fromTo(beforeCircle,
        { '--circle-opacity': 0 },
        {
          '--circle-opacity': 1,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'top 40%',
            scrub: true,
            toggleActions: 'play reverse play reverse',
          }
        }
      );
    });
  }




  // GSAP animation for quick-links
  if (window.gsap && window.ScrollTrigger) {
    const quickLinks = document.querySelector('.quick-links');
    if (quickLinks) {
      const quickLinksH2 = quickLinks.querySelector('h2');
      const quickLinksItems = quickLinks.querySelectorAll('li');

      // Hide elements initially
      gsap.set(quickLinks, { scale: 0 });
      gsap.set(quickLinksH2, { autoAlpha: 0 });
      gsap.set(quickLinksItems, { autoAlpha: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: quickLinks,
          start: 'top 80%',
          toggleActions: 'play none none none',
          invalidateOnRefresh: true
        }
      });
      tl.to(quickLinks, { scale: 1, duration: 1.1, ease: 'elastic.out(1, 0.6)' })
        .to(quickLinksH2, { autoAlpha: 1, duration: 0.4 }, '-=0.5')
        .to(quickLinksItems, {
          autoAlpha: 1,
          duration: 0.3,
          stagger: 0.35
        }, '-=0.2');
    }
  }


  // GSAP elastic scale-in animation for any .scale-elastic-on-scroll element
  if (window.gsap && window.ScrollTrigger) {
    document.querySelectorAll('.scale-elastic-on-scroll').forEach((el) => {
      gsap.set(el, { scale: 0 });
      gsap.to(el, {
        scale: 1,
        duration: 1.1,
        ease: 'elastic.out(1, 0.6)',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true
        }
      });
    });
  }


  // GSAP fade-in-upwards animation utility
  if (window.gsap && window.ScrollTrigger) {
    document.querySelectorAll('.fade-in-up').forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play reverse play reverse',
            invalidateOnRefresh: true
          }
        }
      );
    });
  }




    // Improved ScrollTrigger refresh on resize
    if (window.ScrollTrigger) {
      let resizeTimeout;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          ScrollTrigger.refresh(true); // use safe mode for accurate marker placement
        }, 1000); // shorter debounce for responsiveness
      });
    }

    // Automatically reload the browser 1.5 seconds after resize ends
    let browserReloadTimeout;
    window.addEventListener('resize', function() {
      if (window.innerWidth >= 768) {
        clearTimeout(browserReloadTimeout);
        browserReloadTimeout = setTimeout(function() {
          window.location.reload();
        }, 1000);
      }
    });


    // Ensure correct anchor scroll and ScrollTrigger refresh on load
    $(window).on('load', function() {
      if (window.location.hash) {
        const anchor = document.querySelector(window.location.hash);
        if (anchor) {
          anchor.scrollIntoView();
          setTimeout(function() {
            if (window.ScrollTrigger) {
              ScrollTrigger.refresh(true);
            }
          }, 1000); // allow layout to settle before refresh
        }
      }
    });


});
