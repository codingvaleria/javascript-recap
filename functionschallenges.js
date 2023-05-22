// Problem: Calculate Discount
//  *
//  * Description:
//  * Write a JavaScript function that takes in the original price of a product
//  * and a discount percentage as parameters. The function should calculate the
//  * discounted price and return it. The discounted price is calculated by
//  * subtracting the discount amount from the original price. For example,
//  * if the original price is $100 and the discount percentage is 20%,
//  * the discounted price would be $80. Round the result to two decimal places.
//  */

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  // TODO: Write your solution here
  let discountedPrice =
    originalPrice - originalPrice * (discountPercentage / 100);
  return discountedPrice.toFixed(2);
}

console.log(calculateDiscountedPrice(100, 20)); // should log 80
console.log(calculateDiscountedPrice(50, 10)); // should log 45
console.log(calculateDiscountedPrice(75.5, 15)); // should log 64.18