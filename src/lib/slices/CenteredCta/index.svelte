<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { clsx } from 'clsx';
	import { PrismicImage, PrismicRichText} from '@prismicio/svelte';
	import Button from '$lib/components/Button.svelte';

	export let slice: Content.CenteredCtaSlice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="{clsx('', slice.primary.bg_color=== "White" ? "bg-white" : slice.primary.bg_color === 'Slate' ? 'bg-slate text-white' :  slice.primary.bg_color === 'Gray' ? 'bg-gray-default' :'bg-white')}">
		<div class="container flex flex-col relative z-10 justify-around items-center h-full text-center">
			<div class="mt-8 md:mt-0 mx-auto">
				{#if slice.primary.number}
					<h3 class="text-lg">	
						{slice.primary.number}
					</h3>
				{/if}
				{#if slice.primary.heading}
					<h2 class="text-5xl font-bold max-w-2xl mx-auto">	
						{slice.primary.heading}
					</h2>
				{/if}
				{#if slice.primary.body}
					<p class="mt-8 max-w-2xl mx-auto">
						<PrismicRichText field={slice.primary.body} />
					</p>
				{/if}
				{#if slice.primary.image}
					<div class="mt-8 mb-8">
						<PrismicImage field={slice.primary.image} />
					</div>
				{/if}
					<div class="flex flex-row gap-x-10 w-full justify-center flex-wrap align-bottom">
						{#each slice.primary.buttons as item}
							<Button styles="{clsx(item.cta && 'cta', slice.primary.bg_color === "White"  ?  'dark' : slice.primary.bg_color === 'Slate' ? 'light' : 'light')}" link="{item.link}">
								{item.link_text}
							</Button>
						{/each}
					</div>
			</div>
			</div>
</section>
