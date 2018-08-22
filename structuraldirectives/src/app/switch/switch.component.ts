import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  template: `
<div [ngSwitch]="color">
  <div *ngSwitchCase="'röd'">Du valde färgen röd!</div>
  <div *ngSwitchCase="'blå'">Du valde färgen blå!</div>
  <div *ngSwitchCase="'grön'">Du valde färgen grön!</div>
  <div *ngSwitchDefault>Välj igen!</div>
</div>
`,
  styles: []
})
export class SwitchComponent implements OnInit {
  public color = 'svart';
  constructor() { }

  ngOnInit() {
  }

}
