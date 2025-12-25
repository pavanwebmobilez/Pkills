import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CartService } from "../../services/cart.service";
import { FilterService } from "../../services/filter.service";
import { FiltersPopupComponent } from "../../components/filters-popup/filters-popup.component";

interface Product {
  id: number;
  name: string;
  price: string;
  priceValue: number;
  image: string;
  isVeg: boolean;
}

@Component({
  selector: "app-shop",
  imports: [CommonModule, FiltersPopupComponent],
  templateUrl: "./shop.component.html",
  styleUrl: "./shop.component.css",
})
export class ShopComponent {
  cartService = inject(CartService);
  filterService = inject(FilterService);

  searchQuery = "";

  get activeFilters() {
    return this.filterService.getActiveFilters();
  }

  openFilters() {
    this.filterService.openFilters();
  }

  removeFilter(filterName: string) {
    const state = this.filterService.filterState();

    // Reset the specific filter based on the name
    if (filterName === "Low to High" || filterName === "High to Low") {
      this.filterService.updateSortBy("all");
    } else if (filterName === "Veg" || filterName === "Non-Veg") {
      this.filterService.updateType("all");
    } else if (
      ["Mild", "Medium", "Spicy", "Extra Spicy"].includes(filterName)
    ) {
      this.filterService.updateSpiceLevel("all");
    } else if (["1 lb", "2 lb", "3 lb"].includes(filterName)) {
      this.filterService.updateWeight("anySize");
    }
  }

  products: Product[] = [
    {
      id: 1,
      name: "Mango Pickle",
      price: "$56.00/lb",
      priceValue: 56.0,
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/0ea8e8f51e8d0f20e4d2dbdebd03c2b2c1dfcaaa?width=376",
      isVeg: true,
    },
    {
      id: 2,
      name: "Lime Pickle",
      price: "$48.00/lb",
      priceValue: 48.0,
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/0ea8e8f51e8d0f20e4d2dbdebd03c2b2c1dfcaaa?width=376",
      isVeg: true,
    },
    {
      id: 3,
      name: "Garlic Pickle",
      price: "$62.00/lb",
      priceValue: 62.0,
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/0ea8e8f51e8d0f20e4d2dbdebd03c2b2c1dfcaaa?width=376",
      isVeg: true,
    },
    {
      id: 4,
      name: "Mixed Vegetable Pickle",
      price: "$54.00/lb",
      priceValue: 54.0,
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/0ea8e8f51e8d0f20e4d2dbdebd03c2b2c1dfcaaa?width=376",
      isVeg: true,
    },
    {
      id: 5,
      name: "Chili Pickle",
      price: "$58.00/lb",
      priceValue: 58.0,
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/0ea8e8f51e8d0f20e4d2dbdebd03c2b2c1dfcaaa?width=376",
      isVeg: true,
    },
    {
      id: 6,
      name: "Ginger Pickle",
      price: "$52.00/lb",
      priceValue: 52.0,
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/0ea8e8f51e8d0f20e4d2dbdebd03c2b2c1dfcaaa?width=376",
      isVeg: true,
    },
    {
      id: 7,
      name: "Chicken Pickle",
      price: "$72.00/lb",
      priceValue: 72.0,
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/0ea8e8f51e8d0f20e4d2dbdebd03c2b2c1dfcaaa?width=376",
      isVeg: false,
    },
    {
      id: 8,
      name: "Amla Pickle",
      price: "$50.00/lb",
      priceValue: 50.0,
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/0ea8e8f51e8d0f20e4d2dbdebd03c2b2c1dfcaaa?width=376",
      isVeg: true,
    },
    {
      id: 9,
      name: "Onion Pickle",
      price: "$46.00/lb",
      priceValue: 46.0,
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/0ea8e8f51e8d0f20e4d2dbdebd03c2b2c1dfcaaa?width=376",
      isVeg: true,
    },
    {
      id: 10,
      name: "Turmeric Pickle",
      price: "$60.00/lb",
      priceValue: 60.0,
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/0ea8e8f51e8d0f20e4d2dbdebd03c2b2c1dfcaaa?width=376",
      isVeg: true,
    },
    {
      id: 11,
      name: "Fish Pickle",
      price: "$78.00/lb",
      priceValue: 78.0,
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/0ea8e8f51e8d0f20e4d2dbdebd03c2b2c1dfcaaa?width=376",
      isVeg: false,
    },
    {
      id: 12,
      name: "Corn Pickle",
      price: "$54.00/lb",
      priceValue: 54.0,
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/0ea8e8f51e8d0f20e4d2dbdebd03c2b2c1dfcaaa?width=376",
      isVeg: true,
    },
  ];

  currentPage = 1;
  totalPages = 5;

  get paginatedProducts() {
    return this.products;
  }

  addToCart(product: Product) {
    this.cartService.addToCart({
      id: product.id,
      name: product.name,
      price: product.priceValue,
      image: product.image,
      isVeg: product.isVeg,
    });
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
