<script>
	import { PrismicPreview } from '@prismicio/svelte/kit';
	import { page } from '$app/stores';
	import { repositoryName } from '$lib/prismicio';
	import '@fontsource-variable/noto-sans';
	import "../app.css"
	// @ts-ignore
	import Header from '$lib/components/Header.svelte';
	// @ts-ignore
	import HeaderDark from '$lib/components/HeaderDark.svelte';
	// @ts-ignore
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>{$page.data.title}</title>
	{#if $page.data.meta_description}
		<meta name="description" content={$page.data.meta_description} />
	{/if}
	{#if $page.data.meta_title}
		<meta name="og:title" content={$page.data.meta_title} />
	{/if}
	{#if $page.data.meta_image}
		<meta name="og:image" content={$page.data.meta_image} />
		<meta name="twitter:card" content="summary_large_image" />
	{/if}
</svelte:head>
	{#if $page.data.title === "The Local Real Estate Group"}
		<Header settings={$page.data.settings} />
	{:else}
		<HeaderDark settings={$page.data.settings} />
	{/if}
<main>
	<slot />
</main>
<Footer settings={$page.data.settings} />
<PrismicPreview {repositoryName} />
