import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormTipoSueloComponent } from './modal-form-tipo-suelo.component';

describe('ModalFormTipoSueloComponent', () => {
  let component: ModalFormTipoSueloComponent;
  let fixture: ComponentFixture<ModalFormTipoSueloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFormTipoSueloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFormTipoSueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
