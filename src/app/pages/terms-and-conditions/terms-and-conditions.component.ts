import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-terms-and-conditions",
  imports: [CommonModule, RouterLink],
  templateUrl: "./terms-and-conditions.component.html",
  styleUrl: "./terms-and-conditions.component.css",
})
export class TermsAndConditionsComponent {}
