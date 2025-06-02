import { PageHeader } from "@/components/shared/page-header";
import { BlogPostCard } from "@/components/blog/blog-post-card";
import { blogPostsData } from "@/lib/data";

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="My Blog"
        subtitle="Thoughts, tutorials, and insights on web development, technology, and more."
      />
      <div className="container py-12 md:py-16">
        {blogPostsData.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPostsData.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4">No posts yet!</h2>
            <p className="text-muted-foreground">Check back soon for new articles.</p>
          </div>
        )}
      </div>
    </>
  );
}
