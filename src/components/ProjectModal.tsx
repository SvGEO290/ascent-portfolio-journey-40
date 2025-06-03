
import { X, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  image: string;
  fullDescription: string;
  challenges: string;
  outcome: string;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-stone-200 p-6 rounded-t-2xl">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-5xl">{project.image}</div>
              <div>
                <h2 className="text-3xl font-display font-bold text-stone-800">
                  {project.name}
                </h2>
                <p className="text-stone-600 mt-1">{project.description}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-stone-500 hover:text-stone-700"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-forest-100 text-forest-800">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Full Description */}
          <Card className="border-stone-200">
            <CardHeader>
              <CardTitle className="text-xl text-stone-800 flex items-center">
                📖 The Story
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-stone-700 leading-relaxed">
                {project.fullDescription}
              </p>
            </CardContent>
          </Card>

          {/* Challenges */}
          <Card className="border-stone-200">
            <CardHeader>
              <CardTitle className="text-xl text-stone-800 flex items-center">
                ⛰️ Challenges Conquered
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-stone-700 leading-relaxed">
                {project.challenges}
              </p>
            </CardContent>
          </Card>

          {/* Outcome */}
          <Card className="border-stone-200">
            <CardHeader>
              <CardTitle className="text-xl text-stone-800 flex items-center">
                🏆 Summit Reached
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-stone-700 leading-relaxed">
                {project.outcome}
              </p>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button className="flex-1 bg-forest-600 hover:bg-forest-700">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Live Project
            </Button>
            <Button variant="outline" className="flex-1 border-stone-300">
              <Github className="mr-2 h-4 w-4" />
              View Source Code
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
