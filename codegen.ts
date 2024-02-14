import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	schema:
		"https://api-us-west-2.hygraph.com/v2/clijay9gg0b9r01uiate67quk/master?introspection", // Update with your introspection URL
	documents: ["./src/graphql/**/*.ts", "!./src/graphql/generated/*.ts"],
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
