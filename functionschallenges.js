// // Problem: Calculate Discount
// //  *
// //  * Description:
// //  * Write a JavaScript function that takes in the original price of a product
// //  * and a discount percentage as parameters. The function should calculate the
// //  * discounted price and return it. The discounted price is calculated by
// //  * subtracting the discount amount from the original price. For example,
// //  * if the original price is $100 and the discount percentage is 20%,
// //  * the discounted price would be $80. Round the result to two decimal places.
// //  */

// function calculateDiscountedPrice(originalPrice, discountPercentage) {
//   // TODO: Write your solution here
//   let discountedPrice =
//     originalPrice - originalPrice * (discountPercentage / 100);
//   return discountedPrice.toFixed(2);
// }

// console.log(calculateDiscountedPrice(100, 20)); // should log 80
// console.log(calculateDiscountedPrice(50, 10)); // should log 45
// console.log(calculateDiscountedPrice(75.5, 15)); // should log 64.18

// // Problem 2 : Calculate Final Price
// //  *
// //  * Description:
// //  * Write a JavaScript function that takes in the original price of a product,
// //  * an optional discount percentage, and an optional tax percentage as parameters.
// //  * The function should calculate the final price of the product after applying
// //  * the discount (if provided) and adding the tax (if provided). If no discount is
// //  * provided, the default discount percentage should be 0%. If no tax is provided,
// //  * the default tax percentage should be 0%.
// //  *
// //  * Implement the function calculateFinalPrice(originalPrice, discountPercentage = 0, taxPercentage = 0)
// //  * to calculate the final price of the product. Round the result to two decimal places.
// //  */

// function calculateFinalPrice(
//   originalPrice,
//   discountPercentage = 0,
//   taxPercentage = 0
// ) {
//   // TODO: Write your solution here
//   let discountedPrice =
//     originalPrice -
//     originalPrice * (discountPercentage / 100) +
//     (taxPercentage / 100) * originalPrice;
//   return discountedPrice.toFixed(2);
// }

// console.log(calculateFinalPrice(100)); // should log 100
// console.log(calculateFinalPrice(100, 10)); // should log 90
// console.log(calculateFinalPrice(100, 10, 8)); // should log 97.2

// // Problem 3: Filter Products
// //  *
// //  * Description:
// //  * You have an array of product objects with the following structure:
// //  *
// //  * {
// //  *   name: 'Product Name',
// //  *   price: 9.99,
// //  *   category: 'Category'
// //  * }
// //  *
// //  * Implement a JavaScript function filterProducts(products, category) that
// //  * takes in an array of product objects and a category as parameters. The
// //  * function should filter the products based on the given category and return
// //  * an array containing only the products belonging to that category.
// //  */

function filterProducts(products, category) {
  // TODO: Write your solution here
  let categorizedArray = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].category === category) {
      categorizedArray.push(products[i]);
    }
  }
  return categorizedArray;
}

const products = [
  { name: "Product 1", price: 9.99, category: "Electronics" },
  { name: "Product 2", price: 19.99, category: "Clothing" },
  { name: "Product 3", price: 14.99, category: "Electronics" },
  { name: "Product 4", price: 29.99, category: "Home" },
  { name: "Product 5", price: 39.99, category: "Electronics" },
];

filterProducts;
console.log(filterProducts(products, "Electronics")); // should log an array with products 1, 3, and 5
console.log(filterProducts(products, "Clothing")); // should log an array with product 2
console.log(filterProducts(products, "Home")); // should log an array with product 4
