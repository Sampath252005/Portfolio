import { PageHeader } from "@/components/shared/page-header";
import { ProjectCard } from "@/components/portfolio/project-card";
import { projectsData } from "@/lib/data";

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        title="My Projects"
        subtitle="A selection of projects I've worked on, demonstrating my skills and passion for development."
      />
      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}
