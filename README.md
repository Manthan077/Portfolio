# Manthan Sharma — Developer Portfolio

A modern, performance-focused personal portfolio showcasing my work in **Full Stack Development**, **GenAI**, and **System Design**.

This portfolio highlights real-world engineering projects with detailed case studies, clean UI, theme switching, and a production-ready contact system.

## 🌐 Live Demo

🔗 Portfolio Website: https://manthan-sharma-portfolio.vercel.app/

---

## ✨ Features

- ⚡ Fast and lightweight (React + Vite)
- 🎨 Three theme modes (Default, Dark, Light) with smooth transitions
- 📱 Fully responsive across devices
- 🧠 Project case studies with problem → solution → architecture → impact
- 📩 Working contact form with Gmail integration
- 🔒 Rate-limited backend to prevent spam / DoS attacks
- 🎭 Animated UI components with Framer Motion
- 🖼️ Professional profile photo with gradient effects
- 🔗 GitHub and Live Demo links for each project

---

## 🛠 Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- Context API (Theme Management)

### Backend (Contact Form API)
- Node.js
- Express
- Nodemailer (Gmail App Password)
- dotenv
- express-rate-limit
- CORS

---

## 📂 Project Structure
```
Portfolio/
├── public/
│   ├── Manthan.jpg              # Profile photo
│   └── Manthan_Sharma_Resume.pdf
├── src/
│   ├── assets/
│   │   └── projects/            # Project images
│   │       ├── infostack.png
│   │       ├── mediroute.png
│   │       └── reforge.png
│   ├── components/
│   │   ├── Footer.jsx           # Footer with theme support
│   │   ├── Navbar.jsx           # Navigation with theme toggle
│   │   └── ScrollToTop.jsx      # Scroll restoration
│   ├── context/
│   │   └── ThemeContext.jsx     # Theme state management
│   ├── data/
│   │   └── projects.js          # Project metadata
│   ├── pages/
│   │   └── ProjectDetail.jsx    # Individual project pages
│   ├── sections/
│   │   ├── Hero.jsx             # Landing section with photo
│   │   ├── About.jsx            # About & Education
│   │   ├── Skills.jsx           # Animated skill cards
│   │   ├── Projects.jsx         # Project showcase
│   │   └── Contact.jsx          # Contact form
│   ├── App.jsx                  # Main app with routing
│   ├── index.css                # Global styles & theme variables
│   └── main.jsx                 # Entry point
├── server/
│   ├── index.js                 # Express server
│   ├── package.json             # Server dependencies
│   └── .env                     # Environment variables
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Projects Included

### 1. INFOSTACK
**Retrieval-Augmented Generation Platform**
- Multi-document RAG system with Qdrant vector database
- Strict and Hybrid query modes with guardrails
- 90% relevance, 70% reduction in hallucinations
- **Tech**: React · Node.js · Qdrant · LangChain · Gemini API

### 2. MEDIROUTE AI
**Smart Ambulance Navigation System**
- Real-time GPS tracking and green-corridor routing
- Hospital capacity-aware allocation
- 25-40% faster response times
- **Tech**: React · TypeScript · Supabase · Leaflet

### 3. REFORGE
**Web Cloning & Customization Platform**
- Instant website cloning with Puppeteer
- Live visual editor with theme toggle
- One-click ZIP export with all assets
- **Tech**: React · Node.js · Puppeteer · JWT · Express

---

## 📬 Contact Form

The contact form sends emails directly to my inbox and automatically replies to users.

- **Email**: manthan10041004@gmail.com
- **Location**: Mohali, India
- **Availability**: Open to internships & full-time roles

---

## 🧑💻 Running Locally

### Frontend
```bash
npm install
npm run dev
```

### Backend
```bash
cd server
npm install
node index.js
```

### Environment Variables (.env in server/)
```env
RESEND_API_KEY=your_resend_api_key
RECEIVER_EMAIL=your_gmail_id
```

---

## 🎨 Theme System

Three professionally designed themes:
- **Default**: Dark blue (#020617) - Original portfolio theme
- **Dark**: Pure black (#000000) - High contrast mode
- **Light**: Light gray (#f8fafc) - Clean and minimal

Theme preference is saved in localStorage and persists across sessions.

---

## 📌 Key Features Breakdown

### Navigation
- Fixed navbar with scroll detection
- Smooth scroll to sections
- Theme toggle with visual indicators
- Hidden on project detail pages for cleaner view

### Hero Section
- Profile photo with animated gradient glow
- Side-by-side layout (photo left, content right)
- Quick access to resume (view/download)
- Skill highlights in interactive cards

### Projects Section
- Alternating image/content layout
- GitHub and Live Demo buttons
- Smooth animations on scroll
- Detailed case study pages

### Contact Form
- Real-time validation
- Rate limiting (5 requests/minute)
- Auto-reply to sender
- Success/error feedback

---

## 🔧 Technical Highlights

- **CSS Variables**: Dynamic theming with CSS custom properties
- **Context API**: Centralized theme state management
- **Framer Motion**: Smooth animations and transitions
- **React Router**: Client-side routing with scroll restoration
- **Rate Limiting**: Backend protection against spam
- **Responsive Design**: Mobile-first approach with Tailwind

---

## 📄 License

This project is open for learning and reference purposes.

---

## 🙌 Acknowledgements

Built and maintained by **Manthan Sharma**  
Focused on real-world engineering, clarity, and impact.

---

## 📞 Get in Touch

Interested in collaboration or have opportunities to discuss?

- 📧 Email: manthan10041004@gmail.com
- 💼 GitHub: [Manthan077](https://github.com/Manthan077)
- 🌐 Portfolio: [manthan-sharma-portfolio.vercel.app](https://manthan-sharma-portfolio.vercel.app/)
