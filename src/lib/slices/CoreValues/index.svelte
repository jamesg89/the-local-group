<script lang="ts">
	import type { Content } from '@prismicio/client';
	import {PrismicRichText} from '@prismicio/svelte';

	export let slice: Content.CoreValuesSlice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="bg-slate">
	<div class="container text-white p-8 flex flex-col lg:flex-row lg:items-center gap-x-10">
		<!-- Left Section -->
		<div class="lg:w-1/3 mb-8 lg:mb-0">
			{#if slice.primary.sub_heading}
				<h3 class="text-lg font-semibold mb-2">	
					{slice.primary.sub_heading}
				</h3>
			{/if}
			{#if slice.primary.heading}
				<h2 class="text-5xl font-bold mb-4">	
					{slice.primary.heading}
				</h2>
			{/if}
			{#if slice.primary.primary_body}
				<p class="text-sm leading-relaxed">	
					<PrismicRichText field={slice.primary.primary_body} />
				</p>
			{/if}
		</div>
	
		<!-- Right Section -->
		<div class="lg:w-2/3 grid grid-cols-1 lg:grid-cols-2 gap-8">
			{#each slice.primary.core_values as item}
				<!-- Render content for item -->
				<div>
					{#if item.value_heading}
						<h3 class="text-2xl mb-4">	
							{item.value_heading}
						</h3>
					{/if}
					{#if item.value_body}
						<p class="text-sm leading-relaxed">	
							<PrismicRichText field={item.value_body} />
						</p>
					{/if}
				</div>
			{/each}
		</div>
	  </div>
</section>




  