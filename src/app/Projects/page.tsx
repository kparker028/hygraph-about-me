import { getProjects } from "@/features/projects/get-projects";
import styles from "@/features/projects/projects.module.css";
import Link from "next/link";

export const revalidate = 3600;

export default async function ProjectsPage() {
	const projects = await getProjects();

	return (
		<div className={styles.section}>
			{projects?.map((project) => (
				<Link href={`/projects/${project.slug}`} key={project.slug}>
					<div
						className={styles.container}
						style={
							project.projectImage?.url
								? { backgroundImage: `url(${project.projectImage.url})` }
								: undefined
						}
					>
						<div className={styles.titleContainer}>
							<h2 className={styles.title}>{project.projectName}</h2>
							<p className={styles.description}>{project.description}</p>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
}
