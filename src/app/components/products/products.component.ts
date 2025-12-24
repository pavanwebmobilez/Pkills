import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  overlayImage: string;
  isVeg: boolean;
}

@Component({
  selector: "app-products",
  imports: [CommonModule],
  templateUrl: "./products.component.html",
  styleUrl: "./products.component.css",
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: 1,
      name: "Mango Pickles",
      price: "$56.00/lb",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/2e39c2fa863f2bdf23180f4b68151ae8673f16e9?width=586",
      overlayImage:
        "https://api.builder.io/api/v1/image/assets/TEMP/0ea8e8f51e8d0f20e4d2dbdebd03c2b2c1dfcaaa?width=376",
      isVeg: true,
    },
    {
      id: 2,
      name: "Mango Pickles",
      price: "$56.00/lb",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/2e39c2fa863f2bdf23180f4b68151ae8673f16e9?width=586",
      overlayImage:
        "https://api.builder.io/api/v1/image/assets/TEMP/0ea8e8f51e8d0f20e4d2dbdebd03c2b2c1dfcaaa?width=376",
      isVeg: true,
    },
    {
      id: 3,
      name: "Mango Pickles",
      price: "$56.00/lb",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/2e39c2fa863f2bdf23180f4b68151ae8673f16e9?width=586",
      overlayImage:
        "https://api.builder.io/api/v1/image/assets/TEMP/0ea8e8f51e8d0f20e4d2dbdebd03c2b2c1dfcaaa?width=376",
      isVeg: true,
    },
    {
      id: 4,
      name: "Mango Pickles",
      price: "$56.00/lb",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/2e39c2fa863f2bdf23180f4b68151ae8673f16e9?width=586",
      overlayImage:
        "https://api.builder.io/api/v1/image/assets/TEMP/0ea8e8f51e8d0f20e4d2dbdebd03c2b2c1dfcaaa?width=376",
      isVeg: true,
    },
  ];
}
