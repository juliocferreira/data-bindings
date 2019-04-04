import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  currentText: string = '';
  currentValue: string = '';
  isMouseOver: boolean = false;

  ngOnInit() {
  }

  onClick() {
    alert("Clicou");
  }

  onKeyUp($event) {
    this.currentText = $event.target.value;
  }

  save(value) {
    this.currentValue = value;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

}
