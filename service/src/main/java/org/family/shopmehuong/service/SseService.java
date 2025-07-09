package org.family.shopmehuong.service;

import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class SseService {

    private final Map<String, SseEmitter> clients = new ConcurrentHashMap<>();

    public SseEmitter createEmitter(String clientId) {
        SseEmitter emitter = new SseEmitter(0L); // never timeout
        clients.put(clientId, emitter);

        emitter.onCompletion(() -> clients.remove(clientId));
        emitter.onTimeout(() -> clients.remove(clientId));

        return emitter;
    }

    public void sendMessageToClient(String clientId, String data) {
        SseEmitter emitter = clients.get(clientId);
        if (emitter != null) {
            try {
                emitter.send(SseEmitter.event()
                        .name("message")
                        .data(data));
            } catch (IOException e) {
                clients.remove(clientId);
            }
        }
    }
}
