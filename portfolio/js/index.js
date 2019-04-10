function copyrightYear() {
  var d = new Date();
  document.write(d.getFullYear());
}

function classToggle() {
  const navs = document.querySelectorAll('.navbar_items');
  navs.forEach(nav => nav.classList.toggle('navbar_toggleShow'));
}

document.querySelector('.navbar_link-toggle')
.addEventListener('click', classToggle);