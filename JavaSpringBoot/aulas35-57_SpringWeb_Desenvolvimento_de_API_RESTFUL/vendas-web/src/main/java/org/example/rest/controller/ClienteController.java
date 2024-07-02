package org.example.rest.controller;

import org.example.domain.entity.Cliente;
import org.example.domain.repository.Clientes;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

//@Controller
@RestController // no precisamos colocar ResponseBody nos metodos abaixo
@RequestMapping("/api/clientes")
public class ClienteController {
//
////    @RequestMapping(value = {"/hello/{nome}", "/joao"}, method = RequestMethod.GET)
////    @ResponseBody
////    public String helloCliente(@PathVariable("nome") String nomeCliente) {
////        return String.format("Hello %s", nomeCliente);
////    }
//
//    private Clientes clientes;
//
//    public ClienteController(Clientes clientes) {
//        this.clientes = clientes;
//    }
//
//    @GetMapping("{id}")
////    @ResponseBody
//    public Cliente getClienteById(@PathVariable Integer id) {
//        Optional<Cliente> cliente = clientes.findById(id);
//
//        if (cliente.isPresent()) {
////            return ResponseEntity.ok(cliente.get());
//            return cliente.get();
//        }
//
//        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não encontrado");
////        return ResponseEntity.notFound().build();
//    }
//
////    @GetMapping("/todos")
////    @ResponseBody
////    public ResponseEntity getCliente() {
////        List<Cliente> cliente = clientes.findAll();
////        return ResponseEntity.ok(cliente);
////    }
//
//    @PostMapping
////    @ResponseBody
//    public ResponseEntity<Cliente> save(@RequestBody Cliente cliente) {
//        Cliente clienteSalvo = clientes.save(cliente);
//        return ResponseEntity.ok(cliente);
//    }
//
//    @DeleteMapping("{id}")
////    @ResponseBody
//    public ResponseEntity<Cliente> delete(@PathVariable Integer id) {
//        Optional<Cliente> cliente = clientes.findById(id);
//
//        if (cliente.isPresent()) {
//            clientes.delete(cliente.get());
//            return ResponseEntity.noContent().build();
//        }
//        return ResponseEntity.notFound().build();
//    }
//
//    @PutMapping("{id}")
////    @ResponseBody
//    public ResponseEntity update(@PathVariable Integer id,
//                                 @RequestBody Cliente cliente) {
//        return clientes
//                .findById(id)
//                .map(clienteExistente -> {
//                    cliente.setId(clienteExistente.getId());
//                    clientes.save(cliente);
//                    return ResponseEntity.noContent().build();
//                }).orElseGet(() -> ResponseEntity.notFound().build());
//    }
//
//    @GetMapping
//    public ResponseEntity find(Cliente filtro) {
//        ExampleMatcher matcher = ExampleMatcher.matching().withIgnoreCase().withStringMatcher(ExampleMatcher.StringMatcher.CONTAINING);
//        Example example = Example.of(filtro, matcher);
//        List<Cliente> lista = clientes.findAll(example);
//        return ResponseEntity.ok(lista);
//
//    }

private Clientes clientes;

    public ClienteController( Clientes clientes ) {
        this.clientes = clientes;
    }

    @GetMapping("{id}")
    public Cliente getClienteById( @PathVariable Integer id ){
        return clientes
                .findById(id)
                .orElseThrow(() ->
                        new ResponseStatusException(HttpStatus.NOT_FOUND,
                                "Cliente não encontrado"));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Cliente save( @RequestBody Cliente cliente ){
        return clientes.save(cliente);
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete( @PathVariable Integer id ){
        clientes.findById(id)
                .map( cliente -> {
                    clientes.delete(cliente );
                    return cliente;
                })
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                        "Cliente não encontrado") );

    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update( @PathVariable Integer id,
                        @RequestBody Cliente cliente ){
        clientes
                .findById(id)
                .map( clienteExistente -> {
                    cliente.setId(clienteExistente.getId());
                    clientes.save(cliente);
                    return clienteExistente;
                }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                    "Cliente não encontrado") );
    }

    @GetMapping
    public List<Cliente> find( Cliente filtro ){
        ExampleMatcher matcher = ExampleMatcher
                                    .matching()
                                    .withIgnoreCase()
                                    .withStringMatcher(
                                            ExampleMatcher.StringMatcher.CONTAINING );

        Example example = Example.of(filtro, matcher);
        return clientes.findAll(example);
    }


}
