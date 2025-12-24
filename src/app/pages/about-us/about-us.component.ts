import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestimonialsComponent } from "../../components/testimonials/testimonials.component";
import { CtaBannerComponent } from "../../components/cta-banner/cta-banner.component";

@Component({
  selector: "app-about-us",
  imports: [CommonModule, TestimonialsComponent, CtaBannerComponent],
  templateUrl: "./about-us.component.html",
  styleUrl: "./about-us.component.css",
})
export class AboutUsComponent {}
