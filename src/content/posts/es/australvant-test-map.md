---
title: "Dentro del mapa de pruebas de AustralVant: un humanoide aprendiendo a caminar en NVIDIA Isaac"
description: "Dos capturas de simulación del bípedo de 66,8 kg en el mapa de fábrica usado para el entrenamiento de locomoción en Isaac Sim e Isaac Lab."
date: 2026-11-19T00:00:00-03:00
tags: ["IA física", "RL para humanoides", "NVIDIA Isaac", "Robótica"]
kind: technical
---

Estas dos capturas vienen de la simulación donde se entrena el bípedo. El entorno es el mapa de pruebas: una nave industrial modelada en Blender y exportada a USD con proxies de colisión y rutas de waypoints.

<figure>
  <img src="/images/australvant/biped-factory.png" alt="El humanoide blanco de pie en una nave industrial de pruebas, visto de espaldas y de costado" loading="lazy" />
  <figcaption>El DASF-TRON2A en el mapa de fábrica, renderizado en Isaac Sim.</figcaption>
</figure>

El robot es un LimX DASF-TRON2A: 66,8 kg, 26 articulaciones, base libre. Ambas imágenes fueron capturadas en Isaac Sim durante las corridas de locomoción, con la misma política descrita en la [primera entrada de la bitácora](/es/posts/physical-ai-humanoid-isaac).

<figure>
  <img src="/images/australvant/biped-hall.png" alt="Vista frontal del humanoide blanco de pie en la nave de pruebas" loading="lazy" />
  <figcaption>Vista frontal en la nave de pruebas. La política camina con comandos de velocidad.</figcaption>
</figure>

El entrenamiento corre hasta 6.000 entornos paralelos en una sola GPU. Los números actuales de locomoción: error de velocidad de 0,034 m/s, 100% de episodios exitosos y 983 de 1.000 pasos de aguante.

El mapa es donde se prueban rutas y comportamiento en escena: el controlador por waypoints y el planificador A* operan sobre el mismo escenario. Todo sigue siendo simulación. Todavía no hay pruebas con hardware real.
