<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { clsx } from 'clsx';
	import { PrismicImage, PrismicLink, PrismicRichText, PrismicText } from '@prismicio/svelte';
	import Button from '$lib/components/Button.svelte';

	export let slice: Content.AwardLogoSectionSlice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="{clsx('', slice.primary.bg_color=== "White" ? "bg-white" : slice.primary.bg_color === 'Slate' ? 'bg-slate' :  slice.primary.bg_color === 'Gray' ? 'bg-gray-default' :'bg-white')}">
		<div class="container flex flex-col relative z-10 justify-between items-center h-full text-center">
			<div class="mt-8 md:mt-0 w-full">
				{#if slice.primary.heading}
					<h2 class="text-5xl font-bold mb-12">	
						{slice.primary.heading}
					</h2>
				{/if}

					<div class="flex flex-col md:flex-row gap-10 w-full items-center justify-center lg:justify-between px-0 mx-auto flex-wrap align-bottom">
						{#each slice.primary.image_with_text as item}
							<div class="flex flex-1 flex-col gap-4 align-bottom text-center min-w-44 max-w-48">
								{#if item.item_heading}
									<h3 class="text-3xl font-bold text-center">	
										{item.item_heading}
									</h3>
								{/if}
								{#if item.logo_image}
									<PrismicImage class="max-h-48 max-w-48 text-center m-auto" field={item.logo_image} />
								{/if}
								{#if item.logo_texty}
									<p>	
										{item.logo_texty}
									</p>
								{/if}
							</div>
						{/each}
					</div>
			</div>
			</div>
</section>
