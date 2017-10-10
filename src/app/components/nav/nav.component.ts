import { Component, OnInit, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent {
  @Input() visible = true;
  @Output() changeNavVisibility: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  changeVisibility() {
    this.changeNavVisibility.emit(!this.visible);
  }
}
