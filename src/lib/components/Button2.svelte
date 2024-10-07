<script>
    export let button_cta;
    export let bg_color;
    export let button_label;
    export let button_link; 
	import { clsx } from 'clsx';
</script>

    {#if button_cta === true}
        <a class="{clsx(button_cta && 'cta', bg_color === "light"  ?  'dark' : bg_color === 'dark' ? 'light' : 'light')}" href="{button_link}">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFA500" class="size-8 svgthick">
                    <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                </svg>
            {button_label}                                                    
        </a>
    {:else}
        <a class="light button" href="{button_link}">
            {button_label}
        </a>
    {/if}



