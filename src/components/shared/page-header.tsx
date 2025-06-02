
import { BackButton } from "@/components/shared/back-button";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  showBackButton?: boolean;
};

export function PageHeader({ title, subtitle, showBackButton = true }: PageHeaderProps) {
  return (
    <div className="py-12 md:py-16 bg-secondary/50 border-b">
      <div className="container">
        {showBackButton && (
          <div className="mb-6 md:mb-8">
            <BackButton />
          </div>
        )}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
