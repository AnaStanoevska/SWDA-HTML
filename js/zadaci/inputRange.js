var A = document.querySelector('.kocka');
var B = document.querySelector('.slider');


B.addEventListener('change', function() {
  A.style.width = B.value + 'px';
  });