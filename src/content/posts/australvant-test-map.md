---
title: "Inside the AustralVant test map: a humanoid learning to walk in NVIDIA Isaac"
description: "Two simulation frames of the 66.8 kg biped in the factory test map used for locomotion training in Isaac Sim and Isaac Lab."
date: 2026-11-19T00:00:00-03:00
tags: ["Physical AI", "Humanoid RL", "NVIDIA Isaac", "Robotics"]
kind: technical
---

These two frames come from the simulation where the biped is trained. The environment is the test map: an industrial hall modeled in Blender and exported to USD with collision proxies and waypoint routes.

<figure>
  <img src="/images/australvant/biped-factory.png" alt="The white humanoid standing in an industrial test hall, seen from behind and to the side" loading="lazy" />
  <figcaption>The DASF-TRON2A in the factory test map, rendered in Isaac Sim.</figcaption>
</figure>

The robot is a LimX DASF-TRON2A: 66.8 kg, 26 joints, free base. Both images were captured in Isaac Sim during locomotion runs, with the same policy described in the [first log entry](/posts/physical-ai-humanoid-isaac).

<figure>
  <img src="/images/australvant/biped-hall.png" alt="Front view of the white humanoid standing in the test hall" loading="lazy" />
  <figcaption>Front view in the test hall. The policy walks on velocity commands.</figcaption>
</figure>

The training runs up to 6,000 parallel environments on a single GPU. The current locomotion numbers: 0.034 m/s velocity error, 100% successful episodes, and 983 of 1,000 endurance steps.

The map is where routes and scene behavior are tested: the waypoint controller and the A* planner run on the same scenario. Everything remains simulation. There are no hardware trials yet.
