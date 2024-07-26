package com.jmag.casa_de_apostas.services;

import com.jmag.casa_de_apostas.entities.dto.RegisterDTO;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMailMessage;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

@Service
public class EmailConfirmacaoService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendMail(RegisterDTO registerDTO) throws MessagingException, IOException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);

        helper.setFrom("casadeapostas@gmail.com");
        helper.setSubject("Casa de Aposta do João");
        helper.setTo(registerDTO.email());

        String template = carregaTemplateEmail();

        template = template.replace("{nome}", registerDTO.nome());
        template = template.replace("{nome do servico}", "Casa de Aposta do João");
        helper.setText(template, true);
        mailSender.send(message);

    }

    private String carregaTemplateEmail() throws IOException {
        ClassPathResource resource = new ClassPathResource("modelo-email.html");
        return new String(resource.getInputStream().readAllBytes(), StandardCharsets.UTF_8);
    }

}
