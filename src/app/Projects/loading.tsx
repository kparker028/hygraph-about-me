import { LoaderCircle } from "lucide-react";

export default function ProjectsLoading() {
	return (
		<div className='flex min-h-48 items-center justify-center' role='status'>
			<LoaderCircle aria-hidden='true' className='size-6 animate-spin' />
			<span className='sr-only'>Loading projects</span>
		</div>
	);
}
