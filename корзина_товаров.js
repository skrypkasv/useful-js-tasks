/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
  items: [],

  getItems() {
    return this.items;
  },

  add(product) {
    const { items } = this;

    for (const item of items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }

    const newProduct = {
      ...product,
      quantity: 1,
    };

    this.items.push(newProduct);
  },

  remove(productName) {
    const { items } = this;
    for (let i = 0; i < items.length; i += 1) {
      const { name } = items[i];
      if (productName === name) {
        items.splice(i, 1);
      }
    }
    // for (const item of items) {
    //   if (productName === item.name) {
    //     items.splice(items.indexOf(item), 1);
    //   }
    // }
  },

  clear() {
    this.items = [];
  },

  countTotalPrice() {
    const { items } = this;
    let total = 0;
    for (const { price, quantity } of items) {
      total += price * quantity;
    }
    return total;
  },

  increaseQuantity(productName) {
    const { items } = this;
    for (const item of items) {
      const { name } = item;
      if (productName === name) {
        item.quantity += 1;
      }
    }
  },

  decreaseQuantity(productName) {
    const { items } = this;
    for (const item of items) {
      const { name } = item;
      if (productName === name) {
        item.quantity -= 1;
      }
    }
  },
};

console.log(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍇', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });

console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());

cart.remove('🍇');
console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());

console.log('Total: ', cart.countTotalPrice());

cart.increaseQuantity('🍎');
cart.increaseQuantity('🍎');
cart.increaseQuantity('🍎');
cart.increaseQuantity('🍎');
cart.increaseQuantity('🍋');
cart.increaseQuantity('🍋');
cart.decreaseQuantity('🍎');
cart.decreaseQuantity('🍎');
cart.decreaseQuantity('🍋');
console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());
