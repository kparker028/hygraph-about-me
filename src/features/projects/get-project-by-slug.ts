import "server-only";
import {
	GetProjectBySlugDocument,
	type GetProjectBySlugQuery,
	type GetProjectBySlugQueryVariables,
} from "@/graphql/generated/graphql";
import { hygraphClient } from "@/lib/hygraph/server-client";
import { unstable_cache } from "next/cache";

export function getProjectBySlug(variables: GetProjectBySlugQueryVariables) {
	return unstable_cache(
		async () =>
			(
				await hygraphClient.request<
					GetProjectBySlugQuery,
					GetProjectBySlugQueryVariables
				>(GetProjectBySlugDocument, variables)
			).project,
		["hygraph", "projects", variables.slug],
		{ revalidate: 3600 }
	)();
}
