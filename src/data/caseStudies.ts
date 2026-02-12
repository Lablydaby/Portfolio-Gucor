import mockupImage from '../imgs/Mockup.png';
import beforeImage from '../imgs/1Before.png';
import afterImage from '../imgs/1After.png';
import Detail1 from '../imgs/Detail1.png';
import Detail2 from '../imgs/Detail2.png';
import Detail3 from '../imgs/Detail3.png';
import Detail4 from '../imgs/Detail4.png';
import Detail5 from '../imgs/Detail5.png';
import Detail6 from '../imgs/Detail6.png';
import Detail7 from '../imgs/Detail7.png';
import Detail8 from '../imgs/Detail8.png';
import dataStructARImage from '../imgs/DataStructAR.png';
import ar1 from '../imgs/ar1.jpg';
import ar2 from '../imgs/ar2.jpg';
import ar3 from '../imgs/ar3.jpg';
import ar4 from '../imgs/ar4.jpg';
import ar5 from '../imgs/ar5.jpg';
import certifiThumbnail from '../imgs/Thumbnail3.png';
import CF1 from '../imgs/CF1.png';
import CF2 from '../imgs/CF2.png';
import CF3 from '../imgs/CF3.png';
import CF4 from '../imgs/CF4.png';
import CF5 from '../imgs/CF5.png';
import CF6 from '../imgs/CF6.png';
import CF7 from '../imgs/CF7.png';
import CF8 from '../imgs/CF8.png';
import CF9 from '../imgs/CF9.png';
import type { CarouselImageItem } from '../components/Carousel';

export type { CarouselImageItem };
export type CaseStudyItem = {
  slug: string;
  title: string;
  client: string;
  year: string;
  tagline: string;
  /** Optional external design link (e.g. Figma) */
  figmaUrl?: string;
  challenge: string;
  solution: string;
  results: string[];
  // Full detail page content
  role?: string;
  duration?: string;
  team?: string;
  tools?: string[];
  overview?: string;
  process?: { title: string; body: string }[];
  images: { src: string; alt: string; caption?: string }[];
  carouselImages?: CarouselImageItem[];
  /** Optional video embed URL (YouTube, Vimeo, etc.) for the Video showcase section */
  videoUrl?: string;
};

export const caseStudiesData: CaseStudyItem[] = [
  {
    slug: 'edutrack-student-records',
    title: 'EduTrack — Student Records Management',
    client: 'EduTrack',
    year: '2024',
    tagline: 'Redesigning a high-volume admin workflow for speed, clarity, and focus',
    figmaUrl: 'https://www.figma.com/design/csBhPjIkVmqJgJrBN2RYjW/EduTrack-Pages?node-id=0-1&p=f&t=yQelulaiFUYgd7li-0',
    overview:
      'In EduTrack, school administrators spend most of their day doing one thing: managing student records.\n\nSearching names. Updating information. Checking statuses. Opening profiles. Repeating this flow dozens — sometimes hundreds — of times a day.\n\nThis isn\'t a dashboard or analytics screen.\nIt\'s a **working page** — the operational core of the product.\n\nAnd when a page like this feels cluttered or slow, every task feels heavier than it should.\n\nSo instead of treating it like a visual refresh, I approached it as a **workflow redesign**.',
    challenge:
      'The original experience technically worked, but it felt **dense and tiring**.\n\nHandling large datasets (500–1000+ students) meant constantly scanning cramped rows, navigating crowded filters, and deciding between too many competing actions. Even small tasks required extra attention.\n\nNothing was broken — but nothing felt effortless either.\n\nAnd when the same interaction is repeated all day, small friction quickly turns into fatigue.',
    solution:
      'I focused on making the experience feel **lighter and faster** rather than adding more controls. The redesign clearly separates responsibilities: the table is built for quickly finding students, while the detail view is dedicated to focused editing.\n\nBy splitting browsing from deeper tasks, each screen does one job well, making the interface cleaner to scan, calmer to work in, and easier to navigate. The workflow naturally becomes **Scan → Click → Edit → Back → Continue** — simple, predictable, and low effort.',
    results: [
      'Faster student lookup',
      'Quicker row recognition',
      'Fewer misclicks and decisions',
      'Reduced cognitive load',
      'Smoother navigation between list and detail',
      'Scales comfortably for large datasets',
      'Reusable, component-based implementation for easier future updates',
    ],
    role: 'Product Design • UX/UI • Front-end Development (React + Tailwind)',
    process: [
      {
        title: '1 — Clarify priorities',
        body: 'I identified the most frequent actions and emphasized only those. Everything secondary was grouped, hidden, or removed to reduce noise.',
      },
      {
        title: '2 — Optimize for scanning',
        body: 'Instead of adding information, I improved readability — spacing, hierarchy, and visual cues — so users could recognize patterns instantly without reading every row.',
      },
      {
        title: '3 — Design for focus',
        body: 'I moved complex tasks into a dedicated detail page, creating a distraction-free space where users could edit confidently without losing context.',
      },
      {
        title: 'The experience flow',
        body: 'The new interaction became: **Scan → Click → Edit → Back → Continue**. No friction. No mental reset between screens. Just flow.',
      },
      {
        title: 'Before → After',
        body: 'From cluttered and heavy to clean and intentional.',
      },
      {
        title: 'What I learned',
        body: 'Admin tools don\'t need more features — they need **less friction**. When a screen is used all day, clarity and breathing room matter more than complexity. Small usability improvements compound into meaningful time savings.',
      },
    ],
    images: [
      {
        src: mockupImage,
        alt: 'EduTrack Student Records UI',
        caption: 'Student Records page: clean list view with search, filters, and clear actions.',
      },
      {
        src: beforeImage,
        alt: 'Student Records page — before redesign',
        caption: 'Dense layout, competing actions, crowded filters.',
      },
      {
        src: afterImage,
        alt: 'Student Records page — after redesign',
        caption: 'Clear primary action, simplified filters, scannable rows with strong visual hierarchy.',
      },
    ],
    carouselImages: [
      { id: 1, src: Detail1, alt: 'Detail screen 1' },
      { id: 2, src: Detail2, alt: 'Detail screen 2' },
      { id: 3, src: Detail3, alt: 'Detail screen 3' },
      { id: 4, src: Detail4, alt: 'Detail screen 4' },
      { id: 5, src: Detail5, alt: 'Detail screen 5' },
      { id: 6, src: Detail6, alt: 'Detail screen 6' },
      { id: 7, src: Detail7, alt: 'Detail screen 7' },
      { id: 8, src: Detail8, alt: 'Detail screen 8' },
    ],
  },
  {
    slug: 'datastructar-ar-learning',
    title: 'DataStructAR — Learning Data Structures in Augmented Reality',
    client: 'DataStructAR',
    year: '2024',
    tagline: 'Turning abstract computer science concepts into interactive, 3D experiences',
    overview:
      'Data structures sit at the heart of computer science, yet for many students, they\'re **one of the hardest subjects to truly understand**. Concepts like pointers, node connections, and memory behavior exist in an **invisible space** that students are expected to imagine, often relying on static diagrams and abstract explanations.\n\nBut data structures **aren\'t static** — they move, change, and evolve with every operation.\n\nTeaching something dynamic with flat slides creates a disconnect. Students memorize steps without building intuition.\n\nI wanted to change that.\n\nInstead of asking students to picture data structures in their heads, I asked: What if they could **see them in front of them — and interact with them like real objects**?\n\nThat idea became DataStructAR, an augmented reality learning app that turns abstract logic into something **tangible, spatial, and explorable**.',
    challenge:
      'Traditional teaching methods **weren\'t built for concepts that live in memory**.\n\nWhiteboards and slides can show what a linked list looks like, but they can\'t truly show how nodes connect, how pointers move, or how elements shift during operations. Students are left mentally simulating behaviors that are difficult to visualize, which often leads to confusion and shallow understanding.\n\nThe result is familiar: **memorization instead of mastery**, disengagement instead of curiosity, and hesitation when applying concepts in real code.\n\nDespite these challenges, there are few tools that bridge the gap between theory and hands-on understanding. Learning remains passive when it should be experiential.\n\nThere was a clear opportunity to rethink not just how data structures are taught — **but how they\'re experienced**.',
    solution:
      'I designed **DataStructAR** to transform learning from **observation into interaction**.\n\nUsing augmented reality, the app renders data structures as **live 3D objects** that students can place, manipulate, and experiment with directly in their environment. Instead of watching animations or reading explanations, they perform operations themselves — inserting nodes, deleting elements, pushing stacks, dequeuing queues — while seeing every change happen in real time.\n\nPointers connect. Nodes move. Structures grow and shrink.\n\nWhat was once abstract becomes **physical and intuitive**.\n\nBy combining visualization with hands-on control, DataStructAR helps students build a deeper mental model of how data structures actually behave, turning complex theory into something they can **see, touch, and understand**.',
    results: [
      'Easier understanding of pointers and node connections',
      'Stronger grasp of LIFO/FIFO behaviors',
      'Faster comprehension of linked lists',
      'Higher engagement compared to traditional methods',
      '100% reported the app was easy to use',
      '100% would recommend it to peers',
      'Students described it as "engaging," "intuitive," and "a game-changer for visual learners"',
    ],
    role: 'Product Design • UX/UI • AR Interaction Design • Unity Development • Vuforia SDK • Testing & Research',
    process: [
      {
        title: '1 — Make abstract concepts visible',
        body: 'I translated core data structures into 3D AR models: **Arrays**, **Linked Lists**, **Stacks**, **Queues**. Students can see nodes, links, and memory relationships spatially, making invisible logic tangible. Seeing pointers connect in space turns an abstract concept into something intuitive.',
      },
      {
        title: '2 — Design for interaction, not demonstration',
        body: 'Instead of passive animations, I built real-time manipulation. Students can: insert and delete elements, push and pop stacks, enqueue and dequeue queues, trigger operations step-by-step. Every action updates instantly in AR. This transforms learning from "watching slides" to hands-on exploration.',
      },
      {
        title: '3 — Validate with real users',
        body: 'To ensure it actually improved learning, I tested the app with students through: functional testing, performance testing, user testing sessions. I gathered usability feedback and measured how well the tool supported understanding, engagement, and ease of use. This helped refine both the interface and learning flow.',
      },
      {
        title: 'Experience',
        body: 'The interaction feels simple: **Scan → Place → Interact → Experiment → Learn**. Students point their device, place the structure in their space, and immediately start manipulating it. No heavy setup. No complicated controls. Just direct, playful exploration.',
      },
      {
        title: 'Before → After',
        body: 'From static slides and imagination to interactive, spatial learning. From memorizing steps to understanding behavior.',
      },
      {
        title: 'What I learned',
        body: 'Abstract topics become dramatically easier when learners can see and manipulate them. AR isn\'t just a novelty — it\'s powerful when it: visualizes the invisible, encourages interaction, supports active learning. This project taught me that the best educational tools don\'t just explain concepts. They make concepts **experiential**.',
      },
    ],
    images: [
      {
        src: dataStructARImage,
        alt: 'DataStructAR — Learning Data Structures in AR',
        caption: 'Data structures as interactive 3D objects in augmented reality.',
      },
      {
        src: ar1,
        alt: 'DataStructAR app experience',
        caption: 'Seeing and manipulating data structures in 3D space.',
      },
      {
        src: ar2,
        alt: 'AR data structure visualization',
        caption: 'Real-time interaction with nodes and links.',
      },
    ],
    carouselImages: [
      { id: 1, src: ar3, alt: 'DataStructAR screen 3' },
      { id: 2, src: ar4, alt: 'DataStructAR screen 4' },
      { id: 3, src: ar5, alt: 'DataStructAR screen 5' },
    ],
    videoUrl: 'https://www.youtube.com/embed/GwXIXIdi_8E',
  },
  {
    slug: 'certifi-brand-identity',
    title: 'CertiFi — Brand Identity Design',
    client: 'CertiFi',
    year: '2024',
    tagline: 'A clear, credible visual system for accounting and finance professionals',
    figmaUrl: 'https://www.figma.com/design/3Ba77oCyzxxPpUuWbwCqo0/CertiFi?t=z3XSjIpSKtJjteFe-0',
    overview:
      'CertiFi is a certification platform for accounting and finance professionals, built around **structure, progress, and trust**. However, its original branding did not reflect those qualities. The visuals felt inconsistent and generic, which made the product easy to overlook and difficult to remember.\n\nI approached the project not as a visual refresh, but as a **foundational identity redesign** focused on creating a brand that feels professional, modern, and immediately trustworthy.',
    challenge:
      'The brand needed to balance **authority with approachability**. It had to feel credible enough for professionals while remaining welcoming to students and early-career users. At the same time, the lack of a cohesive system across colors, typography, and layouts made applications look disconnected and weakened recognition.\n\nThe challenge was to design a **unified identity** that communicates clarity and reliability while scaling consistently across digital and print.',
    solution:
      'I created a **streamlined visual identity system** built around simplicity and consistency. A focused color palette, modern typography, and a structured graphic pattern work together to establish hierarchy, readability, and recognition.\n\nInstead of adding decorative elements, I **removed visual noise** and strengthened the fundamentals. The result is a brand that feels clean, confident, and dependable — qualities that align naturally with the finance and education space.',
    results: [
      'Improved brand recognition',
      'Strengthened credibility',
      'Faster, more scalable design work',
      'Consistent presence across every touchpoint',
      'CertiFi now presents itself with the same clarity and confidence it promises to users',
    ],
    role: 'Brand Identity • Visual Design • Art Direction',
    process: [
      {
        title: '1 — Define a disciplined foundation',
        body: 'I established a **tight color palette** anchored by green to signal growth and progress, supported by neutral tones for clarity and contrast.',
      },
      {
        title: '2 — Prioritize readability',
        body: 'Using **Poppins and Inter**, I built a clear typographic hierarchy that keeps content legible and professional across all formats.',
      },
      {
        title: '3 — Add a distinctive system',
        body: 'I designed the **CertiFi Grid Pattern** to give the brand a recognizable visual signature that scales across backgrounds, layouts, and marketing materials.',
      },
      {
        title: 'Applications',
        body: 'The identity extends across **stationery, social media, and marketing assets**, ensuring every touchpoint feels consistent and unmistakably CertiFi.',
      },
      {
        title: 'What I learned',
        body: 'Strong branding is not about adding more elements but about **making fewer, better decisions**. A clear system builds trust faster than decoration ever could.',
      },
    ],
    images: [
      {
        src: certifiThumbnail,
        alt: 'CertiFi brand identity overview',
        caption: 'CertiFi visual identity — clean, credible, and consistent.',
      },
      { src: CF1, alt: 'CertiFi brand application 1' },
      { src: CF2, alt: 'CertiFi brand application 2' },
      { src: CF3, alt: 'CertiFi brand application 3' },
      { src: CF4, alt: 'CertiFi brand application 4' },
      { src: CF5, alt: 'CertiFi brand application 5' },
      { src: CF6, alt: 'CertiFi brand application 6' },
      { src: CF7, alt: 'CertiFi brand application 7' },
      { src: CF8, alt: 'CertiFi brand application 8' },
      { src: CF9, alt: 'CertiFi brand application 9' },
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudyItem | undefined {
  return caseStudiesData.find((c) => c.slug === slug);
}
