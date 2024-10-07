<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink, PrismicRichText, PrismicText } from '@prismicio/svelte';
	import Button from '$lib/components/Button.svelte';

	export let slice: Content.HeroSlice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}  class="relative h-screen bg-cover bg-center" style="background-image: url('/static/assets/vancouver-black-and-white-local-real-estate-group-banner.jpg');">
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
						{#if item.button_cta === true}
							<Button styles="cta light" link={item.button_link}>	
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFA500" class="size-8">
										<path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
								  	</svg>
								  {item.button_label}
																							  
							</Button>
						{:else}
							<Button styles="light" link={item.button_link}>
								{item.button_label}
							</Button>
						{/if}
					{/each}
				</div>
			</div>
		</div>	
</section>