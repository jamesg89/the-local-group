
<script>
  import { PrismicLink } from "@prismicio/svelte";
  // @ts-ignore
  import WordMark from "./WordMark.svelte";
  /** @type {import("@prismicio/client").Content.SettingsDocument}*/
  import { onMount, onDestroy } from 'svelte';

  let scrolled = false;

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
    transition: background-color 0.5s ease, border 0.5s ease, color 0.5s ease;
    padding: 0 20px;
    z-index: 80;
    color: black; /* Default text color */
  }

  header.transparent {
    background-color: rgba(0, 0, 0, 0.5);
    border-bottom: 2px solid black;
    color: white; /* Text color after scrolling */
  }

  header.default {
    background-color: transparent;
    border-bottom: none;
    color: black; /* Default text color */
  }
</style>

<header class="{scrolled ? 'transparent' : 'default'} fixed w-full transparent backdrop-blur-sm duration-300 z-50 transition-transform ease-in">
  <!-- Add your navigation items here -->
  <nav class="container mx-auto flex flex-col md:flex-row justify-between py-4" aria-label="header">
      <a href="/"><WordMark Clr={scrolled ? "#fff" : "#222222"} /></a>
      <span class="sr-only">{settings.data.site_title} home page</span>
          <ul class="flex gap-6">
              {#each settings.data.navigation as item (item.label)}
                  <li class="hover:text-gray-default">
                      <PrismicLink field={item.link} class="inline-flex min-h-11 items-center">
                          {item.label}
                      </PrismicLink>
                  </li>
              {/each}
          </ul>
  </nav>
</header>
