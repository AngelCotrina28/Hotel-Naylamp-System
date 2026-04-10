import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habitacion } from '../models/habitacion.model';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/api/habitaciones'; // La ruta que hicimos en Java

  listarTodas(): Observable<Habitacion[]> {
    return this.http.get<Habitacion[]>(this.apiUrl);
  }
}