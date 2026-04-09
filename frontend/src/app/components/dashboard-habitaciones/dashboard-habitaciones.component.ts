import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Habitacion } from '../../models/habitacion.model';

import { FormularioClienteComponent } from '../formulario-cliente/formulario-cliente.component';

@Component({
  selector: 'app-dashboard-habitaciones',
  standalone: true,
  imports: [CommonModule,FormularioClienteComponent],
  templateUrl: './dashboard-habitaciones.component.html',
  styleUrl: './dashboard-habitaciones.component.css'
})
export class DashboardHabitacionesComponent implements OnInit {

  habitaciones: Habitacion[] = [];
  pisos: number[] = [5, 4, 3, 2, 1]; // Ordenados de arriba hacia abajo como en un edificio real

  habitacionSeleccionada: Habitacion | null = null;

  ngOnInit() {
    this.generarHabitacionesDePrueba();
  }

  // Generamos datos temporales para visualizar la cuadrícula
  generarHabitacionesDePrueba() {
    for (let p of this.pisos) {
      for (let i = 1; i <= 4; i++) {
        // La 503 la ponemos ocupada para ver el cambio de color
        const esOcupada = (p === 5 && i === 3); 
        this.habitaciones.push({
          numero: `${p}0${i}`,
          piso: p,
          estado: esOcupada ? 'OCUPADA' : 'DISPONIBLE',
          precio: 80.00
        });
      }
    }
  }

  // Filtramos las habitaciones por piso para dibujarlas en el HTML
  obtenerHabitacionesPorPiso(piso: number): Habitacion[] {
    return this.habitaciones.filter(h => h.piso === piso);
  }

  // Método temporal para ver clics
  seleccionarHabitacion(habitacion: Habitacion) {
    this.habitacionSeleccionada = habitacion;
    console.log('Abriendo panel para la habitación:', habitacion.numero);
  }

  cerrarPanel() {
    this.habitacionSeleccionada = null;
  }
}