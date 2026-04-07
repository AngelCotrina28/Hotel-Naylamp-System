package com.hotelnaylamp.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.hotelnaylamp.model.entity.Trabajador;

public interface TrabajadorRepository extends JpaRepository<Trabajador , Integer>{
    void deleteByDocumento(String numDocumento);

    Trabajador findByDocumento(String numDocumento);
}
