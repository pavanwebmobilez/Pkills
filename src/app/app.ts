import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CartSidebarComponent } from "./components/cart-sidebar/cart-sidebar.component";
import { LoginPopupComponent } from "./components/login-popup/login-popup.component";

@Component({
  selector: "app-root",
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    CartSidebarComponent,
    LoginPopupComponent,
  ],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {}
