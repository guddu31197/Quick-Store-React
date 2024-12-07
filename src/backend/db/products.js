import { casual1, casual2, casual3, formal1, formal2, formal3, sneaker1, sneaker2, sport2, sport3 } from "assets";
import { v4 as uuid } from "uuid";
import './products'

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    image: casual1,
    categoryName: "Casual",
    title: "Robbie Experience ",
    brand: "nike",
    price: 7999,
    rating: 5,
    actualPrice: 9999,
    discount: "33% off"
    },
  {
    _id: uuid(),
    image: casual2,
    categoryName: "Casual",
    title: "Turbo Glide ",
    brand: "puma",
    price: 4999,
    rating: 4,
    actualPrice: 7999,
    discount: "45% off"
  },
  {
    _id: uuid(),
    image: casual3,
    categoryName: "Casual",
    title: "SOCKS Running ",
    brand: "reebok",
    price: 999,
    rating: 2,
    actualPrice: 1999,
    discount: "11% off"
  },
  {
    _id: uuid(),
    image: formal1,
    categoryName: "Formal",
    title: "Flex Experience ",
    brand: "braton",
    price: 2999,
    rating: 4,
    actualPrice: 4999,
    discount: "80% off"
  },
  {
    _id: uuid(),
    image: formal2,
    categoryName: "Formal",
    title: "Socks Stylist ",
    brand: "sparky",
    price: 3999,
    rating: 3,
    actualPrice: 4995,
    discount: "50% off"
  },
  {
    _id: uuid(),
    image: formal3,
    categoryName: "Sneaker",
    title: "Canvas Sneaker ",
    brand: "nike",
    price: 5000,
    rating: 2,
    actualPrice: 7995,
    discount: "66% off"
  },
  {
    _id: uuid(),
    image: sneaker1,
    categoryName: "Sneaker",
    title: "Stylist & Premium ",
    brand: "aadi",
    price: 4500,
    rating: 3.2,
    actualPrice: 5995,
    discount: "73% off"
  },
  {
    _id: uuid(),
    image: sneaker2,
    categoryName: "Sports",
    title: "Flex Experience ",
    brand: "aadi",
    price: 3500,
    rating: 3.2,
    actualPrice: 4999,
    discount: "35% off"
  },
  {
    _id: uuid(),
    image: sport2,
    categoryName: "Sports",
    title: "Hustle V2",
    brand: "aadi",
    price: 4990,
    rating: 3.2,
    actualPrice: 7999,
    discount: "60% off"
  },
  {
    _id: uuid(),
    image: sport3,
    categoryName: "Sports",
    title: "Fit-Man Slip ",
    brand: "asian",
    price: 2300,
    rating: 3.2,
    actualPrice: 4595,
    discount: "35% off"
  },
];
