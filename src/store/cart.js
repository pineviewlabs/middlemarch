import { defineStore } from 'pinia'

export const useCart = defineStore('cart-store', {
  state: () => {
    return {
      cart: []
    }
  },

  getters: {
    getContents(state) {
      const {cart} = state;

      return cart.reduce((contents, item) => {
        const index = contents.findIndex(added => added.isbn13 === item.isbn13);
        if (index > -1 ) {
          ++contents[index].quantity;

          return contents;
        }

        item.quantity = 1;
        contents.push(item);

        return contents;
      }, []);
    },

    count(state) {
      return state.cart.length;
    },

    total(state) {
      const {cart} = state;

      return cart.reduce((total, item) => {
        total = total + item.price;

        return total;
      }, 0);
    }
  },

  actions: {
    addToCart(book) {
      this.cart = this.cart.slice(0);
      this.cart.push(book);
    }
  }
})