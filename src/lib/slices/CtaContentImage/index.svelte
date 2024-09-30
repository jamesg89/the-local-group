<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { clsx } from 'clsx';
	import { PrismicImage, PrismicLink, PrismicRichText, PrismicText } from '@prismicio/svelte';
	import Button from '$lib/components/Button.svelte';
	
	export let slice: Content.CtaContentImageSlice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="{clsx('', slice.primary.bg_color=== "light" ? "bg-white" : "bg-slate text-white")}">
		<div class="{clsx('container flex flex-col relative z-10 gap-5 justify-around items-center h-full', slice.variation=== "reverse" ? " md:flex-row" : "md:flex-row-reverse space-x-reverse")}">
			<div class="w-11/12 max-w-96 mt-8 md:mt-0">
				{#if slice.primary.numbering}
					<h3 class="text-lg">	
						{slice.primary.numbering}
					</h3>
				{/if}
				{#if slice.primary.heading}
					<h2 class="text-3xl font-bold">	
						<PrismicText field={slice.primary.heading} />
					</h2>
				{/if}
				{#if slice.primary.body}
					<p class="mt-2">
						<PrismicRichText field={slice.primary.body} />
					</p>
				{/if}
				<div class="mt-4">
					{#each slice.primary.buttons as item}
						<Button styles="{clsx(item.button_cta && 'cta', slice.primary.bg_color === "light"  ?  'dark' : 'light')}" link="{item.button_link}">
							{item.button_label}
						</Button>
					{/each}
				</div>
			</div>
			{#if slice.primary.image}
				<div class='w-11/12 max-w-96 md:w-1/2 opacity-90 p-0'>
						<PrismicImage field={slice.primary.image} class="max-h-[900px] w-auto"  />
				</div>

			{/if}
			</div>
</section>
