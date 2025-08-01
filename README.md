# 🌐 Interactive Portfolio

A modern, animated portfolio built with **React 19**, **TypeScript**, and custom **CSS animations**. Designed to be smooth, responsive, and engaging across all devices.

---

## 🚀 Features

### 🎯 Smooth Navigation & User Flow
- **Hero Section** – Clean intro with a "View More" CTA
- **Progressive Disclosure** – Projects section appears only after interaction
- **Smooth Scrolling** – Seamless transitions using `react-scroll`

### 🎨 Visual Design & Animation
- **Parallax Background** – Floating, animated background elements
- **Featured Project Slider** – Auto-rotating showcase with navigation controls
- **Hover Effects** – Interactive cards with smooth transitions
- **Scroll Reveal** – Elements animate as they enter the viewport via `IntersectionObserver`

### 📱 Responsive & Mobile-First
- Optimized for all screen sizes
- Touch-friendly navigation
- Adaptive grid and layout system

### 💼 Project Showcase
- **Project Slider** – Large visual display for featured work
- **Tech Tags** – Quick view of technologies used
- **Category Labels** – Organized by project type
- **Image Galleries** – High-quality visuals for each project

---

## 🛠️ Built With

- ⚛️ **React 19** + **TypeScript**
- 🎨 **CSS Animations** and transitions
- 🔁 **React Scroll** – Smooth anchor navigation
- 👁️ **Intersection Observer API** – Scroll-based animations
- 📱 **Responsive Design** – Mobile-first layout and breakpoints


## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx          # Landing section with "View More" button
│   ├── About.tsx         # About section
│   ├── Projects.tsx      # Interactive project showcase
│   └── Contact.tsx       # Contact form
├── App.tsx               # Main app with state management
└── index.css             # Custom CSS utilities and animations
```


### Adding Projects
Edit the `projects` array in `src/components/Projects.tsx`:

```typescript
const projects = [
  {
    title: 'Your Project',
    description: 'Project description',
    image: 'image-url',
    link: 'project-link',
    technologies: ['React', 'Node.js'],
    category: 'Web App'
  }
];
```
## 📬 Contact

Feel free to reach out if you'd like to collaborate or just say hi!

**Lovely Shane Gucor**  
📧 gucorlovely@gmail.com  