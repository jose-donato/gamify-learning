import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/app/_components/ui/avatar";
import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/app/_components/ui/card";
import { Progress } from "@/app/_components/ui/progress";
import {
	Award,
	Book,
	ChevronRight,
	FileUp,
	HelpCircle,
	Plus,
	Users,
} from "lucide-react";
import Link from "next/link";

export default function Component() {
	return (
		<div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
			{/* Header */}
			<header className="px-4 py-3 bg-white dark:bg-gray-800 shadow-sm">
				<div className="flex justify-between items-center">
					<h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
						BlogMaster
					</h1>
					<Avatar>
						<AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
						<AvatarFallback>U</AvatarFallback>
					</Avatar>
				</div>
			</header>

			{/* Main Content */}
			<main className="flex-1 overflow-y-auto p-4">
				{/* Progress Section */}
				<Card className="mb-4 bg-white dark:bg-gray-800 shadow-sm">
					<CardHeader className="pb-2">
						<CardTitle className="text-gray-900 dark:text-gray-100">
							Your Progress
						</CardTitle>
					</CardHeader>
					<CardContent>
						<Progress value={65} className="mb-2" />
						<div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
							<span>Level 7</span>
							<span>{65}% to Level 8</span>
						</div>
					</CardContent>
				</Card>

				{/* Quick Actions */}
				<div className="grid grid-cols-2 gap-4 mb-4">
					<Link href="/question" passHref>
						<Button className="h-20 flex flex-col items-center justify-center w-full bg-indigo-600 hover:bg-indigo-700 text-white">
							<HelpCircle className="mb-1" />
							Take Blog Quiz
						</Button>
					</Link>
					<Link href="/upload" passHref>
						<Button
							variant="outline"
							className="h-20 flex flex-col items-center justify-center w-full border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900"
						>
							<FileUp className="mb-1" />
							Add Blog Post
						</Button>
					</Link>
				</div>

				{/* Recent Topics */}
				<h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
					Recent Blog Posts
				</h2>
				<div className="space-y-2 mb-4">
					{[
						"10 Tips for Effective Blogging",
						"How to Optimize Your Blog for SEO",
						"The Art of Writing Engaging Headlines",
					].map((topic) => (
						<Card
							key={topic}
							className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
						>
							<span className="text-gray-900 dark:text-gray-100">{topic}</span>
							<ChevronRight className="text-gray-400" />
						</Card>
					))}
				</div>

				{/* Friends Activity */}
				<h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
					Friends Activity
				</h2>
				<Card className="bg-white dark:bg-gray-800">
					<CardContent className="p-3">
						<div className="flex items-center space-x-2 mb-2">
							<Avatar className="w-8 h-8">
								<AvatarImage
									src="/placeholder.svg?height=32&width=32"
									alt="Friend"
								/>
								<AvatarFallback>F</AvatarFallback>
							</Avatar>
							<span className="flex-1 text-gray-900 dark:text-gray-100">
								Alex completed "Python Basics"
							</span>
							<Badge className="bg-indigo-600 text-white">+50 XP</Badge>
						</div>
						<div className="flex items-center space-x-2">
							<Avatar className="w-8 h-8">
								<AvatarImage
									src="/placeholder.svg?height=32&width=32"
									alt="Friend"
								/>
								<AvatarFallback>F</AvatarFallback>
							</Avatar>
							<span className="flex-1 text-gray-900 dark:text-gray-100">
								Sam started "JavaScript Fundamentals"
							</span>
							<Badge
								variant="outline"
								className="text-indigo-600 border-indigo-600"
							>
								New
							</Badge>
						</div>
					</CardContent>
				</Card>
			</main>

			{/* Navigation */}
			<nav className="flex justify-around p-2 bg-white dark:bg-gray-800 shadow-lg">
				<Button
					variant="ghost"
					className="flex flex-col items-center text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
				>
					<Book className="mb-1" />
					<span className="text-xs">Read</span>
				</Button>
				<Button
					variant="ghost"
					className="flex flex-col items-center text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
				>
					<Users className="mb-1" />
					<span className="text-xs">Friends</span>
				</Button>
				<Button
					variant="ghost"
					className="flex flex-col items-center text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
				>
					<Award className="mb-1" />
					<span className="text-xs">Achievements</span>
				</Button>
				<Link href="/upload-content" passHref>
					<Button
						variant="ghost"
						className="flex flex-col items-center text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
					>
						<Plus className="mb-1" />
						<span className="text-xs">New Post</span>
					</Button>
				</Link>
			</nav>
		</div>
	);
}
