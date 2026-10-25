---
title: "RAG PetroQuery"
summary: "Field engineers in Vaca Muerta need instant answers from dense drilling manuals — and a hallucinated pressure rating is not an option. A RAG pipeline that answers with citations, validated numbers, and a full audit trail."
details: "A six-stage typed pipeline for safety-critical RAG: classification, hybrid retrieval, reranking, schema-enforced generation, numeric validation, and safety overlays."
highlights:
  - "Numeric validation cross-checks every figure against retrieved chunks — the system abstains rather than inventing a spec."
  - "4-level traceability (document → page → section → table/figure), as required by Argentine IAPG regulations."
  - "Hybrid retrieval: e5-large vectors + PostgreSQL FTS fused with RRF, then cross-encoder reranking — built for Spanish prose mixed with English acronyms (BOP, H2S, PPE)."
  - "Structured generation via Instructor + Pydantic: the LLM cannot return malformed output."
year: 2026
status: demo
statusNote: "technical demo"
stack: ["FastAPI", "SQLAlchemy 2.0 (async)", "Pydantic", "Instructor", "Next.js", "PostgreSQL 16 + pgvector", "Groq", "multilingual-e5-large", "Docker", "pytest"]
repo: https://github.com/CodeSantiago/petroquery
featured: true
order: 4
metrics:
  - label: "pipeline stages"
    value: "6"
  - label: "traceability levels"
    value: "4"
  - label: "retrieval"
    value: "Hybrid + RRF"
---

Safety-critical RAG pipeline for drilling manuals.
