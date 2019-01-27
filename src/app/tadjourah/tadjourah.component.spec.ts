import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TadjourahComponent } from './tadjourah.component';

describe('TadjourahComponent', () => {
  let component: TadjourahComponent;
  let fixture: ComponentFixture<TadjourahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TadjourahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TadjourahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
