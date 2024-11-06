<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink, PrismicRichText, PrismicText } from '@prismicio/svelte';
	import Button from '$lib/components/Button.svelte';
	import { asLink } from '@prismicio/helpers';

	export let slice: Content.HeroSlice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}  class="relative h-screen bg-cover bg-center" style="background-image: url('{slice.primary.image.url}');">
		<div class="absolute inset-0 bg-slate/50"></div>
		<div class="container relative z-10 flex items-center h-full text-white pl-0">
			<div class="w-full text-left">
				{#if slice.primary.heading}
					<h1 class="lg:text-[85px] lg:max-w-4xl text-6xl font-black md:text-7xl md:leading-snug">	
						<PrismicRichText field={slice.primary.heading} />
					</h1>
				{/if}
				{#if slice.primary.body}
					<p class="mt-4 text-lg md:text-xl">
						<PrismicRichText field={slice.primary.body} />
					</p>
				{/if}
				<div class="mt-8 lg:max-w-2xl">
					{#each slice.primary.buttons as item}
						<Button {...item} button_link={asLink(item.button_link)} /><!--If background is changeable, need to separately pass in bg_color to button (as in CTA slices)-->
					{/each}
				</div>
			</div>
		</div>	
</section>