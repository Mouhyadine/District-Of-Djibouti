import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObockComponent } from './obock.component';

describe('ObockComponent', () => {
  let component: ObockComponent;
  let fixture: ComponentFixture<ObockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
