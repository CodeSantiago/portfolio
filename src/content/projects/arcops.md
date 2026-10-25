---
title: "ArcOps"
summary: "Cloud engineers lose hours writing CLI commands and API payloads — and one wrong parameter can break infrastructure. A fine-tuned LLM that turns natural language into exact AWS API calls: structured JSON only, no prose, no invented parameters."
details: "A Qwen2.5-7B fine-tuned with QLoRA (4-bit) that outputs only the exact JSON for AWS API execution — validated by a safety layer (schema validation, cost estimation, security policies) and running 100% locally against LocalStack or real AWS."
highlights:
  - "Fine-tuned on 10,854 curated synthetic examples with noise samples to prevent hallucinations — trained on a single RTX 5070 12GB."
  - "100% tool-selection accuracy, 82.8% field-level precision, 0% hallucinations in production (blocked by the safety layer)."
  - "Fully local: no data leaves the machine; the model generalizes to parameter combinations never seen in training."
  - "Integrations: CLI, REST API, MCP server, TUI dashboard, and Docker for GPU-free deploys."
year: 2026
status: open-source
statusNote: "open source"
stack: ["Python", "Qwen2.5-7B", "QLoRA 4-bit", "HuggingFace Transformers", "PEFT", "TRL", "FastAPI", "MCP", "LocalStack", "Docker"]
repo: https://github.com/CodeSantiago/ArcOps
featured: true
current: false
order: 2
metrics:
  - label: "tool-selection accuracy"
    value: "100%"
  - label: "field-level precision"
    value: "82.8%"
  - label: "training examples"
    value: "10,854"
---

Fine-tuned Qwen2.5-7B for deterministic AWS API payloads.
