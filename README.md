##  Climate Action Pledge Microsite  

A **responsive, single-page web application** that encourages individuals to take climate-positive pledges, receive instant certificates, and get featured on a public pledge wall.  

Built as part of the **Web Developer Internship Task**, this project focuses on interactivity, accessibility, and modern web design principles.  

---

###  Live Demo & Source  
- **Live Demo:** _[To be added after deployment]_  
- **GitHub Repository:** _[To be added after pushing to GitHub]_  

---

##  Features  

###  Hero Section  
- Motivational banner and message  
- Smooth “Take the Pledge” scroll animation  

###  Live KPIs  
- **Target Pledges:** 1,000,000 (static)  
- **Dynamic Counters:** Total pledges, Students, Professionals (auto-updated from localStorage)  

###  Why Take Climate Action  
- Inspiring statements emphasizing **individual action**, **global movement**, and **lasting change**  

###  Pledge Form  
- Fields: **Name**, **Email**, **Mobile**, **State**, **Profile Type**  
- 3 themes of commitment — Energy , Transport , Waste   
- Field validation and privacy note  

###  Certificate Generator  
- Personalized certificate generated instantly after form submission  
- Includes:
  - User name  
  - Number of commitments  
  - Date  
  - “Cool Enough to Care!” message  
- Downloadable PDF using `html2canvas` + `jsPDF`  
- Fun confetti animation   

###  Public Pledge Wall  
- Displays live pledges (Pledge ID, Name, Date, State, Profile, Love for Planet ⭐)  
- Email and mobile hidden for privacy  

###  Privacy Note  
- Clearly displayed: “Email and mobile are required for validation but never shown publicly.”  

---

##  Tech Stack  

| Category | Tools Used |
|-----------|-------------|
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla) |
| **Libraries** | [html2canvas](https://github.com/niklasvh/html2canvas), [jsPDF](https://github.com/parallax/jsPDF) |
| **Backend Simulation** | Browser LocalStorage |
| **Deployment** | GitHub Pages / Netlify |

---

##  Setup & Deployment  

###  Local Setup  
1. Clone the repository  
   ```bash
   git clone https://github.com/<your-username>/climate-pledge-microsite.git
   cd climate-pledge-microsite
   ```
2. Open `index.html` in a browser, or run a local server using **VS Code Live Server**  

###  Deploy on GitHub Pages  
1. Go to **Settings → Pages**  
2. Under *Branch*, select `main` → `/ (root)`  
3. Click **Save**  
4. Your site will be live at:  
   ```
   https://<your-username>.github.io/climate-pledge-microsite/
   ```

---

##  Evaluation Criteria  

| Criteria | Status |
|-----------|:------:|
| Responsive design | ✅ |
| Hero section with CTA | ✅ |
| Live KPIs | ✅ |
| Functional pledge form | ✅ |
| Personalized certificate generation | ✅ |
| Downloadable certificate | ✅ |
| Pledge wall (auto-updates) | ✅ |
| Privacy note placement | ✅ |
| Creativity & animations | ✅ |

---

##  Highlights  
- Responsive and visually clean design  
- Dynamic interactivity using JavaScript  
- Simulated backend with persistent localStorage  
- Professional certificate layout  
- Smooth animations and confetti effects  

---

##  License  
Open-source and created for internship evaluation and educational purposes.
