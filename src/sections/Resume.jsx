
import "../styles/resume.css";

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      {/* Section Title */}
      <div className="section-header">
        <h2>Resume</h2>
        <p>
           Flutter Developer | Firebase | 
    React.js | PHP | Laravel | Java | SQL | Spring Boot   
        </p>
      </div>

      <div className="resume-container">
        <div className="resume-left">
          {/* Summary */}
          <h3 className="resume-title">Summary</h3>
          <div className="resume-item">
            <h4>Anuj Bhalerao</h4>
            <p>
              <em>
                Innovative and deadline-driven developer with hands-on experience
                in Flutter, Firebase, React, and Laravel. Skilled in mobile app
                architecture, cloud integration, and delivering client-focused
                solutions across multiple industries.
              </em>
            </p>
            <ul className="contact-info">
              <li>Indore, Madhya Pradesh, India</li>
              <li>+91-6260422196</li>
              <li>anujbhalerao3@gmail.com</li>
            </ul>
          </div>

          {/* Education */}
          <h3 className="resume-title">Education</h3>
          <div className="resume-item">
            <h4>PG Diploma in Advanced Computing</h4>
            <h5>Feb – Aug 2024</h5>
            <p>
              <em>
                Centre for Development of Advanced Computing (CDAC) – SM Vita, Mumbai
              </em>
            </p>
            <p>
                Specialized in <strong>Java, J2EE, Spring Boot, MySQL, React JS, and Full Stack Development</strong>.
    Completed multiple hands-on projects including a fleet management system using Spring Boot and React.
    Gained expertise in designing scalable RESTful APIs and developing modern web applications.
            </p>
          </div>

          <div className="resume-item">
            <h4>Bachelor of Technology (Civil Engineering)</h4>
            <h5>2019 - 2022</h5>
            <p>
              <em>Sri Aurobindo Institute of Technology, Indore</em>
            </p>
            <p>
              Graduated with honors, building a strong foundation in engineering
              principles and analytical problem-solving skills.
            </p>
          </div>

          {/* Skills */}
          <h3 className="resume-title">Technical Skills</h3>
          <div className="resume-item">
            <h4>Core Technologies</h4>
            <ul>
              <li>Flutter & Dart - Mobile App Development</li>
              <li>Firebase - Backend & Authentication</li>
              <li>React.js - Frontend Web Development</li>
              <li>Laravel - Backend API Development</li>
              <li>GetX - State Management Architecture</li>
            </ul>
          </div>
        </div>

        <div className="resume-right">
          {/* Experience */}
         <h3 className="resume-title">Professional Experience</h3>

<div className="resume-item">
  <h4>Flutter Developer</h4>
  <h5>Aug 2024 – Present</h5>
  <p>
    <em>Ciggy Tech, Indore</em>
  </p>
  <ul>
    <li>
      Designed, developed, and deployed <strong>high-performance Flutter applications</strong> across
      food delivery, social media, and educational domains.
    </li>
    <li>
      Integrated <strong>Firebase (Auth, Firestore, Storage, Cloud Functions)</strong> for real-time
      synchronization, authentication, and scalable cloud backend.
    </li>
    <li>
      Implemented <strong>video caching and optimized buffering</strong> for 40% faster load times and
      smooth scrolling performance.
    </li>
    <li>
      Applied <strong>clean architecture with GetX</strong> to create maintainable, modular, and
      testable codebases.
    </li>
    <li>
      Collaborated with designers and backend teams to deliver production-grade apps with excellent
      UI/UX and stability.
    </li>
  </ul>
</div>

      

          
          
          
          {/* Key Projects */}
          {/* =======================
    KEY PROJECTS
======================= */}
<h3 className="resume-title">Key Projects</h3>

{/* TikTok-Style Reels App */}
<div className="resume-item">
  <h4>TikTok-Style Reels Application</h4>
  <p>
    <em>Flutter, Firebase, GetX, Video Caching</em>
  </p>
  <ul>
    <li>
      Built a <strong>short-video sharing platform</strong> similar to TikTok with features like 
      real-time feed, likes, comments, and user profiles.
    </li>
    <li>
      Implemented <strong>video caching and optimized buffering</strong> to achieve 40% faster
      load times and seamless offline playback.
    </li>
    <li>
      Developed a complete <strong>upload flow</strong> — media picker, preview, captions, and 
      progress tracking with Firebase Storage integration.
    </li>
    <li>
      Enabled real-time content updates using Firestore and Cloud Functions without manual refresh.
    </li>
  </ul>
</div>



{/* School Management System */}
<div className="resume-item">
  <h4>School Management System</h4>
  <p>
    <em>Flutter, Firebase, Cloud Functions</em>
  </p>
  <ul>
    <li>
      Built a <strong>multi-role dashboard</strong> (Admin, Teacher, Student, Parent) 
      with role-based access control using Firebase Auth & Firestore.
    </li>
    <li>
      Implemented <strong>attendance, timetable, and assignment management</strong> in real-time.
    </li>
    <li>
      Enabled <strong>push notifications</strong> for announcements and updates using Firebase Cloud Messaging.
    </li>
    <li>
      Designed a <strong>responsive and intuitive UI</strong> improving engagement and usability.
    </li>
  </ul>
</div>

{/* Fleet Management System */}
<div className="resume-item">
  <h4>Fleet Management System (PG-DAC Project)</h4>
  <p>
    <em>Spring Boot, React.js, MySQL, REST APIs</em>
  </p>
  <ul>
    <li>
      Developed a <strong>full-stack web application</strong> for vehicle and driver management.
    </li>
    <li>
      Built RESTful APIs using Spring Boot and connected them with a dynamic React frontend.
    </li>
    <li>
      Implemented <strong>role-based access control</strong> for admin and user dashboards.
    </li>
    <li>
      Designed MySQL schema for optimized query performance and data consistency.
    </li>
  </ul>
</div>







        </div>

       
       


      </div>

      {/* Download Button */}
      <div className="resume-download">
        <a href="/resume.pdf" download className="resume-btn">
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
