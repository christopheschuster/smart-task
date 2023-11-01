/*
Filename: sophisticated_program.js
Description: This code is a sophisticated program that simulates an online shopping platform with various features and functionalities.
*/

// Constants
const TAX_RATE = 0.15;
const SHIPPING_COST = 5.99;

// Array of products
const products = [
  {
    id: 1,
    name: "Product 1",
    price: 9.99,
    quantity: 5
  },
  {
    id: 2,
    name: "Product 2",
    price: 14.99,
    quantity: 3
  },
  {
    id: 3,
    name: "Product 3",
    price: 19.99,
    quantity: 7
  },
  // Add more products...
];

// Shopping cart object
let cart = [];

// Function to add a product to the cart
function addToCart(productId, quantity) {
  const product = products.find(p => p.id === productId);
  
  if (product && product.quantity >= quantity) {
    const existingItem = cart.find(item => item.productId === productId);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ productId, quantity });
    }
    
    product.quantity -= quantity;
    console.log("Product added to cart successfully.");
  } else {
    console.log("Product not available or insufficient quantity.");
  }
}

// Function to remove a product from the cart
function removeFromCart(productId, quantity) {
  const existingItem = cart.find(item => item.productId === productId);
  
  if (existingItem && existingItem.quantity >= quantity) {
    const product = products.find(p => p.id === productId);
    
    existingItem.quantity -= quantity;
    product.quantity += quantity;
    
    if (existingItem.quantity === 0) {
      cart = cart.filter(item => item.productId !== productId);
    }
    
    console.log("Product removed from cart successfully.");
  } else {
    console.log("Product not found in cart or insufficient quantity.");
  }
}

// Function to calculate the total price of items in the cart
function calcTotalPrice() {
  let totalPrice = 0;
  
  cart.forEach(item => {
    const product = products.find(p => p.id === item.productId);
    totalPrice += product.price * item.quantity;
  });
  
  return totalPrice;
}

// Function to calculate taxes
function calcTaxes(amount) {
  return amount * TAX_RATE;
}

// Function to calculate the final total including taxes and shipping cost
function calcFinalTotal() {
  const subtotal = calcTotalPrice();
  const taxes = calcTaxes(subtotal);
  return subtotal + taxes + SHIPPING_COST;
}

// Function to display the shopping cart summary
function displayCartSummary() {
  console.log("--- Shopping Cart Summary ---");
  
  cart.forEach(item => {
    const product = products.find(p => p.id === item.productId);
    console.log(
      `"${product.name}", Quantity: ${item.quantity}, Price: $${product.price.toFixed(2)} each`
    );
  });
  
  console.log(`Subtotal: $${calcTotalPrice().toFixed(2)}`);
  console.log(`Taxes: $${calcTaxes(calcTotalPrice()).toFixed(2)}`);
  console.log(`Shipping Cost: $${SHIPPING_COST.toFixed(2)}`);
  console.log(`Total: $${calcFinalTotal().toFixed(2)}`);
}

// Usage examples
addToCart(1, 2);
addToCart(2, 1);
addToCart(3, 4);
removeFromCart(1, 1);
displayCartSummary();