// refference:  https://stackoverflow.com/questions/38850185/using-arrows-instead-of-mouse-in-html-form-to-navigate-inputs?fbclid=IwAR1hOSEwz3iJ_Q9RhMwpB_b5fTefJwaMujFd02vMJTYyKLhhM7wKWsr3iOQ

var elements = document.getElementsByClassName("arrow-togglable");
var currentIndex = 0;

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 38:
      currentIndex = (currentIndex == 0) ? elements.length - 1 : --currentIndex;
      elements[currentIndex].focus();
      break;
    case 40:
      currentIndex = ((currentIndex + 1) == elements.length) ? 0 : ++currentIndex;
      elements[currentIndex].focus();
      break;
  }
};
