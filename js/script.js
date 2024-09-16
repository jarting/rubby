window.addEventListener('scroll', function () {
  const elements = document.querySelectorAll('.portfolio-item');
  elements.forEach(function (element) {
    const position = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
      element.style.transform = 'translateY(0)';
      element.style.opacity = '1';
    }
  });
});
