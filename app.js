//Animate smooth scroll
$('#view-work').on('click', function() {
  const images = $('#images').position().top;

  $('html, body').animate(
    {
      scrollTop: images
    },
    900
  );
});

$('#contact-btn').on('click', function() {
  const contactInfo = $('#contact-info').position().top;

  $('html, body').animate(
    {
      scrollTop: contactInfo
    },
    900
  );
});
