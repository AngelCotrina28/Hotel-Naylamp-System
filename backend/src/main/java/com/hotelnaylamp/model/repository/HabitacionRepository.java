package com.hotelnaylamp.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hotelnaylamp.model.entity.Habitacion;

public interface HabitacionRepository extends JpaRepository<Habitacion,Integer>{
    Habitacion findByNumero(String numHabitacion);
}
