export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#002746]">
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Grad Zee</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Simplifying graduate school applications with intelligent, accessible, and personalized AI support.
        </p>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-center">AI-Powered Essay Refining</h2>
        <EssayRefiner />
      </section>
    </main>
  );
}