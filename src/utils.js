export function sayHello() {
  console.log("Hello from utils.js");
}

// Reto curso

function decreaseQuantity(id) {
  const updatedCart = cart.map(item => {
    if (item.id === id && item.quantity > MIN_ITEMS ) {
      return {
      ...item,
      quantity: item.quantity - 1
    }
    }
    return item
  });
setCart(updatedCart)
}

onclick({() => decreaseQuantity(id)})
