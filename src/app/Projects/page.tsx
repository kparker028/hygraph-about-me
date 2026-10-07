import React from "react";
import { getProjects } from "@/Fetching/projectsData";
import styles from "../../styles/project.module.css";
import Link from "next/link";

const Projects = async () => {
	const projects = await getProjects();

	return (
		<div className={styles.section}>
			{projects?.map((project) => {
				return (
					<Link
						href='/Projects/[slug]'
						as={`/Projects/${project.slug}`}
						key={project.slug}
					>
						<div
							className={styles.container}
							style={{ backgroundImage: `url(${project?.projectImage?.url})` }}
						>
							<div className={styles.titleContainer}>
								<h2 className={styles.title}>{project.projectName} </h2>
								<p className={styles.description}> {project.description} </p>
							</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default Projects;
