# Manthan Sharma — Developer Portfolio

A modern, performance-focused personal portfolio showcasing my work in **Full Stack Development**, **GenAI**, and **System Design**.

This portfolio highlights real-world engineering projects with detailed case studies, clean UI, and a production-ready contact system.

## 🌐 Live Demo

🔗 Portfolio Website: https://manthan-sharma-portfolio.vercel.app/

---

## ✨ Features

- ⚡ Fast and lightweight (React + Vite)
- 🎨 Consistent dark theme with modern UI
- 📱 Fully responsive across devices
- 🧠 Project case studies with problem → solution → architecture → impact
- 📩 Working contact form with Gmail integration
- 🔒 Rate-limited backend to prevent spam / DoS attacks
- 🧭 Scroll position restored when navigating between projects

---

## 🛠 Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM

### Backend (Contact Form API)
- Node.js
- Express
- Nodemailer (Gmail App Password)
- dotenv
- Rate Limiting

---

## 📂 Project Structure
```
src/
├── components/ # Navbar, Footer, reusable UI
├── sections/ # Hero, About, Skills, Projects, Contact
├── pages/ # ProjectDetail page
├── data/ # Project metadata
├── assets/ # Images & static assets
└── App.jsx
```

## 🚀 Projects Included

- **INFOSTACK** — Multi-document Retrieval-Augmented Generation platform
- **MEDIROUTE AI** — Smart ambulance routing & hospital allocation system
- **Smart Home Monitoring** — IoT-based gas & environment monitoring

Each project includes:
- Problem definition
- Solution approach
- System architecture
- Real-world impact

---

## 📬 Contact

The contact form sends emails directly to my inbox and automatically replies to users.

- Email: **manthan10041004@gmail.com**
- Location: Mohali, India
- Availability: Open to internships & full-time roles

---

## 🧑‍💻 Running Locally

### Frontend
```bash
npm install
npm run dev
```

### Backend
```
cd server
npm install
node index.js
```

### Create a .env file
```
GMAIL_USER=your_email@gmail.com
GMAIL_APP_PASSWORD=your_app_password
PORT=your_port_number
```

> The Gmail App Password is used for secure email delivery and auto-replies.

---

## 📌 Notes

- This project follows a clean, modular architecture for scalability.
- All UI components maintain a consistent theme across sections.
- Backend routes are rate-limited to prevent spam and abuse.
- Scroll position is preserved when navigating between project pages.

---

## 📄 License

This project is open for learning and reference purposes.

---

## 🙌 Acknowledgements

Built and maintained by **Manthan Sharma**  
Focused on real-world engineering, clarity, and impact.
