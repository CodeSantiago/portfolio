---
title: "IA física: enseñarle a un humanoide a caminar y cargar en NVIDIA Isaac"
description: "Un pipeline completo de simulación para un humanoide LimX de 26 articulaciones: 6.000 entornos paralelos, más de 1.000 millones de pasos de PPO y una tarea de pick & carry de 10 kg, entrenado en una sola RTX 5070."
date: 2026-11-15T00:00:00-03:00
tags: ["IA física", "RL para humanoides", "NVIDIA Isaac", "Robótica", "PPO"]
kind: technical
---

La IA física es inteligencia que sale de la pantalla y actúa en el mundo físico. Es tecnología de frontera, y esta bitácora documenta AustralVant: un pipeline en funcionamiento para IA física multipropósito, con números, registros y las fallas incluidas.

Esta es la primera entrada.

## La plataforma

Entrené el pipeline completo de un humanoide LimX DASF-TRON2A (66,8 kg, 26 articulaciones, base libre) en NVIDIA Isaac Sim 6.2 e Isaac Lab 3.0, para dos comportamientos: caminar con comandos de velocidad, y levantar y transportar cajas de 10 kg. Todo el trabajo es en simulación. Todavía no hay pruebas con hardware real, y todo lo que sigue debe leerse con eso en mente.

## Escala de entrenamiento

Hasta 6.000 entornos paralelos en una sola GPU, con física en CUDA a entre 38.000 y 42.000 pasos por segundo. Noventa y siete corridas gestionadas con auto-reanudación: un supervisor propio que detecta fallos, restaura checkpoints y hace warm-start.

Locomoción: 13.400 iteraciones de PPO con 3.500 entornos, más de 1.000 millones de pasos de simulación acumulados. Las tareas posteriores llegaron después: CarryWalk (2.050 iteraciones, 4.096 entornos) y CarryPickWalk (4.950 iteraciones, hasta 6.000 entornos).

Todo corrió en un AMD Ryzen 7 5700X3D, 32 GB de RAM y una NVIDIA RTX 5070 de 12 GB.

## Resultados

- Caminar con comandos de velocidad: error de velocidad de 0,034 m/s, 100% de episodios exitosos y 983 de 1.000 pasos de aguante.
- Caminar con 10 kg de carga en el pecho: error de velocidad de 0,066 m/s, 97,7% de episodios completos y 0% de caídas por contacto.
- Pick & carry (en progreso): con una observación de 92 dimensiones y 24 acciones, el robot se acerca a la caja, alinea ambas palmas a los costados (0,9 sobre 1,0), la sostiene por fricción con sensores de contacto en las manos y la levanta (0,46 sobre 1,0). El tramo de retorno todavía está en desarrollo.

## Ingeniería

Trasplante de políticas: reutilicé la política de locomoción como base de las tareas de manipulación, redimensionando la red en etapas (72/20 → 43/11 → 92/24) en lugar de entrenar desde cero.

Cinemática directa e inversa propias, calculadas a partir del URDF, para calibrar la pose de agarre y el punto de carga de la caja.

Diagnóstico de reward hacking: identifiqué y corregí tres mínimos locales. Una política que se queda quieta, una que se apoya en la mesa y una que empuja la caja fuera del mueble. Lo resolví con recompensas densas, puertas de postura erguida y límites de velocidad de paso humano.

PPO con learning rate adaptativo, después de diagnosticar colapsos causados por inestabilidad en las recompensas.

Pipeline de escenarios: mapa de pruebas modelado en Blender y exportado a USD con proxies de colisión, planificador A* de rutas y controlador por waypoints.

Herramientas de operación: dashboard web en vivo con métricas para cada término de recompensa y de terminación, visor con cámara de seguimiento y demo scripted de pick & carry.

## Stack

Python 3.12, PyTorch, RSL-RL (PPO), Isaac Lab 3.0 / Isaac Sim 6.2, USD (pxr), Blender, TensorBoard y servidor HTTP para el dashboard.

## Lo que viene

Los números de simulación no sobreviven solos al contacto con la realidad. Los próximos hitos son el tramo de retorno del pick & carry y, después, el hardware. La bitácora sigue en público: con métricas, con errores y con una dirección, máquinas de propósito general entrenadas en simulación.
