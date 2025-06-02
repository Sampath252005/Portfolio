import type { Skill } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type SkillCardProps = {
  skill: Skill;
};

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <Card className="flex flex-col h-full transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-medium font-headline text-primary">
          {skill.name}
        </CardTitle>
        <skill.Icon className="h-6 w-6 text-accent" />
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <CardDescription className="text-sm text-foreground/70 mb-4">
          {skill.description}
        </CardDescription>
        <div>
          <Progress value={skill.level} className="w-full h-2 [&>div]:bg-accent" aria-label={`${skill.name} proficiency ${skill.level}%`} />
          <p className="text-xs text-muted-foreground mt-1">{skill.level}% Proficient</p>
        </div>
      </CardContent>
    </Card>
  );
}
