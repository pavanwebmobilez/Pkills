import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CartService } from "../../services/cart.service";

@Component({
  selector: "app-cart-sidebar",
  imports: [CommonModule, RouterModule],
  templateUrl: "./cart-sidebar.component.html",
  styleUrl: "./cart-sidebar.component.css",
})
export class CartSidebarComponent {
  cartService = inject(CartService);

  get isOpen() {
    return this.cartService.isOpen();
  }

  get items() {
    return this.cartService.items();
  }

  get total() {
    return this.cartService.cartTotal;
  }

  closeCart() {
    this.cartService.closeCart();
  }

  increaseQuantity(productId: number, currentQuantity: number) {
    this.cartService.updateQuantity(productId, currentQuantity + 1);
  }

  decreaseQuantity(productId: number, currentQuantity: number) {
    this.cartService.updateQuantity(productId, currentQuantity - 1);
  }

  checkout() {
    console.log("Proceeding to checkout...");
    // Implement checkout logic here
  }
}
