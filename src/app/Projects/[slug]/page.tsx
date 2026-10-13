import { getProjectBySlug } from "@/features/projects/get-project-by-slug";
import { TechnicalScope } from "@/features/projects/components/TechnicalScope";
import { getScopeItems } from "@/features/projects/utils/scope";
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

	const scopeItems = getScopeItems(project.scope);

	return (
		<main className='mx-auto flex w-full max-w-3xl flex-col items-center gap-5 px-6 py-12 text-center'>
			{project.projectImage?.url && (
				<Image
					alt={project.projectName}
					className='rounded-2xl border bg-elevated shadow-xl shadow-glow/10'
					height={600}
					src={project.projectImage.url}
					width={600}
				/>
			)}
			<h1 className='text-3xl font-bold text-heading'>{project.projectName}</h1>
			<p className='max-w-2xl text-lg leading-8 text-body'>{project.description}</p>
			<TechnicalScope items={scopeItems} />
		</main>
	);
}
