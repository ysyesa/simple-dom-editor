function comm_viewInitDeveloperListingTab2MakeOffer() {
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
  elem.style.display = "none";
  var delimiter = document.createElement("br");
  elem.insertAdjacentElement("afterend", delimiter);

  renderTab2MakeOffer();
}

function renderTab2MakeOffer() {
  var parent = document.getElementsByClassName("jss3")[0];
  parent.style.display = "none";
  var newParent = document.createElement("div");
  newParent.id = "container-projects-custom";
  newParent.style.marginTop = "20px";
  newParent.style.marginLeft = "20%";
  parent.insertAdjacentElement("afterend", newParent);

  var elem = document.createElement("div");
  elem.innerHTML = "<h2>Cashew Green</h2>" +
    '<p style="font-size: 15px;" class="card-text">118 Cashew Road</p>' +
    '<p style="font-size: 15px; font-weight: bold;" class="card-text">S$9,348,860</p>' +
    '<p style="font-size: 15px;" class="card-text">3 Bedrooms; 2 Bathrooms; 1109 sqft; S$2,036 psf</p>' +
    '<p style="font-size: 15px;" class="card-text">4 mins (330 m) to BP8 Pending LRT</p>' + 
    '<p style="font-size: 15px;" class="card-text"><a href="https://agentnet.propertyguru.com.sg/fastkey">Check on FastKey for more details.</a></p>' +
    '<hr>' +
    '<p style="font-size: 20px;" class="card-text">Select Cashew Green unit types to sign up for referral program</p>' + 
    '<div style="display: flex">' +
      '<div class="card" style="margin-top:20px; display: flex; border-radius: 10px; width: 40%; height: 175px; background-color: white;">' +
        '<img style="height: 100%; border-radius: 10px;" src="https://sg2-cdn.pgimgs.com/listing/24023833/UPHO.135614913.R400X300/Cashew-Green-Dairy-Farm-Bukit-Panjang-Choa-Chu-Kang-Singapore.jpg">' +
        '<div style="padding-left:20px;" class="card-body">' +
          '<h5 style="margin-top:10px; font-size: 15px;" class="card-title">Type 1 2BR</h5>' +
          '<h5 style="margin-top:10px; font-size: 15px;" class="card-title">1.5% Commission</h5>' +
          '<input type="checkbox" id="sample" name="sample" value="sample">' +
        '</div>' +
      '</div>' +
    '</div>' +

    '<div style="display: flex">' +
      '<div class="card" style="margin-top:20px; display: flex; border-radius: 10px; width: 40%; height: 175px; background-color: white;">' +
        '<img style="height: 100%; border-radius: 10px;" src="https://sg1-cdn.pgimgs.com/listing/24023833/UPHO.135614916.V800/Cashew-Green-Dairy-Farm-Bukit-Panjang-Choa-Chu-Kang-Singapore.jpg">' +
        '<div style="padding-left:20px;" class="card-body">' +
          '<h5 style="margin-top:10px; font-size: 15px;" class="card-title">Type 1 3BR</h5>' +
          '<h5 style="margin-top:10px; font-size: 15px;" class="card-title">1.5% Commission</h5>' +
          '<input type="checkbox" id="sample" name="sample" value="sample">' +
        '</div>' +
      '</div>' +
    '</div>' +

    '<div style="display: flex">' +
      '<div class="card" style="margin-top:20px; display: flex; border-radius: 10px; width: 40%; height: 175px; background-color: white;">' +
        '<img style="height: 100%; border-radius: 10px;" src="https://sg2-cdn.pgimgs.com/listing/24023833/UPHO.135614913.R400X300/https://sg2-cdn.pgimgs.com/listing/24023833/UPHO.135614905.V800/Cashew-Green-Dairy-Farm-Bukit-Panjang-Choa-Chu-Kang-Singapore.jpg">' +
        '<div style="padding-left:20px;" class="card-body">' +
          '<h5 style="margin-top:10px; font-size: 15px;" class="card-title">Type 2</h5>' +
          '<h5 style="margin-top:10px; font-size: 15px;" class="card-title">2% Commission</h5>' +
          '<input type="checkbox" id="sample" name="sample" value="sample">' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<hr>' +

    '<p style="font-size: 20px;" class="card-text">Estimated Total Commission: S$ 10000</p>' +
    '<button><a style="font-size: 20px;" href="https://agentnet.propertyguru.com.sg/featured-agent-booking?tab=3">Submit Referral Request</a></button>'
  newParent.appendChild(elem);
}
