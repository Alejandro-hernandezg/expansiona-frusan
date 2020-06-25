import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenedorCampoComponent } from './mantenedor-campo.component';

describe('MantenedorCampoComponent', () => {
  let component: MantenedorCampoComponent;
  let fixture: ComponentFixture<MantenedorCampoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenedorCampoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenedorCampoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
