package com.jmag.casa_de_apostas.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf().disable().authorizeHttpRequests(authorize -> authorize
                .requestMatchers("/api/usuarios/**").permitAll()
                .requestMatchers("/api/login").permitAll()
                .anyRequest().authenticated());
//                .formLogin(form -> form
//                        .loginPage("/api/login") // Página de login personalizada, se tiver
//                        .permitAll()
//                )
//                .logout(logout -> logout
//                        .permitAll()
//                );

        return http.build();
    }

}
