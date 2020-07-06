import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoLaborComponent } from './tipo-labor.component';

describe('TipoLaborComponent', () => {
  let component: TipoLaborComponent;
  let fixture: ComponentFixture<TipoLaborComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoLaborComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoLaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
