import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-formulario-cliente',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Vital importar ReactiveFormsModule
  templateUrl: './formulario-cliente.component.html',
  styleUrl: './formulario-cliente.component.css'
})
export class FormularioClienteComponent {
  
  private fb = inject(FormBuilder);
  private clienteService = inject(ClienteService);

  // Creamos el "esqueleto" del formulario con sus validaciones
  clienteForm: FormGroup = this.fb.group({
    tipoDocumento: ['DNI', Validators.required],
    documento: ['', [Validators.required, Validators.minLength(8)]],
    nombre: ['', Validators.required],
    apellidoPaterno: ['', Validators.required],
    apellidoMaterno: ['', Validators.required],
    direccion: ['', Validators.required],
    departamento: [''],
    provincia: [''],
    distrito: [''],
    nacionalidad: ['PERUANA', Validators.required]
  });

  // Método que se ejecuta al darle al botón "Guardar"
  guardarCliente() {
    if (this.clienteForm.valid) {
      this.clienteService.crearCliente(this.clienteForm.value).subscribe({
        next: (respuesta) => {
          console.log('Cliente guardado con éxito:', respuesta);
          alert('¡Cliente registrado correctamente en la base de datos!');
          this.clienteForm.reset({ tipoDocumento: 'DNI', nacionalidad: 'PERUANA' }); // Limpiamos
        },
        error: (err) => {
          console.error('Error al guardar:', err);
          alert('Hubo un error al guardar el cliente.');
        }
      });
    } else {
      // Si faltan datos, marcamos todo como "tocado" para que salten las alertas rojas
      this.clienteForm.markAllAsTouched();
    }
  }
}