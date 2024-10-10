<script>
  import { PrismicLink } from "@prismicio/svelte";
  // @ts-ignore
  import WordMark from "./WordMark.svelte";
  import { onMount, onDestroy } from 'svelte';

  let scrolled = false;
  let isOpen = false;

  const toggleMenu = () => {
    isOpen = !isOpen;
  };

  const handleScroll = () => {
    scrolled = window.scrollY > 40;
  };

  onMount(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }
  });

  onDestroy(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', handleScroll);
    }
  });

  export let settings;
</script>

<style>
  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    display: flex;
    align-items: center;
    transition: background-color 0.5s ease, border 0.5s ease;
  }

  header.transparent {
    background-color: rgba(0, 0, 0, 0.7);
    border-bottom: 2px black solid;
  }

  header.default {
    background-color: transparent;
    border-bottom: none;
  }
</style>

<header class="{scrolled ? 'transparent' : 'default'} fixed top-0 w-full z-50 backdrop-blur-sm duration-300 transition-transform ease-in">
  <nav class="container flex items-center justify-between py-4" aria-label="header">
    <a href="/"><WordMark Clr="#fff" /></a>
    <span class="sr-only">{settings.data.site_title} home page</span>
    
    <!-- Desktop Menu -->
    <ul class="md:flex gap-6 hidden">
      {#each settings.data.navigation as item (item.label)}
        <li class="hover:text-slate text-white">
          <PrismicLink field={item.link} class="inline-flex items-center">
            {item.label}
          </PrismicLink>
        </li>
      {/each}
    </ul>

    <!-- Hamburger Button (Mobile) -->
    <div class="md:hidden flex ml-auto items-center">
      <button on:click={toggleMenu} class="text-white hover:text-gray-300 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>




    <!-- Mobile Menu -->
<div
  class={`md:hidden fixed inset-0 left-0 w-64 bg-slate shadow-lg shadow-slate transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
>
  <!-- Logo -->
  <div class="px-4 pt-6">
    <a href="/"><WordMark Clr="#fff" /></a>

    <button on:click={toggleMenu} class="text-gray-200 hover:text-gray-400 focus:outline-none">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>

  <!-- Navigation Menu -->
  <nav class="mt-6">
    <a href="#" class="block text-white text-lg font-bold py-3 px-4 hover:bg-gray-default">OUR COLLECTION</a>
    <a href="#" class="block text-white text-lg font-bold py-3 px-4 hover:bg-gray-default">MEET THE LOCALS</a>

    <!-- Submenu with dropdown -->
    <div>
      <div class="flex justify-between items-center py-3 px-4 hover:bg-slate">
        <a href="#" class="block text-white text-lg font-bold">HOW WE WORK</a>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>

    <div>
      <div class="flex justify-between items-center py-3 px-4 hover:bg-slate">
        <a href="#" class="block text-white text-lg font-bold">RESOURCES</a>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>

    <a href="#" class="block text-white text-lg font-bold py-3 px-4 hover:bg-slate">CONTACT</a>
  </nav>

  <!-- Footer Icon -->
  <div class="absolute bottom-6 left-4">
    <a href="tel:+123456789" class="text-white hover:text-gray-400">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h2l3 7 6-6-7-7H4a1 1 0 00-1 1v8z" />
      </svg>
    </a>
  </div>
</div>






  </nav>
</header>
