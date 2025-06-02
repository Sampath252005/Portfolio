import { PageHeader } from "@/components/shared/page-header";
import { SkillCard } from "@/components/skills/skill-card";
import { skillsData } from "@/lib/data";

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        title="My Expertise"
        subtitle="A showcase of my technical skills and tools I use to build modern web applications."
      />
      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillsData.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </>
  );
}
