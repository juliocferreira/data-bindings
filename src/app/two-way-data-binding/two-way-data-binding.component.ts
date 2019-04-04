import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

  text: string = 'abc';

  person: any = {
    name: 'Tio Phill',
    age: 56
  }
  constructor() { }

  ngOnInit() {
  }

}
