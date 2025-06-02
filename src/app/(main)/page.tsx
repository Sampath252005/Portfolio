
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="container py-12 md:py-20">
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">
            Hi, I'm Sampath
          </h1>
          <p className="text-lg md:text-xl text-foreground/80">
            A passionate MERN Stack and Next.js developer, crafting seamless and engaging digital experiences. Welcome to my creative canvas where ideas come to life through code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/portfolio">
                View My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
        <div className="relative aspect-square max-w-md mx-auto md:max-w-none">
           <Image
            src="https://placehold.co/600x600.png"
            alt="Sampath - Web Developer"
            width={600}
            height={600}
            className="rounded-lg shadow-2xl object-cover"
            data-ai-hint="developer portrait"
            priority
          />
        </div>
      </section>

      <section className="mt-20 md:mt-32 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
        <p className="text-lg text-foreground/70 max-w-3xl mx-auto mb-12">
          I specialize in building robust and scalable web applications using modern technologies. From dynamic front-ends with React and Next.js to powerful back-ends with Node.js and MongoDB, I cover the full stack.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Frontend Development", description: "Creating responsive and interactive UIs with React, Next.js, HTML, CSS, and Tailwind." },
            { title: "Backend Development", description: "Building secure and efficient server-side applications with Node.js, Express, and databases like MongoDB." },
            { title: "Full-Stack Solutions", description: "Delivering end-to-end web solutions, integrating frontend and backend seamlessly." },
          ].map((service) => (
            <div key={service.title} className="p-6 bg-card rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold mb-2 text-primary">{service.title}</h3>
              <p className="text-sm text-card-foreground/80">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
