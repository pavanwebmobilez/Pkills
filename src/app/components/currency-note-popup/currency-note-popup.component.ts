import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-currency-note-popup",
  imports: [CommonModule],
  templateUrl: "./currency-note-popup.component.html",
  styleUrl: "./currency-note-popup.component.css",
})
export class CurrencyNotePopupComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
