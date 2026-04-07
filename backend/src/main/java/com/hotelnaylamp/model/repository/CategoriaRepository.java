package com.hotelnaylamp.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hotelnaylamp.model.entity.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria,Integer>{
    
}
