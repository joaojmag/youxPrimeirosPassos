package com.jmag.casa_de_apostas.resources;

import com.jmag.casa_de_apostas.entities.Logando;
import com.jmag.casa_de_apostas.services.LogandoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/login")
public class LogandoResources {

    @Autowired
    private LogandoService service;

    @PostMapping
    public Logando infoLogin(@RequestBody Logando logando) {
        return service.salvar(logando);
    }
}
