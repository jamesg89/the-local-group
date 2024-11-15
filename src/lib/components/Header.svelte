<script>
  import { PrismicLink } from "@prismicio/svelte";
  // @ts-ignore
  import WordMark from "./WordMark.svelte";
  import { onMount, onDestroy } from 'svelte';
	import UserButton from 'clerk-sveltekit/client/UserButton.svelte'
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte'
	import SignedOut from 'clerk-sveltekit/client/SignedOut.svelte'
  import SignInButton from 'clerk-sveltekit/client/SignInButton.svelte'

  let scrolled = false;
  let isOpen = false;

  // Handle Hamburger Menu toggling the left to right navigation showing
  const toggleMenu = () => {
    isOpen = !isOpen;
  };

  // Changes appearance of navigation when scrolling down
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

  // Settings as defined in prismic. Used for navigation links
  export let settings;
  export let home; // Boolean that tells header if this is the home page (true) or not (false)
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
    color:white;
  }

  header.transparent li {
    color:white;
  }

  header.default {
    background-color: transparent;
    border-bottom: none;
  }
</style>

<header class="{scrolled ? 'transparent' : 'default'} {home ? 'hover:text-slate text-white' : 'hover:text-gray-default text-slate'} fixed top-0 w-full z-50 duration-300 transition-transform ease-in">
  <nav class="container flex items-center justify-between py-4" aria-label="header">
    <!-- Logo -->
        <a href="/"><WordMark Clr={scrolled ? "#fff" : (home ? "#fff" : "#222222")} /></a>
        <span class="sr-only">{settings.data.site_title} home page</span>
        
        <!-- Desktop Menu -->
        <ul class="md:flex gap-6 hidden flex items-center space-x-6">
          {#each settings.data.navigation as item (item.label)}
            <li class="{home ? 'hover:text-slate text-white' : 'hover:text-gray-default text-slate'} ">
              <PrismicLink field={item.link} class="inline-flex items-center">
                {item.label}
              </PrismicLink>
            </li>
          {/each}
            <li>
              <!-- Log In System -->
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal" class="text-slate bg-white hover:text-white hover:bg-slate border border-slate transition ease-in-out duration-500 flex items-center px-4 py-2 rounded-full"> 
                  Sign in
                </SignInButton>
              </SignedOut>
            </li>
        </ul>
    <!-- Hamburger Button (Mobile) -->
    <div class="md:hidden flex ml-auto items-center">
      <button on:click={toggleMenu} class="{home ? 'hover:text-slate focus:text-white text-white' : 'hover:text-gray-default text-slate'} ${isOpen ? 'text-gray-light' : 'text-white'} focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>




    <!-- Mobile Menu -->
<div
  class={`md:hidden fixed inset-0 left-0 w-64 bg-slate/100 shadow-lg shadow-slate transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
>
  <!-- Logo -->
  <div class="px-4 pt-6 flex justify-between">
    <a href="/"><WordMark Clr="#fff" /></a>
  
    <button on:click={toggleMenu} class="text-white hover:text-gray-default focus:text-gray-default focus:outline-none">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  
  </div>

  <!-- Navigation Menu -->
  <nav class="mt-6 bg-slate/100 h-screen">
    <!-- Desktop Menu -->
      <div>
        <!-- Log In System -->
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal" class="text-slate bg-white hover:text-white hover:bg-slate border border-slate transition ease-in-out duration-500 flex items-center px-4 py-2 rounded-full"> 
            Sign in
          </SignInButton>
        </SignedOut>
      </div>
      {#each settings.data.navigation as item (item.label)}
        <div class="hover:text-slate text-white text-lg p-4">
          <PrismicLink field={item.link} on:click={toggleMenu} class="inline-flex items-center">
            {item.label}
          </PrismicLink>
        </div>
      {/each}
  </nav>

</div>
  </nav>
</header>
