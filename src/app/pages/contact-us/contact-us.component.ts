import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { TestimonialsComponent } from "../../components/testimonials/testimonials.component";

@Component({
  selector: "app-contact-us",
  imports: [CommonModule, FormsModule, RouterLink, ButtonModule, InputTextModule, TestimonialsComponent],
  templateUrl: "./contact-us.component.html",
  styleUrl: "./contact-us.component.css",
})
export class ContactUsComponent {
  formData = {
    firstName: "",
    lastName: "",
    email: "",
    description: "",
  };

  onSubmit() {
    console.log("Form submitted:", this.formData);
    // Handle form submission logic here
  }
}
