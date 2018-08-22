import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forl',
  template: `
    <div *ngFor="let color of colors; odd as o">
      <h2>{{o}} {{color}}</h2>
    </div>
`,
  styles: []
})
export class ForlComponent implements OnInit {

  public colors = ['röd', 'blå', 'grön', 'gul'];
  constructor() { }

  ngOnInit() {
  }

}
