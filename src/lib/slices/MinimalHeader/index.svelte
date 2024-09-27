<script lang="ts">
	import type { Content } from '@prismicio/client';
	import {PrismicText } from '@prismicio/svelte';

	export let slice: Content.MinimalHeaderSlice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}  class="relative bg-white">
	<div class="container relative z-10 flex items-center text-white md:pr-16 lg:pr-24 pl-0">
			{#if slice.primary.heading}
				<h1 class="text-5xl mt-14  font-black md:text-7xl md:leading-snug">	
					{slice.primary.heading}
				</h1>
			{/if}
	</div>	
</section>