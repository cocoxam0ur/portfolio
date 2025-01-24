import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:space-x-12">
      <div className="md:w-3/5 mb-8 md:mb-0">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Courtney Sidock</h1>
        <p className="text-xl mb-6">A software engineer specializing in AI development and data analysis.</p>
        <p className="mb-6">
                  Welcome to my portfolio! I'm passionate about creating innovative solutions using
                  artificial intelligence and machine learning technologies. With a strong background
                  in software engineering, I strive to develop cutting-edge applications that push
                  the boundaries of what's possible in AI.
        </p>
        <Button asChild>
          <a href="/Courtney_Sidock_Resume.pdf" target="_blank" rel="noopener noreferrer">
            Download Resume
          </a>
        </Button>
      </div>
      <div className="md:w-2/5 flex justify-end">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/447777640_3114627232003006_691966969031334842_n.jpg-c0mim8Tnd2YNaPAAUmmXrZ7nh7yOP8.jpeg"
          alt="Courtney Sidock"
          width={300}
          height={300}
          className="rounded-full shadow-lg"
          priority
        />
      </div>
    </div>
  )
}

