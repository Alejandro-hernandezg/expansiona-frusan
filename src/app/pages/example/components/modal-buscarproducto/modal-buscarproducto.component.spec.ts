import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBuscarproductoComponent } from './modal-buscarproducto.component';

describe('ModalBuscarproductoComponent', () => {
  let component: ModalBuscarproductoComponent;
  let fixture: ComponentFixture<ModalBuscarproductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBuscarproductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBuscarproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
