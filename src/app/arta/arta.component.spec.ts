import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtaComponent } from './arta.component';

describe('ArtaComponent', () => {
  let component: ArtaComponent;
  let fixture: ComponentFixture<ArtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
