import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForlComponent } from './forl.component';

describe('ForlComponent', () => {
  let component: ForlComponent;
  let fixture: ComponentFixture<ForlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
