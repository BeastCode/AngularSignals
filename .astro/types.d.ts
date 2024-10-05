declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"tutorial": {
"1-Angular/1-Signals/1-Welcome/content.md": {
	id: "1-Angular/1-Signals/1-Welcome/content.md";
  slug: "1-angular/1-signals/1-welcome/content";
  body: string;
  collection: "tutorial";
  data: InferEntrySchema<"tutorial">
} & { render(): Render[".md"] };
"1-Angular/1-Signals/10-Inputs/contend.md": {
	id: "1-Angular/1-Signals/10-Inputs/contend.md";
  slug: "1-angular/1-signals/10-inputs/contend";
  body: string;
  collection: "tutorial";
  data: InferEntrySchema<"tutorial">
} & { render(): Render[".md"] };
"1-Angular/1-Signals/11-Two way Bindings/contend.md": {
	id: "1-Angular/1-Signals/11-Two way Bindings/contend.md";
  slug: "1-angular/1-signals/11-two-way-bindings/contend";
  body: string;
  collection: "tutorial";
  data: InferEntrySchema<"tutorial">
} & { render(): Render[".md"] };
"1-Angular/1-Signals/2-Writable Signals/content.md": {
	id: "1-Angular/1-Signals/2-Writable Signals/content.md";
  slug: "1-angular/1-signals/2-writable-signals/content";
  body: string;
  collection: "tutorial";
  data: InferEntrySchema<"tutorial">
} & { render(): Render[".md"] };
"1-Angular/1-Signals/3-Computed Signals/content.md": {
	id: "1-Angular/1-Signals/3-Computed Signals/content.md";
  slug: "1-angular/1-signals/3-computed-signals/content";
  body: string;
  collection: "tutorial";
  data: InferEntrySchema<"tutorial">
} & { render(): Render[".md"] };
"1-Angular/1-Signals/4-Why Signals/content.md": {
	id: "1-Angular/1-Signals/4-Why Signals/content.md";
  slug: "1-angular/1-signals/4-why-signals/content";
  body: string;
  collection: "tutorial";
  data: InferEntrySchema<"tutorial">
} & { render(): Render[".md"] };
"1-Angular/1-Signals/5-Set vs Update/content.md": {
	id: "1-Angular/1-Signals/5-Set vs Update/content.md";
  slug: "1-angular/1-signals/5-set-vs-update/content";
  body: string;
  collection: "tutorial";
  data: InferEntrySchema<"tutorial">
} & { render(): Render[".md"] };
"1-Angular/1-Signals/6-Signal Types/content.md": {
	id: "1-Angular/1-Signals/6-Signal Types/content.md";
  slug: "1-angular/1-signals/6-signal-types/content";
  body: string;
  collection: "tutorial";
  data: InferEntrySchema<"tutorial">
} & { render(): Render[".md"] };
"1-Angular/1-Signals/7-Effects/content.md": {
	id: "1-Angular/1-Signals/7-Effects/content.md";
  slug: "1-angular/1-signals/7-effects/content";
  body: string;
  collection: "tutorial";
  data: InferEntrySchema<"tutorial">
} & { render(): Render[".md"] };
"1-Angular/1-Signals/8-RxJS toSignal/content.md": {
	id: "1-Angular/1-Signals/8-RxJS toSignal/content.md";
  slug: "1-angular/1-signals/8-rxjs-tosignal/content";
  body: string;
  collection: "tutorial";
  data: InferEntrySchema<"tutorial">
} & { render(): Render[".md"] };
"1-Angular/1-Signals/9-RxJS toObervable/content.md": {
	id: "1-Angular/1-Signals/9-RxJS toObervable/content.md";
  slug: "1-angular/1-signals/9-rxjs-toobervable/content";
  body: string;
  collection: "tutorial";
  data: InferEntrySchema<"tutorial">
} & { render(): Render[".md"] };
"1-Angular/1-Signals/meta.md": {
	id: "1-Angular/1-Signals/meta.md";
  slug: "1-angular/1-signals/meta";
  body: string;
  collection: "tutorial";
  data: InferEntrySchema<"tutorial">
} & { render(): Render[".md"] };
"1-Angular/meta.md": {
	id: "1-Angular/meta.md";
  slug: "1-angular/meta";
  body: string;
  collection: "tutorial";
  data: InferEntrySchema<"tutorial">
} & { render(): Render[".md"] };
"meta.md": {
	id: "meta.md";
  slug: "meta";
  body: string;
  collection: "tutorial";
  data: InferEntrySchema<"tutorial">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../src/content/config.js");
}
