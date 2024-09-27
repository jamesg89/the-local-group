<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { clsx } from 'clsx';
	import { PrismicImage, PrismicLink, PrismicRichText, PrismicText } from '@prismicio/svelte';
	
	export let slice: Content.CtaContentImageSlice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="bg-white">
		<div class="container relative z-10 flex items-center h-full">
			<div class="w-full md:w-1/2 md:pl-12 mt-8 md:mt-0">
				{#if slice.primary.numbering}
					<h3 class="text-lg">	
						{slice.primary.numbering}
					</h3>
				{/if}
				{#if slice.primary.heading}
					<h2 class="text-3xl font-bold mt-2">	
						<PrismicText field={slice.primary.heading} />
					</h2>
				{/if}
				{#if slice.primary.body}
					<p class="mt-4">
						<PrismicRichText field={slice.primary.body} />
					</p>
				{/if}
				<div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
					{#each slice.primary.buttons as item}
						{#if item.button_cta === true}
							<button class="border-2 text-slate border-slate bg-transparent font-bold px-6 py-3 hover:text-gray-default transition duration-300">
								<PrismicLink field={item.button_link}>{item.button_label}</PrismicLink>
							</button>
						{:else}
							<button class="border-2 text-slate border-slate bg-transparent font-bold px-6 py-3 hover:text-gray-default transition duration-300">
								<PrismicLink field={item.button_link}>{item.button_label}</PrismicLink>
							</button>
						{/if}
					{/each}
				</div>
			</div>
			{#if slice.primary.image}
					<div class={clsx('w-full lg:w-1/2 flex justify-center lg:justify-end items-center opacity-90 shadow-2x1', slice.variation=== "reverse" ? "lg:order-1 lg:translate-x-[15%]" : "lg:-order-1 lg:translate-x-[-15%]")}>
					<PrismicImage field={slice.primary.image} />
					</div>

			{/if}
			</div>
</section>
