import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  url : string = 'http://sou.gohorseprocess.com.br/wp-content/uploads/2017/05/horse21.png';

  constructor() { }

  ngOnInit() {
  }

}
