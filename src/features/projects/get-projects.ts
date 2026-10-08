import "server-only";
import {
	GetProjectsDocument,
	type GetProjectsQuery,
	type GetProjectsQueryVariables,
} from "@/graphql/generated/graphql";
import { hygraphClient } from "@/lib/hygraph/server-client";
import { unstable_cache } from "next/cache";

export const getProjects = unstable_cache(async () => {
	return (
		await hygraphClient.request<GetProjectsQuery, GetProjectsQueryVariables>(
			GetProjectsDocument
		)
	).projects;
}, ["hygraph", "projects"], { revalidate: 3600 });
