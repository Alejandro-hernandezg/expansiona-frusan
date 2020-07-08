import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoSueloComponent } from './tipo-suelo.component';

describe('TipoSueloComponent', () => {
  let component: TipoSueloComponent;
  let fixture: ComponentFixture<TipoSueloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoSueloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoSueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
