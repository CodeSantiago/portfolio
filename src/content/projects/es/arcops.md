---
title: "ArcOps"
summary: "Los ingenieros cloud pierden horas escribiendo comandos CLI y payloads de API — y un parámetro erróneo puede romper infraestructura. Un LLM fine-tuneado que convierte lenguaje natural en llamadas exactas a la API de AWS: solo JSON estructurado, sin prosa ni parámetros inventados."
details: "Un Qwen2.5-7B fine-tuneado con QLoRA (4-bit) que emite únicamente el JSON exacto para ejecutar en la API de AWS — validado por una capa de seguridad (validación de esquemas, estimación de costos y políticas de seguridad) y corriendo 100% en local contra LocalStack o AWS real."
highlights:
  - "Fine-tuning sobre 10.854 ejemplos sintéticos curados con muestras de ruido para prevenir alucinaciones — entrenado en una sola RTX 5070 de 12GB."
  - "100% de precisión en selección de herramientas y 82.8% de precisión a nivel de campos en evaluación."
  - "100% local: ningún dato sale de la máquina; el modelo generaliza a combinaciones de parámetros nunca vistas en el entrenamiento."
  - "Integraciones: CLI, API REST, servidor MCP, dashboard TUI y Docker para despliegues sin GPU."
year: 2026
status: open-source
statusNote: "open source"
stack: ["Python", "Qwen2.5-7B", "QLoRA 4-bit", "HuggingFace Transformers", "PEFT", "TRL", "FastAPI", "MCP", "LocalStack", "Docker"]
repo: https://github.com/CodeSantiago/ArcOps
featured: true
current: false
order: 2
metrics:
  - label: "precisión de herramienta"
    value: "100%"
  - label: "precisión por campo"
    value: "82.8%"
  - label: "ejemplos de entrenamiento"
    value: "10,854"
---

Qwen2.5-7B fine-tuneado para llamadas determinísticas en AWS.
