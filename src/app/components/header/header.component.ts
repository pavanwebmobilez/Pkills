import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { CartService } from "../../services/cart.service";
import { AuthService } from "../../services/auth.service";
import { CurrencyNotePopupComponent } from "../currency-note-popup/currency-note-popup.component";

@Component({
  selector: "app-header",
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    CurrencyNotePopupComponent,
  ],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {
  cartService = inject(CartService);
  authService = inject(AuthService);
  isCurrencyPopupOpen = false;

  get cartCount() {
    return this.cartService.cartCount;
  }

  openCart() {
    this.cartService.openCart();
  }

  openLogin() {
    this.authService.openLogin();
  }

  openCurrencyPopup() {
    this.isCurrencyPopupOpen = true;
  }

  closeCurrencyPopup() {
    this.isCurrencyPopupOpen = false;
  }
}
