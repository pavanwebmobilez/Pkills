import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-login-popup",
  imports: [CommonModule, FormsModule],
  templateUrl: "./login-popup.component.html",
  styleUrl: "./login-popup.component.css",
})
export class LoginPopupComponent {
  authService = inject(AuthService);

  email = "";
  password = "";
  rememberMe = true;

  get isOpen() {
    return this.authService.isLoginOpen;
  }

  closePopup() {
    this.authService.closeLogin();
  }

  onSubmit() {
    if (this.email && this.password) {
      this.authService.login(this.email, this.password, this.rememberMe);
    }
  }

  onGoogleLogin() {
    this.authService.loginWithGoogle();
  }

  onRegister() {
    this.authService.openRegister();
  }

  onForgotPassword() {
    // TODO: Navigate to forgot password page or open forgot password popup
    console.log("Forgot password clicked");
  }
}
