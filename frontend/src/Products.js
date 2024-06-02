
import bron from "./assets/images/bron.png";
import silver from "./assets/images/silver.png";
import gold from "./assets/images/gold.png";


const arrayProducts = [
  {
    id: "price_1PMKSiHfUgXPY5AObtfiPJ8r",
    name: "Entrada Bronce",
    price: 150.99,
    image: bron,
  },
  {
    id: "price_1PMKT0HfUgXPY5AO2h13o7uQ",
    name: "Entrada Plata",
    price: 250.99,
    image: silver,
  },
  {
    id: "price_1PMKTIHfUgXPY5AO5E3cixfe",
    name: "Entrada Oro",
    price: 350.99,
    image: gold,
  },
];
function getProductData(id) {
  let productData = arrayProducts.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("Product not found for id: " + id);
    return undefined;
  }

  return productData;
}

export { arrayProducts, getProductData };
