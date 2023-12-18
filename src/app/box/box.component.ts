import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [],
  templateUrl: './box.component.html',
  styleUrl: './box.component.css',
})
export class BoxComponent {
  @Input() item: string = '';
  @Output() clickEvent: EventEmitter<void> = new EventEmitter<void>();
  isSelected: boolean = false;

  selectCard(): void {
    this.isSelected = !this.isSelected;
  }
  onClick() {
    this.clickEvent.emit();
  }
}
