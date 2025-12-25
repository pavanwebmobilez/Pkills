import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private isLoginPopupOpen = signal(false);
  private isRegisterPopupOpen = signal(false);

  readonly isLoginOpen = this.isLoginPopupOpen.asReadonly();
  readonly isRegisterOpen = this.isRegisterPopupOpen.asReadonly();

  openLogin() {
    this.isLoginPopupOpen.set(true);
    this.isRegisterPopupOpen.set(false);
  }

  closeLogin() {
    this.isLoginPopupOpen.set(false);
  }

  openRegister() {
    this.isRegisterPopupOpen.set(true);
    this.isLoginPopupOpen.set(false);
  }

  closeRegister() {
    this.isRegisterPopupOpen.set(false);
  }

  // Placeholder methods for actual authentication logic
  login(email: string, password: string, rememberMe: boolean) {
    // TODO: Implement actual login logic
    console.log("Login:", { email, password, rememberMe });
    this.closeLogin();
  }

  register(name: string, email: string, password: string) {
    // TODO: Implement actual registration logic
    console.log("Register:", { name, email, password });
    this.closeRegister();
  }

  loginWithGoogle() {
    // TODO: Implement Google OAuth
    console.log("Login with Google");
    this.closeLogin();
    this.closeRegister();
  }
}
