const cursor = document.querySelector('.cursor');

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';

  
});


const links = document.querySelectorAll('.dot');

links.forEach(link => {
  link.addEventListener('mouseover', () => {
    cursor.classList.add('enlarge');
  });
  link.addEventListener('mouseleave', () => {
    cursor.classList.remove('enlarge');
  });
});


  function adjust_textarea(h) {
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
}

var splide = new Splide( '.splide', {
  type  : 'fade',
  rewind: false,
} );

splide.mount();


