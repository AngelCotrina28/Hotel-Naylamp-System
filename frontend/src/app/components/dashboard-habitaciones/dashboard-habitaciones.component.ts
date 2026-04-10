import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Habitacion } from '../../models/habitacion.model';
import { FormularioClienteComponent } from '../formulario-cliente/formulario-cliente.component';
import { HabitacionService } from '../../services/habitacion.service';

@Component({
  selector: 'app-dashboard-habitaciones',
  standalone: true,
  imports: [CommonModule, FormularioClienteComponent],
  templateUrl: './dashboard-habitaciones.component.html',
  styleUrl: './dashboard-habitaciones.component.css'
})
export class DashboardHabitacionesComponent implements OnInit {

  // Nueva estructura profesional: Un arreglo que ya tiene los pisos y sus cuartos
  edificio: { numeroPiso: number, cuartos: Habitacion[] }[] = [];
  habitacionesReserva: Habitacion[] = [];
  
  // NUEVAS VARIABLES PARA EL FLUJO
  pasoActual: number = 1; // 1: Detalles, 2: Cliente
  habitacionActiva: Habitacion | null = null; // La pestaña seleccionada

  private habitacionService = inject(HabitacionService);
  private cdr = inject(ChangeDetectorRef);

  ngOnInit() {
    this.cargarHabitacionesReales();
  }

  cargarHabitacionesReales() {
    this.habitacionService.listarTodas().subscribe({
      next: (datosReales) => {
        const habitacionesConPiso = datosReales.map(hab => ({
          ...hab,
          piso: parseInt(hab.numero.charAt(0))
        }));

        this.edificio = [5, 4, 3, 2, 1].map(numPiso => ({
          numeroPiso: numPiso,
          cuartos: habitacionesConPiso.filter(h => h.piso === numPiso)
        }));

        console.log('Edificio:', this.edificio);
        this.cdr.detectChanges(); // 👈 forzar re-render
      },
      error: (err) => console.error('Error:', err)
    });
  }

  seleccionarHabitacion(habitacion: Habitacion) {
    if (habitacion.estado !== 'DISPONIBLE') return;

    const index = this.habitacionesReserva.findIndex(h => h.numero === habitacion.numero);

    if (index === -1) {
      // ✅ Nueva referencia del array
      this.habitacionesReserva = [...this.habitacionesReserva, habitacion];
      if (this.habitacionesReserva.length === 1) {
        this.habitacionActiva = habitacion;
      }
    } else {
      // ✅ Nueva referencia sin el elemento
      this.habitacionesReserva = this.habitacionesReserva.filter(h => h.numero !== habitacion.numero);
      if (this.habitacionActiva?.numero === habitacion.numero) {
        this.habitacionActiva = this.habitacionesReserva.length > 0 
          ? this.habitacionesReserva[0] 
          : null;
      }
    }
    this.cdr.detectChanges();
  }

  setTabActiva(hab: Habitacion) {
    this.habitacionActiva = hab;
  }

  // Navegación del Stepper
  siguientePaso() {
    if (this.pasoActual < 2) this.pasoActual++;
  }

  anteriorPaso() {
    if (this.pasoActual > 1) this.pasoActual--;
  }

  esSeleccionada(habitacion: Habitacion): boolean {
    return this.habitacionesReserva.some(h => h.numero === habitacion.numero);
  }

  cerrarPanel() {
    this.habitacionesReserva = [];
    this.pasoActual = 1;
    this.habitacionActiva = null;
  }
}