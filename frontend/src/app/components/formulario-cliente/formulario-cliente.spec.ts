import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioClienteComponent } from './formulario-cliente.component';

describe('FormularioCliente', () => {
  let component: FormularioClienteComponent;
  let fixture: ComponentFixture<FormularioClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioClienteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioClienteComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
