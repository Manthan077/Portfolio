import infostack from "../assets/projects/infostack.png";
import mediroute from "../assets/projects/mediroute.png";

export const projects = [
  {
    slug: "infostack",
    title: "INFOSTACK",
    subtitle: "Retrieval-Augmented Generation Platform",
    image: infostack,

    overview:
      "INFOSTACK is a production-grade multi-document RAG platform designed to answer queries strictly from user-provided documents while minimizing hallucinations.",

    problem: [
      "LLMs hallucinate when answering from large document sets.",
      "Existing tools lack citation enforcement.",
      "Multi-document semantic search is often slow or inaccurate."
    ],

    solution: [
      "Implemented multi-document ingestion (PDF, text, images, websites).",
      "Designed Strict and Hybrid query modes with backend guardrails.",
      "Integrated vector search using Qdrant for high-relevance retrieval."
    ],

    architecture: [
      "React frontend with real-time chat UI.",
      "Node.js + Express backend with RAG pipeline.",
      "Qdrant vector database for semantic retrieval.",
      "Gemini API + LangChain for controlled LLM responses."
    ],

    impact: [
      "≈90% relevance in internal evaluation.",
      "≈70% reduction in hallucinated responses.",
      "Sub-second UI responsiveness."
    ],

    tech: "React · Node.js · Qdrant · LangChain · Gemini API",
  },

  {
    slug: "mediroute-ai",
    title: "MEDIROUTE AI",
    subtitle: "Smart Ambulance Navigation System",
    image: mediroute,

    overview:
      "MEDIROUTE AI is a real-time emergency mobility platform that optimizes ambulance routing and hospital allocation using live traffic and capacity data.",

    problem: [
      "Ambulances get stuck in congested traffic.",
      "Hospitals receive patients without real-time capacity awareness.",
      "Manual routing causes critical delays."
    ],

    solution: [
      "Implemented live GPS tracking with real-time updates.",
      "Designed automated green-corridor routing logic.",
      "Built capacity-aware hospital allocation scoring."
    ],

    architecture: [
      "React + TypeScript dashboards for Admin, Hospital, Ambulance.",
      "Supabase for authentication, realtime updates, and database.",
      "Leaflet maps for live route visualization."
    ],

    impact: [
      "Targeted 25–40% faster ambulance response times.",
      "Real-time rerouting every ~2 seconds.",
      "Role-based operational dashboards."
    ],

    tech: "React · TypeScript · Supabase · Leaflet",
  },

  {
    slug: "smart-home",
    title: "Smart Home Monitoring",
    subtitle: "IoT Environment & Gas Monitoring System",

    overview:
      "An IoT-based system for monitoring environmental conditions and gas levels with automated alerts for hazardous situations.",

    problem: [
      "Lack of real-time gas leakage alerts.",
      "Manual monitoring is unreliable.",
      "Delayed response increases risk."
    ],

    solution: [
      "Integrated MQ gas sensors with Arduino.",
      "Real-time monitoring via Blynk mobile app.",
      "Automated email and mobile alerts."
    ],

    architecture: [
      "Arduino-based sensor network.",
      "Blynk mobile dashboard.",
      "Gmail API for automated alerts."
    ],

    impact: [
      "Instant hazard detection.",
      "Real-time mobile notifications.",
      "Documented system performance in research paper."
    ],

    tech: "Arduino · MQ Sensors · Blynk · IoT",
  },
];
