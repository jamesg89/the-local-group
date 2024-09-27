<script>
	import { SliceSimulator } from '@slicemachine/adapter-sveltekit/simulator';
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';
</script>

<SliceSimulator let:slices class="bg-black bg-opacity-30">
	<SliceZone {slices} {components} />
</SliceSimulator>
