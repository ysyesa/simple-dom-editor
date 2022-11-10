// Add menu in navbar and removing two of them due to not enough space
function comm_viewInitNavbar() {
  // Adding menu
  var parent = document.getElementsByClassName("nav navbar-nav")[0];
  var elem = parent.childNodes[5];
  elem.childNodes[1].textContent = "Project Referral";
  elem.childNodes[1].setAttribute("href", "/featured-agent-booking?tab=2");
  // Removing menu
  parent.removeChild(parent.childNodes[7]);
}
