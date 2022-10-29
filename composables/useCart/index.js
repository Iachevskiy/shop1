import { cloneDeep } from 'lodash';
import { db } from '@/api/base';
import { useCatalog } from '@/composables';

export const useCart = function () {
  const { products } = useCatalog();

  const cart = useState('cart', () => cloneDeep(db.cart[0]));

  const cartItems = computed(() => cart.value.items);
  const cartTotal = computed(() => cart.value.items
    .reduce((sum, item) => {
      const product = products.value.find((product) => product.id === item.id);
      return sum + product.price * item.count;
    }, 0));

  const addToCart = (productId, count) => {
    if (!count) {
      cart.value.items = cart.value.items.filter((item) => item.id !== productId);
      return;
    }
    const hasInCart = cart.value.items.find((item) => item.id === productId);
    if (hasInCart) {
      hasInCart.count = count;
    } else {
      cart.value.items.push({
        id: productId,
        count: 1,
      });
    }
  };

  const removeFromCart = (productId) => {
    const hasInCart = cart.value.items.find((item) => item.id === productId);
    if (hasInCart) {
      hasInCart.count -= 1;
      if (hasInCart.count === 0) {
        cart.value.items = cart.value.items.filter((item) => item.id !== productId);
      }
    }
  };

  return {
    cart,
    cartItems,
    cartTotal,
    addToCart,
    removeFromCart,
  };
};
