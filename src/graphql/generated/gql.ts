/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n\tquery GetAboutMe {\n\t\tblogPage(where: { slug: \"about-me\" }) {\n\t\t\ttitle\n\t\t\tdescription\n\t\t\tslug\n\t\t\theroImage {\n\t\t\t\turl\n\t\t\t}\n\t\t}\n\t}\n": types.GetAboutMeDocument,
    "\n\tquery GetProjectBySlug($slug: String!) {\n\t\tproject(where: { slug: $slug }) {\n\t\t\tprojectName\n\t\t\tdescription\n\t\t\tprojectImage {\n\t\t\t\turl\n\t\t\t}\n\t\t}\n\t}\n": types.GetProjectBySlugDocument,
    "\n\tquery GetProjects {\n\t\tprojects {\n\t\t\tprojectName\n\t\t\tdescription\n\t\t\tprojectImage {\n\t\t\t\turl\n\t\t\t}\n\t\t\tslug\n\t\t}\n\t}\n": types.GetProjectsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetAboutMe {\n\t\tblogPage(where: { slug: \"about-me\" }) {\n\t\t\ttitle\n\t\t\tdescription\n\t\t\tslug\n\t\t\theroImage {\n\t\t\t\turl\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetAboutMe {\n\t\tblogPage(where: { slug: \"about-me\" }) {\n\t\t\ttitle\n\t\t\tdescription\n\t\t\tslug\n\t\t\theroImage {\n\t\t\t\turl\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetProjectBySlug($slug: String!) {\n\t\tproject(where: { slug: $slug }) {\n\t\t\tprojectName\n\t\t\tdescription\n\t\t\tprojectImage {\n\t\t\t\turl\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetProjectBySlug($slug: String!) {\n\t\tproject(where: { slug: $slug }) {\n\t\t\tprojectName\n\t\t\tdescription\n\t\t\tprojectImage {\n\t\t\t\turl\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetProjects {\n\t\tprojects {\n\t\t\tprojectName\n\t\t\tdescription\n\t\t\tprojectImage {\n\t\t\t\turl\n\t\t\t}\n\t\t\tslug\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetProjects {\n\t\tprojects {\n\t\t\tprojectName\n\t\t\tdescription\n\t\t\tprojectImage {\n\t\t\t\turl\n\t\t\t}\n\t\t\tslug\n\t\t}\n\t}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;