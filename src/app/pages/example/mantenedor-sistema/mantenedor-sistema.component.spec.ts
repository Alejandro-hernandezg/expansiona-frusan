import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenedorSistemaComponent } from './mantenedor-sistema.component';

describe('MantenedorSistemaComponent', () => {
  let component: MantenedorSistemaComponent;
  let fixture: ComponentFixture<MantenedorSistemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenedorSistemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenedorSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
