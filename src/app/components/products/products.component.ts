import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "primeng/button";
import { ToastModule } from "primeng/toast";
import { MessageService } from "primeng/api";
import { CartService } from "../../services/cart.service";

interface Product {
  id: number;
  name: string;
  price: string;
  priceValue: number;
  image: string;
  overlayImage: string;
  isVeg: boolean;
}

@Component({
  selector: "app-products",
  imports: [CommonModule, ButtonModule, ToastModule],
  providers: [MessageService],
  templateUrl: "./products.component.html",
  styleUrl: "./products.component.css",
})
export class ProductsComponent {
  cartService = inject(CartService);
  messageService = inject(MessageService);

  products: Product[] = [
    {
      id: 1,
      name: "Mango Pickles",
      price: "$56.00/lb",
      priceValue: 56.0,
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
      priceValue: 56.0,
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
      priceValue: 56.0,
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
      priceValue: 56.0,
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/2e39c2fa863f2bdf23180f4b68151ae8673f16e9?width=586",
      overlayImage:
        "https://api.builder.io/api/v1/image/assets/TEMP/0ea8e8f51e8d0f20e4d2dbdebd03c2b2c1dfcaaa?width=376",
      isVeg: true,
    },
  ];

  addToCart(product: Product) {
    this.cartService.addToCart({
      id: product.id,
      name: product.name,
      price: product.priceValue,
      image: product.overlayImage,
      isVeg: product.isVeg,
    });
    this.messageService.add({
      severity: "success",
      summary: "Added to Cart",
      detail: `${product.name} has been added to your cart`,
      life: 3000,
    });
  }
}
