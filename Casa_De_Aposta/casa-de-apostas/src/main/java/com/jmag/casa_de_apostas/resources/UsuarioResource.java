package com.jmag.casa_de_apostas.resources;

import com.jmag.casa_de_apostas.entities.Usuario;
import com.jmag.casa_de_apostas.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/usuarios")
public class UsuarioResource {

    @Autowired
    private UsuarioService service;

    @GetMapping("/{id}")
    public Usuario getUsuarioById(@PathVariable Integer id) {
        return service
                .findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @GetMapping
    public List<Usuario> getUsuarios() {
        return service.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Usuario save(@RequestBody Usuario usuario) {
        return service.save(usuario);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Integer id) {
        service.findById(id)
                .map(e -> {
                    service.delete(e.getId());
                    return e;
                })
                .orElseThrow(() ->
                        new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@PathVariable Integer id, @RequestBody Usuario usuario) {
        try {
            service.update(id, usuario);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @PutMapping("/bloquear/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void isBloquear(@PathVariable Integer id) {
        try {
            service.bloquear(id);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}