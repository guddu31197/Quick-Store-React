import { v4 as uuid } from "uuid";
import { casual1, formal1, sport2, sneaker1 } from "assets";


/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Sports",
    Image: sport2,
  },
  {
    _id: uuid(),
    categoryName: "Formal",
    Image: formal1,
  },
  {
    _id: uuid(),
    categoryName: "Sneaker",
    Image: sneaker1,
  },
  {
    _id: uuid(),
    categoryName: "Casual",
    Image: casual1,
  },
 
];
