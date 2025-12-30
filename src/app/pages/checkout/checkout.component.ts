import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CartService } from "../../services/cart.service";
import { MessageService } from "primeng/api";
import { ToastModule } from "primeng/toast";
import { ButtonModule } from "primeng/button";

@Component({
  selector: "app-checkout",
  imports: [CommonModule, FormsModule, RouterModule, ToastModule, ButtonModule],
  providers: [MessageService],
  templateUrl: "./checkout.component.html",
  styleUrl: "./checkout.component.css",
})
export class CheckoutComponent {
  cartService = inject(CartService);
  messageService = inject(MessageService);

  // Form data
  firstName = "";
  lastName = "";
  email = "";
  phone = "";
  address = "";
  city = "";
  state = "";
  zipCode = "";
  cardNumber = "";
  cardExpiry = "";
  cardCVV = "";

  get items() {
    return this.cartService.items();
  }

  get subtotal() {
    return this.cartService.cartTotal;
  }

  get tax() {
    return this.subtotal * 0.1; // 10% tax
  }

  get shipping() {
    return this.subtotal > 100 ? 0 : 10; // Free shipping over $100
  }

  get total() {
    return this.subtotal + this.tax + this.shipping;
  }

  placeOrder() {
    // Validate form
    if (
      !this.firstName ||
      !this.lastName ||
      !this.email ||
      !this.phone ||
      !this.address ||
      !this.city ||
      !this.state ||
      !this.zipCode ||
      !this.cardNumber ||
      !this.cardExpiry ||
      !this.cardCVV
    ) {
      this.messageService.add({
        severity: "error",
        summary: "Error",
        detail: "Please fill in all required fields",
        life: 3000,
      });
      return;
    }

    // Check if cart is empty
    if (this.items.length === 0) {
      this.messageService.add({
        severity: "error",
        summary: "Error",
        detail: "Your cart is empty",
        life: 3000,
      });
      return;
    }

    // Here you would normally send the order to a backend service
    console.log("Order placed successfully", {
      customer: {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone,
        address: this.address,
        city: this.city,
        state: this.state,
        zipCode: this.zipCode,
      },
      items: this.items,
      total: this.total,
    });

    this.messageService.add({
      severity: "success",
      summary: "Order Placed!",
      detail: `Thank you for your order! Your total is $${this.total.toFixed(2)}`,
      life: 4000,
    });

    // Clear cart after successful order
    setTimeout(() => {
      this.cartService.clearCart();
      // In a real app, you'd navigate to an order confirmation page
      window.location.href = "/";
    }, 2000);
  }

  continueShopping() {
    window.location.href = "/shop";
  }
}
