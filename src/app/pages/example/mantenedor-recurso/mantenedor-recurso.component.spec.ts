import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenedorRecursoComponent } from './mantenedor-recurso.component';

describe('MantenedorRecursoComponent', () => {
  let component: MantenedorRecursoComponent;
  let fixture: ComponentFixture<MantenedorRecursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenedorRecursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenedorRecursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
