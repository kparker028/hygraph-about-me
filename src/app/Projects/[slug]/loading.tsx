import { LoaderCircle } from "lucide-react";

export default function ProjectLoading() {
	return (
		<div className='flex min-h-48 items-center justify-center' role='status'>
			<LoaderCircle aria-hidden='true' className='size-6 animate-spin text-primary' />
			<span className='sr-only'>Loading project</span>
		</div>
	);
}
