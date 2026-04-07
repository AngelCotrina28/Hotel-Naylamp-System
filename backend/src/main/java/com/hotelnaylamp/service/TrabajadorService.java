package com.hotelnaylamp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.hotelnaylamp.model.entity.Trabajador;
import com.hotelnaylamp.model.repository.TrabajadorRepository;

import jakarta.transaction.Transactional;

@Service
public class TrabajadorService {
    @Autowired
    private TrabajadorRepository trabajadorRepository;

    public List<Trabajador> listarTodos(){
        return trabajadorRepository.findAll();
    }

    public void guardar(Trabajador trabajador){
        trabajadorRepository.save(trabajador);
    }

    @Transactional
    public void eliminar(String numDocumento){
        trabajadorRepository.deleteByDocumento(numDocumento);
    }

    public Trabajador buscarPorDocumento(String numDocumento){
        return trabajadorRepository.findByDocumento(numDocumento);
    }

    public void actualizar(Trabajador trabajador){
        trabajadorRepository.save(trabajador);
    }

}
