# Multi-Agent Crack Detection & Measurement Analysis System

<div align="center">
  <p>A professional, highly-interactive Structural Intelligence System for analyzing and measuring concrete cracks and structural anomalies using drone imagery and AI.</p>
</div>

## 📌 Project Purpose

The primary purpose of this project is to automate the hazardous and time-consuming process of structural inspection. By utilizing advanced computer vision and multi-agent AI orchestration, this system can rapidly ingest structural imagery (e.g., from drones), accurately segment crack contours, and automatically extract physical measurements such as length, width, and area. This empowers engineers to assess structural integrity, track crack growth over time, and make fast, data-driven safety decisions without risking human lives on scaffolding.

> [!WARNING]
> **🚧 Under Construction**: The database integration and cloud storage features are currently under active development. Some related functionalities may be limited or mocked in the current release.

## 🛠️ Technology Stack

Our technology stack utilizes cutting-edge web and machine learning frameworks:

**Frontend Web Dashboard:**
- **React 19** & **Vite**: For a lightning-fast, highly responsive single-page application.
- **Tailwind CSS**: For modern, sleek, and strictly consistent UI styling.
- **Recharts** & **Lucide Icons**: For interactive data visualization and iconography.
- **OpenAI API**: Powering the context-aware Interactive AI Chatbot.

**Core Detection & AI Agent Pipeline (Backend / ML):**
- **YOLO (Ultralytics)**: For state-of-the-art visual crack segmentation and object detection.
- **OpenCV**: For local computer vision contouring and image manipulation.
- **LangGraph**: For orchestrating the complex multi-agent reasoning workflow.
- **Python / Streamlit**: For backend pipeline execution and alternative ML data visualization.

## ✨ Core Features & The AI Agent Workflow

The system is defined by its ability to ingest imagery and process it through a completely autonomous **5-Agent Workflow Framework** (built on LangGraph). 

### The AI Agent Workflow:
1. **Detect Agent**: Uses YOLO computer vision models to accurately identify, segment, and localize crack contours on the concrete surface.
2. **Measure Agent**: Calculates precise crack dimensions, specifically extracting the maximum width (mm) and cumulative length (mm).
3. **Area Agent**: Computes the overall surface area (mm²) of the detected anomaly.
4. **Threshold Agent**: Evaluates the extracted dimensions against strict engineering thresholds to classify the severity as **Low, Medium, or High risk**.
5. **Report Agent**: Compiles the analytical data into structured logs and prepares the data for PDF generation.

### Additional Features:
- **Interactive Visualizations**: A dynamic dashboard to review uploaded images, inspect bounding paths, and filter anomalies by severity.
- **Interactive AI Assistant**: An integrated OpenAI chatbot that sits on the dashboard. It is contextually aware of the current crack's dimensions and severity, ready to answer engineering questions.
- **Automated Reporting**: Export comprehensive structural analysis results to certified PDF reports.

## 🚀 Setup Instructions

We provide instructions for running the project locally in two modes: the Node.js/React Web Stack, and the Python ML Stack.

### Quick Start (Web Dashboard)
1. Ensure you have Node.js (v18+) installed.
2. Clone the repository and navigate into the directory.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and add your OpenAI API key for the Chatbot:
   ```env
   VITE_OPENAI_API_KEY="your-openai-api-key"
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open `http://localhost:3000` in your browser.

> 👉 **For the Full-Python ML Backend instructions and Database configuration, please refer to our detailed [Local Setup Blueprint](./LOCAL_SETUP.md).**
>[📄 Crack Detection System PDF](https://github.com/musthak2001/CrackGuard_IDEALIZE/blob/main/crack%20detection%20system.pdf)

## 🛡️ License & Copyright

© 2026 Structural Intelligence Systems • Powered by Team Cyber Dynamo & LangGraph logic.
