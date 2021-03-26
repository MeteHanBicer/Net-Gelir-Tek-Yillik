import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TekyillikComponent } from './tekyillik.component';

describe('TekyillikComponent', () => {
  let component: TekyillikComponent;
  let fixture: ComponentFixture<TekyillikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TekyillikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TekyillikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
