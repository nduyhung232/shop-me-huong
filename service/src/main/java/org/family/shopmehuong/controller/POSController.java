package org.family.shopmehuong.controller;

import lombok.RequiredArgsConstructor;
import org.family.shopmehuong.service.SseService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping(value = "/pos")
@RequiredArgsConstructor
public class POSController {

    private final SseService sseService;

    @GetMapping("/sse/{clientId}")
    public SseEmitter connect(@PathVariable String clientId) {
        return sseService.createEmitter(clientId);
    }

    @GetMapping("/sse/{clientId}/{message}")
    public void test(@PathVariable String clientId, @PathVariable String message) {
        sseService.sendMessageToClient(clientId, message);
    }

}
