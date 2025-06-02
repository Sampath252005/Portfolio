import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 py-8">
      <div className="container max-w-screen-2xl flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-foreground/60 mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Sampath. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="#" aria-label="Github" className="text-foreground/60 hover:text-primary transition-colors">
            <Github className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="LinkedIn" className="text-foreground/60 hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="Twitter" className="text-foreground/60 hover:text-primary transition-colors">
            <Twitter className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
