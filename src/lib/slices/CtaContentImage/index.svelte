<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { clsx } from 'clsx';
	import { PrismicImage, PrismicLink, PrismicRichText, PrismicText } from '@prismicio/svelte';
	import Button from '$lib/components/Button.svelte';
	
	export let slice: Content.CtaContentImageSlice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="{clsx('', slice.primary.bg_color=== "light" ? "bg-white" : "bg-slate text-white")}">
		<div class="{clsx('container flex flex-col relative z-10 gap-5 justify-around items-center h-full', slice.variation=== "reverse" ? " md:flex-row" : "md:flex-row-reverse space-x-reverse")}">
			<div class="w-full max-w-[480px] mt-8 md:mt-0">
				{#if slice.primary.numbering}
					<h3 class="text-lg">	
						{slice.primary.numbering}
					</h3>
				{/if}
				{#if slice.primary.heading}
					<h2 class="text-6xl font-bold">	
						<PrismicText field={slice.primary.heading} />
					</h2>
				{/if}
				{#if slice.primary.body}
					<p class="mt-8 text-sm">
						<PrismicRichText field={slice.primary.body} />
					</p>
				{/if}
				<div class="mt-8">
					{#each slice.primary.buttons as item}
						{#if item.button_cta === true}
						<Button styles="{clsx(item.button_cta && 'cta', slice.primary.bg_color === "light"  ?  'dark' : slice.primary.bg_color === 'dark' ? 'light' : 'light')}" link="{item.button_link}">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFA500" class="size-8 svgthick">
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
			{#if slice.primary.image}
				<div class='w-full min-w-[480px] md:w-1/2 opacity-90 p-0'>
						<PrismicImage field={slice.primary.image} class="max-h-[900px] w-auto"  />
				</div>

			{/if}
			</div>
</section>
