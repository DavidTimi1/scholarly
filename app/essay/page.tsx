

import { useState } from "react";
import CorrectionAction from "../actions/correction_action";

export default function EssayRefiner() {
  const [draft, setDraft] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  async function refineEssay() {
    setLoading(true);
    // Simulated AI call - replace with actual GenAI API call
    const response = await CorrectionAction({
      details: draft,
    });
    if (!response.success) {
    const data = await response.json();
    setSuggestions(data.suggestions);
    setLoading(false);
  }

  return (
    <div className="space-y-6">
      <textarea
        className="w-full border border-blue-300 p-4 rounded-lg min-h-[200px] focus:outline-blue-500"
        placeholder="Paste your SOP draft here..."
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
      ></textarea>
      <button
        onClick={refineEssay}
        className="bg-blue-700 text-white py-2 px-6 rounded hover:bg-blue-800"
        disabled={loading || !draft.trim()}
      >
        {loading ? "Refining..." : "Get Suggestions"}
      </button>
      <div className="bg-blue-50 p-4 rounded-md">
        <h3 className="font-semibold mb-2 text-blue-800">Suggestions:</h3>
        {suggestions.length === 0 ? (
          <p className="text-blue-500">No suggestions yet.</p>
        ) : (
          <ul className="list-disc pl-6 space-y-2 text-blue-900">
            {suggestions.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
