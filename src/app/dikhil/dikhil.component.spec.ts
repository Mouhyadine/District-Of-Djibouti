import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DikhilComponent } from './dikhil.component';

describe('DikhilComponent', () => {
  let component: DikhilComponent;
  let fixture: ComponentFixture<DikhilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DikhilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DikhilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
