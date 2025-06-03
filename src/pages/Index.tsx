
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, ArrowRight, Mountain, Anchor, Users, Code, Briefcase, Mail, Phone, MapPin } from 'lucide-react';
import { ClimbingCharacter } from '@/components/ClimbingCharacter';
import { ProjectModal } from '@/components/ProjectModal';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      id: 1,
      role: "Senior Software Engineer",
      company: "TechClimb Solutions",
      period: "2023 - Present",
      description: "Leading full-stack development initiatives and mentoring junior developers. Architected scalable microservices that improved system performance by 40%.",
      skills: ["React", "Node.js", "AWS", "TypeScript"]
    },
    {
      id: 2,
      role: "Product Engineering Intern",
      company: "Summit Innovations",
      period: "Summer 2022",
      description: "Collaborated with product teams to build user-centric features. Implemented A/B testing framework that increased user engagement by 25%.",
      skills: ["Python", "Django", "PostgreSQL", "Docker"]
    },
    {
      id: 3,
      role: "Software Development Intern",
      company: "BaseCase Technologies",
      period: "Summer 2021",
      description: "Developed automated testing suites and contributed to CI/CD pipeline improvements. Reduced deployment time by 50%.",
      skills: ["Java", "Spring Boot", "Jenkins", "Git"]
    }
  ];

  const projects = [
    {
      id: 1,
      name: "ClimbTracker Pro",
      description: "A comprehensive climbing route tracking app with social features and route recommendations.",
      technologies: ["React Native", "Firebase", "Node.js", "Express"],
      image: "🧗‍♂️",
      fullDescription: "ClimbTracker Pro started as a personal project to solve the problem of tracking climbing progress across different crags. The challenge was creating an intuitive interface that worked both online and offline, since many climbing areas have poor cell coverage. I implemented a sophisticated caching system and conflict resolution for when users sync their data later. The app now has over 5,000 active users and has been featured in Climbing Magazine.",
      challenges: "Offline data synchronization, GPS accuracy in remote areas, performance optimization for older devices",
      outcome: "5,000+ active users, 4.8-star rating, featured in climbing publications"
    },
    {
      id: 2,
      name: "EcoRoute Optimizer",
      description: "Machine learning algorithm to optimize delivery routes for reduced carbon footprint.",
      technologies: ["Python", "TensorFlow", "FastAPI", "PostgreSQL"],
      image: "🌱",
      fullDescription: "EcoRoute Optimizer was born from a hackathon where we wanted to tackle climate change through technology. The biggest challenge was balancing multiple optimization criteria: delivery time, fuel consumption, traffic patterns, and vehicle capacity. I developed a custom neural network that learns from historical delivery data to predict optimal routes. The algorithm considers real-time traffic, weather conditions, and vehicle specifications.",
      challenges: "Multi-objective optimization, real-time data integration, scalability for large fleets",
      outcome: "30% reduction in fuel consumption, implemented by 3 logistics companies"
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
    <div className="min-h-screen bg-stone-50 overflow-x-hidden relative">
      {/* Climbing Character */}
      <ClimbingCharacter scrollY={scrollY} />

      {/* Background Mountain Layers */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-mountain-gradient opacity-20"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a8a29e' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4">
        <div className="max-w-4xl mx-auto text-center z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-display font-bold text-stone-800 mb-6 text-shadow">
              Scaling New
              <span className="block text-transparent bg-gradient-to-r from-sunset-500 to-carabiner-600 bg-clip-text">
                Heights
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Computer Science Student & Software Engineer crafting digital experiences 
              that reach new summits of innovation and impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-forest-600 hover:bg-forest-700 text-white">
                <Briefcase className="mr-2 h-5 w-5" />
                View My Work
              </Button>
              <Button variant="outline" size="lg" className="border-stone-300 text-stone-700 hover:bg-stone-100">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center text-stone-600">
              <Anchor className="h-8 w-8 mb-2 animate-rope-swing" />
              <ArrowDown className="h-4 w-4" />
              <span className="text-sm mt-2">Scroll to climb</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 relative z-10" id="experience">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-800 mb-4">
              The Ascent
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Each role has been a stepping stone, building skills and experience 
              one challenge at a time.
            </p>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={`flex flex-col md:flex-row gap-8 items-start animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="md:w-1/3">
                  <div className="text-right md:pr-8">
                    <h3 className="text-2xl font-display font-semibold text-stone-800">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-sunset-600 font-medium">{exp.company}</p>
                    <p className="text-stone-500">{exp.period}</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="w-4 h-4 bg-carabiner-500 rounded-full border-4 border-white shadow-lg"></div>
                  {index < experiences.length - 1 && (
                    <div className="absolute top-4 left-2 w-0.5 h-20 bg-stone-300"></div>
                  )}
                </div>

                <div className="md:w-2/3">
                  <Card className="border-stone-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <p className="text-stone-700 mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge 
                            key={skill} 
                            variant="secondary" 
                            className="bg-forest-100 text-forest-800 hover:bg-forest-200"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-stone-100/50 relative z-10" id="projects">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-800 mb-4">
              Peak Projects
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Challenging builds that pushed my limits and expanded my horizons.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-stone-200 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="text-4xl mb-4">{project.image}</div>
                  <CardTitle className="text-xl font-display text-stone-800 group-hover:text-sunset-600 transition-colors">
                    {project.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <Button 
                    onClick={() => setSelectedProject(project)}
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-sunset-50 group-hover:border-sunset-300 transition-colors"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative z-10" id="contact">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-800 mb-4">
              Ready to Climb Together?
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Whether you're looking to scale new heights or tackle challenging problems, 
              let's connect and explore opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-stone-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 text-sunset-500 mx-auto mb-4" />
                <h3 className="font-semibold text-stone-800 mb-2">Email</h3>
                <p className="text-stone-600">hello@developer.climb</p>
              </CardContent>
            </Card>
            
            <Card className="border-stone-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 text-forest-500 mx-auto mb-4" />
                <h3 className="font-semibold text-stone-800 mb-2">Phone</h3>
                <p className="text-stone-600">+1 (555) 123-CLIMB</p>
              </CardContent>
            </Card>
            
            <Card className="border-stone-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <MapPin className="h-8 w-8 text-carabiner-500 mx-auto mb-4" />
                <h3 className="font-semibold text-stone-800 mb-2">Location</h3>
                <p className="text-stone-600">Mountain View, CA</p>
              </CardContent>
            </Card>
          </div>

          <Button size="lg" className="bg-gradient-to-r from-sunset-500 to-carabiner-600 hover:from-sunset-600 hover:to-carabiner-700 text-white">
            <Mountain className="mr-2 h-5 w-5" />
            Start the Conversation
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-stone-800 text-stone-200 relative z-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Anchor className="h-6 w-6 text-sunset-400" />
            <span className="text-xl font-display font-semibold">Developer Portfolio</span>
          </div>
          <p className="text-stone-400">
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
