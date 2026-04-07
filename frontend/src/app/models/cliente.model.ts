export interface Cliente {
  idCliente?: number;
  tipoDocumento: string;
  documento: string;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  direccion: string;
  departamento: string;
  provincia: string;
  distrito: string;
  nacionalidad: string;
}