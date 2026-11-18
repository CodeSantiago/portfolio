---
title: "Production Agent"
summary: "Asistente de reservas por WhatsApp para negocios de servicios. Agenda, reprograma y cancela turnos en tiempo real, y opera en producción con ~500 usuarios mensuales."
details: "Asistente conversacional que gestiona la agenda de un negocio: consulta disponibilidad en tiempo real, agenda, reprograma y cancela turnos. La interacción es nativa en WhatsApp y está pensada para usuarios no técnicos."
highlights:
  - "Corre en producción atendiendo a ~500 usuarios mensuales por WhatsApp."
  - "Google Sheets como backend de disponibilidad: el negocio administra su agenda en la herramienta que ya conoce."
  - "Estado conversacional en Redis con manejo estricto de flujo, para que el LLM no improvise con una reserva real."
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
