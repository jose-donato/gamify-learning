"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";

type Answer = {
	id: string;
	text: string;
};

type Question = {
	id: string;
	text: string;
	answers: Answer[];
	correctAnswerId: string;
};

export default function AnswerQuestion() {
	const [currentQuestion, setCurrentQuestion] = useState<Question>({
		id: "1",
		text: "What is the primary purpose of a blog post introduction?",
		answers: [
			{ id: "a", text: "To summarize the entire post" },
			{ id: "b", text: "To hook the reader and provide context" },
			{ id: "c", text: "To list all the topics covered in the post" },
			{ id: "d", text: "To showcase the author's writing style" },
		],
		correctAnswerId: "b",
	});

	const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
	const [isAnswered, setIsAnswered] = useState(false);
	const [isCorrect, setIsCorrect] = useState(false);

	const handleSubmit = () => {
		if (selectedAnswer) {
			setIsAnswered(true);
			setIsCorrect(selectedAnswer === currentQuestion.correctAnswerId);
		}
	};

	const handleNext = () => {
		// In a real app, you'd fetch the next question here
		setSelectedAnswer(null);
		setIsAnswered(false);
	};

	return (
		<div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
			<header className="px-4 py-3 bg-white dark:bg-gray-800 shadow">
				<div className="flex items-center">
					<Link href="/" passHref>
						<Button variant="ghost" size="icon" className="mr-2">
							<ArrowLeft className="h-6 w-6" />
						</Button>
					</Link>
					<h1 className="text-xl font-bold">Blog Post Quiz</h1>
				</div>
			</header>

			<main className="flex-1 p-4">
				<Card className="max-w-2xl mx-auto">
					<CardHeader>
						<CardTitle>{currentQuestion.text}</CardTitle>
					</CardHeader>
					<CardContent>
						<RadioGroup
							value={selectedAnswer || ""}
							onValueChange={setSelectedAnswer}
						>
							{currentQuestion.answers.map((answer) => (
								<div
									key={answer.id}
									className="flex items-center space-x-2 space-y-2"
								>
									<RadioGroupItem
										value={answer.id}
										id={answer.id}
										disabled={isAnswered}
									/>
									<Label htmlFor={answer.id}>{answer.text}</Label>
								</div>
							))}
						</RadioGroup>
					</CardContent>
					<CardFooter className="flex flex-col items-stretch">
						{!isAnswered ? (
							<Button
								onClick={handleSubmit}
								disabled={!selectedAnswer}
								className="w-full"
							>
								Submit Answer
							</Button>
						) : (
							<div className="space-y-4 w-full">
								<div
									className={`p-4 rounded-lg ${isCorrect ? "bg-green-100 dark:bg-green-900" : "bg-red-100 dark:bg-red-900"}`}
								>
									{isCorrect ? (
										<div className="flex items-center text-green-700 dark:text-green-300">
											<CheckCircle2 className="mr-2" />
											Correct! Great job!
										</div>
									) : (
										<div className="flex items-center text-red-700 dark:text-red-300">
											<XCircle className="mr-2" />
											Incorrect. The correct answer was:{" "}
											{
												currentQuestion.answers.find(
													(a) => a.id === currentQuestion.correctAnswerId,
												)?.text
											}
										</div>
									)}
								</div>
								<Button onClick={handleNext} className="w-full">
									Next Question
								</Button>
							</div>
						)}
					</CardFooter>
				</Card>
			</main>
		</div>
	);
}
