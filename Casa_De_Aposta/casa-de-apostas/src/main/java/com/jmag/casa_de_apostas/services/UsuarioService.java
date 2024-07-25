package com.jmag.casa_de_apostas.services;

import com.jmag.casa_de_apostas.entities.Usuario;
import com.jmag.casa_de_apostas.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository repository;

    public Optional<Usuario> findById(Integer id) {
        return repository.findById(id);
    }

    public List<Usuario> findAll() {
        return repository.findAll();
    }

    public Usuario save(Usuario usuario) {

        if (verificarSenha(usuario)) {
            String encryptedPassword = new BCryptPasswordEncoder().encode(usuario.getSenha());
            usuario.setSenha(encryptedPassword);
            return repository.save(usuario);
        } else
            throw new ResponseStatusException(HttpStatus.NOT_ACCEPTABLE);
    }

    public void delete(Integer id) {
        repository.findById(id)
                .map(e -> {
                    repository.delete(e);
                    return e;
                });
    }

    public void update(Integer id, Usuario usuario) {
        repository
                .findById(id)
                .map(e -> {
                    usuario.setId(e.getId());
                    save(usuario);
                    return e;
                }).orElseThrow(() ->
                        new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public UserDetails findByEmail(String email) {
        return repository.findByEmail(email);
    }

    public void bloquear(Integer id) {
        Usuario usuario = repository.findById(id).get();
        if (!(usuario.getBloqueado())) {
            String criptEmail = new BCryptPasswordEncoder().encode(usuario.getEmail());
            usuario.setEmail(criptEmail);
            usuario.setBloqueado(true);
            usuario.setId(usuario.getId());
            save(usuario);
        } else {
            usuario.setEmail(usuario.getEmailParaBloqueio());
            usuario.setBloqueado(false);
            usuario.setId(usuario.getId());
            save(usuario);
        }
    }

    private boolean verificarSenha(Usuario usuario) {

        // Expressão regular para verificar se contém pelo menos uma letra maiúscula, um número e um caractere especial
        String chaveParaVerificacao = "^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\\-=\\[\\]{};':\"\\\\|,.<>\\/?]).{8,}$";
        String senha = usuario.getSenha();

        Pattern pattern = Pattern.compile(chaveParaVerificacao);
        Matcher matcher = pattern.matcher(senha);

        return matcher.matches();
    }

}

