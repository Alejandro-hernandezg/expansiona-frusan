import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormConceptoComponent } from './modal-form-concepto.component';

describe('ModalFormConceptoComponent', () => {
  let component: ModalFormConceptoComponent;
  let fixture: ComponentFixture<ModalFormConceptoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFormConceptoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFormConceptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
