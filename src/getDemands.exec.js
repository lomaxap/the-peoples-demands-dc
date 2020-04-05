const fetch = require("isomorphic-fetch");

module.exports = async () => {
  const demands = await fetch("https://jsonplaceholder.typicode.com/posts");
  return demands.json();
};
