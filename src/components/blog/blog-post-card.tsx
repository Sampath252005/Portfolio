import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CalendarDays, UserCircle } from "lucide-react";

type BlogPostCardProps = {
  post: BlogPost;
};

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-video">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            data-ai-hint={post.imageHint}
          />
        </div>
      </Link>
      <CardHeader>
        <Link href={`/blog/${post.slug}`}>
          <CardTitle className="font-headline text-xl text-primary hover:underline">
            {post.title}
          </CardTitle>
        </Link>
        <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1">
            <div className="flex items-center gap-1">
                <CalendarDays className="h-3.5 w-3.5" />
                <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
                <UserCircle className="h-3.5 w-3.5" />
                <span>{post.author}</span>
            </div>
        </div>
        <div className="flex flex-wrap gap-1 pt-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-foreground/70 line-clamp-3">
          {post.excerpt}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="link" className="text-accent p-0 h-auto">
          <Link href={`/blog/${post.slug}`}>
            Read More <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
