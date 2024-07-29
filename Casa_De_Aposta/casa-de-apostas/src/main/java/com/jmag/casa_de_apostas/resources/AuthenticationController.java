package com.jmag.casa_de_apostas.resources;

import com.jmag.casa_de_apostas.entities.dto.LogandoDTO;
import com.jmag.casa_de_apostas.entities.dto.LoginResponseDTO;
import com.jmag.casa_de_apostas.entities.dto.RegisterDTO;
import com.jmag.casa_de_apostas.entities.Usuario;
import com.jmag.casa_de_apostas.security.TokenService;
import com.jmag.casa_de_apostas.services.EmailConfirmacaoService;
import com.jmag.casa_de_apostas.services.UsuarioService;
import jakarta.mail.MessagingException;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UsuarioService service;

    @Autowired
    TokenService tokenService;

    @Autowired
    private EmailConfirmacaoService emailConfirmacaoService;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody @Valid LogandoDTO data) {
        var usernamePassword = new UsernamePasswordAuthenticationToken(data.login(), data.password());
        var auth = this.authenticationManager.authenticate(usernamePassword);

        var token = tokenService.generateToken((Usuario) auth.getPrincipal());

        return ResponseEntity.ok(new LoginResponseDTO(token));
    }

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody @Valid RegisterDTO data) throws MessagingException, IOException {
        if (this.service.findByEmail(data.email()) != null) return ResponseEntity.badRequest().build();

        Usuario newUser = new Usuario(data.nome(), data.email(), data.dataNascimento(), data.senha(), data.role());
        this.service.save(newUser);

        service.bloqueandoParaValidar(data);

        emailConfirmacaoService.sendMail(data);

        return ResponseEntity.ok().build();
    }

    @PostMapping("/resetar/senha")
    public String resetarSenha(@RequestBody LogandoDTO logandoDTO) {
        return service.resetarSenha(logandoDTO);
    }

    @GetMapping("/ativando/{email}")
    public String validandoemail(@PathVariable String email) {
        return service.desbloqueandoParaValidar(email);
    }

}