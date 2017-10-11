import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-hate-stas-status',
  templateUrl: './hate-stas-status.component.html',
  styleUrls: ['./hate-stas-status.component.css']
})
export class HateStasStatusComponent {

  @Input() hateStas: boolean;
  @Output() setHate: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  hate() {
    this.setHate.emit(true);
  }
  stopTheHate() {
    this.setHate.emit(false);
  }
}
