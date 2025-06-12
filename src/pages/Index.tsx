
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, ArrowRight, Mountain, Anchor, Users, Code, Briefcase, Mail, Phone, MapPin } from 'lucide-react';
import { ProjectModal } from '@/components/ProjectModal';

const Index = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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
    <div className="min-h-screen bg-gradient-to-b from-stone-100 via-stone-50 to-stone-100 overflow-x-hidden relative scroll-smooth">
      {/* Mountain Silhouettes Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
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

      {/* Climbing Holds - Floating Animation */}
      <div className="fixed inset-0 pointer-events-none z-5">
        {/* Climbing Hold 1 */}
        <div 
          className="absolute w-6 h-6 bg-sunset-500 rounded-full opacity-70 animate-pulse"
          style={{
            top: '20%',
            left: '8%',
            animationDelay: '0s',
          }}
        />
        
        {/* Climbing Hold 2 */}
        <div 
          className="absolute w-8 h-8 bg-carabiner-600 rounded-lg opacity-60 animate-pulse"
          style={{
            top: '40%',
            left: '12%',
            animationDelay: '1s',
          }}
        />

        {/* Climbing Hold 3 */}
        <div 
          className="absolute w-5 h-5 bg-forest-500 rounded-full opacity-80 animate-pulse"
          style={{
            top: '65%',
            left: '6%',
            animationDelay: '2s',
          }}
        />

        {/* Climbing Hold 4 */}
        <div 
          className="absolute w-7 h-7 bg-stone-600 rounded-lg opacity-50 animate-pulse"
          style={{
            top: '25%',
            right: '8%',
            animationDelay: '0.5s',
          }}
        />

        {/* Climbing Hold 5 */}
        <div 
          className="absolute w-6 h-6 bg-sunset-400 rounded-full opacity-70 animate-pulse"
          style={{
            top: '55%',
            right: '10%',
            animationDelay: '1.5s',
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-6 bg-gradient-to-br from-stone-50/90 via-transparent to-stone-100/90">
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          {/* Floating rocks decoration */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-stone-300 rounded-full opacity-15 animate-pulse" style={{ animationDelay: '0s' }} />
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-stone-400 rounded-full opacity-25 animate-pulse" style={{ animationDelay: '2s' }} />
          
          <div className="animate-fade-in-up space-y-8">
            <h1 className="text-7xl md:text-9xl font-display font-bold text-stone-800 leading-tight relative">
              <span className="block">Scaling New</span>
              <span className="block text-transparent bg-gradient-to-r from-sunset-500 via-carabiner-600 to-forest-600 bg-clip-text animate-pulse">
                Heights
              </span>
              {/* Climbing chalk dust effect */}
              <div className="absolute -inset-6 bg-white/10 rounded-full blur-3xl animate-pulse opacity-50" />
            </h1>
            
            <p className="text-xl md:text-3xl text-stone-600 max-w-4xl mx-auto leading-relaxed font-medium">
              Computer Science Student & Software Engineer crafting digital experiences 
              that reach new summits of innovation and impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Button size="lg" className="bg-gradient-to-r from-forest-600 to-forest-700 hover:from-forest-700 hover:to-forest-800 text-white shadow-xl transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg">
                <Briefcase className="mr-3 h-6 w-6" />
                View My Work
              </Button>
              <Button variant="outline" size="lg" className="border-stone-300 text-stone-700 hover:bg-stone-100 shadow-xl transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg">
                <Mail className="mr-3 h-6 w-6" />
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
        
        {/* Moved Scroll Indicator to bottom right corner */}
        <div className="absolute bottom-8 right-8 animate-bounce z-20">
          <div className="flex flex-col items-center text-stone-600 space-y-2">
            <div className="relative">
              <Anchor className="h-8 w-8 text-carabiner-600" />
              <div className="absolute inset-0 bg-carabiner-400/30 rounded-full blur-lg animate-pulse" />
            </div>
            <ArrowDown className="h-4 w-4 animate-bounce" />
            <span className="text-sm font-medium">Explore</span>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 relative z-10 bg-gradient-to-b from-transparent via-stone-50/50 to-transparent" id="experience">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 relative">
            {/* Section decorative elements */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 w-24 h-1.5 bg-gradient-to-r from-sunset-500 to-carabiner-600 rounded-full" />
            
            <h2 className="text-5xl md:text-6xl font-display font-bold text-stone-800 mb-6 relative leading-tight">
              The Ascent
              <div className="absolute -inset-4 bg-gradient-to-r from-sunset-500/10 to-carabiner-600/10 rounded-xl blur-2xl" />
            </h2>
            <p className="text-2xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Each role has been a stepping stone, building skills and experience 
              one challenge at a time.
            </p>
          </div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={`flex flex-col lg:flex-row gap-12 items-start animate-fade-in-up group`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="lg:w-1/3">
                  <div className="text-right lg:pr-12 space-y-2">
                    <h3 className="text-3xl font-display font-semibold text-stone-800 group-hover:text-sunset-600 transition-colors duration-300 leading-tight">
                      {exp.role}
                    </h3>
                    <p className="text-xl text-sunset-600 font-medium">{exp.company}</p>
                    <p className="text-lg text-stone-500 font-medium">{exp.period}</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="w-5 h-5 bg-gradient-to-br from-carabiner-500 to-carabiner-600 rounded-full border-4 border-white shadow-xl group-hover:scale-125 transition-transform duration-300">
                    <div className="absolute inset-0 bg-carabiner-400 rounded-full animate-ping opacity-20" />
                  </div>
                  {index < experiences.length - 1 && (
                    <div className="absolute top-5 left-2.5 w-0.5 h-24 bg-gradient-to-b from-stone-300 to-stone-400" />
                  )}
                </div>

                <div className="lg:w-2/3">
                  <Card className="border-stone-200 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group-hover:border-sunset-300 bg-gradient-to-br from-white to-stone-50/50">
                    <CardContent className="p-8">
                      <p className="text-stone-700 mb-6 leading-relaxed text-lg">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {exp.skills.map((skill) => (
                          <Badge 
                            key={skill} 
                            variant="secondary" 
                            className="bg-gradient-to-r from-forest-100 to-forest-50 text-forest-800 hover:from-forest-200 hover:to-forest-100 transition-all duration-300 transform hover:scale-105 px-4 py-2 text-sm font-medium"
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
      <section className="py-32 bg-gradient-to-b from-stone-100/50 via-stone-50/30 to-stone-100/50 relative z-10" id="projects">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 w-24 h-1.5 bg-gradient-to-r from-forest-500 to-sunset-600 rounded-full" />
            
            <h2 className="text-5xl md:text-6xl font-display font-bold text-stone-800 mb-6 relative leading-tight">
              Peak Projects
              <div className="absolute -inset-4 bg-gradient-to-r from-forest-500/10 to-sunset-600/10 rounded-xl blur-2xl" />
            </h2>
            <p className="text-2xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Challenging builds that pushed my limits and expanded my horizons.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <Card 
                key={project.id}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-6 border-stone-200 animate-fade-in-up bg-gradient-to-br from-white via-stone-50/50 to-white hover:border-sunset-300 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Card glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-sunset-500/5 to-carabiner-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="relative z-10 pb-4">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>
                  <CardTitle className="text-2xl font-display text-stone-800 group-hover:text-sunset-600 transition-colors duration-300 leading-tight">
                    {project.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 pt-0">
                  <p className="text-stone-600 mb-6 leading-relaxed text-lg">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-sm hover:bg-stone-100 transition-colors duration-300 px-3 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-sm px-3 py-1">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <Button 
                    onClick={() => setSelectedProject(project)}
                    variant="outline" 
                    size="lg" 
                    className="w-full group-hover:bg-gradient-to-r group-hover:from-sunset-50 group-hover:to-carabiner-50 group-hover:border-sunset-300 transition-all duration-300 transform hover:scale-105 py-3"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 relative z-10 bg-gradient-to-b from-transparent via-stone-50/30 to-stone-100" id="contact">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-20 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 w-24 h-1.5 bg-gradient-to-r from-carabiner-500 to-forest-600 rounded-full" />
            
            <h2 className="text-5xl md:text-6xl font-display font-bold text-stone-800 mb-6 relative leading-tight">
              Ready to Climb Together?
              <div className="absolute -inset-4 bg-gradient-to-r from-carabiner-500/10 to-forest-600/10 rounded-xl blur-2xl" />
            </h2>
            <p className="text-2xl text-stone-600 max-w-4xl mx-auto leading-relaxed">
              Whether you're looking to scale new heights or tackle challenging problems, 
              let's connect and explore opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mb-16">
            <Card className="border-stone-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:border-sunset-300 bg-gradient-to-br from-white to-stone-50/50 group">
              <CardContent className="p-8 text-center">
                <div className="relative inline-block mb-6">
                  <Mail className="h-10 w-10 text-sunset-500 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-sunset-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-semibold text-stone-800 mb-3 text-xl">Email</h3>
                <p className="text-stone-600 text-lg">hello@developer.climb</p>
              </CardContent>
            </Card>
            
            <Card className="border-stone-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:border-forest-300 bg-gradient-to-br from-white to-stone-50/50 group">
              <CardContent className="p-8 text-center">
                <div className="relative inline-block mb-6">
                  <Phone className="h-10 w-10 text-forest-500 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-forest-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-semibold text-stone-800 mb-3 text-xl">Phone</h3>
                <p className="text-stone-600 text-lg">+1 (555) 123-CLIMB</p>
              </CardContent>
            </Card>
            
            <Card className="border-stone-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:border-carabiner-300 bg-gradient-to-br from-white to-stone-50/50 group">
              <CardContent className="p-8 text-center">
                <div className="relative inline-block mb-6">
                  <MapPin className="h-10 w-10 text-carabiner-500 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-carabiner-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-semibold text-stone-800 mb-3 text-xl">Location</h3>
                <p className="text-stone-600 text-lg">Mountain View, CA</p>
              </CardContent>
            </Card>
          </div>

          <Button size="lg" className="bg-gradient-to-r from-sunset-500 via-carabiner-600 to-forest-600 hover:from-sunset-600 hover:via-carabiner-700 hover:to-forest-700 text-white shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group px-10 py-4 text-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Mountain className="mr-3 h-6 w-6 relative z-10" />
            <span className="relative z-10">Start the Conversation</span>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gradient-to-r from-stone-800 via-stone-900 to-stone-800 text-stone-200 relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <div className="relative">
              <Anchor className="h-8 w-8 text-sunset-400" />
              <div className="absolute inset-0 bg-sunset-400/30 rounded-full blur-lg animate-pulse" />
            </div>
            <span className="text-2xl font-display font-semibold">Developer Portfolio</span>
          </div>
          <p className="text-stone-400 text-lg">
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
