import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploTableComponent } from './ejemplo-table.component';

describe('EjemploTableComponent', () => {
  let component: EjemploTableComponent;
  let fixture: ComponentFixture<EjemploTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjemploTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
