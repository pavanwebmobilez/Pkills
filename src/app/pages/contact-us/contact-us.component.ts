import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { ToastModule } from "primeng/toast";
import { MessageService } from "primeng/api";
import { TestimonialsComponent } from "../../components/testimonials/testimonials.component";

@Component({
  selector: "app-contact-us",
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    InputTextModule,
    ButtonModule,
    ToastModule,
    TestimonialsComponent,
  ],
  providers: [MessageService],
  templateUrl: "./contact-us.component.html",
  styleUrl: "./contact-us.component.css",
})
export class ContactUsComponent {
  messageService = inject(MessageService);

  formData = {
    firstName: "",
    lastName: "",
    email: "",
    description: "",
  };

  // Track field touched state for error display
  fieldTouched = {
    firstName: false,
    lastName: false,
    email: false,
    description: false,
  };

  isSubmitting = false;

  // Validation error messages
  getFirstNameError(): string {
    if (!this.formData.firstName) {
      return "First name is required";
    }
    return "";
  }

  getLastNameError(): string {
    if (!this.formData.lastName) {
      return "Last name is required";
    }
    return "";
  }

  getEmailError(): string {
    if (!this.formData.email) {
      return "Email is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.formData.email)) {
      return "Please enter a valid email address";
    }
    return "";
  }

  markFieldAsTouched(fieldName: keyof typeof this.fieldTouched): void {
    this.fieldTouched[fieldName] = true;
  }

  onSubmit() {
    // Validation
    if (!this.formData.firstName) {
      this.messageService.add({
        severity: "error",
        summary: "Validation Error",
        detail: "First name is required",
        life: 3000,
      });
      return;
    }

    if (!this.formData.lastName) {
      this.messageService.add({
        severity: "error",
        summary: "Validation Error",
        detail: "Last name is required",
        life: 3000,
      });
      return;
    }

    if (!this.formData.email) {
      this.messageService.add({
        severity: "error",
        summary: "Validation Error",
        detail: "Email is required",
        life: 3000,
      });
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.formData.email)) {
      this.messageService.add({
        severity: "error",
        summary: "Validation Error",
        detail: "Please enter a valid email address",
        life: 3000,
      });
      return;
    }

    // Show success message
    this.isSubmitting = true;

    console.log("Form submitted:", this.formData);

    // Simulate API call
    setTimeout(() => {
      this.messageService.add({
        severity: "success",
        summary: "Message Sent!",
        detail: "Thank you for contacting us. We'll get back to you soon!",
        life: 4000,
      });

      // Reset form
      this.formData = {
        firstName: "",
        lastName: "",
        email: "",
        description: "",
      };
      this.isSubmitting = false;
    }, 1000);
  }
}
