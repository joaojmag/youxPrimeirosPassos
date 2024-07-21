package com.jmag.casa_de_apostas.resources;

import com.jmag.casa_de_apostas.entities.LogandoDTO;
import com.jmag.casa_de_apostas.entities.LoginResponseDTO;
import com.jmag.casa_de_apostas.entities.RegisterDTO;
import com.jmag.casa_de_apostas.entities.Usuario;
import com.jmag.casa_de_apostas.security.TokenService;
import com.jmag.casa_de_apostas.services.UsuarioService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UsuarioService service;

    @Autowired
    TokenService tokenService;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody @Valid LogandoDTO data) {
        var usernamePassword = new UsernamePasswordAuthenticationToken(data.login(), data.password());
        var auth = this.authenticationManager.authenticate(usernamePassword);

        var token = tokenService.generateToken((Usuario) auth.getPrincipal());

        return ResponseEntity.ok(new LoginResponseDTO(token));
    }

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody @Valid RegisterDTO data) {
        if (this.service.findByEmail(data.email()) != null) return ResponseEntity.badRequest().build();

        Usuario newUser = new Usuario(data.nome(), data.email(), data.dataNascimento(), data.senha(), data.role());
        this.service.save(newUser);

        return ResponseEntity.ok().build();
    }
}


