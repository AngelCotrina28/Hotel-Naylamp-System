package com.hotelnaylamp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hotelnaylamp.model.entity.Cliente;
import com.hotelnaylamp.service.ClienteService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/clientes")
public class ClienteController {
    @Autowired
    private ClienteService clienteService;

    @GetMapping
    public List<Cliente> obtenerTodos(){
        return clienteService.listarTodos();
    }

    @GetMapping("/buscar/{numDocumento}")
    public ResponseEntity<Cliente> obtenerPorDocumento(@PathVariable String numDocumento){
        Optional<Cliente> cajaClienteEncontrado =  clienteService.buscarPorDocumento(numDocumento);

        if(cajaClienteEncontrado.isPresent()){
            return ResponseEntity.ok(cajaClienteEncontrado.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping
    public void guardar(@RequestBody Cliente cliente){
        clienteService.guardar(cliente);
    }

    @PutMapping
    public void actualizar(@RequestBody Cliente cliente){
        clienteService.actualizar(cliente);
    }

    @DeleteMapping("/eliminar/{numDocumento}")
    public void eliminar(@PathVariable String numDocumento){
        clienteService.eliminar(numDocumento);
    }


}
