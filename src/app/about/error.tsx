"use client";

export default function AboutError({ reset }: { reset: () => void }) {
	return (
		<main className='flex min-h-48 flex-col items-center justify-center gap-4 p-6 text-body'>
			<p>Unable to load this page.</p>
			<button className='rounded-md bg-primary px-3 py-2 text-primary-foreground transition-colors hover:bg-primary-hover' onClick={reset} type='button'>
				Try again
			</button>
		</main>
	);
}
