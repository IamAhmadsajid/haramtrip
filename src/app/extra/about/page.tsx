export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-bold text-foreground mb-6">About Haram Trip</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-muted-foreground">
          Haram Trip is a UK-based travel agency specializing in Umrah and Hajj packages. 
          With years of experience, we provide tailored, spiritual journeys with a focus on 
          comfort, reliability, and exceptional customer service.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
        <p className="text-muted-foreground">
          To make the holy pilgrimage accessible and stress-free for Muslims across the UK, 
          ensuring every detail is taken care of so you can focus on your worship.
        </p>
      </div>
    </main>
  );
}