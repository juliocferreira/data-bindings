import { Component, ViewChild } from '@angular/core';
import { ViewChildComponent } from './view-child/view-child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-bindings';
  value = "Angular +";

  count: number = 15;

  valueViewChild: string = "";

  currentValue: number = 0;

  @ViewChild(ViewChildComponent) viewChild: ViewChildComponent;

  changeValue($event) {
    this.currentValue = $event
  }

  setViewChild($event) {
    this.viewChild.value = $event.target.value;
  }
}
