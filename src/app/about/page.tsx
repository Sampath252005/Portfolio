import Image from "next/image";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function AboutPage() {
  const personalQualities = [
    "Problem Solver",
    "Lifelong Learner",
    "Detail-Oriented",
    "Team Player",
    "Adaptable",
    "Creative Thinker",
  ];

  return (
    <>
      <PageHeader
        title="About Me"
        subtitle="Learn more about my journey, passion for technology, and what drives me."
      />
      <div className="container py-12 md:py-16">
        <Card className="overflow-hidden shadow-xl">
          <CardContent className="p-0 md:p-8 md:grid md:grid-cols-3 md:gap-12 items-center">
            <div className="md:col-span-1 p-8 md:p-0">
              <Image
                src="https://placehold.co/600x750.png"
                alt="Sampath - Portrait"
                width={600}
                height={750}
                className="rounded-lg shadow-lg object-cover w-full h-auto"
                data-ai-hint="professional portrait"
              />
            </div>
            <div className="md:col-span-2 p-8 md:p-0">
              <h2 className="font-headline text-3xl font-bold text-primary mb-6">
                Sampath - MERN Stack & Next.js Developer
              </h2>
              <div className="space-y-4 text-foreground/80 prose prose-lg max-w-none font-body">
                <p>
                  Hello! I'm Sampath, a dedicated and enthusiastic web developer with a strong foundation in the MERN stack (MongoDB, Express.js, React, Node.js) and Next.js. My journey into web development began with a fascination for how technology can solve real-world problems and create impactful digital experiences.
                </p>
                <p>
                  I thrive on turning complex ideas into elegant, user-friendly applications. My expertise spans across the entire development lifecycle, from conceptualization and design to deployment and maintenance. I'm particularly passionate about building responsive, performant, and scalable web solutions that not only meet but exceed user expectations.
                </p>
                <p>
                  With a keen eye for detail and a commitment to writing clean, maintainable code, I continuously explore new technologies and methodologies to enhance my skills and deliver cutting-edge products. I believe in the power of collaboration and am always eager to learn from and contribute to a team environment.
                </p>
                <p>
                  Beyond coding, I enjoy exploring new tech trends, contributing to open-source projects, and engaging with the developer community. My goal is to leverage my skills to create innovative solutions that make a positive difference.
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="font-headline text-2xl font-semibold text-primary mb-4">Core Strengths</h3>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3">
                  {personalQualities.map((quality) => (
                    <li key={quality} className="flex items-center text-foreground/80">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 shrink-0" />
                      {quality}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
