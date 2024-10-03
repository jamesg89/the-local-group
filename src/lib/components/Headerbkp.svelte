<script>
    import { PrismicLink } from "@prismicio/svelte";
    // @ts-ignore
    import WordMark from "./WordMark.svelte";
    /** @type {import("@prismicio/client").Content.SettingsDocument}*/ 
    
    import { onMount } from 'svelte';
    import { onDestroy } from 'svelte';
  
    let scrolled = false;
  
    const handleScroll = () => {
      scrolled = window.scrollY > 40;
    };
  
    onMount(() => {
      window.addEventListener('scroll', handleScroll);
    });
  
    onDestroy(() => {
      window.removeEventListener('scroll', handleScroll);
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
      transition: background-color 0.3s ease, border 0.3s ease;
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
  
  <header class="{scrolled ? 'transparent' : 'default'} fixed top-0 w-full z-50 transparent backdrop-blur-sm duration-300 transition-transform ease-in">
    <nav class="container mx-auto flex flex-col md:flex-row justify-between py-4" aria-label="header">
        <a href="/"><WordMark Clr="#fff" /></a>
        <span class="sr-only">{settings.data.site_title} home page</span>
            <ul class="flex gap-6">
                {#each settings.data.navigation as item (item.label)}
                    <li class="hover:text-slate text-white">
                        <PrismicLink field={item.link} class="inline-flex min-h-11 items-center">
                            {item.label}
                        </PrismicLink>
                    </li>
                {/each}
            </ul>
    </nav>
</header>
  