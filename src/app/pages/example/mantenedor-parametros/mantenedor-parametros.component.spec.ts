import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenedorParametrosComponent } from './mantenedor-parametros.component';

describe('MantenedorParametrosComponent', () => {
  let component: MantenedorParametrosComponent;
  let fixture: ComponentFixture<MantenedorParametrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenedorParametrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenedorParametrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
