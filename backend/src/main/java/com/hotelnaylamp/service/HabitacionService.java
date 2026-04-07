package com.hotelnaylamp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hotelnaylamp.model.entity.Habitacion;
import com.hotelnaylamp.model.repository.HabitacionRepository;

@Service
public class HabitacionService {
    @Autowired
    private HabitacionRepository habitacionRepository;

    public List<Habitacion> listarTodos() {
        return habitacionRepository.findAll();
    }

    public void actualizar(Habitacion habitacion) {
        habitacionRepository.save(habitacion);
    }

    public Habitacion buscarPorNumero(String numHabitacion) {
        return habitacionRepository.findByNumero(numHabitacion);
    }
}
