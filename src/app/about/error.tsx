"use client";

export default function AboutError({ reset }: { reset: () => void }) {
	return (
		<main className='flex min-h-48 flex-col items-center justify-center gap-4 p-6'>
			<p>Unable to load this page.</p>
			<button className='rounded-md border px-3 py-2' onClick={reset} type='button'>
				Try again
			</button>
		</main>
	);
}
