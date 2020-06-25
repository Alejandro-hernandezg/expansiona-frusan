import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenedorMenuComponent } from './mantenedor-menu.component';

describe('MantenedorMenuComponent', () => {
  let component: MantenedorMenuComponent;
  let fixture: ComponentFixture<MantenedorMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenedorMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenedorMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
