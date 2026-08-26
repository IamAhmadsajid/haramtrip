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
// Note: params is now a Promise in Next.js 15
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
// Note: params is now a Promise in Next.js 15, so we must await it
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  // If post doesn't exist, show 404
  if (!post) {
    notFound();
  }

  return (
    <main>
      <article>
        {/* Header Image Area */}
        {/* Header Image Area */}
        {/* Added -mt-[88px] to pull it under the navbar, aligned to bottom left */}
        <header className="relative w-full h-[70vh] min-h-[500px] flex items-end overflow-hidden -mt-[88px]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/80 to-transparent" />
          
          {/* Changed to items-start and text-left for bottom-left alignment */}
          <div className="relative z-10 mx-auto max-w-4xl w-full px-4 sm:px-6 pb-12 text-left flex flex-col items-start">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white/80 hover:text-brand-secondary mb-4 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-lg">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 mt-4 text-xs text-white/70 font-medium">
              <span>{post.date}</span>
              <span className="w-1 h-1 bg-white/50 rounded-full"></span>
              <span>{post.readTime}</span>
              <span className="w-1 h-1 bg-white/50 rounded-full"></span>
              <span>By {post.author}</span>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="space-y-5">
              {post.content.map((block, index) => {
                // Render Headings
                if (block.startsWith('## ')) {
                  return (
                    <h2 key={index} className="font-serif text-2xl sm:text-3xl font-bold text-[#2d201d] mt-10 mb-2">
                      {block.replace('## ', '')}
                    </h2>
                  );
                }
                
                // Render Tables as UI Cards
                if (block.includes('\n') && block.startsWith('**')) {
                  const lines = block.split('\n');
                  const title = lines[0].replace(/\*\*/g, '');
                  return (
                    <div key={index} className="my-8 p-6 rounded-2xl bg-[#f8f5f0] border border-[#e3dfda] shadow-sm">
                      <h3 className="font-serif text-lg font-bold text-[#2d201d] mb-4 pb-3 border-b border-[#e3dfda]">
                        {title}
                      </h3>
                      <ul className="space-y-3">
                        {lines.slice(1).map((line, i) => {
                          const content = line.replace('• ', '');
                          const parts = content.split(':');
                          return (
                            <li key={i} className="flex items-start gap-3 text-sm text-[#4f4a47]">
                              <span className="text-brand-secondary mt-1">•</span>
                              <span>
                                <strong className="text-[#2d201d]">{parts[0]}:</strong>
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
                  <p key={index} className="text-base sm:text-lg leading-[1.8] text-[#302c2a]">
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