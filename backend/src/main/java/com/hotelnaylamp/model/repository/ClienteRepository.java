package com.hotelnaylamp.model.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.hotelnaylamp.model.entity.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Integer>{
    void deleteByDocumento(String numDocumento);

    boolean existsByDocumento(String numDocumento);

    Optional<Cliente> findByDocumento(String numDocumento);
}
