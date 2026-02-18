// src/data/products.ts

export type Product = {
  id: number;
  slug: string; // Para URLs limpias
  name: string;
  brand: string;
  price: number; // en quetzales
  image: string; // ruta dentro de /public
  description: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: 1,
    slug: "nike-air-example",
    name: "Nike Air Example",
    brand: "Nike",
    price: 999,
    image: "/products/air.png",
    description:
      "Sneaker original Nike, cómodo para uso diario. Entrega en Guatemala.",
    featured: true,
  },
  {
    id: 2,
    slug: "adidas-urban",
    name: "Adidas Urban",
    brand: "Adidas",
    price: 899,
    image: "/products/adidas.png",
    description:
      "Modelo urbano Adidas, diseño moderno y materiales premium.",
  },
  {
    id: 3,
    slug: "puma-street",
    name: "Puma Street",
    brand: "Puma",
    price: 799,
    image: "/products/puma.png",
    description:
      "Sneaker ligero y versátil, ideal para outfit street.",
  },
  {
    id: 4,
    slug: "jordan-retro-1",
    name: "Jordan Retro 1",
    brand: "Jordan",
    price: 1499,
    image: "/products/jordan-retro-1.png",
    description:
      "Clásico Jordan Retro 1, original y edición limitada.",
  },
  {
    id: 5,
    slug: "nike-dunk-low",
    name: "Nike Dunk Low",
    brand: "Nike",
    price: 1299,
    image: "/products/nike-dunk-low.png",
    description:
      "Nike Dunk Low, diseño icónico y muy solicitado.",
  },
  {
    id: 6,
    slug: "new-balance-550",
    name: "New Balance 550",
    brand: "New Balance",
    price: 1199,
    image: "/products/new-balance-550.png",
    description:
      "New Balance 550, estilo retro con comodidad premium.",
  },
  {
    id: 7,
    slug: "adidas-forum-low",
    name: "Adidas Forum Low",
    brand: "Adidas",
    price: 1099,
    image: "/products/adidas-forum-low.png",
    description:
      "Adidas Forum Low, diseño clásico con detalles modernos.",
  },
  {
    id: 8,
    slug: "nike-air-force-1",
    name: "Nike Air Force 1",
    brand: "Nike",
    price: 1399,
    image: "/products/nike-air-force-1.png",
    description:
      "Nike Air Force 1 original, uno de los más vendidos.",
  },
  {
    id: 9,
    slug: "puma-rs-x",
    name: "Puma RS-X",
    brand: "Puma",
    price: 999,
    image: "/products/puma-rs-x.png",
    description:
      "Puma RS-X con diseño llamativo y máxima comodidad.",
  },
  {
    id: 10,
    slug: "jordan-mid-black-red",
    name: "Jordan Mid Black Red",
    brand: "Jordan",
    price: 1599,
    image: "/products/jordan-mid-black-red.png",
    description:
      "Jordan Mid Black Red, combinación clásica y elegante.",
  },
];
