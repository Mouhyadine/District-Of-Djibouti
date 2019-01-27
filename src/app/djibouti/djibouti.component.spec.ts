import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DjiboutiComponent } from './djibouti.component';

describe('DjiboutiComponent', () => {
  let component: DjiboutiComponent;
  let fixture: ComponentFixture<DjiboutiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DjiboutiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DjiboutiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
