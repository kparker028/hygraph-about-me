import React, { useState } from "react";
import type { GetStaticProps } from "next";
import { getProjectsData, ProjectType } from "@/Fetching/projectsData";
import styles from "../src/styles/project.module.css";

type ProjectsProps = {
	projects: ProjectType[];
};

const Projects = (props: ProjectsProps) => {
	const { projects } = props;

	const [hoverStates, setHoverStates] = useState(
		new Array(projects.length).fill(false)
	);

	// const [, setSelectedIndex] = useState(0);

	const handleMouseEnter = (index: number) => {
		setHoverStates((prevStates) => {
			const updatedStates = [...prevStates].map(
				(_hoverState, i) => index === i
			);
			return updatedStates;
		});
	};
	const handleMouseLeave = (index: number) => {
		setHoverStates((prevStates) => {
			const updatedStates = [...prevStates].map(
				(_hoverState, i) => index === i
			);
			return updatedStates;
		});
	};

	return (
		<div className={styles.section}>
			{projects.map((project, index) => {
				return (
					<div
						className={styles.container}
						key={index}
						style={{ backgroundImage: `url(${project.projectImage.url})` }}
					>
						<div
							className={styles.titleContainer}
							onMouseEnter={() => handleMouseEnter(index)}
							onMouseLeave={() => handleMouseLeave(index)}
							style={{
								backgroundColor: hoverStates[index] ? "#ffffff1c" : "#00000087",
							}}
						>
							<h2 className={styles.title}>{project.projectName} </h2>
							<p className={styles.description}> {project.description} </p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export const getStaticProps: GetStaticProps<ProjectsProps> = getProjectsData;

export default Projects;
