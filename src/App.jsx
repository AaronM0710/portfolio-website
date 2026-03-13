import React from 'react';
import { useState } from 'react';
import { Github, Mail, Linkedin, FileText, ExternalLink, Cloud } from 'lucide-react';
import {
  SiDocker,
  SiGithubactions,
  SiJavascript,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
} from 'react-icons/si';
import profilePic from './images/AaronLinkedinPFP.jpeg';
import allenImage from './images/allenimage.jpeg';
import freddyImage from './images/freddyimage.jpeg';
import backgroundImage from './images/RocketIMG.png';
import ivyImage from './images/ivyimage.png';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle'); // idle | sending | success | error
  const resumeFilename = 'AaronMcCullough2026Resume.pdf';
  const resumeUrl = `${import.meta.env.BASE_URL}${resumeFilename}`;

  const handleFormChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    try {
      // Sign up at formspree.io and replace YOUR_FORM_ID with your endpoint ID
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formState),
      });
      if (res.ok) {
        setFormStatus('success');
        setFormState({ name: '', email: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  const handleResumeDownload = async () => {
    try {
      const response = await fetch(resumeUrl);
      if (!response.ok) {
        throw new Error('Resume request failed');
      }

      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = objectUrl;
      link.download = resumeFilename;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(objectUrl);
    } catch {
      window.open(resumeUrl, '_blank', 'noopener,noreferrer');
    }
  };
  
  const personalInfo = {
    name: "Aaron J. McCullough",
    title: "Software Engineer | Full-Stack Developer",
    bio: "Software Engineer with hands-on experience in full-stack web development and a strong foundation in data science principles. Proficient in HTML, CSS, JavaScript, and modern frameworks like React. Passionate about creating responsive, user-friendly interfaces and writing clean, efficient, and well-documented code.",
    email: "mccullougha00@yahoo.com",
    github: "https://github.com/AaronM0710",
    linkedin: "https://www.linkedin.com/in/aaronjmccullough",
    availableForWork: true,
    location: "Tampa, FL",
    workStyle: "Open to relocation",
  };

  const homeHighlights = [
    {
      label: "Coding Since",
      value: "2019",
      detail: "Years of steady hands-on learning and building across web development and software engineering.",
    },
    {
      label: "Performance Improvement",
      value: "75%",
      detail: "Cut page load times by resolving a major bottleneck at ZYSC LLC.",
    },
    {
      label: "Graduation",
      value: "May 2026",
      detail: "B.S. in Data Science & Analytics from the University of South Florida.",
    },
    {
      label: "Core Stack",
      value: "Architecture + AWS",
      detail: "Hands-on experience with software architecture, system design, CI/CD, infrastructure, APIs, PostgreSQL, AWS, Docker, and full-stack delivery.",
    },
  ];

  const aboutStrengths = [
    {
      title: "Full-Stack Execution",
      detail: "Comfortable contributing across frontend, backend, APIs, databases, and deployment workflows.",
    },
    {
      title: "Architecture & Infra",
      detail: "Interested in how systems are structured end-to-end, from software architecture and system design to infrastructure, environments, and reliability.",
    },
    {
      title: "Performance Mindset",
      detail: "Focused on debugging, optimization, and shipping improvements that create measurable user and business impact.",
    },
    {
      title: "Product Thinking",
      detail: "I like building software that is technically solid, useful to end users, and aligned with business goals.",
    },
    {
      title: "Growth-Oriented",
      detail: "Graduating in May 2026 and looking for environments where I can contribute quickly and keep leveling up.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Working with Aaron at ZYSC LLC has been awesome. As a Frontend Developer, he is full of curiosity and always asking the right questions, the kind that push the project forward.",
      name: "Freddy Rojas",
      title: "System Engineer | Software Developer | n8n Automation",
      context: "Worked with Aaron on the same team at ZYSC LLC",
      image: freddyImage,
    },
    {
      quote:
        "Aaron has consistently impressed me with his charisma, helpfulness, and ability to bring people together. He does not just focus on his own success, he lifts others up and ensures that the entire team thrives.",
      name: "Ivy R. Gentry",
      title: "Administrative & Intake Specialist | Graduate Student",
      context: "Studied with Aaron and has known him across academic and professional settings",
      image: ivyImage,
    },
    {
      quote:
        "He truly understands architecture, performance, debugging, and writes code that is clean and easy for the rest of the team to work with. Any team that hires Aaron is getting someone who ships high-quality work quickly and levels up constantly.",
      name: "Allen Chen",
      title: "Custodial Cast Member @ Walt Disney World",
      context: "Studied data science with Aaron at the University of South Florida",
      image: allenImage,
    },
  ];

  const stackItems = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "AWS", icon: Cloud, color: "#FF9900" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
    { name: "OpenAI", icon: SiOpenai, color: "#10A37F" },
  ];

  const projects = [
    {
      title: "ZYSC LLC — Web Application",
      description: "Full-stack web application built from the ground up. Diagnosed and resolved a critical performance bottleneck by implementing Gunicorn with multi-threaded workers, cutting page load times by up to 75%. Contributed across application architecture, system design decisions, API integrations, CI/CD and DevOps workflows, infrastructure-minded deployment work, and user-facing features.",
      technologies: ["React", "Python", "Gunicorn", "Docker", "CI/CD", "Infrastructure", "System Design", "DevOps", "REST APIs", "Full-Stack", "Deployment"],
      github: null,
      demo: null,
      note: "NDA — Private Repository",
      companyUrl: "https://www.zyscsoftware.com/",
      companyLabel: "View Company Site",
      workGithub: "https://github.com/aaronzysc",
      workGithubLabel: "View Commits (Work GitHub)",
    },
    {
      title: "AI Budgeting App",
      description: "AI-powered personal finance tool with OCR receipt scanning via AWS Textract, GPT-4 driven spending insights, and PostgreSQL-backed transaction tracking. Features user authentication and document upload.",
      technologies: ["TypeScript", "React", "Node.js", "PostgreSQL", "AWS Textract", "OpenAI GPT-4"],
      github: "https://github.com/AaronM0710/ai-budgeting-app",
      demo: "https://budgetboom.io/home",
    },
    {
      title: "Security Landing Page",
      description: "A professional landing page developed for a security company, featuring modern design and responsive layout.",
      technologies: ["React", "Tailwind CSS", "Responsive Design", "UI/UX"],
      github: "https://github.com/AaronM0710/security-landing",
      demo: "https://aaronm0710.github.io/security-landing/",
    },
    {
      title: "Interactive Drum Machine",
      description: "A web-based drum machine application that allows users to create and play beats in real-time.",
      technologies: ["React", "Web Audio API", "CSS", "JavaScript"],
      github: "https://github.com/AaronM0710/FCC-drum-machine",
      demo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  ];

  const renderHome = () => (
    <div className="relative min-h-screen">
      <div 
        className="fixed top-0 left-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative z-10 px-4 py-8 sm:px-6 md:px-8">
        <div className="mx-auto flex min-h-screen w-full max-w-5xl items-center">
          <div className="w-full space-y-8 rounded-2xl border border-gray-700 bg-gray-900/85 p-6 shadow-xl backdrop-blur-sm sm:p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-start">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <img 
                  src={profilePic} 
                  alt="Profile" 
                  className="h-28 w-28 rounded-full border-4 border-gray-700 object-cover sm:h-32 sm:w-32 md:h-36 md:w-36"
                />
              </div>

              <div className="space-y-5 text-center lg:text-left">
                <div className="space-y-3">
                  <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-300">
                    Software Engineer based in Tampa
                  </p>
                  <h1 className="text-4xl font-bold leading-tight text-gray-100 sm:text-5xl">
                    {personalInfo.name}
                  </h1>
                  <h2 className="text-xl text-gray-300 sm:text-2xl">{personalInfo.title}</h2>
                  <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-300 lg:justify-start">
                    <span className="rounded-full border border-gray-600 px-3 py-1">
                      {`📍 ${personalInfo.location}`}
                    </span>
                    <span className="rounded-full border border-gray-600 px-3 py-1">
                      {personalInfo.workStyle}
                    </span>
                    <span className="relocation-badge rounded-full border border-amber-300/40 px-3 py-1 text-amber-100 shadow-lg shadow-amber-500/10">
                      New Grad May 2026
                    </span>
                    {personalInfo.availableForWork && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-green-500/40 px-3 py-1 text-green-400">
                        <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                        Available for work
                      </span>
                    )}
                  </div>
                </div>

                <p className="max-w-3xl text-base leading-8 text-gray-300 sm:text-lg">
                  {personalInfo.bio}
                </p>

                <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                  {["React", "TypeScript", "Node.js", "AWS", "Docker", "CI/CD", "Infrastructure", "System Design", "OpenAI"].map((skill) => (
                    <span key={skill} className="rounded-full bg-gray-800 px-3 py-1 text-sm text-gray-200 ring-1 ring-gray-700">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-gray-200">
                    <Github size={20} />
                    <span>Personal GitHub</span>
                  </a>
                  <a href="https://github.com/aaronzysc" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-gray-200">
                    <Github size={20} />
                    <span>Work GitHub</span>
                  </a>
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-gray-200">
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </a>
                  <a href={`mailto:${personalInfo.email}`} className="flex items-center space-x-2 text-gray-400 hover:text-gray-200">
                    <Mail size={20} />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPortfolio = () => (
    <div className="py-8">
      <h2 className="text-2xl font-bold text-gray-100 mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border border-gray-700 rounded-lg p-6 bg-gray-800 shadow-sm hover:shadow-lg hover:border-gray-500 transition-all duration-200">
            <h3 className="text-xl font-semibold mb-2 text-gray-100">{project.title}</h3>
            {project.note && (
              <span className="inline-block text-xs text-yellow-400 border border-yellow-600 rounded px-2 py-0.5 mb-2">
                {project.note}
              </span>
            )}
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span key={i} className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-gray-200">
                  <Github size={16} />
                  <span>Code</span>
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-gray-200">
                  <ExternalLink size={16} />
                  <span>Demo</span>
                </a>
              )}
              {project.companyUrl && (
                <a href={project.companyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-gray-200">
                  <ExternalLink size={16} />
                  <span>{project.companyLabel || 'Company Site'}</span>
                </a>
              )}
              {project.workGithub && (
                <a href={project.workGithub} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-gray-200">
                  <Github size={16} />
                  <span>{project.workGithubLabel || 'Work GitHub'}</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAbout = () => (
    <div className="py-8">
      <div className="space-y-8 rounded-2xl border border-gray-700 bg-gray-800 p-6 shadow-xl sm:p-8">
        <section className="space-y-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-100">About Me</h2>
            <p className="mt-2 max-w-3xl text-gray-400">
              I’m a software engineer who enjoys building practical, well-crafted products and getting closer to the kind of work that creates real value for users and teams.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {homeHighlights.map((highlight) => (
              <div key={highlight.label} className="rounded-xl border border-gray-700 bg-gray-900/70 p-5">
                <p className="text-sm uppercase tracking-wide text-gray-400">{highlight.label}</p>
                <p className="mt-2 text-2xl font-bold text-gray-100">{highlight.value}</p>
                <p className="mt-2 text-sm leading-6 text-gray-300">{highlight.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4 border-t border-gray-700 pt-8">
          <h3 className="text-2xl font-semibold text-gray-100">What I Bring</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {aboutStrengths.map((strength) => (
              <div key={strength.title} className="rounded-xl border border-gray-700 bg-gray-900/50 p-5">
                <h4 className="text-lg font-semibold text-gray-100">{strength.title}</h4>
                <p className="mt-2 text-sm leading-6 text-gray-300">{strength.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4 border-t border-gray-700 pt-8">
          <h3 className="text-2xl font-semibold text-gray-100">Professional Biography</h3>
          <div className="space-y-4 text-gray-300">
            <p className="leading-8">
              Since I started learning to code in 2019, I have been drawn to the process of turning ideas into working software. That interest grew into professional experience at ZYSC LLC, where I now contribute to production web applications in an Agile/Scrum environment. My work has included application development, API integrations, debugging, QA, performance tuning, and DevOps-oriented workflows that support deployment, CI/CD, infrastructure, system design thinking, and reliability.
            </p>
            <p className="leading-8">
              I am especially motivated by problems that require both technical depth and practical judgment. In real terms, that has meant identifying bottlenecks, improving reliability, supporting deployment workflows, thinking through software architecture and system design decisions, and shipping features that help the business move forward. One example was resolving a major performance issue that helped reduce page load times by up to 75 percent. Another was building my AI budgeting app end-to-end using React, TypeScript, PostgreSQL, AWS, and OpenAI-powered workflows.
            </p>
            <p className="leading-8">
              As I approach graduation from the University of South Florida in May 2026, I am looking for software engineering opportunities where I can contribute early, keep learning from strong teams, and continue growing into a high-impact engineer. I am based in Tampa, open to relocation, and particularly interested in roles involving full-stack development, software architecture, system design, CI/CD pipelines, cloud infrastructure, APIs, Docker, DevOps, and AI-enabled products.
            </p>
          </div>
        </section>

        <section className="space-y-5 border-t border-gray-700 pt-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-100">My Stack</h3>
            <p className="mt-2 max-w-3xl text-gray-400">
              The technologies I use most across product development, architecture, deployment, and AI-driven features.
            </p>
          </div>

          <div className="stack-marquee overflow-hidden rounded-2xl border border-gray-700 bg-gray-900/60 py-5">
            <div className="stack-track flex w-max items-center gap-4 px-4">
              {[...stackItems, ...stackItems].map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="flex min-w-[190px] items-center gap-4 rounded-2xl border border-gray-700 bg-gray-800/90 px-4 py-3 shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-950/70 shadow-md ring-1 ring-gray-700">
                    <item.icon size={28} style={{ color: item.color }} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-gray-500">Tech</p>
                    <p className="text-base font-semibold text-gray-100">{item.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );

  const renderTestimonials = () => (
    <div className="py-8">
      <div className="space-y-8 rounded-2xl border border-gray-700 bg-gray-800 p-6 shadow-xl sm:p-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-100">Testimonials</h2>
            <p className="mt-2 max-w-3xl text-gray-400">
              Excerpts from LinkedIn recommendations from people who have worked with me and know how I show up as a teammate.
            </p>
          </div>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-blue-300 hover:text-blue-200"
          >
            View LinkedIn
            <ExternalLink size={14} />
          </a>
        </div>

        <div className="grid gap-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="rounded-xl border border-gray-700 bg-gray-900/50 p-6">
              <p className="text-lg leading-8 text-gray-200">"{testimonial.quote}"</p>
              <div className="mt-5 flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-gray-700"
                />
                <div className="space-y-1">
                  <p className="font-semibold text-gray-100">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                  <p className="text-sm text-gray-500">{testimonial.context}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderResume = () => (
    <div className="space-y-6 bg-gray-800 p-6 rounded-lg">
      {/* Header with Download Button */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-100">Resume</h2>
        <button
          type="button"
          onClick={handleResumeDownload}
          className="flex items-center space-x-2 bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 text-gray-200"
        >
          <FileText size={20} />
          <span>Download PDF</span>
        </button>
      </div>

      {/* Education Section */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-100 border-b border-gray-700 pb-2">Education</h3>
        <div>
          <h4 className="font-medium text-gray-200">University of South Florida</h4>
          <p className="text-gray-400">Major: Data Science & Analytics</p>
          <p className="text-gray-400">Expected Graduation: May 2026</p>
          <p className="text-gray-400">GPA: 3.0</p>

          <div className="mt-4">
            <h5 className="text-gray-300 font-medium">Relevant Courses</h5>
            <ul className="grid grid-cols-2 gap-2 mt-2 text-gray-400">
              <li>• Python Programming</li>
              <li>• Java I & II</li>
              <li>• Database Concepts</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-100 border-b border-gray-700 pb-2">Certifications</h3>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://www.freecodecamp.org/certification/AaronM0710/responsive-web-design"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-full text-sm text-gray-300 transition-colors"
          >
            Responsive Web Design
            <ExternalLink size={12} />
          </a>
          <a
            href="https://www.freecodecamp.org/certification/AaronM0710/javascript-algorithms-and-data-structures"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-full text-sm text-gray-300 transition-colors"
          >
            JavaScript Algorithms and Data Structures
            <ExternalLink size={12} />
          </a>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-100 border-b border-gray-700 pb-2">Work Experience</h3>
        
        {/* Software Engineer - ZYSC LLC */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <h4 className="font-medium text-gray-200">Software Engineer</h4>
            <p className="text-gray-400">Apr 2025 - Present</p>
          </div>
          <p className="text-gray-300">ZYSC LLC</p>
          <ul className="list-disc ml-6 text-gray-400">
            <li>Contributed to the development of a new web application from scratch, including front-end, back-end, and deployment processes</li>
            <li>Diagnosed and resolved critical performance bottleneck that plagued the application for months, implementing Gunicorn with multi-threaded workers to improve page load times by up to 75%</li>
            <li>Built hands-on experience with Docker, CI/CD practices, system design thinking, and infrastructure-minded DevOps workflows while supporting deployment, environment setup, and overall application reliability</li>
            <li>Maintained and improved a second codebase, ensuring optimal performance and functionality for the company website</li>
            <li>Collaborated closely with a back-end team on API integrations and data flow, and with the marketing team to implement new features and user-facing updates</li>
          </ul>
        </div>

        {/* Security Officer - Tampa General */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <h4 className="font-medium text-gray-200">Security Officer</h4>
            <p className="text-gray-400">Oct 2024 - Apr 2025</p>
          </div>
          <p className="text-gray-300">Tampa General Hospital</p>
          <ul className="list-disc ml-6 text-gray-400">
            <li>Conducted weapon screenings and maintained a secure environment through regular patrols, both on foot inside the facility and in a vehicle around the premises</li>
            <li>Responded to emergency situations, including Code Grey and other critical alerts, demonstrating the ability to remain calm and decisive under pressure</li>
            <li>Maintained a high level of situational awareness to ensure the safety of staff, patients, and visitors</li>
          </ul>
        </div>

        {/* Web Developer Intern */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <h4 className="font-medium text-gray-200">Web Developer Intern</h4>
            <p className="text-gray-400">Jan 2024 - May 2024</p>
          </div>
          <p className="text-gray-300">USF Global Tech Experience</p>
          <ul className="list-disc ml-6 text-gray-400">
            <li>Developed responsive websites in a collaborative team environment using HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS</li>
            <li>Built user-friendly web interfaces that display correctly across multiple devices and screen sizes</li>
            <li>Implemented responsive design principles to ensure optimal viewing experience across desktop and mobile platforms</li>
            <li>Applied version control systems and collaborative development workflows to meet project deadlines</li>
          </ul>
        </div>

        {/* Bouncer / Armed Security */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <h4 className="font-medium text-gray-200">Bouncer / Armed Security Officer</h4>
            <p className="text-gray-400">Sep 2022 - Jul 2024</p>
          </div>
          <p className="text-gray-300">Gulf Coast Security Services</p>
          <ul className="list-disc ml-6 text-gray-400">
            <li>Redesigned company website to make it more responsive and user friendly</li>
            <li>Maintained zero incidents of theft or vandalism on the premises</li>
            <li>Successfully collaborated with local law enforcement, aiding in the resolution of two significant cases</li>
            <li>Conducted security patrols, ensuring that all areas were secure and free from unauthorized access</li>
          </ul>
        </div>

        {/* Head Lifeguard */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <h4 className="font-medium text-gray-200">Head Lifeguard & Water Safety Instructor</h4>
            <p className="text-gray-400">May 2018 - Aug 2023</p>
          </div>
          <p className="text-gray-300">City of Clearwater</p>
          <ul className="list-disc ml-6 text-gray-400">
            <li>Taught hundreds of kids how to swim and performed lifesaving water rescues</li>
            <li>Trained and supervised new lifeguards, ensuring they followed all safety protocols and procedures</li>
            <li>Conducted routine pool maintenance tasks, including chemical testing and cleaning</li>
            <li>Reduced the number of pool related incidents by 25%</li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-100 border-b border-gray-700 pb-2">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {["Python", "R", "SQL", "Java", "HTML", "CSS", "JavaScript", "TypeScript", "React", "Redux", "Bootstrap", "Tailwind CSS", "Git", "GitHub", "Docker", "CI/CD", "DevOps", "AWS", "Infrastructure", "Software Architecture", "System Design", "Tableau", "Excel", "Data Visualization", "Database Management", "RESTful APIs", "Responsive Web Design", "Full-Stack Development", "API Integration", "Statistical Analysis"].map((skill, index) => (
            <span key={index} className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );

  const renderContact = () => (
    <div className="py-8 max-w-lg">
      <h2 className="text-2xl font-bold mb-2 text-gray-100">Contact Me</h2>
      <p className="text-gray-400 mb-6">Have an opportunity or just want to connect? Send me a message.</p>

      {formStatus === 'success' ? (
        <div className="bg-green-900 border border-green-700 text-green-300 rounded-lg p-6 text-center">
          <p className="text-lg font-medium">Message sent!</p>
          <p className="text-sm mt-1">I'll get back to you as soon as I can.</p>
          <button
            onClick={() => setFormStatus('idle')}
            className="mt-4 text-sm text-green-400 hover:text-green-200 underline"
          >
            Send another
          </button>
        </div>
      ) : (
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formState.name}
              onChange={handleFormChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formState.email}
              onChange={handleFormChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300">Message</label>
            <textarea
              name="message"
              required
              value={formState.message}
              onChange={handleFormChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none h-32"
              placeholder="Your message..."
            />
          </div>
          {formStatus === 'error' && (
            <p className="text-red-400 text-sm">Something went wrong. Try emailing me directly at {personalInfo.email}.</p>
          )}
          <button
            type="submit"
            disabled={formStatus === 'sending'}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <nav className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <ul className="flex space-x-8">
            {['home', 'about me', 'testimonials', 'portfolio', 'resume'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => setActiveSection(section)}
                  className={`${
                    activeSection === section
                      ? 'text-blue-400 font-medium'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4">
        <div key={activeSection} className="fade-in">
          {activeSection === 'home' && renderHome()}
          {activeSection === 'about me' && renderAbout()}
          {activeSection === 'testimonials' && renderTestimonials()}
          {activeSection === 'portfolio' && renderPortfolio()}
          {activeSection === 'resume' && renderResume()}
          {activeSection === 'contact' && renderContact()}
        </div>
      </main>
    </div>
  );
};

export default App;
