class Listing {
  constructor(listing_dict = {}) {
    this.id = listing_dict["id"] ? listing_dict["id"] : "";
    this.name = listing_dict["name"] ? listing_dict["name"] : "";
    this.type = listing_dict["type"] ? listing_dict["type"] : "";
    this.price_sgd = listing_dict["price_sgd"] ? listing_dict["price_sgd"] : 0;
    this.price_mode = listing_dict["price_mode"] ? listing_dict["price_mode"] : "";
    this.count_of_bedroom = listing_dict["count_of_bedroom"] ? listing_dict["count_of_bedroom"] : 0;
    this.count_of_bathroom = listing_dict["count_of_bathroom"] ? listing_dict["count_of_bathroom"] : 0;
    this.area_sqft = listing_dict["area_sqft"] ? listing_dict["area_sqft"] : 0;
    this.headline = listing_dict["headline"] ? listing_dict["headline"] : "";
    this.description = listing_dict["description"] ? listing_dict["description"] : "";
  }

  save() {
    var listings = JSON.parse(localStorage.getItem("hackathonListings"));
    if (listings == null) {
      listings = {};
    }
    listings[this.id] = this;
    localStorage.setItem("hackathonListings", JSON.stringify(listings));
  }

  static getListing(listingId) {
    var listings = JSON.parse(localStorage.getItem("hackathonListings"));
    if (listings != null && listingId in listings) {
      return new Listing(listings[listingId]);
    }
    return null;
  }
}
