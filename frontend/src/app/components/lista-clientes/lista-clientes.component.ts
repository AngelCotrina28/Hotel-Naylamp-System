import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'app-lista-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-clientes.component.html',
  styleUrl: './lista-clientes.component.css'
})
export class ListaClientesComponent implements OnInit {
  
  // Usamos la forma moderna de Angular
  clientes = signal<Cliente[]>([]);

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.obtenerClientes();
  }

  obtenerClientes(): void {
    this.clienteService.listarTodos().subscribe({
      next: (data) => {
        this.clientes.set(data);
        console.log('Datos recibidos en el nuevo componente:', data);
      },
      error: (err) => console.error('Error al traer datos:', err)
    });
  }
}