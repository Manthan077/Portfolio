import infostack from "../assets/projects/infostack.png";
import mediroute from "../assets/projects/mediroute.png";
import reforge from "../assets/projects/reforge.png";

export const projects = [
  {
    slug: "infostack",
    title: "INFOSTACK",
    subtitle: "Retrieval-Augmented Generation Platform",
    image: infostack,
    github: "https://github.com/Manthan077/infostack",
    demo: "https://infostack.vercel.app/",

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
    github: "https://github.com/Manthan077/mediroute_ai",
    demo: "https://medirouteai.vercel.app/",

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
    slug: "reforge",
    title: "REFORGE",
    subtitle: "Web Cloning & Customization Platform",
    image: reforge,
    github: "https://github.com/Manthan077/reforge",
    demo: "https://reforge-demo.com",

    overview:
      "ReForge is a powerful web cloning and customization platform that allows you to scrape any website, edit its content in real-time, and export it as a complete, production-ready package.",

    problem: [
      "Recreating web designs manually is time-consuming.",
      "Prototyping requires extensive setup and configuration.",
      "No easy way to clone and customize existing websites."
    ],

    solution: [
      "Built instant website cloning with Puppeteer for accurate extraction.",
      "Implemented live visual editor for text and image modifications.",
      "Created smart theme detection with automatic light/dark mode toggle."
    ],

    architecture: [
      "React frontend with click-to-edit interface.",
      "Node.js + Express backend with Puppeteer scraping.",
      "JWT authentication and profile management.",
      "Complete asset bundling and ZIP export system."
    ],

    impact: [
      "One-click website cloning and customization.",
      "Real-time editing with instant preview.",
      "Production-ready exports with all assets included."
    ],

    tech: "React · Node.js · Puppeteer · JWT · Express",
  },
];
