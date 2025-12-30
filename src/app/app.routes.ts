import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./pages/home/home.component").then((m) => m.HomeComponent),
  },
  {
    path: "about",
    loadComponent: () =>
      import("./pages/about-us/about-us.component").then(
        (m) => m.AboutUsComponent,
      ),
  },
  {
    path: "shop",
    loadComponent: () =>
      import("./pages/shop/shop.component").then((m) => m.ShopComponent),
  },
  {
    path: "contact",
    loadComponent: () =>
      import("./pages/contact-us/contact-us.component").then(
        (m) => m.ContactUsComponent,
      ),
  },
  {
    path: "privacy-policy",
    loadComponent: () =>
      import("./pages/privacy-policy/privacy-policy.component").then(
        (m) => m.PrivacyPolicyComponent,
      ),
  },
  {
    path: "terms-and-conditions",
    loadComponent: () =>
      import("./pages/terms-and-conditions/terms-and-conditions.component").then(
        (m) => m.TermsAndConditionsComponent,
      ),
  },
  {
    path: "checkout",
    loadComponent: () =>
      import("./pages/checkout/checkout.component").then(
        (m) => m.CheckoutComponent,
      ),
  },
];
