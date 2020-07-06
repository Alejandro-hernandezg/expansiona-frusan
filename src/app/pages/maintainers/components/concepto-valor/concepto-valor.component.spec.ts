import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptoValorComponent } from './concepto-valor.component';

describe('ConceptoValorComponent', () => {
  let component: ConceptoValorComponent;
  let fixture: ComponentFixture<ConceptoValorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptoValorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptoValorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
