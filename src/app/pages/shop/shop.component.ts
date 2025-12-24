import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  isVeg: boolean;
}

@Component({
  selector: "app-shop",
  imports: [CommonModule],
  templateUrl: "./shop.component.html",
  styleUrl: "./shop.component.css",
})
export class ShopComponent {
  products: Product[] = [
    {
      id: 1,
      name: "Mango Pickles",
      price: "$56.00/lb",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/0ea8e8f51e8d0f20e4d2dbdebd03c2b2c1dfcaaa?width=376",
      isVeg: true,
    },
    {
      id: 2,
      name: "Mango Pickles",
      price: "$56.00/lb",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/0ea8e8f51e8d0f20e4d2dbdebd03c2b2c1dfcaaa?width=376",
      isVeg: false,
    },
    {
      id: 3,
      name: "Mango Pickles",
      price: "$56.00/lb",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/0ea8e8f51e8d0f20e4d2dbdebd03c2b2c1dfcaaa?width=376",
      isVeg: true,
    },
    {
      id: 4,
      name: "Mango Pickles",
      price: "$56.00/lb",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/0ea8e8f51e8d0f20e4d2dbdebd03c2b2c1dfcaaa?width=376",
      isVeg: true,
    },
    {
      id: 5,
      name: "Mango Pickles",
      price: "$56.00/lb",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/0ea8e8f51e8d0f20e4d2dbdebd03c2b2c1dfcaaa?width=376",
      isVeg: true,
    },
    {
      id: 6,
      name: "Mango Pickles",
      price: "$56.00/lb",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/0ea8e8f51e8d0f20e4d2dbdebd03c2b2c1dfcaaa?width=376",
      isVeg: true,
    },
    {
      id: 7,
      name: "Mango Pickles",
      price: "$56.00/lb",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/0ea8e8f51e8d0f20e4d2dbdebd03c2b2c1dfcaaa?width=376",
      isVeg: false,
    },
    {
      id: 8,
      name: "Mango Pickles",
      price: "$56.00/lb",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/0ea8e8f51e8d0f20e4d2dbdebd03c2b2c1dfcaaa?width=376",
      isVeg: true,
    },
    {
      id: 9,
      name: "Mango Pickles",
      price: "$56.00/lb",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/0ea8e8f51e8d0f20e4d2dbdebd03c2b2c1dfcaaa?width=376",
      isVeg: true,
    },
    {
      id: 10,
      name: "Mango Pickles",
      price: "$56.00/lb",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/0ea8e8f51e8d0f20e4d2dbdebd03c2b2c1dfcaaa?width=376",
      isVeg: true,
    },
    {
      id: 11,
      name: "Mango Pickles",
      price: "$56.00/lb",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/0ea8e8f51e8d0f20e4d2dbdebd03c2b2c1dfcaaa?width=376",
      isVeg: true,
    },
    {
      id: 12,
      name: "Mango Pickles",
      price: "$56.00/lb",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/0ea8e8f51e8d0f20e4d2dbdebd03c2b2c1dfcaaa?width=376",
      isVeg: false,
    },
  ];

  currentPage = 1;
  totalPages = 5;

  get paginatedProducts() {
    return this.products;
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
