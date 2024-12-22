var toggleMenu = document.getElementById("toggle-menu")
function toggleList() {
  var toggleList = document.getElementById("toggle-list");
  if (toggleList.style.display === "block") {
    toggleList.style.display = "none";
  } else {
    toggleList.style.display = "block";
  }
}



function blogToggle(params) {
  var blogToggle = document.getElementById('blog-toggle-list');
  var contactList = document.getElementById('contact-list')
  if (blogToggle.style.display === "block") {
    blogToggle.style.display = "none";
  } else {
    blogToggle.style.display = "block";
    contactList.style.margin = "40px"
  }
}

$(document).ready(function () {
  $(".menu").click(function () {
    $(".toggle-list").slideToggle();
  });
});

$(document).ready(function () {
  $(".blog").click(function () {
    $("#blog-toggle-list").slideToggle();
  });
});