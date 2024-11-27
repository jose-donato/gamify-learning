"use client";

import { useState } from "react";

import { Button } from "@/app/_components/ui/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/app/_components/ui/card";
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import { Textarea } from "@/app/_components/ui/textarea";
import { ArrowLeft, LinkIcon, Upload } from "lucide-react";
import Link from "next/link";

export default function UploadContent() {
	const [file, setFile] = useState<File | null>(null);
	const [link, setLink] = useState("");

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files[0]) {
			setFile(event.target.files[0]);
		}
	};

	const handleLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setLink(event.target.value);
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		// Here you would handle the file upload or link submission
		console.log("File:", file);
		console.log("Link:", link);
		// Reset form
		setFile(null);
		setLink("");
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
					<h1 className="text-xl font-bold">Add Blog Post</h1>
				</div>
			</header>

			<main className="flex-1 p-4">
				<Card>
					<CardHeader>
						<CardTitle>Add New Blog Post</CardTitle>
					</CardHeader>
					<CardContent>
						<form onSubmit={handleSubmit} className="space-y-4">
							<div>
								<Label htmlFor="file-upload">
									Upload Blog Post (PDF or Markdown)
								</Label>
								<div className="mt-1 flex items-center">
									<Input
										id="file-upload"
										type="file"
										onChange={handleFileChange}
										className="sr-only"
									/>
									<Label
										htmlFor="file-upload"
										className="cursor-pointer bg-white dark:bg-gray-800 py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
									>
										<Upload className="h-4 w-4 inline-block mr-2" />
										Choose file
									</Label>
									<span className="ml-3">
										{file ? file.name : "No file chosen"}
									</span>
								</div>
							</div>

							<div>
								<Label htmlFor="link-input">
									Or Add a Link to Your Blog Post
								</Label>
								<div className="mt-1 flex rounded-md shadow-sm">
									<span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-sm">
										<LinkIcon className="h-4 w-4" />
									</span>
									<Input
										type="url"
										id="link-input"
										placeholder="https://example.com/article"
										value={link}
										onChange={handleLinkChange}
										className="flex-1 rounded-none rounded-r-md"
									/>
								</div>
							</div>

							<div>
								<Label htmlFor="description">
									Blog Post Summary (Optional)
								</Label>
								<Textarea
									id="description"
									placeholder="Add a brief description of the content..."
									className="mt-1"
								/>
							</div>

							<Button type="submit" className="w-full">
								Add Blog Post
							</Button>
						</form>
					</CardContent>
				</Card>
			</main>
		</div>
	);
}
