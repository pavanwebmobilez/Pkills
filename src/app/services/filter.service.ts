import { Injectable, signal } from "@angular/core";

export interface FilterState {
  sortBy: "featured" | "lowToHigh" | "highToLow" | "all";
  type: "veg" | "nonVeg" | "all";
  spiceLevel: "mild" | "medium" | "spicy" | "extraSpicy" | "all";
  weight: "1lb" | "2lb" | "3lb" | "anySize";
}

@Injectable({
  providedIn: "root",
})
export class FilterService {
  private filters = signal<FilterState>({
    sortBy: "featured",
    type: "all",
    spiceLevel: "all",
    weight: "anySize",
  });

  private isFiltersOpen = signal(false);

  readonly filterState = this.filters.asReadonly();
  readonly isOpen = this.isFiltersOpen.asReadonly();

  updateSortBy(sortBy: FilterState["sortBy"]) {
    this.filters.update((state) => ({ ...state, sortBy }));
  }

  updateType(type: FilterState["type"]) {
    this.filters.update((state) => ({ ...state, type }));
  }

  updateSpiceLevel(spiceLevel: FilterState["spiceLevel"]) {
    this.filters.update((state) => ({ ...state, spiceLevel }));
  }

  updateWeight(weight: FilterState["weight"]) {
    this.filters.update((state) => ({ ...state, weight }));
  }

  openFilters() {
    this.isFiltersOpen.set(true);
  }

  closeFilters() {
    this.isFiltersOpen.set(false);
  }

  resetFilters() {
    this.filters.set({
      sortBy: "featured",
      type: "all",
      spiceLevel: "all",
      weight: "anySize",
    });
  }

  getActiveFilters(): string[] {
    const state = this.filters();
    const active: string[] = [];

    if (state.sortBy !== "all" && state.sortBy !== "featured") {
      active.push(state.sortBy === "lowToHigh" ? "Low to High" : "High to Low");
    }

    if (state.type !== "all") {
      active.push(state.type === "veg" ? "Veg" : "Non-Veg");
    }

    if (state.spiceLevel !== "all") {
      const spiceLabels = {
        mild: "Mild",
        medium: "Medium",
        spicy: "Spicy",
        extraSpicy: "Extra Spicy",
      };
      active.push(
        spiceLabels[state.spiceLevel as keyof typeof spiceLabels] || "",
      );
    }

    if (state.weight !== "anySize") {
      const weightLabels = {
        "1lb": "1 lb",
        "2lb": "2 lb",
        "3lb": "3 lb",
      };
      active.push(
        weightLabels[state.weight as keyof typeof weightLabels] || "",
      );
    }

    return active.filter(Boolean);
  }
}
