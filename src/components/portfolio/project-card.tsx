import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105">
      <div className="relative aspect-video">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover"
          data-ai-hint={project.imageHint}
        />
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-xl text-primary">{project.title}</CardTitle>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-foreground/70">
          {project.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="gap-2">
        {project.liveUrl && (
          <Button asChild variant="outline" size="sm" className="flex-1">
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </Link>
          </Button>
        )}
        {project.sourceUrl && (
          <Button asChild variant="outline" size="sm" className="flex-1">
            <Link href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> Source Code
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
