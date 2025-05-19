// This file (_app.js) is used to initialize pages.
// It's a good place to load global CSS like Tailwind.
import '../styles/globals.css'; // Assuming you have a globals.css with Tailwind imports

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
```css
/* styles/globals.css */
/* Import Tailwind CSS directives */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Optional: Add custom global styles */
body {
  font-family: 'Inter', sans-serif; /* Using Inter font */
  background-color: #f8fafc; /* Light background */
  color: #334155; /* Dark gray text */
}
```react
// pages/index.js
// This is the main landing page or dashboard.
import Head from 'next/head';
import Link from 'next/link';
import { Home, FileText, BookOpen, Briefcase, Clock } from 'lucide-react'; // Using lucide-react for icons

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Grad Zee - Simplify Your Grad Application</title>
        <meta name="description" content="AI-powered platform for graduate school applications" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Grad Zee</div>
          <div className="space-x-4">
            <Link href="/" className="text-gray-600 hover:text-blue-600 flex items-center space-x-1">
                <Home size={18} />
                <span>Home</span>
            </Link>
            {/* Add other navigation links here */}
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            Simplifying Graduate School Applications with AI
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Intelligent, accessible, and personalized AI support to guide you through every step.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card: Essay Brainstorming */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <BookOpen size={48} className="text-purple-500 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Essay Brainstorming & Outlining</h2>
            <p className="text-gray-600 mb-4">
              Ideate and structure strong Personal Statements with guided prompts and AI assistance.
            </p>
            <Link href="/essay" className="inline-block bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition duration-200">
                Start Writing
            </Link>
          </div>

          {/* Feature Card: Document Analysis */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <FileText size={48} className="text-teal-500 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Document Analysis & Feedback</h2>
            <p className="text-gray-600 mb-4">
              Upload drafts for AI feedback on clarity, content, and academic alignment.
            </p>
            <Link href="/analyze" className="inline-block bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition duration-200">
                Analyze Document
            </Link>
          </div>

          {/* Feature Card: Resume Enhancer */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <Briefcase size={48} className="text-orange-500 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Resume/CV Enhancer</h2>
            <p className="text-gray-600 mb-4">
              Frame your experiences into impactful academic narratives.
            </p>
            <Link href="/resume" className="inline-block bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition duration-200">
                Enhance Resume
            </Link>
          </div>

           {/* Feature Card: Application Timelines */}
           <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <Clock size={48} className="text-indigo-500 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Interactive Timelines</h2>
            <p className="text-gray-600 mb-4">
              Dynamic schedules that auto-adjust based on your progress and deadlines.
            </p>
            <Link href="/timeline" className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition duration-200">
                View Timeline
            </Link>
          </div>
        </section>
      </main>

      {/* Optional: Footer */}
      <footer className="bg-gray-100 text-center py-6 mt-12">
        <p className="text-gray-600">&copy; 2023 Grad Zee. All rights reserved.</p>
      </footer>
    </div>
  );
}
```react
// pages/essay.js
// Page for Essay Brainstorming and Contextual AI Assistance
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Lightbulb, Edit, Send } from 'lucide-react'; // Icons

export default function EssayPage() {
  const [essayText, setEssayText] = useState('');
  const [aiSuggestions, setAiSuggestions] = useState([]);
  const [outline, setOutline] = useState([]);

  // Placeholder function to simulate fetching AI suggestions
  const fetchAiSuggestions = async (text) => {
    // In a real app, this would be an API call to your backend
    // which then calls the AI model (e.g., Google GenAI).
    console.log("Fetching AI suggestions for:", text);
    // Simulate a delay and some dummy suggestions
    await new Promise(resolve => setTimeout(resolve, 1000));
    setAiSuggestions([
      "Consider adding a specific anecdote here.",
      "Strengthen your thesis statement.",
      "Elaborate on this point with an example.",
    ]);
  };

  // Placeholder function to simulate generating an essay outline
  const generateOutline = async (prompt) => {
     // In a real app, this would be an API call to your backend
    // which then calls the AI model.
    console.log("Generating outline for prompt:", prompt);
    // Simulate a delay and a dummy outline
    await new Promise(resolve => setTimeout(resolve, 1500));
    setOutline([
      { section: "Introduction", points: ["Hook", "Thesis Statement"] },
      { section: "Body Paragraph 1", points: ["Topic Sentence", "Supporting Detail 1", "Supporting Detail 2"] },
      { section: "Conclusion", points: ["Restate Thesis", "Concluding thought"] },
    ]);
  };

  const handleEssayChange = (event) => {
    const text = event.target.value;
    setEssayText(text);
    // Trigger AI suggestions as the user types (with debounce in a real app)
    // fetchAiSuggestions(text); // Uncomment and add debounce for real-time
  };

  const handleGenerateOutline = () => {
    // Use the current essay text or a specific prompt for outline generation
    generateOutline(essayText || "Generate a standard SOP outline.");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Essay Brainstorming - Grad Zee</title>
      </Head>

      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Grad Zee</div>
          <Link href="/" className="text-gray-600 hover:text-blue-600 flex items-center space-x-1">
             <Home size={18} />
             <span>Home</span>
          </Link>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Essay Brainstorming & Writing</h1>

        {/* Outline Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center space-x-2">
            <Lightbulb size={24} className="text-yellow-500" />
            <span>Generate Outline</span>
          </h2>
          <p className="text-gray-600 mb-4">
            Let AI help you structure your essay. Provide a brief idea or click to generate a standard outline.
          </p>
          <div className="flex space-x-4">
             {/* Input for prompt if needed */}
             {/* <input type="text" placeholder="Enter essay topic..." className="flex-grow border rounded-md px-3 py-2" /> */}
            <button
              onClick={handleGenerateOutline}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200 flex items-center space-x-2"
            >
              <Send size={20} />
              <span>Generate Outline</span>
            </button>
          </div>

          {outline.length > 0 && (
            <div className="mt-6 border-t pt-4">
              <h3 className="text-xl font-medium text-gray-700 mb-3">Suggested Outline:</h3>
              <ul className="list-disc list-inside space-y-2">
                {outline.map((section, index) => (
                  <li key={index} className="text-gray-600">
                    <span className="font-semibold">{section.section}:</span> {section.points.join(', ')}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* Essay Writing Area with Contextual AI */}
        <section className="bg-white rounded-lg shadow-md p-6">
           <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center space-x-2">
            <Edit size={24} className="text-blue-500" />
            <span>Write Your Essay</span>
          </h2>
          <p className="text-gray-600 mb-4">
            Write your essay below. AI suggestions will appear contextually as you type.
          </p>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Textarea for writing */}
            <div className="flex-grow">
              <textarea
                className="w-full h-96 p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Start writing your Personal Statement or SOP here..."
                value={essayText}
                onChange={handleEssayChange}
              />
            </div>

            {/* AI Suggestions Sidebar */}
            <div className="w-full md:w-1/3 bg-gray-100 rounded-md p-4">
              <h3 className="text-xl font-medium text-gray-700 mb-3">AI Suggestions:</h3>
              {aiSuggestions.length === 0 ? (
                <p className="text-gray-500 italic">Suggestions will appear here as you write.</p>
              ) : (
                <ul className="space-y-3">
                  {aiSuggestions.map((suggestion, index) => (
                    <li key={index} className="bg-white rounded-md p-3 text-gray-700 text-sm shadow-sm">
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
               {/* Button to manually fetch suggestions (optional) */}
               <button
                onClick={() => fetchAiSuggestions(essayText)}
                className="mt-4 w-full bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-200"
              >
                Get Suggestions Now
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Optional: Footer */}
      <footer className="bg-gray-100 text-center py-6 mt-12">
        <p className="text-gray-600">&copy; 2023 Grad Zee. All rights reserved.</p>
      </footer>
    </div>
  );
}
```react
// pages/analyze.js
// Page for Document Analysis and Feedback Engine
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Upload, FileCheck } from 'lucide-react'; // Icons

export default function AnalyzePage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setAnalysisResult(null); // Clear previous result
  };

  const handleAnalyze = async () => {
    if (!selectedFile) {
      alert('Please select a file first.'); // Using alert for simplicity, use a modal in production
      return;
    }

    setIsLoading(true);
    // In a real app, you would upload the file to your backend
    // and then trigger the AI analysis.
    console.log("Analyzing file:", selectedFile.name);

    // Simulate an API call and AI analysis result
    await new Promise(resolve => setTimeout(resolve, 3000)); // Simulate network delay

    // Dummy analysis result
    const dummyResult = {
      summary: `Analysis complete for "${selectedFile.name}".`,
      feedback: [
        "Consider strengthening your introduction.",
        "Ensure consistent formatting for dates.",
        "Highlight specific achievements with quantifiable results.",
        "Check for grammatical errors and typos.",
      ],
      suggestions: [
        "Add a sentence about your long-term goals.",
        "Expand on your research experience.",
      ]
    };

    setAnalysisResult(dummyResult);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Document Analysis - Grad Zee</title>
      </Head>

       <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Grad Zee</div>
          <Link href="/" className="text-gray-600 hover:text-blue-600 flex items-center space-x-1">
             <Home size={18} />
             <span>Home</span>
          </Link>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Document Analysis & Feedback</h1>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center space-x-2">
            <Upload size={24} className="text-blue-500" />
            <span>Upload Your Document</span>
          </h2>
          <p className="text-gray-600 mb-4">
            Upload your essay, resume, or other application materials for AI feedback.
            Supported formats: .pdf, .doc, .docx, .txt
          </p>
          <input
            type="file"
            onChange={handleFileChange}
            className="mb-4 block w-full text-sm text-gray-500
                       file:mr-4 file:py-2 file:px-4
                       file:rounded-full file:border-0
                       file:text-sm file:font-semibold
                       file:bg-blue-50 file:text-blue-700
                       hover:file:bg-blue-100"
          />
          {selectedFile && (
            <p className="text-gray-700 mb-4">Selected file: <span className="font-semibold">{selectedFile.name}</span></p>
          )}
          <button
            onClick={handleAnalyze}
            disabled={!selectedFile || isLoading}
            className={`px-6 py-2 rounded-md transition duration-200 flex items-center space-x-2 ${
              !selectedFile || isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
          >
            {isLoading ? (
              <>
                <span className="animate-spin inline-block w-4 h-4 border-t-2 border-white rounded-full"></span>
                <span>Analyzing...</span>
              </>
            ) : (
               <>
                <FileCheck size={20} />
                <span>Analyze Document</span>
               </>
            )}
          </button>
        </section>

        {analysisResult && (
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center space-x-2">
              <FileCheck size={24} className="text-green-500" />
              <span>Analysis Results</span>
            </h2>
            <p className="text-gray-600 mb-4">{analysisResult.summary}</p>

            {analysisResult.feedback.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-700 mb-3">Feedback:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {analysisResult.feedback.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
              </div>
            )}

             {analysisResult.suggestions.length > 0 && (
              <div>
                <h3 className="text-xl font-medium text-gray-700 mb-3">Suggestions:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {analysisResult.suggestions.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
              </div>
            )}
          </section>
        )}
      </main>

      {/* Optional: Footer */}
      <footer className="bg-gray-100 text-center py-6 mt-12">
        <p className="text-gray-600">&copy; 2023 Grad Zee. All rights reserved.</p>
      </footer>
    </div>
  );
}
```react
// pages/resume.js
// Page for AI-Driven Resume/CV "Storytelling" Enhancer
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Briefcase, Sparkles } from 'lucide-react'; // Icons

export default function ResumePage() {
  const [resumeText, setResumeText] = useState('');
  const [enhancedText, setEnhancedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleResumeChange = (event) => {
    setResumeText(event.target.value);
  };

  const handleEnhanceResume = async () => {
    if (!resumeText.trim()) {
      alert('Please enter your resume text to enhance.'); // Using alert for simplicity
      return;
    }

    setIsLoading(true);
    // In a real app, send the resume text to your backend
    // for AI processing to enhance the "storytelling".
    console.log("Enhancing resume text...");

    // Simulate an API call and AI enhancement result
    await new Promise(resolve => setTimeout(resolve, 3000)); // Simulate network delay

    // Dummy enhanced text
    const dummyEnhanced = resumeText
      .split('\n')
      .map(line => {
        if (line.startsWith('- ')) {
          // Simple simulation: add a phrase to bullet points
          return `- Successfully leveraged skills to ${line.substring(2)}`;
        }
        return line;
      })
      .join('\n') + "\n\n-- AI Enhancement Suggestions: Focus on quantifying achievements where possible.";

    setEnhancedText(dummyEnhanced);
    setIsLoading(false);
  };

  return (
     <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Resume Enhancer - Grad Zee</title>
      </Head>

       <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Grad Zee</div>
          <Link href="/" className="text-gray-600 hover:text-blue-600 flex items-center space-x-1">
             <Home size={18} />
             <span>Home</span>
          </Link>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Resume/CV Storytelling Enhancer</h1>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center space-x-2">
            <Briefcase size={24} className="text-orange-500" />
            <span>Enter Your Resume Text</span>
          </h2>
          <p className="text-gray-600 mb-4">
            Paste your resume or CV text below. AI will help you frame your experiences into impactful narratives.
          </p>
          <textarea
            className="w-full h-64 p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Paste your resume text here..."
            value={resumeText}
            onChange={handleResumeChange}
          />
          <button
            onClick={handleEnhanceResume}
            disabled={!resumeText.trim() || isLoading}
            className={`mt-4 px-6 py-2 rounded-md transition duration-200 flex items-center space-x-2 ${
              !resumeText.trim() || isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-orange-600 hover:bg-orange-700 text-white'
            }`}
          >
             {isLoading ? (
              <>
                <span className="animate-spin inline-block w-4 h-4 border-t-2 border-white rounded-full"></span>
                <span>Enhancing...</span>
              </>
            ) : (
               <>
                <Sparkles size={20} />
                <span>Enhance Resume</span>
               </>
            )}
          </button>
        </section>

        {enhancedText && (
          <section className="bg-white rounded-lg shadow-md p-6">
             <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center space-x-2">
              <Sparkles size={24} className="text-yellow-500" />
              <span>Enhanced Resume Text</span>
            </h2>
            <p className="text-gray-600 mb-4">Here is the AI-enhanced version of your resume text:</p>
            <textarea
              className="w-full h-64 p-4 border rounded-md bg-gray-100"
              value={enhancedText}
              readOnly
            />
          </section>
        )}
      </main>

      {/* Optional: Footer */}
      <footer className="bg-gray-100 text-center py-6 mt-12">
        <p className="text-gray-600">&copy; 2023 Grad Zee. All rights reserved.</p>
      </footer>
    </div>
  );
}
```react
// pages/timeline.js
// Page for Interactive AI-Managed Application Timelines
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Clock, Calendar } from 'lucide-react'; // Icons

// Dummy data for timeline events
const initialTimelineEvents = [
  { id: 1, task: 'Research Programs', date: '2023-10-15', completed: true },
  { id: 2, task: 'Prepare for GRE', date: '2023-11-01', completed: false },
  { id: 3, task: 'Draft Personal Statement', date: '2023-11-30', completed: false },
  { id: 4, task: 'Request Letters of Recommendation', date: '2023-12-15', completed: false },
  { id: 5, task: 'Submit Application to Program A', date: '2024-01-05', completed: false },
];

export default function TimelinePage() {
  const [timelineEvents, setTimelineEvents] = useState(initialTimelineEvents);

  // Placeholder function to simulate AI updating the timeline
  const updateTimelineWithAI = async () => {
    // In a real app, this would involve sending user progress,
    // program deadlines, etc., to the AI to get updated tasks/dates.
    console.log("Updating timeline with AI...");
    // Simulate a delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Simulate an AI update (e.g., shifting dates based on progress)
    const updatedEvents = timelineEvents.map(event => {
      if (event.id === 2 && event.completed) {
         // If GRE prep is done, maybe shift essay draft date earlier
         return { ...event, date: '2023-11-20' };
      }
      return event;
    });

    // Simulate adding a new task based on AI suggestion
    if (!updatedEvents.find(e => e.task === 'Follow up on LORs')) {
        updatedEvents.push({ id: 6, task: 'Follow up on LORs', date: '2023-12-20', completed: false });
    }


    setTimelineEvents(updatedEvents.sort((a, b) => new Date(a.date) - new Date(b.date))); // Keep sorted by date
  };

  const handleTaskCompleteToggle = (taskId) => {
    setTimelineEvents(timelineEvents.map(event =>
      event.id === taskId ? { ...event, completed: !event.completed } : event
    ));
    // Trigger AI update after a task is completed (optional, could be periodic)
    // updateTimelineWithAI(); // Uncomment to trigger AI update on toggle
  };

  // Simulate initial AI update on page load
  useEffect(() => {
    updateTimelineWithAI();
  }, []); // Run once on mount

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Application Timeline - Grad Zee</title>
      </Head>

       <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Grad Zee</div>
          <Link href="/" className="text-gray-600 hover:text-blue-600 flex items-center space-x-1">
             <Home size={18} />
             <span>Home</span>
          </Link>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Interactive Application Timeline</h1>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center space-x-2">
            <Calendar size={24} className="text-indigo-500" />
            <span>Your Application Milestones</span>
          </h2>
          <p className="text-gray-600 mb-6">
            This timeline adjusts based on your progress and program deadlines.
          </p>

          <div className="space-y-4">
            {timelineEvents.map(event => (
              <div
                key={event.id}
                className={`flex items-center justify-between p-4 rounded-md shadow-sm ${
                  event.completed ? 'bg-green-100 border-l-4 border-green-500' : 'bg-blue-100 border-l-4 border-blue-500'
                }`}
              >
                <div>
                  <p className={`font-semibold ${event.completed ? 'text-green-800 line-through' : 'text-blue-800'}`}>
                    {event.task}
                  </p>
                  <p className={`text-sm ${event.completed ? 'text-green-600' : 'text-blue-600'}`}>
                    Due: {event.date}
                  </p>
                </div>
                <button
                  onClick={() => handleTaskCompleteToggle(event.id)}
                  className={`px-4 py-1 text-sm rounded-full transition duration-200 ${
                    event.completed ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
                >
                  {event.completed ? 'Mark Incomplete' : 'Mark Complete'}
                </button>
              </div>
            ))}
          </div>

           <button
            onClick={updateTimelineWithAI}
            className="mt-6 px-6 py-2 rounded-md bg-gray-300 text-gray-800 hover:bg-gray-400 transition duration-200 flex items-center space-x-2"
          >
             <Clock size={20} />
             <span>Update Timeline (Simulated AI)</span>
          </button>
        </section>
      </main>

      {/* Optional: Footer */}
      <footer className="bg-gray-100 text-center py-6 mt-12">
        <p className="text-gray-600">&copy; 2023 Grad Zee. All rights reserved.</p>
      </footer>
    </div>
  );
}
