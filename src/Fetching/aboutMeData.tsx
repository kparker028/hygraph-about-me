import { graphqlClient } from "@/graphql/client";
import {
	GetAboutMeDocument,
	GetAboutMeQuery,
	GetAboutMeQueryVariables,
} from "@/graphql/generated/graphql";

export const getAboutMe = async () =>
	(
		await graphqlClient.request<GetAboutMeQuery, GetAboutMeQueryVariables>(
			GetAboutMeDocument
		)
	).blogPage;
