package com.hotelnaylamp.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.hotelnaylamp.model.entity.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Integer>{
    void deleteByDocumento(String numDocumento);

    Cliente findByDocumento(String numDocumento);

    
}
