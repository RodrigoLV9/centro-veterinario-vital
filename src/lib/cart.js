const CART_KEY = 'vital-petshop-cart';

function getCart() {
  try {
    const stored = localStorage.getItem(CART_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent('cart-update', { detail: items }));
}

export const cart = {
  items() {
    return getCart();
  },

  total() {
    return getCart().reduce((sum, item) => sum + item.price * item.quantity, 0);
  },

  count() {
    return getCart().reduce((sum, item) => sum + item.quantity, 0);
  },

  add(product) {
    const items = getCart();
    const existing = items.find(item => item.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        imagePath: product.imagePath,
        quantity: 1
      });
    }
    saveCart(items);
  },

  remove(productId) {
    saveCart(getCart().filter(item => item.id !== productId));
  },

  updateQuantity(productId, quantity) {
    if (quantity <= 0) {
      cart.remove(productId);
      return;
    }
    const items = getCart();
    const item = items.find(i => i.id === productId);
    if (item) {
      item.quantity = quantity;
      saveCart(items);
    }
  },

  clear() {
    saveCart([]);
  }
};

export function formatPrice(price) {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0
  }).format(price);
}

if (typeof window !== 'undefined') {
  window.cart = cart;
}