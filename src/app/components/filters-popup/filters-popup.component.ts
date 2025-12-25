import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FilterService, FilterState } from "../../services/filter.service";

@Component({
  selector: "app-filters-popup",
  imports: [CommonModule],
  templateUrl: "./filters-popup.component.html",
  styleUrl: "./filters-popup.component.css",
})
export class FiltersPopupComponent {
  filterService = inject(FilterService);

  get isOpen() {
    return this.filterService.isOpen;
  }

  get filters() {
    return this.filterService.filterState();
  }

  closeFilters() {
    this.filterService.closeFilters();
  }

  setSortBy(sortBy: FilterState["sortBy"]) {
    this.filterService.updateSortBy(sortBy);
  }

  setType(type: FilterState["type"]) {
    this.filterService.updateType(type);
  }

  setSpiceLevel(spiceLevel: any) {
    this.filterService.updateSpiceLevel(
      spiceLevel as FilterState["spiceLevel"],
    );
  }

  setWeight(weight: any) {
    this.filterService.updateWeight(weight as FilterState["weight"]);
  }
}
