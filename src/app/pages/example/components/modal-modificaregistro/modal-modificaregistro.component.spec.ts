import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalModificaregistroComponent } from './modal-modificaregistro.component';

describe('ModalModificaregistroComponent', () => {
  let component: ModalModificaregistroComponent;
  let fixture: ComponentFixture<ModalModificaregistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalModificaregistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalModificaregistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
