<script>
    import { PrismicLink } from "@prismicio/svelte";
    // @ts-ignore
    import WordMark from "./WordMark.svelte";
    /** @type {import("@prismicio/client").Content.SettingsDocument}*/  
    export let settings;
</script>
<header class=" fixed top-0 w-full transparent backdrop-blur-sm duration-300 z-50 transition-transform ease-in">
    <nav class="container mx-auto px-6 flex flex-col md:flex-row justify-between py-4" aria-label="footer">
        <a href="/"><WordMark /></a>
        <span class="sr-only">{settings.data.site_title} home page</span>
            <ul class="flex gap-6">
                {#each settings.data.navigation as item (item.label)}
                    <li class="hover:text-gray-500">
                        <PrismicLink field={item.link} class="inline-flex min-h-11 items-center">
                            {item.label}
                        </PrismicLink>
                    </li>
                {/each}
            </ul>
    </nav>
</header>