import { LoaderCircle } from "lucide-react";

const Loading = () => (
	<div
		className='flex min-h-48 items-center justify-center'
		role='status'
	>
		<LoaderCircle aria-hidden='true' className='size-6 animate-spin' />
		<span className='sr-only'>Loading about</span>
	</div>
);

export default Loading;
