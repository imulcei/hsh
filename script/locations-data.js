const locationsData = {
    1: {
        title: "Maison atypique - Cannes",
        images: ["resources/img/10.png", "resources/img/10-in.png"],
        ownerImage: "resources/img/philippe.jpg",
        ownerName: "Phillipe Poirier",
        rating: 5,
        description: "Mauris interdum lacinia quam id maximus. Maecenas vel turpis aliquam, vestibulum enim in, vestibulum neque. Vivamus viverra tristique eros a bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque ornare efficitur sapien. Maecenas nec nisl ac lectus lacinia sagittis. Integer fringilla sit amet ipsum ac finibus. Pellentesque in vestibulum nisl. ",
        equipments: ["WiFi", "Cuisine équipée", "Terrasse", "Climatisation"]
    },
    2: {
        title: "Maison pavillonaire - Blagnac",
        images: ["resources/img/1.png", "resources/img/1-in.png"],
        ownerImage: "resources/img/marie.jpg",
        ownerName: "Marie Dupont",
        rating: 4,
        description: "Mauris interdum lacinia quam id maximus. Maecenas vel turpis aliquam, vestibulum enim in, vestibulum neque. Vivamus viverra tristique eros a bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque ornare efficitur sapien. Maecenas nec nisl ac lectus lacinia sagittis. Integer fringilla sit amet ipsum ac finibus. Pellentesque in vestibulum nisl. ",
        equipments: ["Chauffage au sol", "Cuisine équipée", "Jardin", "Garage"]
    },
    3: {
        title: "Villa moderne - Nice",
        images: ["resources/img/9.png", "resources/img/9-in.png"],
        ownerImage: "resources/img/isabella.jpg",
        ownerName: "Isabella Calvez",
        rating: 4.5,
        description: "Mauris interdum lacinia quam id maximus. Maecenas vel turpis aliquam, vestibulum enim in, vestibulum neque. Vivamus viverra tristique eros a bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque ornare efficitur sapien. Maecenas nec nisl ac lectus lacinia sagittis. Integer fringilla sit amet ipsum ac finibus. Pellentesque in vestibulum nisl. ",
        equipments: ["Climatisation", "Piscine", "Jardin", "Fibre internet"]
    },
    4: {
        title: "Penthouse - Paris",
        images: ["resources/img/2.png", "resources/img/2-in.png"],
        ownerImage: "resources/img/henri.jpg",
        ownerName: "Henri de la Cour",
        rating: 5,
        description: "Mauris interdum lacinia quam id maximus. Maecenas vel turpis aliquam, vestibulum enim in, vestibulum neque. Vivamus viverra tristique eros a bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque ornare efficitur sapien. Maecenas nec nisl ac lectus lacinia sagittis. Integer fringilla sit amet ipsum ac finibus. Pellentesque in vestibulum nisl. ",
        equipments: ["Terrasse", "WiFi", "Salle de sport", "Vue Panoramique"]
    },
    5: {
        title: "Chalet à la montagne - Chambery",
        images: ["resources/img/8.png", "resources/img/8-in.png"],
        ownerImage: "resources/img/paul.jpg",
        ownerName: "Paul Masson",
        rating: 5,
        description: "Mauris interdum lacinia quam id maximus. Maecenas vel turpis aliquam, vestibulum enim in, vestibulum neque. Vivamus viverra tristique eros a bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque ornare efficitur sapien. Maecenas nec nisl ac lectus lacinia sagittis. Integer fringilla sit amet ipsum ac finibus. Pellentesque in vestibulum nisl. ",
        equipments: ["Vue sur la chaîne de montagne", "Abri de jardin", "Garage", "Isolé"]
    },
    6: {
        title: "Beach House - Saintes-Maries-de-la-Mer",
        images: ["resources/img/3.png", "resources/img/3-in.png"],
        ownerImage: "resources/img/luc.jpg",
        ownerName: "Luc Marc",
        rating: 5,
        description: "Mauris interdum lacinia quam id maximus. Maecenas vel turpis aliquam, vestibulum enim in, vestibulum neque. Vivamus viverra tristique eros a bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque ornare efficitur sapien. Maecenas nec nisl ac lectus lacinia sagittis. Integer fringilla sit amet ipsum ac finibus. Pellentesque in vestibulum nisl. ",
        equipments: ["Vue sur la chaîne de montagne", "Abri de jardin", "Garage", "Isolé"]
    },
    7: {
        title: "Maison à la campagne - Chartres",
        images: ["resources/img/7.png", "resources/img/7-in.png"],
        ownerImage: "resources/img/vladimir.jpg",
        ownerName: "Vladimir Piviet",
        rating: 3,
        description: "Mauris interdum lacinia quam id maximus. Maecenas vel turpis aliquam, vestibulum enim in, vestibulum neque. Vivamus viverra tristique eros a bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque ornare efficitur sapien. Maecenas nec nisl ac lectus lacinia sagittis. Integer fringilla sit amet ipsum ac finibus. Pellentesque in vestibulum nisl. ",
        equipments: ["Calme", "Jardin", "Garage", "Piscine"]
    },
    8: {
        title: "Appartement luxueux - Paris Centre",
        images: ["resources/img/4.png", "resources/img/4-in.png"],
        ownerImage: "resources/img/beatrice.jpg",
        ownerName: "Béatrice Martin",
        rating: 4,
        description: "Mauris interdum lacinia quam id maximus. Maecenas vel turpis aliquam, vestibulum enim in, vestibulum neque. Vivamus viverra tristique eros a bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque ornare efficitur sapien. Maecenas nec nisl ac lectus lacinia sagittis. Integer fringilla sit amet ipsum ac finibus. Pellentesque in vestibulum nisl. ",
        equipments: ["Calme", "Jardin", "Garage", "Piscine"]
    },
    9: {
        title: "Villa moderne - Lyon",
        images: ["resources/img/6.png", "resources/img/6-in.png"],
        ownerImage: "resources/img/claude.jpg",
        ownerName: "Claude Sarcelles",
        rating: 4,
        description: "Mauris interdum lacinia quam id maximus. Maecenas vel turpis aliquam, vestibulum enim in, vestibulum neque. Vivamus viverra tristique eros a bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque ornare efficitur sapien. Maecenas nec nisl ac lectus lacinia sagittis. Integer fringilla sit amet ipsum ac finibus. Pellentesque in vestibulum nisl. ",
        equipments: ["Moderne", "Garage", "Jardin", "Climatisation"]
    },
    10: {
        title: "Maison de village - Bordeaux",
        images: ["resources/img/5.png", "resources/img/5-in.png"],
        ownerImage: "resources/img/gerard.jpg",
        ownerName: "Gérard Jourdain",
        rating: 4,
        description: "Mauris interdum lacinia quam id maximus. Maecenas vel turpis aliquam, vestibulum enim in, vestibulum neque. Vivamus viverra tristique eros a bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque ornare efficitur sapien. Maecenas nec nisl ac lectus lacinia sagittis. Integer fringilla sit amet ipsum ac finibus. Pellentesque in vestibulum nisl. ",
        equipments: ["Spacieuse", "Garage", "Jardin", "WiFi"]
    },
    11: {
        title: "Loft lumineux - Marseille",
        images: ["resources/img/11.png", "resources/img/11-in.png"],
        ownerImage: "resources/img/julia.jpg",
        ownerName: "Julia Ramirez",
        rating: 4,
        description: "Mauris interdum lacinia quam id maximus. Maecenas vel turpis aliquam, vestibulum enim in, vestibulum neque. Vivamus viverra tristique eros a bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque ornare efficitur sapien. Maecenas nec nisl ac lectus lacinia sagittis. Integer fringilla sit amet ipsum ac finibus. Pellentesque in vestibulum nisl. ",
        equipments: ["Lumineux", "Naturel", "Vue sur la ville", "WiFi"]
    },
    12: {
        title: "Maison en bord de mer - Saint-Brieuc",
        images: ["resources/img/12.png", "resources/img/12-in.png"],
        ownerImage: "resources/img/fabien.jpg",
        ownerName: "Fabien Thomson",
        rating: 4,
        description: "Mauris interdum lacinia quam id maximus. Maecenas vel turpis aliquam, vestibulum enim in, vestibulum neque. Vivamus viverra tristique eros a bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque ornare efficitur sapien. Maecenas nec nisl ac lectus lacinia sagittis. Integer fringilla sit amet ipsum ac finibus. Pellentesque in vestibulum nisl. ",
        equipments: ["Bord de mer", "Garage", "Terrasse", "WiFi"]
    },
};