import "dotenv/config";
import type { CodegenConfig } from "@graphql-codegen/cli";

const hygraphApiUrl = process.env.HYGRAPH_API_URL;

if (!hygraphApiUrl) {
	throw new Error("HYGRAPH_API_URL is required.");
}

const config: CodegenConfig = {
	schema: `${hygraphApiUrl}?introspection`,
	documents: ["./src/features/**/*.graphql"],
	generates: {
		"./src/graphql/generated/": {
			preset: "client",
			plugins: [],
			presetConfig: {
				fragmentMasking: false,
			},
		},
	},
};
export default config;
