export type Price = { label?: string; amount: number }

export type MenuItem = {
  name: string
  signature?: boolean
  description: string
  prices: Price[]
}

export type MenuCategory = {
  id: string
  title: string
  items: MenuItem[]
}

export const menu: MenuCategory[] = [
  {
    id: "burgers",
    title: "Burgers",
    items: [
      {
        name: "Cocain",
        signature: true,
        description: "Buttered bun minced patti & aloo chunks with cheese & jalapeno mushroom sauce",
        prices: [{ amount: 1099 }],
      },
      {
        name: "Mount Everest",
        signature: true,
        description: "Soft long bun hunter grilled buffalo cheese with hot sauce & cucumber",
        prices: [{ amount: 1099 }],
      },
      {
        name: "Addiction",
        signature: true,
        description: "Buttered bun buffalo steak with cheese sprinkle smoky onion",
        prices: [{ amount: 849 }],
      },
      {
        name: "Marijuana",
        signature: true,
        description: "Buttered bun chicken steak cheese butter with mushroom sauce",
        prices: [{ amount: 699 }],
      },
      {
        name: "Chicken Zinger Tower",
        signature: true,
        description: "Buttered bun chicken fried super classic cheese fully loaded with white sauce",
        prices: [{ amount: 649 }],
      },
      {
        name: "Capture",
        description: "Beef smash bar B.Q grilled cheese with cocktail sauce",
        prices: [
          { label: "Single Patti", amount: 599 },
          { label: "Double Patti", amount: 749 },
        ],
      },
      {
        name: "Snacher",
        signature: true,
        description: "Buttered bun buffalo beef steak with cheese & mushroom sauce",
        prices: [{ amount: 999 }],
      },
      {
        name: "Smokiya",
        description: "Buttered bun chicken thai steak cheese with chipotle sauce",
        prices: [{ amount: 699 }],
      },
      {
        name: "Chicken Smash 1 Patty",
        description: "Buttered bun chicken smash patty with regular sauce",
        prices: [{ amount: 349 }],
      },
      {
        name: "Chicken Smash 2 Patty",
        description: "Buttered bun chicken smash patty with regular sauce",
        prices: [{ amount: 449 }],
      },
    ],
  },
  {
    id: "fried",
    title: "Fried",
    items: [
      {
        name: "Chicken Fried - Super Classic",
        description: "Chicken pieces fully loaded with signature sauce",
        prices: [
          { label: "4 pcs", amount: 999 },
          { label: "9 pcs", amount: 1899 },
        ],
      },
      {
        name: "Cheesy Stuff Rolat",
        signature: true,
        description: "Chicken cheese stuff with butter mushroom sauce",
        prices: [
          { label: "6 pcs", amount: 599 },
          { label: "12 pcs", amount: 1199 },
        ],
      },
      {
        name: "Crispy Chicken Tender",
        description: "Crispy tender chicken strips",
        prices: [
          { label: "5 pcs", amount: 999 },
          { label: "10 pcs", amount: 1899 },
        ],
      },
      {
        name: "Niblets Wings",
        description: "Crispy wings sesame sweet & chilli thai sauce",
        prices: [
          { label: "6 pcs", amount: 499 },
          { label: "12 pcs", amount: 799 },
        ],
      },
      {
        name: "Funky Wings",
        description: "Crispy wings sesame with signature sauce",
        prices: [
          { label: "6 pcs", amount: 599 },
          { label: "12 pcs", amount: 1099 },
        ],
      },
    ],
  },
  {
    id: "arabian",
    title: "Arabian",
    items: [
      {
        name: "Khubs Al Laham",
        signature: true,
        description: "Baik beef with lubna sauce & humus vinegar veges",
        prices: [{ amount: 899 }],
      },
      {
        name: "Laham Mandi",
        signature: true,
        description: "Buffalo meat with smoky rice & zaltahar sauce",
        prices: [{ amount: 999 }],
      },
      {
        name: "Khubs Al Dajaj",
        signature: true,
        description: "Baik chicken with lubna sauce & humus vinegar veges",
        prices: [{ amount: 899 }],
      },
      {
        name: "Kabsa Dajaj",
        description: "Chicken pieces white sauce with cheese & signature sauce",
        prices: [{ amount: 799 }],
      },
      {
        name: "Laham Batatus",
        description: "Loaded fries with buffalo chunks cheese & signature sauce",
        prices: [{ amount: 599 }],
      },
      {
        name: "Baik Al Batatus",
        description: "Loaded fries with crispy chicken cheese & signature sauce",
        prices: [{ amount: 499 }],
      },
    ],
  },
  {
    id: "chinese",
    title: "Chinese",
    items: [
      {
        name: "Chicken Chilli Dry",
        description: "With egg fried rice",
        prices: [{ amount: 859 }],
      },
      {
        name: "Beef Chilli",
        description: "With egg fried rice",
        prices: [{ amount: 999 }],
      },
    ],
  },
  {
    id: "pasta",
    title: "Pasta",
    items: [
      {
        name: "Special Pasta",
        signature: true,
        description: "Grilled chicken pasta mushroom jalapeno with signature sauce",
        prices: [{ amount: 799 }],
      },
      {
        name: "Alfredo",
        signature: true,
        description: "Grilled steak pasta with funky sauce",
        prices: [
          { label: "Buffalo", amount: 1049 },
          { label: "Chicken", amount: 749 },
        ],
      },
      {
        name: "Lazania",
        signature: true,
        description: "Chicken chunks cheese with white sauce",
        prices: [
          { label: "Large", amount: 799 },
          { label: "XL", amount: 1199 },
        ],
      },
      {
        name: "Chowmein",
        description: "Smoky chicken grilled veges & chilli sauce",
        prices: [{ amount: 799 }],
      },
    ],
  },
]

export type Deal = {
  number: number
  items: string[]
  price: number
}

export const deals: Deal[] = [
  {
    number: 1,
    items: ["1 Zinger Burger", "Wings 2 pcs", "Nuggets 2 pcs", "Regular Drink"],
    price: 1070,
  },
  {
    number: 2,
    items: ["Laham Dukhaan Shawarma", "Wings 2 pcs", "Regular Drink"],
    price: 1099,
  },
  {
    number: 3,
    items: [
      "1 Smokeya Burger (Chicken Steak)",
      "1 Snacher (Beef Burger)",
      "Stuffed Rolad 6 pcs",
      "Nablet 6 pcs",
      "Nuggets 6 pcs",
      "Drink 500ml",
    ],
    price: 2349,
  },
  {
    number: 4,
    items: [
      "1 Snacher (Beef Burger)",
      "1 Zinger Burger",
      "2 Chicken Super Classic",
      "Stuff Chicken Rolad 4 pcs",
      "1 Baik Al Batatus",
      "Drink 500ml",
    ],
    price: 2699,
  },
  {
    number: 5,
    items: [
      "1 Snacher (Beef Burger)",
      "Capture Single Patty Burger",
      "Chicken Tender 6 pcs",
      "Chicken Nablet 6 pcs",
      "Stuff Chicken Rolat 6 pcs",
      "Drink 500ml",
    ],
    price: 2549,
  },
  {
    number: 6,
    items: ["1 Zinger Burger", "2 Funky Wings", "Stuff Rolat", "2 Chicken Super Classic", "Regular Drink"],
    price: 1899,
  },
  {
    number: 7,
    items: ["1 Fried Rice with Chicken Manchurian", "1 Chowmein", "4 Chicken Super Classic", "Drink 500ml"],
    price: 2599,
  },
]

export const contact = {
  name: "Al Quds",
  arabic: "القدس",
  phone: "0312-5757800",
  phoneHref: "tel:+923125757800",
  whatsappNumber: "923125757800",
  address: "Dhamyal Road, Main Harley Street Chowk, Near Rose Marriage Hall, Rawalpindi",
  hours: "Open Daily · 11:00 AM till late",
  rating: "4.9",
  reviews: "163",
}
