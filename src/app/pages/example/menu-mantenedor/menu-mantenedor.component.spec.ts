import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMantenedorComponent } from './menu-mantenedor.component';

describe('MenuMantenedorComponent', () => {
  let component: MenuMantenedorComponent;
  let fixture: ComponentFixture<MenuMantenedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuMantenedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMantenedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
