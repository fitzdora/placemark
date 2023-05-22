export const seedData = {
    users: {
      _model: "User",
      homer: {
        firstname: "Homer",
        lastname: "Simpson",
        email: "homer@simpson.com",
        password: "secret"
      },
      marge: {
        firstname: "Marge",
        lastname: "Simpson",
        email: "marge@simpson.com",
        password: "secret"
      },
      bart: {
        firstname: "Bart",
        lastname: "Simpson",
        email: "bart@simpson.com",
        password: "secret"
      }
    },
    sites: {
        _model: "Site",
        cobh: {
            title: "Cobh Sites",
            userid: "->users.bart"
        },
        fota: {
            title: "Fota Island",
            userid: "->users.marge"
        },
        midleton: {
          title: "Cork City",
          userid: "->users.homer"
      }
    },
    guides: {
      _model: "Guide",
      lisa: {
        firstname: "Lisa",
        lastname: "Simpson",
        office: "Heritage Officer",
      },
      homer: {
        firstname: "Homer",
        lastname: "Simpson",
        office: "Administrator",
      },
      bobby: {
        firstname: "Bobby",
        lastname: "Simpson",
        office: "Tour Guide",
      },
    },
    addSites: {
      _model: "addSite",
      one: {
        siteid: "->sites.fota",
        guideid: "->guides.homer",
      },
      two: {
        siteid: "->sites.cobh",
        guideid: "->guides.lisa",
      },
      three: {
        siteid: "->sites.midleton",
        guideid: "->guides.bobby",
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
  