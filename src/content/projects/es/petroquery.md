---
title: "RAG PetroQuery"
summary: "Los ingenieros de campo en Vaca Muerta necesitan respuestas inmediatas sobre manuales densos de perforación — y alucinar un valor de presión no es opción. Un pipeline RAG que responde con citas, números validados y trazabilidad completa."
details: "Un pipeline tipado de seis etapas para RAG en industrias críticas: clasificación, recuperación híbrida, reranking, generación forzada por esquema, validación numérica y alertas de seguridad."
highlights:
  - "Validación numérica que cruza cada cifra contra los fragmentos recuperados — el sistema se abstiene antes de inventar una especificación."
  - "Trazabilidad en 4 niveles (documento → página → sección → tabla/figura)."
  - "Recuperación híbrida: vectores e5-large + PostgreSQL FTS fusionados con RRF y reranking con cross-encoder — diseñado para prosa en español mezclada con siglas en inglés (BOP, H2S, PPE)."
  - "Generación estructurada vía Instructor + Pydantic: el LLM no puede devolver salidas malformadas."
year: 2026
status: demo
statusNote: "demo técnica"
stack: ["FastAPI", "SQLAlchemy 2.0 (async)", "Pydantic", "Instructor", "Next.js", "PostgreSQL 16 + pgvector", "Groq", "multilingual-e5-large", "Docker", "pytest"]
repo: https://github.com/CodeSantiago/petroquery
featured: true
order: 4
metrics:
  - label: "etapas del pipeline"
    value: "6"
  - label: "niveles de trazabilidad"
    value: "4"
  - label: "recuperación"
    value: "Híbrida + RRF"
---

Pipeline RAG de alta confiabilidad para manuales de perforación.
