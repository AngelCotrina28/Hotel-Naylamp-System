import { Categoria } from './categoria.model'; // <-- Traemos el modelo desde su propio archivo

export interface Habitacion {
  idHabitacion?: number;
  numero: string;
  estado: string;
  categoria: Categoria; // Usamos el modelo importado
  piso?: number; 
}