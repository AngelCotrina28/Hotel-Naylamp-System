package com.hotelnaylamp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hotelnaylamp.model.entity.Categoria;
import com.hotelnaylamp.service.CategoriaService;

@RestController
@RequestMapping("/api/categorias")
public class CategoriaController {
    @Autowired
    private CategoriaService categoriaService;

    @PutMapping
    public void actualizar(Categoria categoria) {
        categoriaService.actualizar(categoria);
    }
}
