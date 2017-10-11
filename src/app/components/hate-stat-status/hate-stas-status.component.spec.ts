import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HateStasStatusComponent } from './hate-stas-status.component';

describe('HateStasStatusComponent', () => {
  let component: HateStasStatusComponent;
  let fixture: ComponentFixture<HateStasStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HateStasStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HateStasStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
