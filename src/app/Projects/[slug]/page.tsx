// const ExpandedProject = ({ params }: { params: { id: string } }) => {
// 	return <h1> ID: {params.id}</h1>;
// };

// export default ExpandedProject;

// TODO let's add codegen :)
// 1. https://the-guild.dev/graphql/codegen Read these docs and follow along
//    Then you will have your queries typed
import { getProjectDataWTypes } from "@/Fetching/projectsData";
import Image from "next/image";

const ExpandedProject = async ({ params }: { params: { slug: string } }) => {
	const project = await getProjectDataWTypes(params);
	console.log(project);
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
				alignItems: "center",
				width: "100%",
				padding: "24px 36px",
				rowGap: "12px",
			}}
		>
			<Image
				src={project?.projectImage?.url ?? ""}
				alt='#'
				width={600}
				height={600}
				loading='lazy'
				style={{ borderRadius: "16px" }}
			/>
			<h1>{project?.projectName}</h1>
			<h2 style={{ color: "#e2e2e2", textAlign: "center" }}>
				{project?.description}
			</h2>
		</div>
	);
};

export default ExpandedProject;
