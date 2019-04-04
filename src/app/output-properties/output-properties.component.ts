import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-output-properties',
  templateUrl: './output-properties.component.html',
  styleUrls: ['./output-properties.component.css']
})
export class OutputPropertiesComponent implements OnInit {

  @Input() count: number = 10;

  @Output() change = new EventEmitter();

  increment() {
    this.count++; 
    this.change.emit({ count: this.count });
  }

  decrement() {
    this.count--;
    this.change.emit({ count: this.count })
  }
  constructor() { }

  ngOnInit() {
  }

}
