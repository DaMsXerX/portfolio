import "../styles/projects.css";

function ProjectCard({ 
  title, 
  description, 
  technologies, 
  liveLink, 
  codeLink, 
  icon, 
  featured = false 
}) {
  return (
    <div className="project-card">
      {featured && <div className="featured-badge">Featured</div>}
      
      <div className="project-image">
        <div className="project-icon">{icon}</div>
      </div>
      
      <div className="project-content">
        <h3>{title}</h3>
        <p className="project-description">{description}</p>
        
        <div className="project-tech">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        
        <div className="project-links">
          {liveLink && (
            <a href={liveLink} className="project-link" target="_blank" rel="noopener noreferrer">
              <span>Live Demo</span>
              <span>↗</span>
            </a>
          )}
          {codeLink && (
            <a href={codeLink} className="project-link secondary" target="_blank" rel="noopener noreferrer">
              <span>Code</span>
              <span>⚡</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "FandE App",
      description: "TikTok-style short video app for fun and entertainment with video uploading, viewing, likes, and sharing.",
      technologies: [
        "Flutter",
        "Firebase Auth",
        "Cloud Firestore",
        "GetX",
        "Video Player",
        "Video Compress",
        "Cached Network Image"
      ],
      liveLink: "https://play.google.com/store/apps/details?id=com.ciggytech.funandentertainment&pcampaignid=web_share",
      icon: "📱",
      featured: true
    },

    {
      title: "Sanwariya Shop",
      description: "E-commerce app with product catalog, cart, multiple payment options, notifications, and maps.",
      technologies: [
        "Flutter", 
        "Firebase Auth", 
        "GetX", 
        "Hive", 
        "Razorpay", 
        "Google Maps"
      ],
      liveLink: "https://play.google.com/store/apps/details?id=com.sanwariya.customer&pcampaignid=web_share",
      icon: "🛒",
      featured: true
    },
   {
      title: "Rufroti",
      description: "Food delivery app like Zomato with real-time order tracking, maps, and notifications.",
      technologies: [
        "Flutter",
        "Firebase Auth",
        "Cloud Firestore",
        "Firebase Messaging",
        "GetX",
        "Google Maps",
        "Geolocator",
      ],
      liveLink: "https://play.google.com/store/apps/details?id=com.apnabyapar.rufroti&pcampaignid=web_share",
      icon: "🍕",
      featured: true
    }

  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2>Playstore Apps</h2>
          <p className="projects-subtitle">
            A showcase of my recent work in mobile development, highlighting three key projects: 
            FandE App, Sanwariya Shop, and Rufroti.
          </p>
        </div>
        
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        <div className="view-all-projects">
          <a href="https://github.com/DaMsXerX" className="view-all-btn" target="_blank" rel="noopener noreferrer">
            <span>View All Projects</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
// more projects will be added soon
