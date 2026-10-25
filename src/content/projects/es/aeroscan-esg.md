---
title: "AeroScan-ESG"
summary: "Monitoreo satelital de metano sobre la cuenca Neuquina (Neuquén, Río Negro, Mendoza, La Pampa) usando datos de Sentinel-5P — detección de anomalías con sensibilidad configurable para cumplimiento ESG."
details: "Un dashboard geoespacial full-stack para detección de fugas de metano desde datos satelitales. Ingiere archivos diarios de CH4 de Sentinel-5P, calcula umbrales de anomalía (1σ/2σ/3σ) y renderiza un mapa interactivo con zonas de alerta y tendencias de 7 días."
highlights:
  - "Pipeline real de datos satelitales: descarga automatizada de Sentinel-5P, parseo de NetCDF y almacenamiento diario de columnas de metano en SQLite."
  - "Sensibilidad configurable mediante slider sigma — permite ajustar el compromiso entre falsos positivos y falsos negativos según el umbral de cumplimiento."
  - "Mapa interactivo con capas base vectoriales/satelitales, zonas de alerta por color (amarillo/naranja/rojo) y exportación de reportes CSV/PDF."
  - "Desplegado en Vercel (frontend) + Render (API backend) — despliegue real en producción para una demo técnica."
year: 2026
status: demo
statusNote: "demo técnica"
stack: ["FastAPI", "React", "Vite", "Leaflet", "SQLite", "Sentinel-5P CH4 (Copernicus)"]
repo: https://github.com/CodeSantiago/AeroScan-ESG
demo: https://aero-scan-esg.vercel.app
order: 5
metrics:
  - label: "fuente satelital"
    value: "Sentinel-5P"
  - label: "bandas de anomalía"
    value: "1σ / 2σ / 3σ"
---

Monitoreo satelital de metano sobre la cuenca Neuquina.
