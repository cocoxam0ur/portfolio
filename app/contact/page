import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Contact Me</h1>
      <Card>
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
          <CardDescription>Feel free to reach out through any of these channels</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Button asChild variant="outline">
            <a href="mailto:courtneysidock@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              courtneysidock@gmail.com
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="tel:2313296519">
              <Phone className="mr-2 h-4 w-4" />
              (231) 329-6519
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="https://www.linkedin.com/in/courtney-sidock" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn Profile
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="https://github.com/cocoxam0ur" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub Profile
            </a>
          </Button>
          <Button asChild variant="outline">
            <a
              href="https://maps.google.com/?q=2168 Lincoln Park Drive, Norton Shores, MI 49441"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin className="mr-2 h-4 w-4" />
              Norton Shores, MI
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

