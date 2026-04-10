package com.hotelnaylamp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hotelnaylamp.model.entity.Habitacion;
import com.hotelnaylamp.service.HabitacionService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/habitaciones")
public class HabitacionController {
    @Autowired
    private HabitacionService habitacionService;

    @GetMapping
    public ResponseEntity<List<Habitacion>> obtenerTodos() {
        return ResponseEntity.ok(habitacionService.listarTodos());
    }
    
    @PutMapping
    public void actualizar(Habitacion habitacion) {
        habitacionService.actualizar(habitacion);
    }

    @GetMapping("/buscar/{numHabitacion}")
    public ResponseEntity<Habitacion> obtenerPorNumero(@PathVariable String numHabitacion) {
        Habitacion habitacionEncontrada = habitacionService.buscarPorNumero(numHabitacion);
        if(habitacionEncontrada!=null) {
            return ResponseEntity.ok(habitacionEncontrada);
        } else {
            return ResponseEntity.notFound().build();
        }
        
    }
}
