package org.example.rest.controller;

import org.example.domain.entity.Cliente;
import org.example.domain.repository.Clientes;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/api/clientes")
public class ClienteController {

//    @RequestMapping(value = {"/hello/{nome}", "/joao"}, method = RequestMethod.GET)
//    @ResponseBody
//    public String helloCliente(@PathVariable("nome") String nomeCliente) {
//        return String.format("Hello %s", nomeCliente);
//    }

    private Clientes clientes;

    public ClienteController(Clientes clientes) {
        this.clientes = clientes;
    }

    @GetMapping("/{id}")
    @ResponseBody
    public ResponseEntity<Cliente> getClienteById(@PathVariable Integer id) {
        Optional<Cliente> cliente = clientes.findById(id);

        if (cliente.isPresent())
            return ResponseEntity.ok(cliente.get());

        return ResponseEntity.notFound().build();
    }

//    @GetMapping("/")
//    @ResponseBody
//    public ResponseEntity<Cliente> getCliente() {
//        List<Cliente> cliente = clientes.findAll();
//
////        if (cliente.isEmpty())
//            return ResponseEntity.ok((Cliente) cliente);
//
////        return ResponseEntity.notFound().build();
//    }

    @PostMapping("/")
    @ResponseBody
    public ResponseEntity<Cliente> save(@RequestBody Cliente cliente) {
        Cliente clienteSalvo = clientes.save(cliente);
        return ResponseEntity.ok(cliente);
    }

    @DeleteMapping("/{id}")
    @ResponseBody
    public ResponseEntity<Cliente> delete(@PathVariable Integer id) {
        Optional<Cliente> cliente = clientes.findById(id);

        if (cliente.isPresent()) {
            clientes.delete(cliente.get());
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

}
