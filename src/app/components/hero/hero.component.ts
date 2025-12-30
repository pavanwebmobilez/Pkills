import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { ButtonModule } from "primeng/button";

@Component({
  selector: "app-hero",
  imports: [CommonModule, RouterLink, ButtonModule],
  templateUrl: "./hero.component.html",
  styleUrl: "./hero.component.css",
})
export class HeroComponent {}
