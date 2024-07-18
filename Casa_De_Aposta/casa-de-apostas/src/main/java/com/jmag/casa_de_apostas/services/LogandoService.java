package com.jmag.casa_de_apostas.services;

import com.jmag.casa_de_apostas.entities.Logando;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LogandoService {

    @Autowired
    private Logando logar;

    public Logando salvar(Logando logando) {
        logar.setEmail(logando.getEmail());
        logar.setSenha(logando.getSenha());
        return logando;
    }
}
