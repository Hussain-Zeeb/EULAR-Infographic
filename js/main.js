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

  // Place other jQuery content here as needed
});
