<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink, PrismicRichText, PrismicText } from '@prismicio/svelte';

	export let slice: Content.HeroSlice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}  class="relative h-screen bg-cover bg-center" style="background-image: url('/static/assets/vancouver-black-and-white-local-real-estate-group-banner.jpg');">
		<div class="container relative z-10 flex items-center h-full text-white md:pr-16 lg:pr-24 pl-0">
			<div class="w-full md:w-3/5 text-left">
				{#if slice.primary.heading}
					<h1 class="text-5xl  font-black md:text-7xl md:leading-snug">	
						<PrismicText field={slice.primary.heading} />
					</h1>
				{/if}
				{#if slice.primary.body}
					<p class="mt-4 text-lg md:text-xl">
						<PrismicRichText field={slice.primary.body} />
					</p>
				{/if}
				<div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
					{#each slice.primary.buttons as item}
						{#if item.button_cta === true}
							<button class="border-2 border-white bg-gray-200 text-black font-bold px-6 py-3 hover:bg-white hover:text-black transition duration-300">
								<PrismicLink field={item.button_link}>{item.button_label}</PrismicLink>
							</button>
						{:else}
							<button class="border-2 border-white text-white font-bold px-6 py-3 hover:bg-white hover:text-black transition duration-300">
								<PrismicLink field={item.button_link}>{item.button_label}</PrismicLink>
							</button>
						{/if}
					{/each}
				</div>
			</div>
		</div>	
</section>
