<script lang="ts">
	import type { Content } from '@prismicio/client';
	import {PrismicText } from '@prismicio/svelte';

	export let slice: Content.MinimalHeaderSlice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="bg-white my-0 pb-0">
 	<div class="container py-0 my--4 z-10 flex text-slate items-center pl-0 overflow-hidden">
	  {#if slice.primary.heading}
			<h1 class="text-6xl line-e mb-0 pt-0 font-black md:text-8xl md:leading-none">
				{slice.primary.heading}
				</h1>
			{/if}
	</div>	
</section>