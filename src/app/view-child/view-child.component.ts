import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

  @Input() value: string;

  constructor() { }

  ngOnInit() {
  }

}
