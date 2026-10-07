export const hygraphQueryKeys = {
	aboutMe: () => ["hygraph", "about-me"] as const,
	projects: () => ["hygraph", "projects"] as const,
	project: (slug: string) => ["hygraph", "projects", slug] as const,
};
