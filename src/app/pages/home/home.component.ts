import { Component } from "@angular/core";
import { HeroComponent } from "../../components/hero/hero.component";
import { ProductsComponent } from "../../components/products/products.component";
import { AboutComponent } from "../../components/about/about.component";
import { TestimonialsComponent } from "../../components/testimonials/testimonials.component";
import { FaqsComponent } from "../../components/faqs/faqs.component";
import { CtaBannerComponent } from "../../components/cta-banner/cta-banner.component";

@Component({
  selector: "app-home",
  imports: [
    HeroComponent,
    ProductsComponent,
    AboutComponent,
    TestimonialsComponent,
    FaqsComponent,
    CtaBannerComponent,
  ],
  template: `
    <app-hero />
    <app-products />
    <app-about />
    <app-testimonials />
    <app-faqs />
    <app-cta-banner />
  `,
})
export class HomeComponent {}
