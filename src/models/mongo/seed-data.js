export const seedData = {
  users: {
    _model: "User",
    homer: {
      firstName: "Homer",
      lastName: "Simpson",
      email: "homer@simpson.com",
      password: "secret",
      admin: false
    },
    marge: {
      firstName: "Marge",
      lastName: "Simpson",
      email: "marge@simpson.com",
      password: "secret",
      admin: false
    },
    bart: {
      firstName: "Bart",
      lastName: "Simpson",
      email: "bart@simpson.com",
      password: "cowabunga",
      admin: true
    }
  },
  categories: {
    _model: "Category",
    museums: {
      title: "Museums",
      userid: "->users.bart"
    },
    churches: {
      title: "Churches",
      userid: "->users.bart"
    },
  },
  placemarks: {
    _model : "Placemark",
    countryLife : {
      name: "Country Life Museum",
      category: "Museums",
      description: "Museum of country life",
      "latitude": 53.88399130187888,
      "longitude": -9.207886178948524,
      "temperature": 11,
      categoryid: "->categories.museums"
    },
    michaelDavitt : {
      name: "Michael Davitt Museum",
      category: "Museums",
      description: "Heritage museum",
      "latitude": 53.922566883550054,
      "longitude": -9.129571917798541,
      "temperature": 12,
      categoryid: "->categories.museums"
    },
  }
};