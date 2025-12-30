import { Component, HostListener, inject, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { CartService } from "../../services/cart.service";
import { AuthService } from "../../services/auth.service";
import { CurrencyNotePopupComponent } from "../currency-note-popup/currency-note-popup.component";

@Component({
  selector: "app-header",
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    ButtonModule,
    CurrencyNotePopupComponent,
  ],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {
  cartService = inject(CartService);
  authService = inject(AuthService);
  isCurrencyPopupOpen = false;
  isScrolled = signal(false);

  get cartCount() {
    return this.cartService.cartCount;
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
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
