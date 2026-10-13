type RichTextNode = {
	children?: unknown;
	text?: unknown;
	type?: unknown;
};

export type ScopeItem = {
	children: ScopeItem[];
	content: string;
};

const isNode = (value: unknown): value is RichTextNode =>
	Boolean(value) && typeof value === "object";

const getChildren = (node: RichTextNode) =>
	Array.isArray(node.children) ? node.children.filter(isNode) : [];

const getType = (node: RichTextNode) =>
	typeof node.type === "string" ? node.type : "";

const isList = (node: unknown) =>
	isNode(node) &&
	["bulleted-list", "numbered-list", "unordered-list", "ordered-list"].includes(
		getType(node)
	);

const getText = (nodes: RichTextNode[]): string =>
	nodes
		.map((node) => {
			if (typeof node.text === "string") {
				return node.text;
			}

			return getText(getChildren(node));
		})
		.join(" ")
		.replace(/\s+/g, " ")
		.trim();

const toScopeItem = (node: RichTextNode): ScopeItem => {
	const children = getChildren(node);
	const contentNodes = children.filter((child) => !isList(child));
	const nestedLists = children.filter(isList);

	return {
		content: getText(contentNodes),
		children: nestedLists.flatMap((list) =>
			getChildren(list).map(toScopeItem)
		),
	};
};

const getBlocks = (raw: unknown) => (isNode(raw) ? getChildren(raw) : []);

export const getScopeItems = (
	scope: ReadonlyArray<{ raw: unknown }>
): ScopeItem[] =>
	scope.flatMap(({ raw }) => {
		const blocks = getBlocks(raw);
		const items: ScopeItem[] = [];

		for (let index = 0; index < blocks.length; index += 1) {
			const block = blocks[index];

			if (isList(block)) {
				items.push(...getChildren(block).map(toScopeItem));
				continue;
			}

			const nestedLists: RichTextNode[] = [];

			while (isList(blocks[index + 1])) {
				index += 1;
				nestedLists.push(blocks[index]);
			}

			const item = {
				content: getText([block]),
				children: nestedLists.flatMap((list) =>
					getChildren(list).map(toScopeItem)
				),
			};

			if (item.content || item.children.length > 0) {
				items.push(item);
			}
		}

		return items;
	});
