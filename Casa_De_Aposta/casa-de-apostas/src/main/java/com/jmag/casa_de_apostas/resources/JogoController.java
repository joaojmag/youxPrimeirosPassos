package com.jmag.casa_de_apostas.resources;


import com.jmag.casa_de_apostas.entities.dto.JogandoDTO;
import com.jmag.casa_de_apostas.services.JogoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jogo")
public class JogoController {

    @Autowired
    private JogoService jogoService;

    @GetMapping
    public List<Integer> getNumerosAleatorios() {
        return jogoService.gerarListaAleatorio();
    }

    @PostMapping
    public Double mandarNumero(@RequestBody JogandoDTO dadosJogo){
        return jogoService.jogando(dadosJogo);
    }

}
