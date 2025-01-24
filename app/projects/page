import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Globe } from "lucide-react"

const projects = [
  {
    title: "EmotiVoice: Speech Emotion Recognition AI",
    description:
      "Developed an advanced AI model capable of recognizing human emotions through speech analysis, utilizing deep learning and natural language processing techniques.",
    technologies: ["Python", "TensorFlow", "NLP", "Speech Processing", "Deep Learning"],
    github: "https://github.com/cocoxam0ur/emotivoice",
    demo: "https://emotivoice-demo.com",
  },
  {
    title: "EcoTrack: Environmental Monitoring System",
    description:
      "Created a IoT-based system for real-time environmental monitoring, integrating sensors and data analytics to track air quality, water pollution, and climate changes.",
    technologies: ["IoT", "Python", "React", "Node.js", "Data Visualization"],
    github: "https://github.com/cocoxam0ur/ecotrack",
    demo: "https://ecotrack-demo.com",
  },
  {
    title: "CodeMentor AI: Personalized Programming Tutor",
    description:
      "Engineered an AI-powered programming tutor that provides personalized coding lessons, real-time code analysis, and adaptive learning paths for aspiring developers.",
    technologies: ["Machine Learning", "Natural Language Processing", "JavaScript", "Python", "React"],
    github: "https://github.com/cocoxam0ur/codementor-ai",
    demo: "https://codementor-ai-demo.com",
  },
]

export default function Projects() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild variant="outline" size="sm">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 h-4 w-4" />
                  Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
