import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const skills = [
  {
    category: "Technical Skills",
    items: ["Problem-solving", "Data Analysis", "Coding", "Technical Troubleshooting", "Cybersecurity"],
  },
  {
    category: "AI & Machine Learning",
    items: ["AI Model Training", "Algorithm Refinement", "Pattern Recognition", "Data Quality Management"],
  },
  {
    category: "Project Management",
    items: ["Strategic Planning", "Quality Assurance", "Technical Documentation", "Process Optimization"],
  },
  {
    category: "Software Development",
    items: ["Web Development", "Database Management", "SEO Optimization", "System Integration"],
  },
  {
    category: "Professional Skills",
    items: ["Team Collaboration", "Client Communication", "Process Improvement", "Training & Development"],
  },
]

export default function Skills() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">My Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skillCategory, index) => (
          <Card key={index} className="bg-card">
            <CardHeader>
              <CardTitle>{skillCategory.category}</CardTitle>
              <CardDescription>Key skills and technologies</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                {skillCategory.items.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

