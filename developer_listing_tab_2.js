function comm_viewInitDeveloperListingTab2() {
  // Modifying title and description
  var elem = document.getElementsByClassName("MuiTypography-root jss30 MuiTypography-h3")[0];
  elem.textContent = "Agent Referral Portal";
  var elem = document.getElementsByClassName("MuiTypography-root jss30 MuiTypography-body1")[0];
  elem.textContent = "Help developers get qualified leads and get paid!";

  // Remove project search bar
  var elem = document.getElementsByClassName("listing-searchbar-container")[0];
  elem.style.display = "none";

  // Modify tabs
  var elem = document.getElementsByClassName("top-nav-bar-sub-container")[0];
  elem.childNodes[0].textContent = "Active Referral"
  elem.childNodes[0].classList.remove("active");
  elem.childNodes[0].addEventListener("click", function() {
    window.location.href = "https://agentnet.propertyguru.com.sg/featured-agent-booking?tab=1"
  })
  elem.childNodes[1].textContent = "Projects for Referral"
  elem.childNodes[1].classList.add("active");
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

  renderTab2();
}

function renderTab2() {
  var parent = document.getElementsByClassName("jss3")[0];
  parent.style.display = "none";
  var newParent = document.createElement("div");
  newParent.id = "container-projects-custom";
  newParent.style.marginTop = "20px";
  newParent.style.marginLeft = "20%";
  parent.insertAdjacentElement("afterend", newParent);
  
  var elem = document.createElement("div");
  elem.innerHTML = '<div class="card" style="margin-top:20px; display: flex; border-radius: 10px; width: 75%; height: 175px; background-color: white;">' +
      '<img style="height: 100%; border-radius: 10px;" src="https://sg2-cdn.pgimgs.com/listing/23748085/UPHO.132015153.R400X300/Jervois-Prive-Tanglin-Holland-Bukit-Timah-Singapore.jpg">' + 
      '<div style="padding-left:20px;" class="card-body">' + 
        '<h5 style="margin-top:10px; font-size: 20px;" class="card-title">Jervois Prive</h5>' +
        '<p style="font-size: 15px;" class="card-text">100A Jervois Road</p>' +
        '<p style="font-size: 15px; font-weight: bold;" class="card-text">S$3,200,000</p>' +
        '<p style="font-size: 15px;" class="card-text">3 Bedrooms; 2 Bathrooms; 1109 sqft; S$2,885.48 psf</p>' +
        '<p style="font-size: 15px;" class="card-text">9 mins (640 m) to EW18 Redhill MRT</p>' +
      '</div>' +
      '<div>' +
        '<ul style="margin-top:15px; font-size: 20px;" class="listing-property-type">' +
          '<li><span>2% Commission</span></li>' +
        '</ul>' +
      '</div>' +
    '</div>';
  newParent.appendChild(elem);

  var elem = document.createElement("div");
  elem.innerHTML = '<div class="card" style="margin-top:20px; display: flex; border-radius: 10px; width: 75%; height: 175px; background-color: white;">' +
      '<img style="height: 100%; border-radius: 10px;" src="https://sg2-cdn.pgimgs.com/listing/24023833/UPHO.135614913.R400X300/Cashew-Green-Dairy-Farm-Bukit-Panjang-Choa-Chu-Kang-Singapore.jpg">' + 
      '<div style="padding-left:20px;" class="card-body">' + 
        '<h5 style="margin-top:10px; font-size: 20px;" class="card-title">Cashew Green</h5>' +
        '<p style="font-size: 15px;" class="card-text">118 Cashew Road</p>' +
        '<p style="font-size: 15px; font-weight: bold;" class="card-text">S$9,348,860</p>' +
        '<p style="font-size: 15px;" class="card-text">3 Bedrooms; 2 Bathrooms; 1109 sqft; S$2,036 psf</p>' +
        '<p style="font-size: 15px;" class="card-text">4 mins (330 m) to BP8 Pending LRT</p>' +
      '</div>' +
      '<div>' +
        '<ul style="margin-top:15px; font-size: 20px;" class="listing-property-type">' +
          '<li><span>up to 3% Commission</span></li>' +
        '</ul>' +
      '</div>' +
    '</div>';
  elem.addEventListener("click", function() {
    window.location.href = "https://agentnet.propertyguru.com.sg/featured-agent-booking?tab=2&offer=true"
  })
  newParent.appendChild(elem);
}
