import React from 'react';
import { useState } from 'react';
import { Github, Mail, Linkedin, FileText, ExternalLink } from 'lucide-react';
import profilePic from './images/luffy-image.jpeg';
import backgroundImage from './images/RocketIMG.png';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  
  const personalInfo = {
    name: "Aaron J. McCullough",
    title: "Software Engineer",
    bio: "Software Engineer with hands-on experience in full-stack web development and a strong foundation in data science principles. Proficient in HTML, CSS, JavaScript, and modern frameworks like React. Passionate about creating responsive, user-friendly interfaces and writing clean, efficient, and well-documented code.",
    email: "mccullougha00@yahoo.com",
    github: "https://github.com/AaronM0710",
    linkedin: "https://www.linkedin.com/in/aaronjmccullough"
  };

  const projects = [
    {
      title: "Security Landing Page",
      description: "A professional landing page developed for a security company, featuring modern design and responsive layout",
      technologies: ["React", "Tailwind CSS", "Responsive Design", "UI/UX"],
      github: "https://github.com/AaronM0710/security-landing",
      demo: "https://demo1.example.com"
    },
    {
      title: "Interactive Drum Machine",
      description: "A web-based drum machine application that allows users to create and play beats in real-time",
      technologies: ["React", "Web Audio API", "CSS", "JavaScript"],
      github: "https://github.com/project2",
      demo: "https://demo2.example.com"
    }
  ];

  const renderHome = () => (
    <div className="relative min-h-screen">
      {/* Background image with parallax - more responsive */}
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
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Centered content - more responsive */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center p-4 sm:p-6 md:p-8">
        <div className="bg-gray-900 bg-opacity-80 p-4 sm:p-6 md:p-8 rounded-lg shadow-xl w-full max-w-2xl">
          {/* Profile section - responsive layout */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
            {/* Profile image - responsive sizing */}
            <img 
              src={profilePic} 
              alt="Profile" 
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-4 border-gray-700 object-cover"
            />
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-100">{personalInfo.name}</h1>
              <h2 className="text-xl sm:text-2xl text-gray-400">{personalInfo.title}</h2>
            </div>
          </div>
          <p className="text-base sm:text-lg text-gray-300 mb-6">{personalInfo.bio}</p>
          <div className="flex justify-center space-x-4">
            <a href={personalInfo.github} className="flex items-center space-x-2 text-gray-400 hover:text-gray-200">
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a href={personalInfo.linkedin} className="flex items-center space-x-2 text-gray-400 hover:text-gray-200">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPortfolio = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <div key={index} className="border border-gray-700 rounded-lg p-6 bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-2 text-gray-100">{project.title}</h3>
          <p className="text-gray-400 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <span key={i} className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex space-x-4">
            <a href={project.github} className="flex items-center space-x-2 text-gray-400 hover:text-gray-200">
              <Github size={16} />
              <span>Code</span>
            </a>
            <a href={project.demo} className="flex items-center space-x-2 text-gray-400 hover:text-gray-200">
              <ExternalLink size={16} />
              <span>Demo</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );

  const renderResume = () => (
    <div className="space-y-6 bg-gray-800 p-6 rounded-lg">
      {/* Header with Download Button */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-100">Resume</h2>
        <a 
          href="/aaron-mccullough-resume.pdf" 
          download
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 text-gray-200"
        >
          <FileText size={20} />
          <span>Download PDF</span>
        </a>
      </div>

      {/* Education Section */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-100 border-b border-gray-700 pb-2">Education</h3>
        <div>
          <h4 className="font-medium text-gray-200">University of South Florida</h4>
          <p className="text-gray-400">Major: Data Science & Analytics</p>
          <p className="text-gray-400">Expected Graduation: May 2025</p>
          <p className="text-gray-400">GPA: 3.8</p>
          
          <div className="mt-4">
            <h5 className="text-gray-300 font-medium">Relevant Courses</h5>
            <ul className="grid grid-cols-2 gap-2 mt-2 text-gray-400">
              <li>• Intro to Programming w/ Python</li>
              <li>• Java 1 & 2</li>
              <li>• Statistics</li>
              <li>• Calculus 1, 2 & 3</li>
              <li>• Web Development</li>
              <li>• Database Concepts</li>
              <li>• Adv Stats & Analytics</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-100 border-b border-gray-700 pb-2">Certifications</h3>
        <ul className="list-disc ml-6 text-gray-400">
          <li>Responsive Web Design</li>
          <li>JavaScript Algorithms and Data Structures</li>
        </ul>
      </section>

      {/* Work Experience Section */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-100 border-b border-gray-700 pb-2">Work Experience</h3>
        
        {/* Web Developer Intern */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <h4 className="font-medium text-gray-200">Web Developer Intern</h4>
            <p className="text-gray-400">Jan 2024 - Present</p>
          </div>
          <p className="text-gray-300">USF Global Tech Experience</p>
          <ul className="list-disc ml-6 text-gray-400">
            <li>Assisted in web application development, implementing responsive design principles to enhance user experience</li>
            <li>Coordinated security operations, maintaining zero incidents of theft or vandalism, demonstrating reliability and attention to detail</li>
          </ul>
        </div>

        {/* Bouncer */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <h4 className="font-medium text-gray-200">Bouncer</h4>
            <p className="text-gray-400">Sep 2022 - Present</p>
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
            <li>Taught hundreds of kids how to swim and performer lifesaving water rescues</li>
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
          {["Python", "R", "SQL", "Data Visualization (Tableau, Excel)", "Java", "HTML", "CSS", "JavaScript", "Git & Github", "React", "Redux", "Bootstrap"].map((skill, index) => (
            <span key={index} className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );

  const renderContact = () => (
    <div className="max-w-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-100">Contact Me</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-300">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-300">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-300">Message</label>
          <textarea
            className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none h-32"
            placeholder="Your message..."
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <nav className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <ul className="flex space-x-8">
            {['home', 'portfolio', 'resume'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => setActiveSection(section)}
                  className={`capitalize ${
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
        {activeSection === 'home' && renderHome()}
        {activeSection === 'portfolio' && renderPortfolio()}
        {activeSection === 'resume' && renderResume()}
        {activeSection === 'contact' && renderContact()}
      </main>
    </div>
  );
};

export default App;