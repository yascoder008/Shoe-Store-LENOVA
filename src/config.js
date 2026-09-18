const shoes = [
  {
    id: 1,
    name: "Air Max Pulse",
    brand: "Nike",
    category: "Sneakers",
    price: 150,
    image: "https://i.pinimg.com/1200x/66/10/43/6610430a2f6a1281c4a8335e01b1e272.jpg",
    isNew: true,
    rating: 4.8,
    stock: 15,
    sizes: [38, 39, 40, 41, 42, 43],
    colors: ["Black", "White"],
    description: "A modern sneaker combining everyday comfort with a bold streetwear look."
  },

  {
    id: 2,
    name: "Ultraboost Light",
    brand: "Adidas",
    category: "Sneakers",
    price: 180,
    image: "https://i.pinimg.com/1200x/be/2b/8e/be2b8e393f5e504318952f01e7b24072.jpg",
    isNew: true,
    rating: 4.9,
    stock: 8,
    sizes: [39, 40, 41, 42, 43, 44],
    colors: ["White", "Black"],
    description: "Lightweight running-inspired sneakers designed for all-day comfort."
  },

  {
    id: 3,
    name: "Suede Classic XXI",
    brand: "Puma",
    category: "Casual",
    price: 95,
    image: "https://i.pinimg.com/1200x/75/87/50/75875099c1d1f41f051b33e135fcad4c.jpg",
    isNew: false,
    rating: 4.5,
    stock: 23,
    sizes: [38, 39, 40, 41, 42],
    colors: ["Black", "Beige"],
    description: "A timeless suede sneaker perfect for casual everyday outfits."
  },

  {
    id: 4,
    name: "Bradley Low",
    brand: "Lacoste",
    category: "Casual",
    price: 120,
    image: "https://i.pinimg.com/736x/e6/43/a4/e643a49a4783e9824c13d84ba015fc3c.jpg",
    isNew: false,
    rating: 4.4,
    stock: 12,
    sizes: [39, 40, 41, 42, 43],
    colors: ["White", "Navy"],
    description: "Clean and minimal casual shoes with a classic silhouette."
  },

  {
    id: 5,
    name: "Classic Leather",
    brand: "Reebok",
    category: "Casual",
    price: 90,
    image: "https://i.pinimg.com/1200x/a3/df/8b/a3df8b6842c1328920ec5a40e8aecc58.jpg",
    isNew: true,
    rating: 4.6,
    stock: 18,
    sizes: [38, 39, 40, 41, 42, 43],
    colors: ["White", "Cream"],
    description: "Minimal leather sneakers made for effortless everyday style."
  },

  {
    id: 6,
    name: "Stan Smith",
    brand: "Adidas",
    category: "Casual",
    price: 110,
    image: "https://i.pinimg.com/1200x/18/96/eb/1896ebff97380a69729e828e97127214.jpg",
    isNew: false,
    rating: 4.7,
    stock: 30,
    sizes: [38, 39, 40, 41, 42],
    colors: ["White", "Green"],
    description: "An iconic low-top sneaker with a clean and versatile design."
  },

  {
    id: 7,
    name: "Air Force 1 '07",
    brand: "Nike",
    category: "Sneakers",
    price: 130,
    image: "https://i.pinimg.com/1200x/48/2b/ab/482bab4627c021d872ce9123609a90cf.jpg",
    isNew: false,
    rating: 4.9,
    stock: 6,
    sizes: [38, 39, 40, 41, 42, 43, 44],
    colors: ["White", "Black"],
    description: "A legendary sneaker with a clean silhouette and everyday versatility."
  },

  {
    id: 8,
    name: "Forum Low",
    brand: "Adidas",
    category: "Sneakers",
    price: 115,
    image: "https://i.pinimg.com/1200x/bc/dc/47/bcdc4793b446e8075161f2d5b5d2f11b.jpg",
    isNew: true,
    rating: 4.6,
    stock: 14,
    sizes: [39, 40, 41, 42, 43],
    colors: ["White", "Blue"],
    description: "A retro-inspired sneaker bringing classic basketball style to everyday looks."
  },

  {
    id: 9,
    name: "Bradley Mid Boot",
    brand: "Timberland",
    category: "Boots",
    price: 190,
    image: "https://i.pinimg.com/736x/cf/a1/d0/cfa1d0ebfb36d3847c7c2506cba21754.jpg",
    isNew: true,
    rating: 4.8,
    stock: 9,
    sizes: [39, 40, 41, 42, 43, 44],
    colors: ["Brown", "Black"],
    description: "Durable mid-height boots designed for comfort and outdoor wear."
  },

  {
    id: 10,
    name: "Chelsea Leather Boot",
    brand: "Clarks",
    category: "Formal",
    price: 175,
    image: "https://i.pinimg.com/1200x/57/6f/8e/576f8e65eea223dd312b5ad8e6e3f07b.jpg",
    isNew: false,
    rating: 4.5,
    stock: 11,
    sizes: [39, 40, 41, 42, 43],
    colors: ["Black", "Brown"],
    description: "Elegant leather Chelsea boots suitable for formal and smart-casual outfits."
  },

  {
    id: 11,
    name: "Oxford Classic",
    brand: "Hugo Boss",
    category: "Formal",
    price: 220,
    image: "https://i.pinimg.com/1200x/1a/07/de/1a07de84de1c54fb8ef68322b4e4593c.jpg",
    isNew: false,
    rating: 4.8,
    stock: 7,
    sizes: [40, 41, 42, 43, 44],
    colors: ["Black", "Dark Brown"],
    description: "Refined Oxford shoes crafted for sophisticated formal occasions."
  },

  {
    id: 12,
    name: "Derby Premium",
    brand: "Clarks",
    category: "Formal",
    price: 160,
    image: "https://i.pinimg.com/736x/0a/70/cb/0a70cb8ad2a0815ec96f33c1de003a9d.jpg",
    isNew: true,
    rating: 4.7,
    stock: 16,
    sizes: [39, 40, 41, 42, 43],
    colors: ["Black", "Brown"],
    description: "Classic Derby shoes offering a polished look with comfortable construction."
  },

  {
    id: 13,
    name: "Combat Leather Boot",
    brand: "Dr. Martens",
    category: "Boots",
    price: 210,
    image: "https://i.pinimg.com/1200x/56/62/5a/56625a13310bc6cc78ff4c30826242ec.jpg",
    isNew: false,
    rating: 4.9,
    stock: 5,
    sizes: [38, 39, 40, 41, 42, 43],
    colors: ["Black", "Brown"],
    description: "Bold leather boots with a durable construction and distinctive style."
  },

  {
    id: 14,
    name: "Chelsea Suede",
    brand: "Clarks",
    category: "Boots",
    price: 185,
    image: "https://i.pinimg.com/1200x/98/04/2c/98042cbba9d77d984a0cb970669f71f2.jpg",
    isNew: true,
    rating: 4.6,
    stock: 13,
    sizes: [39, 40, 41, 42, 43],
    colors: ["Beige", "Dark Brown"],
    description: "Elegant suede Chelsea boots combining timeless style and everyday comfort."
  },

  {
    id: 15,
    name: "Court Vision Low",
    brand: "Nike",
    category: "Sneakers",
    price: 100,
    image: "https://i.pinimg.com/1200x/ac/97/5f/ac975f339264fa897e8e3e19de4f67b1.jpg",
    isNew: false,
    rating: 4.4,
    stock: 21,
    sizes: [38, 39, 40, 41, 42, 43],
    colors: ["White", "Black"],
    description: "Retro basketball-inspired sneakers with a clean modern finish."
  },

  {
    id: 16,
    name: "574 Core",
    brand: "New Balance",
    category: "Casual",
    price: 105,
    image: "https://i.pinimg.com/736x/df/5b/91/df5b91228d5ff4ceea455811a0c8f0cd.jpg",
    isNew: false,
    rating: 4.8,
    stock: 17,
    sizes: [38, 39, 40, 41, 42, 43],
    colors: ["Grey", "Navy"],
    description: "Comfortable everyday sneakers with a classic retro running aesthetic."
  },

  {
    id: 17,
    name: "Grand Court 2.0",
    brand: "Adidas",
    category: "Casual",
    price: 85,
    image: "https://i.pinimg.com/1200x/c0/e9/56/c0e956ad051f2c59ea48961d55dd0c22.jpg",
    isNew: true,
    rating: 4.3,
    stock: 26,
    sizes: [38, 39, 40, 41, 42],
    colors: ["White", "Pink"],
    description: "Simple court-inspired shoes designed for casual everyday outfits."
  },

  {
    id: 18,
    name: "Bradshaw Loafer",
    brand: "Aldo",
    category: "Formal",
    price: 145,
    image: "https://i.pinimg.com/1200x/5f/e0/f6/5fe0f668555fd439eb907735bb260550.jpg",
    isNew: false,
    rating: 4.5,
    stock: 10,
    sizes: [39, 40, 41, 42, 43],
    colors: ["Black", "Brown"],
    description: "Sophisticated loafers offering an elegant alternative to classic lace-ups."
  },

  {
    id: 19,
    name: "Hiker Waterproof",
    brand: "Timberland",
    category: "Boots",
    price: 230,
    image: "https://i.pinimg.com/1200x/4e/72/85/4e7285938767628bb477defa7d7b027c.jpg",
    isNew: true,
    rating: 4.9,
    stock: 4,
    sizes: [40, 41, 42, 43, 44],
    colors: ["Brown", "Black"],
    description: "Rugged waterproof boots built for outdoor adventures and cold weather."
  },

  {
    id: 20,
    name: "Gazelle Indoor",
    brand: "Adidas",
    category: "Sneakers",
    price: 125,
    image: "https://i.pinimg.com/1200x/49/95/c8/4995c811ea708d768d8bc717af206a57.jpg",
    isNew: false,
    rating: 4.7,
    stock: 19,
    sizes: [38, 39, 40, 41, 42, 43],
    colors: ["Red", "White"],
    description: "A vintage-inspired sneaker with a distinctive retro look."
  }
];

export default shoes;