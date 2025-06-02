import Image from "next/image";
import { blogPostsData } from "@/lib/data";
import { PageHeader } from "@/components/shared/page-header";
import { HarmonyWithNatureContent } from "@/components/blog/blog-post-content"; // Specific content component
import { Badge } from "@/components/ui/badge";
import { CalendarDays, UserCircle } from "lucide-react";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPostsData.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <PageHeader title={post.title} />
      <article className="container py-12 md:py-16 max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden mb-6 shadow-lg">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              data-ai-hint={post.imageHint}
              priority
            />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <UserCircle className="h-4 w-4" />
              <span>By {post.author}</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </div>
        
        {/* Conditionally render content. For now, only one specific post exists. */}
        {post.slug === "understanding-harmony-with-nature" ? (
          <HarmonyWithNatureContent />
        ) : (
          <div className="prose prose-lg lg:prose-xl max-w-none font-body text-foreground/80">
            <p>Content for this blog post is not yet available.</p>
          </div>
        )}
        
      </article>
    </>
  );
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPostsData.find((p) => p.slug === params.slug);
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }
  return {
    title: `${post.title} | Sampath's Blog`,
    description: post.excerpt,
  };
}
