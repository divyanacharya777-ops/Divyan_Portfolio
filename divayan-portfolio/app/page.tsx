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

import sA from "../static/solar_aligner.png";
import sA1 from "../static/solar_aligner1.png";
import sC from "../static/solar_cleaner.png";
import tE from "../static/turbofanengine.png";
import tE1 from "../static/turbofanengine1.png";
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
          <p className="text-2xl text-primary">Mechanical Engineer</p>
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
            <a href="../static/CV Divyan Acharya.jpeg" download>
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

      {/* About Section */}
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
              <p className="text-muted-foreground">
                As an undergraduate mechanical engineer studying in <span className="text-gray-50">IOE Thapathali Campus</span>, I am building a strong
                foundation in mechanical design, material science, and
                manufacturing processes. I am passionate about applying
                theoretical knowledge to real-world problems, with a keen
                interest in sustainable design and innovation.
              </p>
              {/* <div className="flex items-center gap-4">
    <Gauge className="w-8 h-8 text-teal-500" />
    <h3 className="text-2xl font-semibold">
      Focused on Performance and Optimization
    </h3>
  </div>
  <p className="text-muted-foreground">
    I am dedicated to improving the efficiency and performance of mechanical systems through hands-on projects, simulations, and data analysis, constantly learning new tools and techniques to enhance system functionality.
  </p> */}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
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

                {/* Dropdown - Show Skills when category is active */}
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

      {/* Experience Section */}
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

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center animate-on-scroll">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden animate-on-scroll">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
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
    <footer className=" pb-2">
      <div className="flex justify-center text-center">
       
      <div> © {new Date().getFullYear()} All rights reserved.</div>
      </div>
    </footer>
    </main>
  );
}

const experiences = [
  {
    period: "Dec 2024 - Present · 3 mos",
    role: "Aircraft Maintenance Engineer",
    company: "Nepal Airlines Corporation",
    achievements: [
      "Internship at Nepal Airlines Corporation",
      "Worked on aircraft maintenance and repair",
      "Gained hands-on experience with aviation engineering",
    ],
  },
  {
    period: "Apr 2024 - May 2024 · 2 mos",
    role: "Mechanical Engineer",
    company: "Raj Brewery Pvt. Ltd",
    achievements: [
      "Internship focused on production management and refrigeration",
      "Assisted in mechanical design and optimization",
      "Enhanced efficiency in brewery operations",
    ],
  },
  {
    period: "Feb 2023 - May 2024 · 1 yr 4 mos",
    role: "CAE Engineer",
    company: "Team Shireto",
    achievements: [
      "Part-time role specializing in vehicle dynamics",
      "Worked on Optistruct simulations for structural analysis",
      "Contributed to automotive and aerodynamics projects",
    ],
  },
];

const projects = [
  {
    title: "Turbo of an Engine",
    description:
      "Developed and optimized a high-performance turbocharging system to enhance engine efficiency and power output.",
    image: tE,
  },
  {
    title: "Solar Aligner",
    description:
      "Engineered an automated solar panel alignment system to maximize energy capture based on sun positioning.",
    image: sA,
  },
  {
    title: "Solar Cleaner",
    description:
      "Designed an autonomous cleaning system for solar panels to improve efficiency and reduce maintenance efforts.",
    image: sC,
  },
];

const skills = [
  {
    title: "Design & Analysis",
    icon: <WrenchIcon className="w-8 h-8 text-blue-400" />,
    skills: [
      "CAD/CAM Software",
      "Finite Element Analysis",
      "3D Modeling",
      "Technical Drawing",
    ],
  },
  {
    title: "Manufacturing",
    icon: <Factory className="w-8 h-8 text-blue-400" />,
    skills: [
      "CNC Programming",
      "Additive Manufacturing",
      "Quality Control",
      "Process Optimization",
    ],
  },
  {
    title: "Technical",
    icon: <Cpu className="w-8 h-8 text-blue-400" />,
    skills: ["AutoCAD", "SolidWorks", "MATLAB", "Python"],
  },
  {
    title: "Soft Skills",
    icon: <Brain className="w-8 h-8 text-blue-400" />,
    skills: [
      "Project Management",
      "Team Leadership",
      "Problem Solving",
      "Technical Writing",
    ],
  },
];
