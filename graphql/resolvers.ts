const product = require("../model/pruductModel")
const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const resolvers = {
  Query: {
    books: () => books,
    getProduct: async () => {
      return await product.find();
    },
  },
};

module.exports = resolvers;