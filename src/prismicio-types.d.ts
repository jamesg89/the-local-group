// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type PageDocumentDataSlicesSlice =
	| TeamMembersSlice
	| TestimonialsSlice
	| CoreValuesSlice
	| CenteredCtaSlice
	| AwardLogoSectionSlice
	| CtaContentImageSlice
	| MinimalHeaderSlice
	| HeroSlice
	| RichTextSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
	/**
	 * Title field in *Page*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;

	/**
	 * Slice Zone field in *Page*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
	 * Meta Title field in *Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: page.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */;
	meta_title: prismic.KeyTextField;

	/**
	 * Meta Description field in *Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: page.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField;

	/**
	 * Meta Image field in *Page*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<PageDocumentData>,
	'page',
	Lang
>;

/**
 * Item in *Settings → Navigation*
 */
export interface SettingsDocumentDataNavigationItem {
	/**
	 * Link field in *Settings → Navigation*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.navigation[].link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.LinkField;

	/**
	 * Label field in *Settings → Navigation*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.navigation[].label
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	label: prismic.KeyTextField;

	/**
	 * CTA Button field in *Settings → Navigation*
	 *
	 * - **Field Type**: Boolean
	 * - **Placeholder**: *None*
	 * - **Default Value**: false
	 * - **API ID Path**: settings.navigation[].cta_button
	 * - **Documentation**: https://prismic.io/docs/field#boolean
	 */
	cta_button: prismic.BooleanField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
	/**
	 * Site Title field in *Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.site_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	site_title: prismic.KeyTextField;

	/**
	 * Meta Description field in *Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.meta_description
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField;

	/**
	 * OG Image field in *Settings*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.og_image
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	og_image: prismic.ImageField<never>;

	/**
	 * Navigation field in *Settings*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.navigation[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	navigation: prismic.GroupField<Simplify<SettingsDocumentDataNavigationItem>>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
	Simplify<SettingsDocumentData>,
	'settings',
	Lang
>;

export type AllDocumentTypes = PageDocument | SettingsDocument;

/**
 * Item in *AwardLogoSection → Default → Primary → Image With Text*
 */
export interface AwardLogoSectionSliceDefaultPrimaryImageWithTextItem {
	/**
	 * Item Heading field in *AwardLogoSection → Default → Primary → Image With Text*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: award_logo_section.default.primary.image_with_text[].item_heading
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	item_heading: prismic.KeyTextField;

	/**
	 * Logo Image field in *AwardLogoSection → Default → Primary → Image With Text*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: award_logo_section.default.primary.image_with_text[].logo_image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	logo_image: prismic.ImageField<never>;

	/**
	 * Logo Text field in *AwardLogoSection → Default → Primary → Image With Text*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: award_logo_section.default.primary.image_with_text[].logo_texty
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	logo_texty: prismic.KeyTextField;
}

/**
 * Primary content in *AwardLogoSection → Default → Primary*
 */
export interface AwardLogoSectionSliceDefaultPrimary {
	/**
	 * BG Color field in *AwardLogoSection → Default → Primary*
	 *
	 * - **Field Type**: Select
	 * - **Placeholder**: *None*
	 * - **API ID Path**: award_logo_section.default.primary.bg_color
	 * - **Documentation**: https://prismic.io/docs/field#select
	 */
	bg_color: prismic.SelectField<'Slate' | 'White' | 'Gray'>;

	/**
	 * Heading field in *AwardLogoSection → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: award_logo_section.default.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	heading: prismic.KeyTextField;

	/**
	 * Image With Text field in *AwardLogoSection → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: award_logo_section.default.primary.image_with_text[]
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	image_with_text: prismic.GroupField<
		Simplify<AwardLogoSectionSliceDefaultPrimaryImageWithTextItem>
	>;
}

/**
 * Default variation for AwardLogoSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AwardLogoSectionSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<AwardLogoSectionSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *AwardLogoSection*
 */
type AwardLogoSectionSliceVariation = AwardLogoSectionSliceDefault;

/**
 * AwardLogoSection Shared Slice
 *
 * - **API ID**: `award_logo_section`
 * - **Description**: AwardLogoSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AwardLogoSectionSlice = prismic.SharedSlice<
	'award_logo_section',
	AwardLogoSectionSliceVariation
>;

/**
 * Item in *CenteredCta → Default → Primary → Buttons*
 */
export interface CenteredCtaSliceDefaultPrimaryButtonsItem {
	/**
	 * Button Link field in *CenteredCta → Default → Primary → Buttons*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: centered_cta.default.primary.buttons[].button_link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	button_link: prismic.LinkField;

	/**
	 * Link Text field in *CenteredCta → Default → Primary → Buttons*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: centered_cta.default.primary.buttons[].button_label
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	button_label: prismic.KeyTextField;

	/**
	 * CTA field in *CenteredCta → Default → Primary → Buttons*
	 *
	 * - **Field Type**: Boolean
	 * - **Placeholder**: *None*
	 * - **Default Value**: false
	 * - **API ID Path**: centered_cta.default.primary.buttons[].button_cta
	 * - **Documentation**: https://prismic.io/docs/field#boolean
	 */
	button_cta: prismic.BooleanField;
}

/**
 * Primary content in *CenteredCta → Default → Primary*
 */
export interface CenteredCtaSliceDefaultPrimary {
	/**
	 * BG Color field in *CenteredCta → Default → Primary*
	 *
	 * - **Field Type**: Select
	 * - **Placeholder**: *None*
	 * - **Default Value**: Slate
	 * - **API ID Path**: centered_cta.default.primary.bg_color
	 * - **Documentation**: https://prismic.io/docs/field#select
	 */
	bg_color: prismic.SelectField<'Slate' | 'White' | 'Gray', 'filled'>;

	/**
	 * Numbered Item field in *CenteredCta → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: centered_cta.default.primary.number
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	number: prismic.KeyTextField;

	/**
	 * Heading field in *CenteredCta → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: centered_cta.default.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	heading: prismic.KeyTextField;

	/**
	 * Body field in *CenteredCta → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: centered_cta.default.primary.body
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	body: prismic.RichTextField;

	/**
	 * Image field in *CenteredCta → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: centered_cta.default.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;

	/**
	 * Buttons field in *CenteredCta → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: centered_cta.default.primary.buttons[]
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	buttons: prismic.GroupField<Simplify<CenteredCtaSliceDefaultPrimaryButtonsItem>>;
}

/**
 * Default variation for CenteredCta Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CenteredCtaSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<CenteredCtaSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *CenteredCta*
 */
type CenteredCtaSliceVariation = CenteredCtaSliceDefault;

/**
 * CenteredCta Shared Slice
 *
 * - **API ID**: `centered_cta`
 * - **Description**: CenteredCta
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CenteredCtaSlice = prismic.SharedSlice<'centered_cta', CenteredCtaSliceVariation>;

/**
 * Item in *CoreValues → Default → Primary → Core Values*
 */
export interface CoreValuesSliceDefaultPrimaryCoreValuesItem {
	/**
	 * Value Heading field in *CoreValues → Default → Primary → Core Values*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: core_values.default.primary.core_values[].value_heading
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	value_heading: prismic.KeyTextField;

	/**
	 * Value Body field in *CoreValues → Default → Primary → Core Values*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: core_values.default.primary.core_values[].value_body
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	value_body: prismic.RichTextField;
}

/**
 * Primary content in *CoreValues → Default → Primary*
 */
export interface CoreValuesSliceDefaultPrimary {
	/**
	 * Sub Heading field in *CoreValues → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: core_values.default.primary.sub_heading
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	sub_heading: prismic.KeyTextField;

	/**
	 * Heading field in *CoreValues → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: core_values.default.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	heading: prismic.KeyTextField;

	/**
	 * Primary Body field in *CoreValues → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: core_values.default.primary.primary_body
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	primary_body: prismic.RichTextField;

	/**
	 * Core Values field in *CoreValues → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: core_values.default.primary.core_values[]
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	core_values: prismic.GroupField<Simplify<CoreValuesSliceDefaultPrimaryCoreValuesItem>>;
}

/**
 * Default variation for CoreValues Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CoreValuesSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<CoreValuesSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *CoreValues*
 */
type CoreValuesSliceVariation = CoreValuesSliceDefault;

/**
 * CoreValues Shared Slice
 *
 * - **API ID**: `core_values`
 * - **Description**: CoreValues
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CoreValuesSlice = prismic.SharedSlice<'core_values', CoreValuesSliceVariation>;

/**
 * Item in *CtaContentImage → Default → Primary → Buttons*
 */
export interface CtaContentImageSliceDefaultPrimaryButtonsItem {
	/**
	 * Button Link field in *CtaContentImage → Default → Primary → Buttons*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: cta_content_image.default.primary.buttons[].button_link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	button_link: prismic.LinkField;

	/**
	 * Button Label field in *CtaContentImage → Default → Primary → Buttons*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: cta_content_image.default.primary.buttons[].button_label
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	button_label: prismic.KeyTextField;

	/**
	 * Button CTA field in *CtaContentImage → Default → Primary → Buttons*
	 *
	 * - **Field Type**: Boolean
	 * - **Placeholder**: *None*
	 * - **Default Value**: false
	 * - **API ID Path**: cta_content_image.default.primary.buttons[].button_cta
	 * - **Documentation**: https://prismic.io/docs/field#boolean
	 */
	button_cta: prismic.BooleanField;
}

/**
 * Item in *CtaContentImage → Reverse → Primary → Buttons*
 */
export interface CtaContentImageSliceReversePrimaryButtonsItem {
	/**
	 * Button Link field in *CtaContentImage → Reverse → Primary → Buttons*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: cta_content_image.reverse.primary.buttons[].button_link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	button_link: prismic.LinkField;

	/**
	 * Button Label field in *CtaContentImage → Reverse → Primary → Buttons*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: cta_content_image.reverse.primary.buttons[].button_label
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	button_label: prismic.KeyTextField;

	/**
	 * Button CTA field in *CtaContentImage → Reverse → Primary → Buttons*
	 *
	 * - **Field Type**: Boolean
	 * - **Placeholder**: *None*
	 * - **Default Value**: false
	 * - **API ID Path**: cta_content_image.reverse.primary.buttons[].button_cta
	 * - **Documentation**: https://prismic.io/docs/field#boolean
	 */
	button_cta: prismic.BooleanField;
}

/**
 * Primary content in *CtaContentImage → Default → Primary*
 */
export interface CtaContentImageSliceDefaultPrimary {
	/**
	 * BG Color field in *CtaContentImage → Default → Primary*
	 *
	 * - **Field Type**: Select
	 * - **Placeholder**: *None*
	 * - **Default Value**: Slate
	 * - **API ID Path**: cta_content_image.default.primary.bg_color
	 * - **Documentation**: https://prismic.io/docs/field#select
	 */
	bg_color: prismic.SelectField<'Slate' | 'White' | 'Gray', 'filled'>;

	/**
	 * Numbering field in *CtaContentImage → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: 01, 02
	 * - **API ID Path**: cta_content_image.default.primary.numbering
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	numbering: prismic.KeyTextField;

	/**
	 * Heading field in *CtaContentImage → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: cta_content_image.default.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	heading: prismic.RichTextField;

	/**
	 * Body field in *CtaContentImage → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: cta_content_image.default.primary.body
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	body: prismic.RichTextField;

	/**
	 * Buttons field in *CtaContentImage → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: cta_content_image.default.primary.buttons[]
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	buttons: prismic.GroupField<Simplify<CtaContentImageSliceDefaultPrimaryButtonsItem>>;

	/**
	 * Image field in *CtaContentImage → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: cta_content_image.default.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;
}

/**
 * Default variation for CtaContentImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CtaContentImageSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<CtaContentImageSliceDefaultPrimary>,
	never
>;

/**
 * Primary content in *CtaContentImage → Reverse → Primary*
 */
export interface CtaContentImageSliceReversePrimary {
	/**
	 * BG Color field in *CtaContentImage → Reverse → Primary*
	 *
	 * - **Field Type**: Select
	 * - **Placeholder**: *None*
	 * - **Default Value**: Slate
	 * - **API ID Path**: cta_content_image.reverse.primary.bg_color
	 * - **Documentation**: https://prismic.io/docs/field#select
	 */
	bg_color: prismic.SelectField<'Slate' | 'White' | 'Gray', 'filled'>;

	/**
	 * Numbering field in *CtaContentImage → Reverse → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: 01, 02
	 * - **API ID Path**: cta_content_image.reverse.primary.numbering
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	numbering: prismic.KeyTextField;

	/**
	 * Heading field in *CtaContentImage → Reverse → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: cta_content_image.reverse.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	heading: prismic.RichTextField;

	/**
	 * Body field in *CtaContentImage → Reverse → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: cta_content_image.reverse.primary.body
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	body: prismic.RichTextField;

	/**
	 * Buttons field in *CtaContentImage → Reverse → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: cta_content_image.reverse.primary.buttons[]
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	buttons: prismic.GroupField<Simplify<CtaContentImageSliceReversePrimaryButtonsItem>>;

	/**
	 * Image field in *CtaContentImage → Reverse → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: cta_content_image.reverse.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;
}

/**
 * Reverse variation for CtaContentImage Slice
 *
 * - **API ID**: `reverse`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CtaContentImageSliceReverse = prismic.SharedSliceVariation<
	'reverse',
	Simplify<CtaContentImageSliceReversePrimary>,
	never
>;

/**
 * Slice variation for *CtaContentImage*
 */
type CtaContentImageSliceVariation = CtaContentImageSliceDefault | CtaContentImageSliceReverse;

/**
 * CtaContentImage Shared Slice
 *
 * - **API ID**: `cta_content_image`
 * - **Description**: CtaContentImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CtaContentImageSlice = prismic.SharedSlice<
	'cta_content_image',
	CtaContentImageSliceVariation
>;

/**
 * Item in *Hero → Default → Primary → Buttons*
 */
export interface HeroSliceDefaultPrimaryButtonsItem {
	/**
	 * Button Link field in *Hero → Default → Primary → Buttons*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.buttons[].button_link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	button_link: prismic.LinkField;

	/**
	 * Button Label field in *Hero → Default → Primary → Buttons*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.buttons[].button_label
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	button_label: prismic.KeyTextField;

	/**
	 * Button CTA field in *Hero → Default → Primary → Buttons*
	 *
	 * - **Field Type**: Boolean
	 * - **Placeholder**: *None*
	 * - **Default Value**: false
	 * - **API ID Path**: hero.default.primary.buttons[].button_cta
	 * - **Documentation**: https://prismic.io/docs/field#boolean
	 */
	button_cta: prismic.BooleanField;
}

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
	/**
	 * Heading field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	heading: prismic.RichTextField;

	/**
	 * Body field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.body
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	body: prismic.RichTextField;

	/**
	 * Buttons field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.buttons[]
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	buttons: prismic.GroupField<Simplify<HeroSliceDefaultPrimaryButtonsItem>>;

	/**
	 * Image field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<HeroSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<'hero', HeroSliceVariation>;

/**
 * Primary content in *MinimalHeader → Default → Primary*
 */
export interface MinimalHeaderSliceDefaultPrimary {
	/**
	 * Heading field in *MinimalHeader → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: minimal_header.default.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	heading: prismic.KeyTextField;
}

/**
 * Default variation for MinimalHeader Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MinimalHeaderSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<MinimalHeaderSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *MinimalHeader*
 */
type MinimalHeaderSliceVariation = MinimalHeaderSliceDefault;

/**
 * MinimalHeader Shared Slice
 *
 * - **API ID**: `minimal_header`
 * - **Description**: MinimalHeader
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MinimalHeaderSlice = prismic.SharedSlice<'minimal_header', MinimalHeaderSliceVariation>;

/**
 * Primary content in *RichText → Default → Primary*
 */
export interface RichTextSliceDefaultPrimary {
	/**
	 * Content field in *RichText → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: Lorem ipsum...
	 * - **API ID Path**: rich_text.default.primary.content
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<RichTextSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<'rich_text', RichTextSliceVariation>;

/**
 * Item in *TeamMembers → Default → Primary → Team Members*
 */
export interface TeamMembersSliceDefaultPrimaryTeamMembersItem {
	/**
	 * Name field in *TeamMembers → Default → Primary → Team Members*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: team_members.default.primary.team_members[].name
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	name: prismic.KeyTextField;

	/**
	 * Job Title field in *TeamMembers → Default → Primary → Team Members*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: team_members.default.primary.team_members[].job_title
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	job_title: prismic.KeyTextField;

	/**
	 * Contact Info field in *TeamMembers → Default → Primary → Team Members*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: team_members.default.primary.team_members[].contact
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	contact: prismic.KeyTextField;

	/**
	 * Biography field in *TeamMembers → Default → Primary → Team Members*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: team_members.default.primary.team_members[].biography
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	biography: prismic.RichTextField;

	/**
	 * Head Shot field in *TeamMembers → Default → Primary → Team Members*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: team_members.default.primary.team_members[].head_shot
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	head_shot: prismic.ImageField<never>;

	/**
	 * Number field in *TeamMembers → Default → Primary → Team Members*
	 *
	 * - **Field Type**: Number
	 * - **Placeholder**: *None*
	 * - **API ID Path**: team_members.default.primary.team_members[].number
	 * - **Documentation**: https://prismic.io/docs/field#number
	 */
	number: prismic.NumberField;
}

/**
 * Primary content in *TeamMembers → Default → Primary*
 */
export interface TeamMembersSliceDefaultPrimary {
	/**
	 * Team Members field in *TeamMembers → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: team_members.default.primary.team_members[]
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	team_members: prismic.GroupField<Simplify<TeamMembersSliceDefaultPrimaryTeamMembersItem>>;
}

/**
 * Default variation for TeamMembers Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TeamMembersSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<TeamMembersSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *TeamMembers*
 */
type TeamMembersSliceVariation = TeamMembersSliceDefault;

/**
 * TeamMembers Shared Slice
 *
 * - **API ID**: `team_members`
 * - **Description**: TeamMembers
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TeamMembersSlice = prismic.SharedSlice<'team_members', TeamMembersSliceVariation>;

/**
 * Item in *Testimonials → Default → Primary → Items*
 */
export interface TestimonialsSliceDefaultPrimaryItemsItem {
	/**
	 * Title field in *Testimonials → Default → Primary → Items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: testimonials.default.primary.items[].title
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title: prismic.KeyTextField;

	/**
	 * Description field in *Testimonials → Default → Primary → Items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: testimonials.default.primary.items[].description
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	description: prismic.KeyTextField;
}

/**
 * Primary content in *Testimonials → Default → Primary*
 */
export interface TestimonialsSliceDefaultPrimary {
	/**
	 * BG Color field in *Testimonials → Default → Primary*
	 *
	 * - **Field Type**: Select
	 * - **Placeholder**: *None*
	 * - **API ID Path**: testimonials.default.primary.bg_color
	 * - **Documentation**: https://prismic.io/docs/field#select
	 */
	bg_color: prismic.SelectField<'slate' | 'white'>;

	/**
	 * Heading field in *Testimonials → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: testimonials.default.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	heading: prismic.KeyTextField;

	/**
	 * Body field in *Testimonials → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: testimonials.default.primary.body
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	body: prismic.RichTextField;

	/**
	 * Items field in *Testimonials → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: testimonials.default.primary.items[]
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	items: prismic.GroupField<Simplify<TestimonialsSliceDefaultPrimaryItemsItem>>;
}

/**
 * Default variation for Testimonials Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialsSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<TestimonialsSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Testimonials*
 */
type TestimonialsSliceVariation = TestimonialsSliceDefault;

/**
 * Testimonials Shared Slice
 *
 * - **API ID**: `testimonials`
 * - **Description**: Testimonials
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialsSlice = prismic.SharedSlice<'testimonials', TestimonialsSliceVariation>;

declare module '@prismicio/client' {
	interface CreateClient {
		(
			repositoryNameOrEndpoint: string,
			options?: prismic.ClientConfig
		): prismic.Client<AllDocumentTypes>;
	}

	interface CreateWriteClient {
		(
			repositoryNameOrEndpoint: string,
			options: prismic.WriteClientConfig
		): prismic.WriteClient<AllDocumentTypes>;
	}

	interface CreateMigration {
		(): prismic.Migration<AllDocumentTypes>;
	}

	namespace Content {
		export type {
			PageDocument,
			PageDocumentData,
			PageDocumentDataSlicesSlice,
			SettingsDocument,
			SettingsDocumentData,
			SettingsDocumentDataNavigationItem,
			AllDocumentTypes,
			AwardLogoSectionSlice,
			AwardLogoSectionSliceDefaultPrimaryImageWithTextItem,
			AwardLogoSectionSliceDefaultPrimary,
			AwardLogoSectionSliceVariation,
			AwardLogoSectionSliceDefault,
			CenteredCtaSlice,
			CenteredCtaSliceDefaultPrimaryButtonsItem,
			CenteredCtaSliceDefaultPrimary,
			CenteredCtaSliceVariation,
			CenteredCtaSliceDefault,
			CoreValuesSlice,
			CoreValuesSliceDefaultPrimaryCoreValuesItem,
			CoreValuesSliceDefaultPrimary,
			CoreValuesSliceVariation,
			CoreValuesSliceDefault,
			CtaContentImageSlice,
			CtaContentImageSliceDefaultPrimaryButtonsItem,
			CtaContentImageSliceDefaultPrimary,
			CtaContentImageSliceReversePrimaryButtonsItem,
			CtaContentImageSliceReversePrimary,
			CtaContentImageSliceVariation,
			CtaContentImageSliceDefault,
			CtaContentImageSliceReverse,
			HeroSlice,
			HeroSliceDefaultPrimaryButtonsItem,
			HeroSliceDefaultPrimary,
			HeroSliceVariation,
			HeroSliceDefault,
			MinimalHeaderSlice,
			MinimalHeaderSliceDefaultPrimary,
			MinimalHeaderSliceVariation,
			MinimalHeaderSliceDefault,
			RichTextSlice,
			RichTextSliceDefaultPrimary,
			RichTextSliceVariation,
			RichTextSliceDefault,
			TeamMembersSlice,
			TeamMembersSliceDefaultPrimaryTeamMembersItem,
			TeamMembersSliceDefaultPrimary,
			TeamMembersSliceVariation,
			TeamMembersSliceDefault,
			TestimonialsSlice,
			TestimonialsSliceDefaultPrimaryItemsItem,
			TestimonialsSliceDefaultPrimary,
			TestimonialsSliceVariation,
			TestimonialsSliceDefault
		};
	}
}
