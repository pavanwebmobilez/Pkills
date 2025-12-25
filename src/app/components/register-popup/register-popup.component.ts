import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-register-popup",
  imports: [CommonModule, FormsModule],
  templateUrl: "./register-popup.component.html",
  styleUrl: "./register-popup.component.css",
})
export class RegisterPopupComponent {
  authService = inject(AuthService);

  name = "";
  email = "";
  password = "";
  agreeToTerms = true;

  get isOpen() {
    return this.authService.isRegisterOpen;
  }

  closePopup() {
    this.authService.closeRegister();
  }

  onSubmit() {
    if (this.name && this.email && this.password && this.agreeToTerms) {
      this.authService.register(this.name, this.email, this.password);
    }
  }

  onGoogleLogin() {
    this.authService.loginWithGoogle();
  }

  onBackToLogin() {
    this.authService.closeRegister();
    this.authService.openLogin();
  }
}
