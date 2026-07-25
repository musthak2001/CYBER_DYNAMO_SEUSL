# Multi-Agent Crack Detection & Measurement Analysis System

<div align="center">
  <p>A professional, highly-interactive Structural Intelligence System for analyzing and measuring concrete cracks and structural anomalies.</p>
</div>

## 📌 Overview

This project provides a state-of-the-art crack analysis platform designed to automate the inspection of structural surfaces. Utilizing advanced computer vision models and multi-agent orchestration, the system processes images, segments crack contours, and measures physical dimensions (width, length, area) to accurately assess structural integrity.

## ✨ Key Features

- **Automated Crack Detection**: Uses **YOLO** (Ultralytics) to accurately segment and localize crack contours.
- **Physical Measurement**: Calculates precise crack dimensions including width (mm), length (mm), and overall area (mm²).
- **Multi-Agent Orchestration**: Built upon LangGraph logic to seamlessly coordinate detection, measurement, thresholding, and reporting.
- **High-Performance Dashboard**: A stunning, modern web interface built with **React**, **Vite**, and **Tailwind CSS**.
- **Interactive Visualizations**: Review uploaded images, inspect bounding paths, and filter anomalies by severity (High, Medium, Low risk).
- **Automated Reporting**: Export comprehensive structural analysis results to PDF.

## 🛠️ Technology Stack

**Frontend Web Application:**
- React 19
- Vite
- Tailwind CSS
- Recharts
- Lucide Icons

**Core Detection & Agent Logic (Python Environment Option):**
- YOLO (Ultralytics)
- OpenCV
- LangGraph
- Streamlit

## 🚀 Getting Started

We provide instructions for running the project in two different modes:
1. **Web Production Stack**: A full-stack Node.js + React application for the interactive dashboard.
2. **Full-Python Stack**: The backend ML pipeline utilizing YOLO, OpenCV, and a Streamlit UI.

### Installation & Deployment

For a comprehensive, step-by-step guide on how to set up the environment, install dependencies, and run the project locally, please refer to the `LOCAL_SETUP.md` file:

👉 **[Read the Local Setup Blueprint](./LOCAL_SETUP.md)**

## 🛡️ License & Copyright

© 2026 Structural Intelligence Systems • Powered by Team Cyber Dynamo & LangGraph logic.
