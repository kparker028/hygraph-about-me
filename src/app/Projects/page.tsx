import React from "react";
import { getProjects } from "@/Fetching/projectsData";
import styles from "../../styles/project.module.css";
import Link from "next/link";

const Projects = async () => {
	const data = await getProjects();

	return (
		<div className={styles.section}>
			{data.projects?.map((project, index) => {
				return (
					<Link href='/Projects/[slug]' as={`/Projects/${project.slug}`}>
						<div
							className={styles.container}
							key={index}
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
