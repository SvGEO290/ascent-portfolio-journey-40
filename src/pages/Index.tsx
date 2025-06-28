import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, ArrowRight, Mountain, Anchor, Users, Code, Briefcase, Mail, Phone, MapPin, Linkedin, Github, FileDown } from 'lucide-react';
import { ProjectModal } from '@/components/ProjectModal';

const Index = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const scrollToExperience = () => {
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToResume = () => {
    const resumeSection = document.getElementById('resume');
    if (resumeSection) {
      resumeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const experiences = [
    {
      id: 1,
      role: "Project Manager: Startup Support Intern",
      company: "Launch Greensboro, Chamber of Commerce",
      location: "Greensboro, NC",
      period: "February 2025 – Present",
      description: "Providing end-to-end project support to entrepreneurs, helping move business projects from concept to completion with the goal of reaching $1M in revenue. Leading digital strategy initiatives and facilitating weekly launch-lab sessions for collaborative innovation.",
      highlights: [
        "End-to-End Project Support",
        "Digital Strategy & Web Development", 
        "Collaborative Innovation"
      ]
    },
    {
      id: 2,
      role: "Artificial Intelligence/Computer Vision Intern",
      company: "Lenovo",
      location: "Morrisville, NC",
      period: "June 2024 – August 2024",
      description: "Integrated Intel's AI solutions into internal software for Lenovo's OEM engineering team, developing and deploying AI-based demos that boosted client engagement. Led full product lifecycle from design to deployment while collaborating with Intel's team on cutting-edge AI technologies.",
      highlights: [
        "AI Solutions Integration",
        "Product Lifecycle Management",
        "Global Partnership Development"
      ]
    },
    {
      id: 3,
      role: "Supervisor, Instructor, Route Setter",
      company: "UNCG Outdoor Adventures",
      location: "Greensboro, NC", 
      period: "January 2021 – May 2024",
      description: "Directed daily operations for UNCG's indoor rock climbing gym, managing a team of 20-25 employees and organizing large-scale events with 500+ participants. Chaired high-profile annual events and increased participation by 20% through targeted marketing strategies.",
      highlights: [
        "Team Leadership & Operations",
        "Event Management & Marketing",
        "Risk Management & Safety"
      ]
    }
  ];

  const projects = [
    {
      id: 1,
      name: "AI Research Thesis",
      description: "Comprehensive research on Artificial Intelligence presented at the Spring 2023 Undergraduate Research and Creativity Expo.",
      technologies: ["Python", "Machine Learning", "Natural Language Processing", "Research"],
      image: "🧠",
      fullDescription: "This thesis project focused on bridging the gap between AI and non-technical audiences by exploring AI's logic-based thinking, machine learning capabilities, and natural language processing. The research aimed to foster a comprehensive understanding of AI's functionality and make complex AI concepts accessible to broader audiences. The project was successfully presented at UNCG's Spring 2023 Undergraduate Research and Creativity Expo, demonstrating the practical applications and implications of AI technology.",
      challenges: "Making complex AI concepts accessible to non-technical audiences, comprehensive literature review, presenting technical research in an engaging format",
      outcome: "Successfully presented at UNCG Research Expo, contributed to AI accessibility understanding"
    },
    {
      id: 2,
      name: "Campus Engagement Projects",
      description: "Led multiple high-impact projects including UNCG Residential College Program and campus sustainability initiatives.",
      technologies: ["Project Management", "Community Engagement", "Event Planning", "Leadership"],
      image: "🌱",
      fullDescription: "This encompasses two major campus engagement projects. First, I was selected for the UNCG Residential College Program, a prestigious two-year honors program where I successfully boosted campus engagement by chairing both Gardening and Health & Wellness Committees. Second, I spearheaded the revitalization of UNCG's campus garden, enabling students to plant, harvest, and donate food to support sustainability. This project reintroduced a campus-wide recreational sports and wellness event after years of inactivity, engaging hundreds of students and promoting environmental consciousness.",
      challenges: "Revitalizing dormant campus programs, coordinating multiple stakeholders, sustainable project implementation",
      outcome: "Enhanced campus community engagement, successful program reactivation, hundreds of students engaged"
    },
    {
      id: 3,
      name: "DevFlow Dashboard",
      description: "Real-time development team productivity analytics and workflow optimization platform.",
      technologies: ["Vue.js", "D3.js", "Go", "Redis"],
      image: "📊",
      fullDescription: "DevFlow Dashboard emerged from observing inefficiencies in our development workflow. Traditional project management tools weren't giving us the insights we needed to improve our processes. I built this platform to aggregate data from GitHub, Jira, and Slack to provide actionable insights about team productivity, code quality trends, and bottlenecks. The real-time visualizations help teams identify issues before they become problems.",
      challenges: "Data integration from multiple APIs, real-time processing at scale, privacy-conscious analytics",
      outcome: "Used by 50+ development teams, 25% improvement in sprint completion rates"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 via-stone-50 to-stone-100 overflow-x-hidden relative scroll-smooth">
      {/* Mountain Silhouettes Background - Hidden on mobile for performance */}
      <div className="fixed inset-0 pointer-events-none z-0 hidden md:block">
        {/* Far Mountains */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1200 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,600 L0,300 L200,200 L400,250 L600,150 L800,200 L1000,100 L1200,150 L1200,600 Z' fill='%23a8a29e' opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        {/* Middle Mountains */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1200 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,600 L0,400 L150,300 L350,350 L550,250 L750,300 L950,200 L1200,250 L1200,600 Z' fill='%2378716c' opacity='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Close Mountains */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1200 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,600 L0,500 L100,400 L300,450 L500,350 L700,400 L900,300 L1200,350 L1200,600 Z' fill='%2357534e' opacity='0.6'/%3E%3C/svg%3E")`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>

      {/* Climbing Holds - Reduced on mobile */}
      <div className="fixed inset-0 pointer-events-none z-5">
        {/* Show fewer holds on mobile */}
        <div 
          className="absolute w-4 h-4 md:w-6 md:h-6 bg-sunset-500 rounded-full opacity-70 animate-pulse"
          style={{
            top: '20%',
            left: '4%',
            animationDelay: '0s',
          }}
        />
        
        <div 
          className="absolute w-5 h-5 md:w-8 md:h-8 bg-carabiner-600 rounded-lg opacity-60 animate-pulse"
          style={{
            top: '40%',
            left: '8%',
            animationDelay: '1s',
          }}
        />

        <div 
          className="absolute w-4 h-4 md:w-7 md:h-7 bg-stone-600 rounded-lg opacity-50 animate-pulse"
          style={{
            top: '25%',
            right: '4%',
            animationDelay: '0.5s',
          }}
        />

        <div 
          className="absolute w-4 h-4 md:w-6 md:h-6 bg-sunset-400 rounded-full opacity-70 animate-pulse"
          style={{
            top: '55%',
            right: '6%',
            animationDelay: '1.5s',
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4 md:px-6 bg-gradient-to-br from-stone-50/90 via-transparent to-stone-100/90">
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          {/* Floating rocks decoration - Smaller on mobile */}
          <div className="absolute -top-12 -left-12 md:-top-24 md:-left-24 w-24 h-24 md:w-48 md:h-48 bg-stone-300 rounded-full opacity-15 animate-pulse" style={{ animationDelay: '0s' }} />
          <div className="absolute -top-6 -right-6 md:-top-12 md:-right-12 w-12 h-12 md:w-24 md:h-24 bg-stone-400 rounded-full opacity-25 animate-pulse" style={{ animationDelay: '2s' }} />
          
          <div className="animate-fade-in-up space-y-8 md:space-y-12">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-display font-bold text-stone-800 leading-tight relative mb-6 md:mb-8">
              <span className="block">Scaling New</span>
              <span className="block text-transparent bg-gradient-to-r from-sunset-500 via-carabiner-600 to-forest-600 bg-clip-text animate-pulse">
                Heights
              </span>
              {/* Climbing chalk dust effect */}
              <div className="absolute -inset-4 md:-inset-6 bg-white/10 rounded-full blur-2xl md:blur-3xl animate-pulse opacity-50" />
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-stone-600 max-w-4xl mx-auto leading-relaxed font-medium mb-8 md:mb-12 px-4">
              Computer Science Student & Software Engineer crafting digital experiences 
              that reach new summits of innovation and impact.
            </p>
            
            {/* Navigation Buttons - Updated to remove old buttons and add Resume */}
            <div className="flex flex-col gap-4 md:flex-row md:gap-6 justify-center items-center mb-12 md:mb-16 px-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-xl transform hover:scale-105 transition-all duration-300 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg"
                onClick={() => window.open('https://linkedin.com', '_blank')}
              >
                <Linkedin className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6" />
                LinkedIn
              </Button>
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-xl transform hover:scale-105 transition-all duration-300 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg"
                onClick={scrollToResume}
              >
                <FileDown className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6" />
                My Resume
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-stone-300 text-stone-700 hover:bg-stone-100 shadow-xl transform hover:scale-105 transition-all duration-300 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg"
                onClick={scrollToExperience}
              >
                <ArrowDown className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6" />
                View Experience
              </Button>
            </div>

            {/* Original Action Buttons - Stack on mobile */}
            <div className="flex flex-col gap-4 md:flex-row md:gap-6 justify-center items-center pt-6 md:pt-8 px-4">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-forest-600 to-forest-700 hover:from-forest-700 hover:to-forest-800 text-white shadow-xl transform hover:scale-105 transition-all duration-300 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg">
                <Briefcase className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6" />
                View My Work
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-stone-300 text-stone-700 hover:bg-stone-100 shadow-xl transform hover:scale-105 transition-all duration-300 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg">
                <Mail className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6" />
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator - Smaller on mobile */}
        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 animate-bounce z-20">
          <div className="flex flex-col items-center text-stone-600 space-y-1 md:space-y-2">
            <div className="relative">
              <Anchor className="h-6 w-6 md:h-8 md:w-8 text-carabiner-600" />
              <div className="absolute inset-0 bg-carabiner-400/30 rounded-full blur-lg animate-pulse" />
            </div>
            <ArrowDown className="h-3 w-3 md:h-4 md:w-4 animate-bounce" />
            <span className="text-xs md:text-sm font-medium">Explore</span>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 md:py-32 relative z-10 bg-gradient-to-b from-transparent via-stone-50/50 to-transparent" id="experience">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-20 relative">
            {/* Section decorative elements */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 md:-translate-y-6 w-16 md:w-24 h-1 md:h-1.5 bg-gradient-to-r from-sunset-500 to-carabiner-600 rounded-full" />
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-stone-800 mb-4 md:mb-6 relative leading-tight">
              Professional Experience
              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-sunset-500/10 to-carabiner-600/10 rounded-xl blur-xl md:blur-2xl" />
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-stone-600 max-w-3xl mx-auto leading-relaxed px-4">
              A journey through diverse roles that have shaped my professional growth 
              and expertise across multiple industries.
            </p>
          </div>

          <div className="space-y-8 md:space-y-16">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={`animate-fade-in-up group`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Card className="border-stone-200 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 md:hover:-translate-y-3 group-hover:border-sunset-300 bg-gradient-to-br from-white to-stone-50/50">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl md:text-2xl font-display font-semibold text-stone-800 group-hover:text-sunset-600 transition-colors duration-300 leading-tight mb-2">
                          {exp.role}
                        </CardTitle>
                        <p className="text-lg md:text-xl text-sunset-600 font-medium">{exp.company}</p>
                      </div>
                      <div className="text-left md:text-right">
                        <p className="text-base md:text-lg text-stone-500 font-medium">{exp.location}</p>
                        <p className="text-base md:text-lg text-stone-500 font-medium">{exp.period}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-stone-700 mb-4 md:mb-6 leading-relaxed text-base md:text-lg">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {exp.highlights.map((highlight) => (
                        <Badge 
                          key={highlight} 
                          variant="secondary" 
                          className="bg-gradient-to-r from-forest-100 to-forest-50 text-forest-800 hover:from-forest-200 hover:to-forest-100 transition-all duration-300 transform hover:scale-105 px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm font-medium"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-16 md:py-32 relative z-10 bg-gradient-to-b from-stone-50/30 to-transparent" id="resume">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <div className="mb-12 md:mb-16 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 md:-translate-y-6 w-16 md:w-24 h-1 md:h-1.5 bg-gradient-to-r from-green-500 to-blue-600 rounded-full" />
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-stone-800 mb-4 md:mb-6 relative leading-tight">
              My Resume
              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-green-500/10 to-blue-600/10 rounded-xl blur-xl md:blur-2xl" />
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-stone-600 max-w-3xl mx-auto leading-relaxed px-4 mb-8 md:mb-12">
              View my complete professional resume with detailed experience, 
              skills, and accomplishments.
            </p>
            
            <div className="max-w-2xl mx-auto">
              <Card className="border-stone-200 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-stone-50/50 overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src="/lovable-uploads/ebab72ac-6cb5-4be7-a121-1886bbbede32.png" 
                    alt="Samuel George Resume"
                    className="w-full h-auto object-contain"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-32 bg-gradient-to-b from-stone-100/50 via-stone-50/30 to-stone-100/50 relative z-10" id="projects">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-20 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 md:-translate-y-6 w-16 md:w-24 h-1 md:h-1.5 bg-gradient-to-r from-forest-500 to-sunset-600 rounded-full" />
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-stone-800 mb-4 md:mb-6 relative leading-tight">
              Peak Projects
              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-forest-500/10 to-sunset-600/10 rounded-xl blur-xl md:blur-2xl" />
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-stone-600 max-w-3xl mx-auto leading-relaxed px-4">
              Challenging builds that pushed my limits and expanded my horizons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10">
            {projects.map((project, index) => (
              <Card 
                key={project.id}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 md:hover:-translate-y-6 border-stone-200 animate-fade-in-up bg-gradient-to-br from-white via-stone-50/50 to-white hover:border-sunset-300 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Card glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-sunset-500/5 to-carabiner-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="relative z-10 pb-3 md:pb-4">
                  <div className="text-4xl md:text-5xl mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>
                  <CardTitle className="text-xl md:text-2xl font-display text-stone-800 group-hover:text-sunset-600 transition-colors duration-300 leading-tight">
                    {project.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 pt-0">
                  <p className="text-stone-600 mb-4 md:mb-6 leading-relaxed text-base md:text-lg">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-xs md:text-sm hover:bg-stone-100 transition-colors duration-300 px-2 md:px-3 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs md:text-sm px-2 md:px-3 py-1">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <Button 
                    onClick={() => setSelectedProject(project)}
                    variant="outline" 
                    size="lg" 
                    className="w-full group-hover:bg-gradient-to-r group-hover:from-sunset-50 group-hover:to-carabiner-50 group-hover:border-sunset-300 transition-all duration-300 transform hover:scale-105 py-2 md:py-3"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-32 relative z-10 bg-gradient-to-b from-transparent via-stone-50/30 to-stone-100" id="contact">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <div className="mb-12 md:mb-20 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 md:-translate-y-6 w-16 md:w-24 h-1 md:h-1.5 bg-gradient-to-r from-carabiner-500 to-forest-600 rounded-full" />
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-stone-800 mb-4 md:mb-6 relative leading-tight">
              Ready to Climb Together?
              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-carabiner-500/10 to-forest-600/10 rounded-xl blur-xl md:blur-2xl" />
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-stone-600 max-w-4xl mx-auto leading-relaxed px-4">
              Whether you're looking to scale new heights or tackle challenging problems, 
              let's connect and explore opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-12 md:mb-16">
            <Card className="border-stone-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 md:hover:-translate-y-3 hover:border-sunset-300 bg-gradient-to-br from-white to-stone-50/50 group">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="relative inline-block mb-4 md:mb-6">
                  <Mail className="h-8 w-8 md:h-10 md:w-10 text-sunset-500 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-sunset-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-semibold text-stone-800 mb-2 md:mb-3 text-lg md:text-xl">Email</h3>
                <p className="text-stone-600 text-base md:text-lg">svgeorge029@gmail.com</p>
              </CardContent>
            </Card>
            
            <Card className="border-stone-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 md:hover:-translate-y-3 hover:border-forest-300 bg-gradient-to-br from-white to-stone-50/50 group">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="relative inline-block mb-4 md:mb-6">
                  <Phone className="h-8 w-8 md:h-10 md:w-10 text-forest-500 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-forest-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-semibold text-stone-800 mb-2 md:mb-3 text-lg md:text-xl">Phone</h3>
                <p className="text-stone-600 text-base md:text-lg">(919) 759-1139</p>
              </CardContent>
            </Card>
            
            <Card className="border-stone-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 md:hover:-translate-y-3 hover:border-carabiner-300 bg-gradient-to-br from-white to-stone-50/50 group">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="relative inline-block mb-4 md:mb-6">
                  <MapPin className="h-8 w-8 md:h-10 md:w-10 text-carabiner-500 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-carabiner-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-semibold text-stone-800 mb-2 md:mb-3 text-lg md:text-xl">Location</h3>
                <p className="text-stone-600 text-base md:text-lg">Cary, NC</p>
              </CardContent>
            </Card>
          </div>

          <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-sunset-500 via-carabiner-600 to-forest-600 hover:from-sunset-600 hover:via-carabiner-700 hover:to-forest-700 text-white shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group px-8 md:px-10 py-3 md:py-4 text-base md:text-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Mountain className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6 relative z-10" />
            <span className="relative z-10">Start the Conversation</span>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-16 bg-gradient-to-r from-stone-800 via-stone-900 to-stone-800 text-stone-200 relative z-10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <div className="flex justify-center items-center space-x-2 md:space-x-3 mb-4 md:mb-6">
            <div className="relative">
              <Anchor className="h-6 w-6 md:h-8 md:w-8 text-sunset-400" />
              <div className="absolute inset-0 bg-sunset-400/30 rounded-full blur-lg animate-pulse" />
            </div>
            <span className="text-xl md:text-2xl font-display font-semibold">Developer Portfolio</span>
          </div>
          <p className="text-stone-400 text-base md:text-lg">
            © 2024 • Crafted with passion for the climb • Always reaching higher
          </p>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export default Index;
