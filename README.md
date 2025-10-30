# 🌍 Climate Action Pledge Microsite

A fully responsive single-page web application that motivates people to take climate-positive pledges, receive personalized certificates, and join a public pledge wall.  
Built for the **Web Developer Internship Task** — focusing on interactivity, visual appeal, and data handling simulation.

---

## 🚀 Features

### 🏠 Hero Section
- Attractive banner with motivational text
- Smooth scrolling “Take the Pledge” button

### 📊 Live KPIs
- **Target Pledges:** 1,000,000 (static)
- **Dynamic Counts:** Total Pledges, Students, and Professionals (auto-updated from localStorage data)

### 🌱 Why Take Climate Action
- Impact statements highlighting responsibility, unity, and lasting change

### ✍️ Pledge Form
- Fields: `Name`, `Email`, `Mobile`, `State`, `Profile Type`
- 3 Commitment themes — Energy ⚡, Transport 🚗, Waste ♻️
- Validation for required fields and at least one commitment
- **Privacy Note:** Email and mobile are never shown publicly

### 🏅 Certificate Generator
- Auto-generates a personalized certificate after form submission
- Includes user’s name, number of commitments, and current date
- Downloadable **PDF** using `html2canvas` and `jsPDF`
- Fun **confetti animation** 🎉 after submitting a pledge

### 💚 Public Pledge Wall
- Displays all pledge entries from localStorage
- Shows: Pledge ID, Name, Date, State, Profile, and “Love for Planet” rating
- Hides email and phone data for privacy

### 🔒 Privacy & Reset Options
- Clear privacy notice visible on the form
- Reset button to clear all pledges from storage

---

## 🧠 Tech Stack

| Category | Tools Used |
|-----------|-------------|
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla JS) |
| **Libraries** | [html2canvas](https://github.com/niklasvh/html2canvas), [jsPDF](https://github.com/parallax/jsPDF) |
| **Backend (Simulated)** | Browser LocalStorage |
| **Deployment** | GitHub Pages / Netlify |

---

## ⚙️ Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/climate-pledge-microsite.git
   cd climate-pledge-microsite
   ```

2. Open the `index.html` file in your browser or run a local server (e.g., VS Code Live Server).

3. To deploy on **GitHub Pages**:
   - Go to **Settings → Pages**
   - Under “Branch”, select `main` and `/ (root)`
   - Click **Save**
   - Your site will be live at:
     ```
     https://<your-username>.github.io/climate-pledge-microsite/
     ```

---

## 📊 Evaluation Checklist

| Requirement | Status |
|--------------|:------:|
| Responsive single-page layout | ✅ |
| Hero section with CTA | ✅ |
| Live KPI counters | ✅ |
| Climate pledge form | ✅ |
| Certificate generation + download | ✅ |
| Public pledge wall | ✅ |
| Privacy note visible | ✅ |
| Dynamic updates using localStorage | ✅ |
| Creativity (animations, confetti, gradients) | ✅ |

---

## ✨ Highlights
- Sleek responsive UI with animations
- Personalized PDF certificate generator
- Simulated backend for testing data flow
- Built to encourage environmental awareness

---

## 📜 License
This project is open-source and intended for internship evaluation and learning purposes.
