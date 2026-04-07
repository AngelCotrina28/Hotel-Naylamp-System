package com.hotelnaylamp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hotelnaylamp.model.entity.Trabajador;
import com.hotelnaylamp.service.TrabajadorService;

@RestController
@RequestMapping("/api/trabajadores")
public class TrabajadorController {
    @Autowired
    private TrabajadorService trabajadorService;

    @GetMapping
    public List<Trabajador> obtenerTodos(){
        return trabajadorService.listarTodos();
    }

    @GetMapping("/buscar/{numDocumento}")
    public ResponseEntity<Trabajador> obtenerPorDocumento(@PathVariable String numDocumento){
        Trabajador clienteEncontrado =  trabajadorService.buscarPorDocumento(numDocumento);

        if(clienteEncontrado!=null){
            return ResponseEntity.ok(clienteEncontrado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping
    public void guardar(@RequestBody Trabajador trabajador){
        trabajadorService.guardar(trabajador);
    }

    @PutMapping
    public void actualizar(@RequestBody Trabajador trabajador){
        trabajadorService.actualizar(trabajador);
    }

    @DeleteMapping("/{numDocumento}")
    public void eliminar(@PathVariable String numDocumento){
        trabajadorService.eliminar(numDocumento);
    }


}
