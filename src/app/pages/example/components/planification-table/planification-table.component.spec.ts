import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanificationTableComponent } from './planification-table.component';

describe('PlanificationTableComponent', () => {
  let component: PlanificationTableComponent;
  let fixture: ComponentFixture<PlanificationTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanificationTableComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanificationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
