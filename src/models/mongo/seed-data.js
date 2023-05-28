export const seedData = {
    users: {
      _model: "User",
      homer: {
        firstname: "Homer",
        lastname: "Simpson",
        email: "homer@simpson.com",
        password: "$2a$10$KYnh9rmi0afoVpBQKCA4UeiMmH7YH7x/VQGYFDJt56EI8BRdqsDca"
      },
      marge: {
        firstname: "Marge",
        lastname: "Simpson",
        email: "marge@simpson.com",
        password: "$2a$10$EoppwUgFLEQD0mGi31al2.28z8ZriargY6L9SOLK3sHjnLlTTwNDO"
      },
      bart: {
        firstname: "Bart",
        lastname: "Simpson",
        email: "bart@simpson.com",
        password: "$2a$10$a6ASJn2hwFTQNDGfP01OP.mUx2U/ZCFzHr6ZpU7ahP7zu3hs1dWVW"
      }
    },
    sites: {
        _model: "Site",
        cobh: {
            title: "Cobh Sites",
            lat: "51.850180",
            lng: "-8.294740",
            userid: "->users.bart"
        },
        fota: {
            title: "Fota Island",
            lat: "51.898620",
            lng: "-8.279890",
            userid: "->users.marge"
        },
        midleton: {
          title: "Cork City",
          lat: "51.897869",
          lng: "-8.471090",
          userid: "->users.homer"
      }
    },
    guides: {
      _model: "Guide",
      lisa: {
        firstname: "Lisa",
        lastname: "Simpson",
        office: "Heritage Officer",
        siteid: "->sites.fota",
      },
      homer: {
        firstname: "Homer",
        lastname: "Simpson",
        office: "Administrator",
        siteid: "->sites.cobh",
      },
      bobby: {
        firstname: "Bobby",
        lastname: "Simpson",
        office: "Tour Guide",
        siteid: "->sites.midleton",
      },
    },
    places: {
      _model: "Place",
      place_1: {
        title: "Belvelly",
        category: "Castle",
        location: "Cobh",
        description: "A restored beauty",
        weather: "Fair",
        image: "y",
        siteid: "->sites.cobh"
      },
      place_2: {
        title: "Martello Tower 1",
        category: "Defensive Tower",
        location: "Cobh",
        description: "A restored stronghold",
        weather: "Fair",
        image: "x",
        siteid: "->sites.cobh"
      },
    }
  };
  