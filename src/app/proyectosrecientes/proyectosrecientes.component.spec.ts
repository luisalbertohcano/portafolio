import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosrecientesComponent } from './proyectosrecientes.component';

describe('ProyectosrecientesComponent', () => {
  let component: ProyectosrecientesComponent;
  let fixture: ComponentFixture<ProyectosrecientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosrecientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosrecientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
