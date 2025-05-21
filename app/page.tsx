import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#002746] text-center">
      <section className="py-20 px-6 text-center w-full min-h-[80lvh] flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold mb-4">🎓GradZee </h1>
        <p className="text-xl max-w-2xl mx-auto">
          Simplifying graduate school applications with intelligent, accessible, and personalized AI support.
        </p>
      </section>

      <section className="py-20 px-6 w-full flex flex-col bg-blue-700 min-h-[70lvh] md:flex-row items-center gap-12">
        <div className="flex-1 space-y-4">
          <h2 className="text-4xl font-bold text-gray-100">AI-Powered Essay Refining</h2>
          <p className="text-lg text-gray-300">
            As you write, Grad Zee provides embedded suggestions that improve clarity, coherence, and impact — no chat interface required. <br />
            Real-time feedback helps you refine your Statement of Purpose or Personal Statement with ease.
          </p>
          <Link href="/essay-refiner" className="inline-block mt-4 text-blue-700 bg-white px-6 py-2 rounded hover:bg-gray-200">
            Try the Essay Refiner
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 w-full mx-auto flex flex-col min-h-[70lvh] md:flex-row-reverse items-center gap-12">
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