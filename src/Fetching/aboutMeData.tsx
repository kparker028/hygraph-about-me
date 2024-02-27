import { graphqlClient } from "@/graphql/client";
import { GetAboutMeDocument } from "@/graphql/generated/graphql";

export const GetAboutMe = async () =>
	await graphqlClient.request(GetAboutMeDocument);
