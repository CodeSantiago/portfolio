---
title: "Production Agent"
summary: "Los negocios de reservas pierden clientes cuando nadie responde WhatsApp fuera de horario. Este asistente agenda, reprograma y cancela turnos en tiempo real — y ya atiende a ~500 usuarios mensuales."
details: "Construido para restricciones reales de producción: disponibilidad en tiempo real, flujos seguros de reprogramación, manejo de cancelaciones e interacción nativa en WhatsApp para usuarios no técnicos."
highlights:
  - "Corre en producción atendiendo a ~500 usuarios mensuales por WhatsApp."
  - "Google Sheets como backend de disponibilidad, para que el negocio siga administrando su agenda en la herramienta que ya conoce."
  - "Estado conversacional en Redis con manejo estricto de flujo, evitando que el LLM improvise con una reserva real."
  - "Repositorio privado por contrato con el cliente."
year: 2025
status: production
statusNote: "en producción · ~500 usuarios mensuales"
stack: ["Python", "FastAPI", "Redis", "Google Sheets API", "Groq LLM API", "asyncio", "REST APIs", "webhooks"]
featured: true
order: 1
metrics:
  - label: "usuarios mensuales"
    value: "~500"
  - label: "canal principal"
    value: "WhatsApp"
  - label: "memoria de estado"
    value: "Redis"
---

Construido para restricciones de producción.
