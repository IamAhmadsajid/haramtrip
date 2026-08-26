// src/app/(extra)/blog/page.tsx
import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { blogPosts } from "@/data/blog-posts";

export default function BlogPage() {
  return (
    <main>
      <PageHeader 
        title="Haram Trip Blog" 
        subtitle="Guides, Tips & News"
        description="Read the latest news, guides, and tips for your upcoming Umrah and Hajj journeys."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="bg-[#f8f5f0] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {blogPosts.map((post) => (
              <article 
                key={post.slug} 
                className="group flex flex-col rounded-2xl border border-[#e3dfda] bg-white overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Image */}
                <Link href={`/blog/${post.slug}`} className="relative block h-56 overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.05]" 
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </Link>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-muted-foreground rounded-full"></span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="font-serif text-xl font-bold leading-tight text-[#2d201d] mb-3">
                    <Link href={`/blog/${post.slug}`} className="hover:text-brand-secondary transition-colors">
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-sm leading-[1.6] text-[#4f4a47] flex-1">
                    {post.excerpt}
                  </p>

                  <Link 
                    href={`/blog/${post.slug}`} 
                    className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-brand-primary hover:text-brand-secondary transition-colors"
                  >
                    Read More 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}

          </div>
        </div>
      </section>
    </main>
  );
}