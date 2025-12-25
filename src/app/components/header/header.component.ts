import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { CartService } from "../../services/cart.service";
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
  isCurrencyPopupOpen = false;

  get cartCount() {
    return this.cartService.cartCount;
  }

  openCart() {
    this.cartService.openCart();
  }

  openCurrencyPopup() {
    this.isCurrencyPopupOpen = true;
  }

  closeCurrencyPopup() {
    this.isCurrencyPopupOpen = false;
  }
}
