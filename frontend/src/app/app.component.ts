import { Component } from '@angular/core';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListaClientesComponent], // <--- Verifica que esté aquí
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}