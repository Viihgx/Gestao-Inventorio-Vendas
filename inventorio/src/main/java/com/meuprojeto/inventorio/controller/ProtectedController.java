package com.meuprojeto.inventorio.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ProtectedController {

    @GetMapping("/protected")
    public String protectedEndpoint() {
        return "Você acessou uma rota protegida com sucesso!";
    }
}
