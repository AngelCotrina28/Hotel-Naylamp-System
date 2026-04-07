package com.hotelnaylamp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hotelnaylamp.model.entity.Cliente;
import com.hotelnaylamp.model.repository.ClienteRepository;

import jakarta.transaction.Transactional;

@Service
public class ClienteService {
    @Autowired
    private ClienteRepository clienteRepository;

    public List<Cliente> listarTodos() {
        return clienteRepository.findAll();
    }

    public void guardar(Cliente cliente){
        clienteRepository.save(cliente);
    }

    @Transactional
    public void eliminar(String numDocumento){
        clienteRepository.deleteByDocumento(numDocumento);
    }

    public Cliente buscarPorDocumento(String numDocumento){
        return clienteRepository.findByDocumento(numDocumento);
    }

    public void actualizar(Cliente cliente){
        clienteRepository.save(cliente);
    }
}
