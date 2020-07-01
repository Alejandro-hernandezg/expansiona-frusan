import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAgregaregistroComponent } from './modal-agregaregistro.component';

describe('ModalAgregaregistroComponent', () => {
  let component: ModalAgregaregistroComponent;
  let fixture: ComponentFixture<ModalAgregaregistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAgregaregistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAgregaregistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
