// src/app/(extra)/blog/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";
import { CtaSection } from "@/components/cta-section";
import { ArrowLeft } from "lucide-react";

// 1. SEO: Generate static params at build time
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// 2. SEO: Generate dynamic metadata for each post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

// 3. The Page Component
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <article>
        {/* Header Image Area - Updated to match dynamic PageHeader */}
        <header className="relative w-full h-[60vh] min-h-[400px] md:h-[70vh] md:min-h-[500px] flex items-end justify-start overflow-hidden -mt-[88px] border-b border-border">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          
          {/* Dynamic Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-white via-white/80 to-transparent dark:from-black dark:via-black/70 dark:to-transparent transition-colors duration-300" />
          
          <div className="relative z-10 mx-auto max-w-4xl w-full px-4 sm:px-6 pt-[150px] md:pt-[200px] pb-12 md:pb-16 text-left flex flex-col items-start">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground dark:text-white/80 hover:text-brand-secondary mb-4 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground dark:text-white leading-tight [text-shadow:_0_2px_15px_rgba(0,0,0,0.8)] mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 text-xs text-muted-foreground dark:text-white/70 font-medium [text-shadow:_0_2px_10px_rgba(0,0,0,0.8)]">
              <span>{post.date}</span>
              <span className="w-1 h-1 bg-border dark:bg-white/50 rounded-full"></span>
              <span>{post.readTime}</span>
              <span className="w-1 h-1 bg-border dark:bg-white/50 rounded-full"></span>
              <span>By {post.author}</span>
            </div>
          </div>
        </header>

        {/* Content Area - Updated for Dark Mode compatibility */}
        <div className="bg-background py-16 sm:py-20 border-b border-border">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="space-y-5">
              {post.content.map((block, index) => {
                // Render Headings
                if (block.startsWith('## ')) {
                  return (
                    <h2 key={index} className="font-serif text-2xl sm:text-3xl font-bold text-foreground mt-10 mb-2">
                      {block.replace('## ', '')}
                    </h2>
                  );
                }
                
                // Render Tables as UI Cards
                if (block.includes('\n') && block.startsWith('**')) {
                  const lines = block.split('\n');
                  const title = lines[0].replace(/\*\*/g, '');
                  return (
                    <div key={index} className="my-8 p-6 rounded-2xl bg-muted/50 border border-border shadow-sm">
                      <h3 className="font-serif text-lg font-bold text-foreground mb-4 pb-3 border-b border-border">
                        {title}
                      </h3>
                      <ul className="space-y-3">
                        {lines.slice(1).map((line, i) => {
                          const content = line.replace('• ', '');
                          const parts = content.split(':');
                          return (
                            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <span className="text-brand-secondary mt-1">•</span>
                              <span>
                                <strong className="text-foreground">{parts[0]}:</strong>
                                {parts.slice(1).join(':')}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                }

                // Render standard paragraphs
                return (
                  <p key={index} className="text-base sm:text-lg leading-[1.8] text-foreground/80">
                    {block}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </article>

      {/* Reusable CTA */}
      <CtaSection 
        title="Ready to Start Your Journey?"
        description="Let our experts handle the details so you can focus on your spiritual preparation."
      />
    </main>
  );
}