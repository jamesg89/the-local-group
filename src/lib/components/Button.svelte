<script>
	export let styles;
    export let link;
</script>

{#if styles}
    <a href="{link}" class="{styles} button">
        <slot/>
    </a>
{:else}
    <a href="{link}" class="light button">
        <slot/>
    </a>
{/if}