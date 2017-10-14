import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-hate-stas-status',
  template: `
    <h2>
      ARE WE HATIN STAS? {{hateStas}} !!
      <button (click)="hate()">HATE</button>
      <button (click)="stopTheHate()">STOP THE HATE</button>
    </h2>
  `
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
