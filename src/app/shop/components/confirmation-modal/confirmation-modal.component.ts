import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent {
  show: boolean;
  @Input() title: string;
  @Output() onConfirm = new EventEmitter<void>();

  showModal(): void {
    this.show = true;
  }

  confirm(): void {
    this.onConfirm.emit();
    this.show = false;
  }
}

