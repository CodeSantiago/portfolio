---
title: "Physical AI: teaching a humanoid to walk and carry in NVIDIA Isaac"
description: "A complete simulation pipeline for a 26-joint LimX humanoid: 6,000 parallel environments, over 1 billion PPO steps, and a 10 kg pick and carry task, trained on a single RTX 5070."
date: 2026-11-15T00:00:00-03:00
tags: ["Physical AI", "Humanoid RL", "NVIDIA Isaac", "Robotics", "PPO"]
kind: technical
---

Physical AI is intelligence that leaves the screen and acts in the physical world. It is frontier technology, and this log documents AustralVant: a working pipeline for multipurpose physical AI, with numbers, logs, and the failures included.

This is the first entry.

## The platform

I trained the full pipeline for a LimX DASF-TRON2A humanoid (66.8 kg, 26 joints, free base) on NVIDIA Isaac Sim 6.2 and Isaac Lab 3.0, for two behaviors: walking on velocity commands, and picking up and carrying 10 kg boxes. All of this work is simulation. There have been no trials with real hardware yet, and everything below should be read with that in mind.

## Training scale

Up to 6,000 parallel environments on a single GPU, with CUDA physics running at roughly 38,000 to 42,000 steps per second. Ninety-seven runs managed with auto-resume: a custom supervisor that detects failures, restores checkpoints, and warm-starts.

Locomotion ran 13,400 PPO iterations across 3,500 environments, more than 1 billion accumulated simulation steps. The later tasks followed: CarryWalk (2,050 iterations, 4,096 environments) and CarryPickWalk (4,950 iterations, up to 6,000 environments).

The whole thing ran on an AMD Ryzen 7 5700X3D, 32 GB of RAM, and an NVIDIA RTX 5070 with 12 GB.

## Results

- Walking on velocity commands: 0.034 m/s velocity error, 100% of episodes successful, and 983 of 1,000 endurance steps.
- Walking with 10 kg on the chest: 0.066 m/s velocity error, 97.7% of episodes completed, and 0% falls caused by contact.
- Pick & carry (in progress): with a 92-dimensional observation and 24 actions, the robot approaches the box, aligns both palms against its sides (0.9 out of 1.0), holds it by friction using contact sensors in the hands, and lifts it (0.46 out of 1.0). The return leg is still in development.

## Engineering

Policy transplantation: I reused the locomotion policy as the base for manipulation, resizing the network in stages (72/20 → 43/11 → 92/24) instead of training from scratch.

Own forward and inverse kinematics, computed from the URDF, to calibrate the grasp pose and the box's load point.

Reward hacking diagnosis: I identified and fixed three local minima. A policy that stands still, one that leans on the table, and one that pushes the box off the furniture. I resolved them with dense rewards, upright posture gates, and human step velocity limits.

PPO with adaptive learning rate, after diagnosing collapses caused by reward instability.

Scenario pipeline: a test map modeled in Blender and exported to USD with collision proxies, an A* path planner, and a waypoint controller.

Operation tooling: a live web dashboard with metrics for every reward and termination term, a viewer with a tracking camera, and a scripted pick & carry demo.

## Stack

Python 3.12, PyTorch, RSL-RL (PPO), Isaac Lab 3.0 / Isaac Sim 6.2, USD (pxr), Blender, TensorBoard, and an HTTP server for the dashboard.

## What comes next

Simulation numbers do not survive contact with reality on their own. The next milestones are the return leg of pick & carry, and then hardware. The log continues in public: with metrics, with mistakes, and with a direction, general-purpose machines trained in simulation.
