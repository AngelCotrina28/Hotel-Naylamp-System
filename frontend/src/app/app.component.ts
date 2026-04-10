import { Component } from '@angular/core';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { FormularioClienteComponent } from './components/formulario-cliente/formulario-cliente.component';
import { DashboardHabitacionesComponent } from './components/dashboard-habitaciones/dashboard-habitaciones.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardHabitacionesComponent],// <--- Verifica que esté aquí
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}