export type ResourcesInfo = {
	page: number;
	per_page: number;
	total: number;
	total_pages: number;
	data: Resource[];
};

export type Resource = {
	id: number;
	name: string;
	year: string;
	color: string;
	pantone_value: string;
};

export type singleResorce = {
	data: Resource;
};
