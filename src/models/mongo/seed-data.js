export const seedData = {
    users: {
      _model: "User",
      homer: {
        firstName: "Homer",
        lastName: "Simpson",
        email: "homer@simpson.com",
        password: "secret"
      },
      marge: {
        firstName: "Marge",
        lastName: "Simpson",
        email: "marge@simpson.com",
        password: "secret"
      },
      bart: {
        firstName: "Bart",
        lastName: "Simpson",
        email: "bart@simpson.com",
        password: "secret"
      }
    },
    sites: {
        _model: "Site",
        cobh: {
            title: "Cobh Sites",
            userid: "->users.bart"
        }
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
    }
  };
  