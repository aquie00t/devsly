export default function HeroSection() {
  return (
    <section className="w-full min-h-screen py-20 text-center px-4 md:px-6 flex flex-col justify-center">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
        Discover & Compare Developer Tools
      </h1>
      <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
        Devsly helps you find the right tech stack by comparing frameworks,
        libraries, databases, and more—all in one place.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <a
          href="#"
          className="px-6 py-3 text-white bg-black rounded-full text-sm font-medium hover:bg-neutral-800 transition"
        >
          Get Started
        </a>
        <a
          href="#"
          className="px-6 py-3 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-100 transition"
        >
          Explore Tools
        </a>
      </div>
    </section>
  );
}
