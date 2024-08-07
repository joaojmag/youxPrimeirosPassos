package com.jmag.casa_de_apostas.resources;


import com.jmag.casa_de_apostas.entities.Jogo;
import com.jmag.casa_de_apostas.entities.dto.IniciarPartidaDTO;
import com.jmag.casa_de_apostas.entities.dto.JogandoDTO;
import com.jmag.casa_de_apostas.services.JogoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/jogo")
public class JogoController {

    @Autowired
    private JogoService jogoService;

    @PostMapping("/comecar/jogando")
    public Double mandarNumero(@RequestBody JogandoDTO dadosJogo) {
        return jogoService.jogando(dadosJogo);
    }

    @PostMapping("/comecar")
    public Integer comecarJogo(@RequestBody IniciarPartidaDTO iniciarPartidaDTO) {
        return jogoService.iniciarPartida(iniciarPartidaDTO);
    }

    @GetMapping
    public List<Jogo> getAllJogo() {
        return jogoService.findAll();
    }

    @GetMapping("/paginacao/{id}")
    public List<Jogo> getPaginas(@PathVariable Integer id) {
        return jogoService.paginacao(id);
    }
}