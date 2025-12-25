import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { CartService } from "../../services/cart.service";

@Component({
  selector: "app-header",
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {
  cartService = inject(CartService);

  get cartCount() {
    return this.cartService.cartCount;
  }

  openCart() {
    this.cartService.openCart();
  }
}
