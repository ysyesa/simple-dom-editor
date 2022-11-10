function comm_viewInitDeveloperListingTab1() {
  // Modifying title and description
  var elem = document.getElementsByClassName("MuiTypography-root jss30 MuiTypography-h3")[0];
  elem.textContent = "Project Referrral";
  var elem = document.getElementsByClassName("MuiTypography-root jss30 MuiTypography-body1")[0];
  elem.textContent = "Help developers get qualified leads and get paid!";

  // Remove project search bar
  var elem = document.getElementsByClassName("listing-searchbar-container")[0];
  elem.style.display = "none";

  // Modify tabs
  var elem = document.getElementsByClassName("top-nav-bar-sub-container")[0];
  elem.childNodes[0].textContent = "Active Referral"
  elem.childNodes[0].classList.add("active");
  elem.childNodes[0].addEventListener("click", function() {
    window.location.href = "https://agentnet.propertyguru.com.sg/featured-agent-booking?tab=1"
  })
  elem.childNodes[1].textContent = "Referral Invitation"
  elem.childNodes[1].classList.remove("active");
  elem.childNodes[1].addEventListener("click", function() {
    window.location.href = "https://agentnet.propertyguru.com.sg/featured-agent-booking?tab=2"
  })
  elem.childNodes[2].textContent = "History"
  elem.childNodes[2].classList.remove("active");
  elem.childNodes[2].addEventListener("click", function() {
    window.location.href = "https://agentnet.propertyguru.com.sg/featured-agent-booking?tab=3"
  })
  for (var i = 3; i <= 7; i++) {
    elem.childNodes[3].remove();
  }
  var delimiter = document.createElement("br");
  elem.insertAdjacentElement("afterend", delimiter);

  renderTab1();
}

function renderTab1() {
  var parent = document.getElementsByClassName("jss3")[0];
  parent.style.display = "none";
  var newParent = document.createElement("div");
  newParent.id = "container-projects-custom";
  newParent.style.marginTop = "20px";
  newParent.style.marginLeft = "20%";
  parent.insertAdjacentElement("afterend", newParent);

  var elem = document.createElement("div");
  elem.innerHTML = '<div class="card" style="margin-top:20px; display: flex; border-radius: 10px; width: 75%; height: 175px; background-color: white;">' +
      '<img style="height: 100%; border-radius: 10px;" src="https://sg2-cdn.pgimgs.com/listing/24023833/UPHO.135614913.R400X300/Cashew-Green-Dairy-Farm-Bukit-Panjang-Choa-Chu-Kang-Singapore.jpg">' + 
      '<div style="padding-left:20px;" class="card-body">' + 
        '<h5 style="margin-top:10px; font-size: 20px;" class="card-title">Cashew Green</h5>' +
        '<p style="font-size: 15px;" class="card-text">118 Cashew Road</p>' +
        '<p style="font-size: 15px; font-weight: bold;" class="card-text">S$9,348,860</p>' +
        '<button><a style="font-size: 15px;" href="https://agentnet.propertyguru.com.sg/featured-agent-booking?tab=3&completed=true">Mark as Sold</a></button>' +
      '</div>' +
      '<div>' +
        '<ul style="margin-top:15px; margin-left:50px; font-size: 15px;" class="listing-property-type">' +
          '<li><span>Estimated Total Commission: S$ 10000</span></li>' +
        '</ul>' +
      '</div>' +
    '</div>';
  newParent.appendChild(elem);
}
