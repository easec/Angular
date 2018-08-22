import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <div *ngIf="displayName; then thenBlock; else elseBlock"></div>

  <ng-template #thenBlock>
    <h2>
      .easec
    </h2>
  </ng-template>

  <ng-template #elseBlock>
    <h2>
      Detta är gömt!
    </h2>
  </ng-template>
`,
  styles: []
})
export class TestComponent implements OnInit {

  displayName = true;
  constructor() { }

  ngOnInit() {
  }

}
