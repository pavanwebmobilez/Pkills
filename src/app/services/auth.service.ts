import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private isLoginPopupOpen = signal(false);

  readonly isLoginOpen = this.isLoginPopupOpen.asReadonly();

  openLogin() {
    this.isLoginPopupOpen.set(true);
  }

  closeLogin() {
    this.isLoginPopupOpen.set(false);
  }

  // Placeholder methods for actual authentication logic
  login(email: string, password: string, rememberMe: boolean) {
    // TODO: Implement actual login logic
    console.log("Login:", { email, password, rememberMe });
    this.closeLogin();
  }

  loginWithGoogle() {
    // TODO: Implement Google OAuth
    console.log("Login with Google");
    this.closeLogin();
  }
}
