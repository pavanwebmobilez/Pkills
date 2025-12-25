import { Injectable, signal } from "@angular/core";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  isVeg: boolean;
  weight: string;
}

@Injectable({
  providedIn: "root",
})
export class CartService {
  private cartItems = signal<CartItem[]>([]);
  private isCartOpen = signal(false);

  // Expose as readonly signals
  readonly items = this.cartItems.asReadonly();
  readonly isOpen = this.isCartOpen.asReadonly();

  get cartCount(): number {
    return this.cartItems().reduce((sum, item) => sum + item.quantity, 0);
  }

  get cartTotal(): number {
    return this.cartItems().reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
  }

  addToCart(product: {
    id: number;
    name: string;
    price: number;
    image: string;
    isVeg: boolean;
  }) {
    const existingItem = this.cartItems().find(
      (item) => item.id === product.id,
    );

    if (existingItem) {
      this.updateQuantity(product.id, existingItem.quantity + 1);
    } else {
      const newItem: CartItem = {
        ...product,
        quantity: 1,
        weight: "1 lb,",
      };
      this.cartItems.update((items) => [...items, newItem]);
    }
  }

  updateQuantity(productId: number, quantity: number) {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }

    this.cartItems.update((items) =>
      items.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      ),
    );
  }

  removeFromCart(productId: number) {
    this.cartItems.update((items) =>
      items.filter((item) => item.id !== productId),
    );
  }

  clearCart() {
    this.cartItems.set([]);
  }

  openCart() {
    this.isCartOpen.set(true);
  }

  closeCart() {
    this.isCartOpen.set(false);
  }

  toggleCart() {
    this.isCartOpen.update((isOpen) => !isOpen);
  }
}
