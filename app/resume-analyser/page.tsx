"use client";

import axios from "axios";
import { useState } from "react";
import Button from "../ui/button";
import { Correction } from "../lib/definitions";


const classCodes = {
	"critical": "bg-red-100 text-red-800",
	"warning": "bg-yellow-100 text-yellow-800",
	"awesome": "bg-green-100 text-green-800",
	"bad": "bg-red-100 text-red-800",
}

export default function ResumeAnalyzer() {
	const [fileName, setFileName] = useState("");
	const [feedback, setFeedback] = useState<Correction[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
		const file = event.target.files?.[0];

		if (file) {
			setFileName(file.name);
			setLoading(true);
			setError(null);

			const fd = new FormData();
			fd.append('doc', file)

			axios.post('/api/upload', fd)
			.then(res => {
				console.log(res.data);
				setFeedback(res.data.corrections as Correction[])
			})
			.catch(err => {
				console.error(err);
				setError(err.response.data);
			})
			.finally(() => { setLoading(false) })
		}
	}

	return (
		<main className="py-16 px-6 max-w-4xl mx-auto">
		  <h1 className="text-3xl font-semibold mb-4 text-center">CV/Resume Enhancement</h1>
			<div className="space-y-6">
				<p className="text-lg text-center">
					Upload your CV or resume and get instant feedback on how to improve it.
					<br />
					We analyze your document and provide suggestions for better formatting, grammar, and content.
				</p>
				<p className="text-lg text-center text-blue-600">
					Supported formats: PDF, DOC, DOCX, TXT
				</p>

				<p className="text-lg text-center text-red-600">{error}</p>

				<input
					id="file-upload"
					type="file"
					accept=".pdf,.doc,.docx"
					onChange={handleFileUpload}
					className="block w-full text-blue-700 border border-blue-300 rounded p-2 cursor-pointer hover:border-blue-500"
				/>

				{
					fileName && error? (
						<Button
							type="button"
							className="bg-blue-600 text-white hover:bg-blue-700"
							onClick={retryAnalysis}
						> Retry
						</Button>
					): (
						<p className="text-blue-700 font-medium">Analyzing: {fileName}</p>
					)
				}

				{loading ? (
					<div className="text-blue-600 animate-pulse">Analyzing document...</div>
				) : (
					feedback.length > 0 && (
						<div className="bg-blue-50 p-4 rounded-md space-y-2">
							<h3 className="text-lg font-semibold text-blue-800 mb-2">Feedback:</h3>
							{feedback.map((item, index) => (
								<p
									key={index}
									className={`text-sm flex items-center px-3 py-2 rounded-md bg-blue-200 border border-blue-400 text-gray-800`}
								>
									<span className="flex-1">
										{item.description}
										<span className={`font-semibold ${classCodes[item.degree]} rounded-xl px-2 py-1 text-xs ml-2`}>
											{item.degree[0].toUpperCase() + item.degree.slice(1)}
										</span>
									</span>


								</p>
							))}
						</div>
					)
				)}
			</div>
		</main>
	);

	function retryAnalysis(){
		const inputElement = document.getElementById("file-upload") as HTMLInputElement;
		handleFileUpload({target: inputElement} as React.ChangeEvent<HTMLInputElement>);
	}
}
