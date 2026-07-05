"use client";

import { useEffect, useState } from "react";
import {
  ArrowDown,
  Mail,
  Github,
  Linkedin,
  Wrench,
  Cog,
  Gauge,
  Cpu,
  WrenchIcon,
  Brain,
  Factory,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string | null>(
    skills.length > 0 ? skills[0].title : null
  );

  const toggleCategory = (categoryTitle: string) => {
    setActiveCategory(activeCategory === categoryTitle ? null : categoryTitle);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    document
      .querySelectorAll(".animate-on-scroll")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground text-gray-100 ">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="video-background"
          poster="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80"
        >
          <source
            src="https://static.videezy.com/system/resources/previews/000/021/352/original/abstract-digital-network-communication-background.mp4"
            type="video/mp4"
          />
        </video>
        <div className="video-overlay"></div>
        <div className="text-center space-y-6 animate-fade-in relative z-10">
          <Cog className="w-16 h-16 mx-auto text-primary mb-6" />
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Divyan Acharya
          </h1>

          {/* NEW: Engineers Australia Professional Engineer Badge */}
          <div className="flex items-center justify-center gap-3 mt-2">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Engineers_Australia_Logo.svg/120px-Engineers_Australia_Logo.svg.png" 
              alt="Engineers Australia" 
              className="w-7 h-9" 
            />
            <span className="text-xl text-primary font-medium">Professional Engineer | Engineers Australia</span>
          </div>

          <p className="text-2xl text-primary mt-1">Mechanical Engineer</p>

          <div className="flex gap-4 justify-center mt-8">
            <a href="#projects">
              <Button
                variant="outline"
                size="lg"
                className="backdrop-blur-sm bg-background/30 hover:bg-background/50 transition-all"
              >
                View Projects
              </Button>
            </a>
            <a href="../static/Divyan_Acharya_CV.pdf" download>
              <Button
                size="lg"
                className="backdrop-blur-sm bg-blue-500/80 hover:bg-blue-500/90 transition-all"
              >
                Download CV
              </Button>
            </a>
          </div>
        </div>
        
        <a href="#about">
        <ArrowDown className="absolute bottom-8 animate-bounce w-8 h-8 text-primary z-10" />
        </a>
      </section>

      {/* About Section - Updated */}
      <section id="about" className="py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center animate-on-scroll">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <img
                src="../static/Divyan.png"
                alt="My image"
                className="rounded-full shadow-lg shadow-blue-500/50 backdrop-blur-md border border-white/20 w-64 h-64 object-cover mx-auto hover:scale-105 transition-all"
              />
            </div>

            <div className="space-y-6 animate-on-scroll">
              <div className="flex items-center gap-4">
                <Cog className="w-8 h-8 text-blue-500" />
                <h3 className="text-2xl font-semibold">
                  Enthusiastic Mechanical Engineer
                </h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Passionate Mechanical Engineering postgraduate student at the University of Newcastle, 
                driven by a strong interest in manufacturing processes, mining equipment, advanced mechanical 
                design, simulation & analysis, and industrial maintenance & reliability. I enjoy turning complex 
                engineering challenges into practical, efficient, and safe solutions that improve performance 
                and sustainability in real-world environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Updated */}
      <section
        id="skills"
        className="py-20 px-4 md:px-8 bg-background text-foreground"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-16 text-center animate-on-scroll bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300 drop-shadow-lg">
            Technical Skills
          </h2>

          {/* For Desktop */}
          <div className="hidden md:flex flex-wrap justify-center gap-6 mb-12">
            {skills.map((category) => (
              <button
                key={category.title}
                onClick={() => setActiveCategory(category.title)}
                className={`w-full md:w-auto px-6 py-4 rounded-2xl text-lg font-semibold transition-all shadow-lg backdrop-blur-md border border-white/20 hover:scale-105 flex items-center justify-center gap-4 ${
                  activeCategory === category.title
                    ? "text-gray-100 shadow-blue-500/50"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
              >
                <span className="text-gray-100 font-bold text-xl">
                  {category.icon}
                </span>
                <span className="text-gray-300 font-bold text-xl">
                  {category.title}
                </span>
              </button>
            ))}
          </div>

          {/* For Mobile - Dropdown Menu */}
          <div className="md:hidden mb-12">
            {skills.map((category) => (
              <div key={category.title}>
                <button
                  onClick={() => toggleCategory(category.title)}
                  className={`w-full px-6 py-4 rounded-2xl text-lg font-semibold transition-all shadow-lg backdrop-blur-md border border-white/20 hover:scale-105 flex items-center justify-between gap-4 ${
                    activeCategory === category.title
                      ? "text-gray-100 shadow-blue-500/50"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  <span className="text-gray-100 font-bold text-xl">
                    {category.icon}
                  </span>
                  <span className="text-gray-300 font-bold text-xl">
                    {category.title}
                  </span>
                </button>

                {activeCategory === category.title && (
                  <div className="p-4 bg-black rounded-b-lg shadow-md backdrop-blur-md">
                    <ul className="space-y-3">
                      {category.skills.map((skill) => (
                        <li
                          key={skill}
                          className="text-lg font-medium text-gray-100"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* For Desktop - Skills List */}
          <div className="text-center animate-on-scroll p-6 rounded-lg shadow-xl bg-background backdrop-blur-md">
            {skills.map((category) =>
              category.title === activeCategory ? (
                <div key={category.title}>
                  <ul className="space-y-3">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className=" text-xl font-medium text-gray-100"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null
            )}
          </div>
        </div>
      </section>

      {/* Experience Section - Updated with Prasiddha */}
      <section id="experience" className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl  font-bold mb-12 text-center animate-on-scroll">
            Professional Journey
          </h2>
          <div className=" timeline pl-4 space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="timeline-item pl-4 animate-on-scroll">
                <div className="mb-2">
                  <span className="text-sm text-blue-500">
                    {experience.period}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {experience.role}
                </h3>
                <p className="text-lg text-muted-foreground mb-2">
                  {experience.company}
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {experience.achievements.map(
                    (achievement, achievementIndex) => (
                      <li key={achievementIndex}>{achievement}</li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Completely Updated */}
      <section id="projects" className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center animate-on-scroll">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden animate-on-scroll p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                </div>
                <a 
                  href={project.report} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="w-full">
                    View Full Technical Report (PDF)
                  </Button>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Published Research Section */}
      <section id="research" className="py-20 px-4 md:px-8 bg-background text-foreground">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center animate-on-scroll">
            Published Research
          </h2>
          <Card className="p-8 animate-on-scroll">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">
                Design, Simulation, and Experimental Analysis of a Full-Face Motorbike Helmet Using Composite Material
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Published in Journal of Innovations in Engineering Education (JIEE), 2026
              </p>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Co-authored research paper on the design, ANSYS simulation, hand-layup fabrication, and experimental testing 
              of a composite motorbike helmet (E-glass/polyester) that successfully met IS 4151 safety standards for impact absorption, 
              penetration resistance, and rigidity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.nepjol.info/index.php/jiee/article/view/82599" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  Read Published Paper
                </Button>
              </a>
              <a 
                href="../static/Design,+simulation,+and+experimental+analysis+of+a+full-face+motorbike+helmet+..." 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button>
                  Download Full Paper (PDF)
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 animate-on-scroll">
            Get in Touch
          </h2>
          <div className="flex justify-center gap-8 mb-12 animate-on-scroll">
            <a
              href="mailto:divyanacharya777@gmail.com"
              target="_blank"
              className="hover:text-primary transition-colors"
            >
              <Mail className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/divyan-acharya/"
              target="_blank"
              className="hover:text-primary transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
          <Card className="p-8 animate-on-scroll">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 rounded-md bg-background border border-border"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-md bg-background border border-border"
                />
              </div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full p-3 rounded-md bg-background border border-border"
              ></textarea>
              <Button size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="pb-2">
        <div className="flex justify-center text-center">
          <div>© {new Date().getFullYear()} All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}

/* Updated Data Arrays */

const experiences = [
  {
    period: "May 2025 – Oct 2025",
    role: "Graduate Mechanical Engineer",
    company: "Prasiddha Water Industries, Nepal",
    achievements: [
      "Designed and fabricated a motor-driven internal water jar cleaning system (shaft, bearings, brush mechanism).",
      "Developed and implemented a preventive maintenance program for RO systems, filling machines, and packaging equipment.",
      "Created structured asset management documentation and fault history records for the plant.",
    ],
  },
  {
    period: "Nov 2024 – Feb 2025",
    role: "Mechanical Engineering Intern",
    company: "Nepal Airlines Corporation, Nepal",
    achievements: [
      "Assisted in maintenance and inspection of aircraft mechanical systems in compliance with aviation safety standards and CAAN regulations.",
      "Applied structured fault diagnosis across complex aircraft systems.",
    ],
  },
  {
    period: "Feb 2023 – May 2024",
    role: "CAE Engineer – Electric Vehicle Project",
    company: "Team Shireto, Thapathali Campus",
    achievements: [
      "Conducted FEA on EV chassis and structural components using Ansys and HyperMesh (OptiStruct).",
      "Optimised designs for weight, stiffness, and safety in a multidisciplinary team.",
    ],
  },
];

const projects = [
  {
    title: "Internal Water Jar Cleaning System",
    description: "Designed and fabricated a motor-driven internal jar cleaning machine with custom shaft, bearings, and brush mechanism. Performed full SolidWorks modelling and ANSYS structural & modal analysis. Delivered improved cleaning efficiency and reduced manual handling risk at Prasiddha Water Industries.",
    report: "../static/Project%201%20.pdf",
  },
  {
    title: "Formula Student EV Chassis – Design & FEA",
    description: "Led design and comprehensive finite element analysis of a tubular spaceframe chassis (AISI 4130) for a Formula Student electric vehicle. Conducted static bending, frontal impact, side impact, and torsional tests in ANSYS. Achieved strong factors of safety across all load cases.",
    report: "../static/Project%202%20.pdf",
  },
];

const skills = [
  {
    title: "Design & Analysis",
    icon: <Wrench className="w-6 h-6" />,
    skills: [
      "CAD Modelling (SolidWorks, Fusion 360, AutoCAD)",
      "Mechanical System Design (shafts, bearings, assemblies)",
      "Technical Drawing & Documentation",
    ],
  },
  {
    title: "Simulation & FEA",
    icon: <Gauge className="w-6 h-6" />,
    skills: [
      "ANSYS (Static, Dynamic, Structural & Modal Analysis)",
      "Altair HyperMesh / OptiStruct",
      "FEA Validation & Design Optimisation",
    ],
  },
  {
    title: "Maintenance & Reliability",
    icon: <Cog className="w-6 h-6" />,
    skills: [
      "Preventive Maintenance Programs",
      "Structured Fault Diagnosis & Root Cause Analysis",
      "Asset Documentation & SOP Development",
    ],
  },
  {
    title: "Manufacturing & Processes",
    icon: <Factory className="w-6 h-6" />,
    skills: [
      "Process Optimisation & Efficiency Improvement",
      "Equipment Troubleshooting",
      "Fabrication Coordination & Quality Control",
    ],
  },
  {
    title: "Professional & Soft Skills",
    icon: <Brain className="w-6 h-6" />,
    skills: [
      "Cross-disciplinary Team Collaboration",
      "Technical Reporting & Documentation",
      "Problem-Solving in Safety-Critical Environments",
      "Project Coordination & Communication",
    ],
  },
];