import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AliSabiehComponent } from './ali-sabieh.component';

describe('AliSabiehComponent', () => {
  let component: AliSabiehComponent;
  let fixture: ComponentFixture<AliSabiehComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AliSabiehComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AliSabiehComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
