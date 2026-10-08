import "server-only";
import {
	GetAboutMeDocument,
	type GetAboutMeQuery,
	type GetAboutMeQueryVariables,
} from "@/graphql/generated/graphql";
import { hygraphClient } from "@/lib/hygraph/server-client";
import { unstable_cache } from "next/cache";

export const getAboutMe = unstable_cache(async () => {
	return (
		await hygraphClient.request<GetAboutMeQuery, GetAboutMeQueryVariables>(
			GetAboutMeDocument
		)
	).blogPage;
}, ["hygraph", "about-me"], { revalidate: 3600 });
