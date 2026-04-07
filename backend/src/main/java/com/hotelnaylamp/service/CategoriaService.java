package com.hotelnaylamp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hotelnaylamp.model.entity.Categoria;
import com.hotelnaylamp.model.repository.CategoriaRepository;

@Service
public class CategoriaService {
    @Autowired
    private CategoriaRepository categoriaRepository;

    public void actualizar(Categoria categoria) {
        categoriaRepository.save(categoria);
    }
}
