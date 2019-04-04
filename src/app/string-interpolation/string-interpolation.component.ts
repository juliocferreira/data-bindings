import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  urlImage: string = 'http://sou.gohorseprocess.com.br/wp-content/uploads/2017/05/horse21.png';

  constructor() { }

  ngOnInit() { }

  sum(x: number, y: number): number {
    return x + y;
  }

}
