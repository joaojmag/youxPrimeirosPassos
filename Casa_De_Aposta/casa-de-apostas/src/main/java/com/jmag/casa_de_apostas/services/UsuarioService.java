package com.jmag.casa_de_apostas.services;

import com.jmag.casa_de_apostas.config.SecurityConfig;
import com.jmag.casa_de_apostas.entities.Logando;
import com.jmag.casa_de_apostas.entities.Usuario;
import com.jmag.casa_de_apostas.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
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

    @Autowired
    private SecurityConfig securityConfig;

    @Autowired
    private PasswordEncoder encoder;

    public Optional<Usuario> findById(Integer id) {
        return repository.findById(id);
    }

    public List<Usuario> findAll() {
        return repository.findAll();
    }

    public Usuario save(Usuario usuario) {

        if (verificarSenha(usuario)) {
            // Para criptografar a senha
            String senhaCriptografada = securityConfig.passwordEncoder().encode(usuario.getSenha());
            usuario.setSenha(senhaCriptografada);
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

    private boolean verificarSenha(Usuario usuario) {

        // Expressão regular para verificar se contém pelo menos uma letra maiúscula, um número e um caractere especial
        String chaveParaVerificacao = "^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\\-=\\[\\]{};':\"\\\\|,.<>\\/?]).{8,}$";
        String senha = usuario.getSenha();

        Pattern pattern = Pattern.compile(chaveParaVerificacao);
        Matcher matcher = pattern.matcher(senha);

        return matcher.matches();
    }

    public UserDetails autenticar(Logando logando) {
        UserDetails user = loadUserByEmail(logando.getEmail());
        boolean senhasBatem = encoder.matches(logando.getSenha(), user.getPassword());

        if (senhasBatem) {
            return user;
        }

        throw new RuntimeException("Erro ao tentar autenticar");
    }


    public UserDetails loadUserByEmail(String email) throws UsernameNotFoundException {
        Usuario usuario = repository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado na base de dados."));

        String[] roles = usuario.isAdmin() ?
                new String[]{"ADMIN", "USER"} : new String[]{"USER"};

        return User
                .builder()
                .username(usuario.getEmail())
                .password(usuario.getSenha())
                .roles(roles)
                .build();
    }

}

