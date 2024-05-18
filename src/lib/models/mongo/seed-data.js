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
      name: "Museums",
      userid: "->users.bart"
    },
    churches: {
      name: "Churches",
      userid: "->users.bart"
    },
    stadiums: {
      name: "Stadiums",
      userid: "->users.bart"
    },
    beaches: {
      name: "Beaches",
      userid: "->users.bart"
    }
  },
  placemarks: {
    _model : "Placemark",
    countryLife : {
      name: "Country Life Museum",
      category: "->categories.museums",
      description: "Museum of country life",
      "latitude": 53.88399130187888,
      "longitude": -9.207886178948524,
      "temperature": 11,
      categoryid: "->categories.museums"
    },
    michaelDavitt : {
      name: "Michael Davitt Museum",
      category: "->categories.museums",
      description: "Heritage museum",
      "latitude": 53.922566883550054,
      "longitude": -9.129571917798541,
      "temperature": 12,
      categoryid: "->categories.museums"
    },
    ballintubber : {
      name: "Ballintubber Abbey",
      category: "->categories.churches",
      description: "Mayo Abbey",
      "latitude": 53.76007573213237,
      "longitude": -9.282833528740035,
      "temperature": 12,
      categoryid: "->categories.churches"
    },
    mchale : {
      name: "Mchale Park",
      category: "->categories.stadiums",
      description: "Mayo county team grounds",
      "latitude": 53.85439751009727,
      "longitude": -9.284280516179264,
      "temperature": 12,
      categoryid: "->categories.stadiums"
    },
    oldHead : {
      name: "Old Head",
      category: "->categories.beaches",
      description: "Iconic Mayo beach",
      "latitude": 53.77660816037724,
      "longitude": -9.770041602975258,
      "temperature": 12,
      categoryid: "->categories.beaches"
    },
  }
};