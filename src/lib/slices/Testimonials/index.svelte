<script lang="ts">
	import type { Content } from '@prismicio/client';
	import 'keen-slider/keen-slider.min.css';
	import KeenSlider, { type KeenSliderInstance } from 'keen-slider';
	import { PrismicRichText } from '@prismicio/svelte';
	import { onMount, onDestroy } from 'svelte';
  
	let keenSlider: KeenSliderInstance | null = null;
  
	// Initialize slider on mount
	onMount(() => {
    keenSlider = new KeenSlider('#keen-slider', {
      loop: true,
      slides: {
        origin: 'center',
        perView: 1.25,
        spacing: 16,
      },
      breakpoints: {
        '(min-width: 1024px)': {
          slides: {
            origin: 'auto',
            perView: 1.5,
            spacing: 32,
          },
        },
      },
    });
 

    const autoSlideInterval = setInterval(() => {
      keenSlider?.next();
    }, 5000); // 30 seconds

    return () => {
      clearInterval(autoSlideInterval);
    };
  });

  const handlePrevious = () => keenSlider?.prev();
  const handleNext = () => keenSlider?.next();

  export let slice: Content.TestimonialsSlice;
  </script>
  
  <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="bg-gray-light text-gray-800">
	<div class="container w-full py-12 lg:py-16 xl:py-24">
	  <div class="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
		<div class="max-w-xl text-left">
		  <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
			{slice.primary.heading}
		  </h2>
  
		  <p class="mt-4 text-gray-700">
			<PrismicRichText field={slice.primary.body} />
		  </p>
  
		  <div class="hidden lg:mt-8 lg:flex lg:gap-4">
			<button
			  aria-label="Previous slide"
			  on:click={handlePrevious}
			  class="rounded-full border border-gray-400 p-3 text-gray-600 transition hover:bg-gray-600 hover:text-white"
			>
			  <svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6 rtl:rotate-180"
			  >
				<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
			  </svg>
			</button>
  
			<button
			  aria-label="Next slide"
			  on:click={handleNext}
			  class="rounded-full border border-gray-400 p-3 text-gray-600 transition hover:bg-gray-600 hover:text-white"
			>
			  <svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6 rtl:rotate-180"
			  >
				<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
			  </svg>
			</button>
		  </div>
		</div>
  
		<div class="-mx-6 lg:col-span-2 lg:mx-0">
		  <div id="keen-slider" class="keen-slider">
			{#each slice.primary.items as item}
			  <div class="keen-slider__slide p-6 lg:p-12 bg-white shadow-sm rounded-md">
				<blockquote class="flex h-full flex-col justify-between">
				  <div>
					<div class="flex gap-0.5 text-green-500">
					  {#each Array(5) as _}
						<svg
						  class="w-5 h-5"
						  fill="currentColor"
						  viewBox="0 0 20 20"
						  xmlns="http://www.w3.org/2000/svg"
						>
						  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
						</svg>
					  {/each}
					</div>
  
					<div class="mt-4">
					  <p class="mt-4 leading-relaxed text-gray-700 line-clamp-6">{item.description}</p>
					</div>
				  </div>
  
				  <footer class="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
					&mdash; {item.title}
				  </footer>
				</blockquote>
			  </div>
			{/each}
		  </div>
		</div>
	  </div>
	</div>
  </section>
  
  <style>
	.keen-slider {
	  overflow: hidden;
	}
	.keen-slider__slide {
	  min-width: calc(100% / 1.25);
	  box-sizing: border-box;
	}
	@media (min-width: 1024px) {
	  .keen-slider__slide {
		min-width: calc(100% / 1.5);
	  }
	}
  </style>
  