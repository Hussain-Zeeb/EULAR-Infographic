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

  // Place other jQuery content here as needed
});
