export interface Habitacion {
  idHabitacion?: number;
  numero: string;      // Ej. "101", "504"
  piso: number;        // Ej. 1, 2, 5
  estado: string;      // Ej. "DISPONIBLE", "OCUPADA", "MANTENIMIENTO"
  precio: number;
  detalles?: string;
}