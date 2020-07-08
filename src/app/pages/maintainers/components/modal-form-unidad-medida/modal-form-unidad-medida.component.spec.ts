import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormUnidadMedidaComponent } from './modal-form-unidad-medida.component';

describe('ModalFormUnidadMedidaComponent', () => {
  let component: ModalFormUnidadMedidaComponent;
  let fixture: ComponentFixture<ModalFormUnidadMedidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFormUnidadMedidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFormUnidadMedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
