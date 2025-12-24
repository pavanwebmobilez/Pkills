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
        (m) => m.AboutUsComponent
      ),
  },
  {
    path: "shop",
    loadComponent: () =>
      import("./pages/shop/shop.component").then((m) => m.ShopComponent),
  },
];
