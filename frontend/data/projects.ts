import { Project } from "@/types/project";

export const INITIAL_DISPLAY_COUNT = 3;

export const projects: Project[] = [
  {
    title: "HEMA Advent",
    description:
      "An immersive, 3D-driven web experience built for the HEMA app, leveraging Next.js and Three.js to transform a national TV campaign into a high-engagement digital ritual.",
    image: "/assets/projects/project-hema-main.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind", "GSAP", "Three.js"],
    color: "text-blue-400",
    projectType: "livewall",
    fullDescription:
      'I helped develop a high-performance digital Advent Calendar for the HEMA mobile app to support their holiday campaign, "Het mooiste wat je kunt geven is liefde." The project turned a TV commercial’s message into a functional daily ritual where users return to the app to open a new 3D present and win prizes. My focus was on creating a seamless, visually rich experience that remained lightweight enough to perform perfectly within an in-app web-view.',
    challenge:
      "The goal was to create a premium 3D experience that performed flawlessly within an in-app web-view. I had to balance high-fidelity visuals and complex animation timelines with the technical constraints of mobile hardware, while ensuring the 24-day unlock logic was robust and reliable.",
    approach:
      "I utilized Next.js for a performant foundation and Three.js to render the interactive 3D elements. To achieve a cinematic feel, I used GSAP to orchestrate seamless transitions between the 3D canvas and the Tailwind-powered UI, focusing on asset optimization and performance optimization to maintain high frame rates.",
    features: [
      "Interactive 3D Calendar",
      "Time-Gated Logic",
      "Seamless App Integration",
      "Synchronized Animations",
      "Performance Optimization",
    ],
  },
  {
    title: "Feyenoord Play",
    description: "A location-based AR collectors' game that transforms the city of Rotterdam into a digital playground for Feyenoord fans.",
    image: "/assets/projects/project-feyenoord-main.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind", "GSAP", "AR", "Leaflet", "Geolocation API"],
    color: "text-green-400",
    projectType: "livewall",
    fullDescription:
      "Feyenoord Play is a digital collectors' album that gamifies the city of Rotterdam for football supporters. The experience features two distinct albums: the De Kuip Album, focused on the stadium's surroundings, and the Rotterdam Album, which spreads player cards across 35 hotspots throughout the city. Using an integrated map, fans are guided to physical locations where proximity-based notifications trigger an Augmented Reality (AR) experience. Once a card is captured via AR, it is stored in a digital album. The platform includes social features like card trading and trivia, culminating in a physical reward—an exclusive handmade \"Binkie\" artwork—for fans who complete their collection.",
    challenge:
      'The main technical hurdle was ensuring precise synchronization between the user\'s physical GPS location and the digital trigger points. I had to manage real-time geolocation data across 35 distinct hotspots while maintaining a stable AR environment that could reliably render and "capture" player cards without performance drops on mobile browsers.',
    approach:
      "The primary hurdle was managing high-frequency location polling while maintaining battery efficiency and ensuring the AR triggers were accurate within a few meters. Additionally, I had to architect a scalable state management system to handle two separate albums and card duplicates.",
    features: ["Integrated Hotspot Map", "AR Capture System", "Dual-Album Progression", "Milestone Rewards"],
  },
  {
    title: "Proximus World",
    description:
      "An immersive 3D interactive world integrated into the Proximus+ app, gamifying service discovery through explorable environments and competitive mini-games.",
    image: "/assets/projects/project-proximus-main.jpg",
    technologies: ["React", "GSAP", "Three.js"],
    color: "text-pink-400",
    projectType: "livewall",
    fullDescription:
      "For Proximus, I helped develop an interactive 3D environment designed to introduce users to the Proximus+ ecosystem. Users embark on a discovery tour through four distinct zones—MyHome, MyTelco, MyNeighborhood, and MyMobility—rewarding exploration with prizes. To drive long-term retention, the platform features four competitive mini-games with weekly and monthly leaderboards, launched in phases to encourage repeat visits.",
    challenge:
      'The technical hurdle was building a scalable 3D architecture that could house multiple distinct "service zones" and mini-games within a single app web-view. I had to ensure that the transition between the discovery world and the arcade-style games was seamless',
    approach:
      "I focused on a tight integration between the Three.js world and the React state, using custom events to trigger camera movements and UI overlays as users explored the zones. To handle the phased game releases, I implemented a robust logic layer that controlled access to different sections based on the project timeline, ensuring that all 3D assets and game interactions remained stable and performant on mobile hardware.",
    features: ["Interactive 3D Environments", "Gamified Discovery", "Phased Game Releases", "Optimized Web-View Integration"],
  },
  {
    title: "McDonald's Summer of Skate",
    description:
      "A real-time 3D merchandise customizer integrated into the McDonald’s app, allowing users to design, rotate, and personalize 3D skateboards and apparel.",
    image: "/assets/projects/project-flurry3d-main.jpg",
    technologies: ["React", "GSAP", "Three.js", "Canvas", "gltfjsx"],
    color: "text-yellow-400",
    projectType: "livewall",
    fullDescription:
      "For McDonald's Belgium, I helped develop an interactive digital activation where fans could personalize their own McDonald's-themed merchandise. Users could select items like skateboards or hoodies and customize them in a high-fidelity 3D environment by changing colors, applying stickers, and drawing directly onto the models. The project focused on giving users a tangible sense of creative ownership while maintaining a seamless, high-performance experience within the mobile app.",
    challenge:
      "The objective was to provide advanced creative tools, such as custom drawing and sticker placement, directly on 3D models within a mobile web-view. The technical hurdle was implementing a real-time texturing system that could translate 2D user input into 3D textures instantly, without performance lag or visual artifacts, while ensuring the 3D assets loaded quickly on diverse mobile hardware.",
    approach:
      'I utilized a modular 3D workflow by converting glTF assets into React components via gltfjsx, which allowed for granular control over individual meshes. To handle the personalization, I engineered a custom solution using an off-screen HTML5 Canvas to process the drawing and sticker logic. These canvas updates were projected onto the 3D models as a CanvasTexture in Three.js. This approach allowed for a lightweight, performant way to "paint" on 3D objects in real-time, avoiding the overhead of complex shaders while ensuring the designs remained crisp during 360° manipulation.',
    features: ["Canvas-to-3D Projection", "Interactive 360° Customizer", "Granular Mesh Control", "Dynamic Interaction Logic"],
  },
  {
    title: "Holland & Barrett Winter Journals",
    description:
      'A two-phase wellness campaign featuring a personalized fitness advisor and an interactive 3D "mental health" coloring experience.',
    image: "/assets/projects/project-hb-main.jpg",
    technologies: ["React", "GSAP", "Three.js", "Custom Shader"],
    color: "text-green-400",
    projectType: "livewall",
    fullDescription:
      'For Holland & Barrett, I helped develop the "Winter Journals", a lead-generation campaign designed to support physical and mental resilience during the winter months. The project was split into two distinct phases: a personalized fitness questionnaire that provided immediate recovery advice, and the "Winter Unwind" experience—a series of four interactive 3D dioramas. In the second phase, users participated in a meditative activity, tapping 3D elements to bring them to life with color while guided by a soothing voice-over.',
    challenge:
      'The technical challenge was creating a "meditative" performance profile for the 3D dioramas. I had to ensure that the transitions between the grayscale and colored states were fluid and tactile, without any frame drops that would break the calming atmosphere. Additionally, I needed to manage a complex state machine that handled both the logic-heavy questionnaire and the asset-heavy 3D interactive scenes.',
    approach:
      'I built a unified React-based architecture to manage the two campaign phases, ensuring a smooth transition from data-driven inputs to visual-heavy 3D interactions. For the 3D dioramas, I used Three.js and GSAP to handle the "coloring" logic, where user interactions triggered localized material updates through a custom shader and animations. I focused on optimizing the interaction triggers to feel responsive yet soft, syncing visual feedback with the audio prompts to create a cohesive sensory experience.',
    features: ["Interactive 3D Dioramas", "Interactive Texture Blending", "Audio-Visual Sync"],
  },
];
