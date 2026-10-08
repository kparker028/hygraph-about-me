import { getProjectBySlug } from "@/features/projects/get-project-by-slug";
import { getProjects } from "@/features/projects/get-projects";
import Image from "next/image";
import { notFound } from "next/navigation";

export const revalidate = 3600;

export default async function ProjectPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const project = await getProjectBySlug({ slug });

	if (!project) {
		notFound();
	}

	return (
		<main className='mx-auto flex w-full max-w-3xl flex-col items-center gap-3 px-6 py-8 text-center'>
			{project.projectImage?.url && (
				<Image
					alt={project.projectName}
					className='rounded-2xl'
					height={600}
					src={project.projectImage.url}
					width={600}
				/>
			)}
			<h1 className='text-3xl font-bold'>{project.projectName}</h1>
			<p className='text-muted-foreground'>{project.description}</p>
		</main>
	);
}
