---
title: "AeroScan-ESG"
summary: "Satellite methane monitoring over the Neuquina basin (Neuquén, Río Negro, Mendoza, La Pampa) using Sentinel-5P data — anomaly detection with configurable sensitivity for ESG compliance."
details: "A full-stack geospatial dashboard for methane leak detection from satellite data. Ingests daily Sentinel-5P CH4 files, computes anomaly thresholds (1σ/2σ/3σ), and renders an interactive map with alert zones and 7-day trend charts."
highlights:
  - "Real satellite data pipeline: automated Sentinel-5P download, NetCDF parsing, and daily methane column storage in SQLite."
  - "Configurable sensitivity via sigma slider — users tune false-positive vs false-negative tradeoff for their compliance threshold."
  - "Interactive map with vector/satellite basemaps, color-coded alert zones (yellow/orange/red), and CSV/PDF report export."
  - "Deployed on Vercel (frontend) + Render (backend API) — a deployed demo, not a production system."
year: 2026
status: demo
statusNote: "technical demo"
stack: ["FastAPI", "React", "Vite", "Leaflet", "SQLite", "Sentinel-5P CH4 (Copernicus)"]
repo: https://github.com/CodeSantiago/AeroScan-ESG
demo: https://aero-scan-esg.vercel.app
order: 5
metrics:
  - label: "satellite source"
    value: "Sentinel-5P"
  - label: "anomaly bands"
    value: "1σ / 2σ / 3σ"
---

Satellite methane leak monitoring over the Neuquina basin.
