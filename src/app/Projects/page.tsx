import React from "react";
import { getProjectsData } from "@/Fetching/projectsData";
import styles from "../../styles/project.module.css";
import Link from "next/link";

const Projects = async () => {
	const projects = await getProjectsData();

	return (
		<div className={styles.section}>
			{projects.map((project, index) => {
				console.log(project.slug, "projectSlug");
				return (
					<Link href='/Projects/[slug]' as={`/Projects/${project.slug}`}>
						<div
							className={styles.container}
							key={index}
							style={{ backgroundImage: `url(${project.projectImage.url})` }}
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
