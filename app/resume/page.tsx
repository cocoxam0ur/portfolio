import { Button } from "@/components/ui/button"

export default function Resume() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Resume</h1>
      <p className="mb-4">
        Here you can download my full resume to learn more about my professional experience and qualifications.
      </p>
      <Button asChild>
        <a href="/Courtney_Sidock_Resume.pdf" download>
          Download My Resume
        </a>
      </Button>
    </div>
  )
}

