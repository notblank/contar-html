// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  stickyBar()
};

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyBar() {

  var topbar = document.getElementById("navbar");
  // const sticky = topbar.offsetTop;

  if (window.pageYOffset >= 81) {
    topbar.classList.add("sticky");
  }else{
    topbar.classList.remove("sticky");
  }
}
