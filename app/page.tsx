import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#002746]">
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Grad Zee</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Simplifying graduate school applications with intelligent, accessible, and personalized AI support.
        </p>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-4">
          <h2 className="text-4xl font-bold text-blue-700">AI-Powered Essay Refining</h2>
          <p className="text-lg text-[#002746]">
            As you write, Grad Zee provides embedded suggestions that improve clarity, coherence, and impact — no chat interface required. Real-time feedback helps you refine your Statement of Purpose or Personal Statement with ease.
          </p>
          <Link href="/essay-refiner" className="inline-block mt-4 bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800">
            Try the Essay Refiner
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
        <div className="flex-1 space-y-4">
          <h2 className="text-4xl font-bold text-blue-700">CV / Resume Storytelling Enhancement</h2>
          <p className="text-lg text-[#002746]">
            Upload your resume and receive AI-driven insights that transform your experiences into compelling academic narratives. Grad Zee highlights weaknesses, suggests improvements, and celebrates strengths with clear color-coded feedback.
          </p>
          <Link href="/resume-analyser" className="inline-block mt-4 bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800">
            Analyze Your Resume
          </Link>
        </div>
      </section>
    </main>
  );
}