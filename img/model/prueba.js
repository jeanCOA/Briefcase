let prevScrollPos = window.pageYOffset || document.documentElement.scrollTop;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;

  if (prevScrollPos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px"; // Ajusta según la altura del menú
  }

  prevScrollPos = currentScrollPos;
};

