import type { ScopeItem } from "../utils/scope";

type TechnicalScopeProps = {
items: ScopeItem[];
};

const ScopeList = ({ items, nested = false }: { items: ScopeItem[]; nested?: boolean }) => (
	<ul
		className={
			nested
				? "mt-2 space-y-1 pl-0"
				: "list-disc space-y-2 pl-5 marker:text-primary"
		}
	>
		{items.map((item, index) => (
			<li
				className={
					nested
						? "relative pl-4 before:absolute before:left-0 before:text-soft-purple before:content-['-']"
						: undefined
				}
				key={`${item.content}-${index}`}
			>
				{item.content}
				{item.children.length > 0 && (
					<ScopeList items={item.children} nested />
				)}
			</li>
		))}
	</ul>
);

export const TechnicalScope = ({ items }: TechnicalScopeProps) => {
	if (items.length === 0) {
		return null;
	}

	return (
		<section className='w-full max-w-2xl rounded-2xl border bg-elevated p-6 text-left shadow-lg shadow-glow/10'>
			<p className='text-sm font-semibold tracking-[0.16em] text-cyan-accent uppercase'>
				Technical Scope
			</p>
			<div className='mt-4 text-body'>
				<ScopeList items={items} />
			</div>
		</section>
	);
};
