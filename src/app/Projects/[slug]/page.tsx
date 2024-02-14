// const ExpandedProject = ({ params }: { params: { id: string } }) => {
// 	return <h1> ID: {params.id}</h1>;
// };

// export default ExpandedProject;

// TODO let's add codegen :)
// 1. https://the-guild.dev/graphql/codegen Read these docs and follow along
//    Then you will have your queries typed
import { getProjectDataWTypes } from "@/Fetching/projectsData";

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
			{/** Change this to use the Image component from next/image */}
			<div
				style={{
					backgroundImage: `url(${project?.projectImage?.url})`,
					width: "600px",
					height: "600px",
					borderRadius: "16px",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			/>
			<h1>{project?.projectName}</h1>
			<h2 style={{ color: "#e2e2e2", textAlign: "center" }}>
				{project?.description}
			</h2>
		</div>
	);
};

export default ExpandedProject;
