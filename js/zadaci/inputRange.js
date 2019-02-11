var A = document.querySelector('.kocka');
var B = document.querySelector('.slider');


B.addEventListener('change', function() {
  A.style.width = this.value + "px";
  A.style.height = this.value + "px";
  });