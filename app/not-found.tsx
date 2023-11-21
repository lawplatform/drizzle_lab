import Link from 'next/link';
import { Construction } from 'lucide-react';

export default function NotFound() {
	return (
		<main className="flex h-full flex-col items-center justify-center gap-2">
			<Construction className="w-24" />
			<h2 className="text-xl font-semibold">404 Not Found</h2>
			<p>에러가 발생했습니다</p>
			<Link
				href="/"
				className="mt-4 rounded-md bg-red-400 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
			>
				돌아가기
			</Link>
		</main>
	);
}
