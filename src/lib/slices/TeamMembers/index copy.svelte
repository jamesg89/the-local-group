<script lang="ts">
    import type { Content } from '@prismicio/client';
    import { PrismicImage, PrismicRichText } from '@prismicio/svelte';

    export let slice: Content.TeamMembersSlice;
    let selectedBio: string | null = null;

    function showBio(bioId: string) {
        selectedBio = selectedBio === bioId ? null : bioId;
    }

    function closeBio() {
        selectedBio = null; // Close the bio popup
    }
</script>

<div class="container mx-auto p-6 flex flex-col gap-6">
    <div class="team-members mx-auto w-11/12 flex flex-wrap max-w-[960px] justify-between">
        {#each slice.primary.team_members as item}
            <div class="member-card relative h-80 transition-all duration-300 ease-in-out"
                on:click={() => showBio(item.name)}
                style="background-image: url('{item.head_shot.url}');">
                
                <div class="overlay flex items-center justify-center">
                    <div class="info text-center text-white">
                        <h2 class="text-3xl font-bold">{item.name}</h2>
                        <p class="text-xs">{item.job_title}</p>
                        <p>{item.contact}</p>
                    </div>
                </div>
            </div>
        {/each}
    </div>

    {#if selectedBio}
        <div class="bio-popup fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" on:click={closeBio}>
            <div class="bio-card rounded bg-white shadow-lg p-6 relative max-w-xs w-full" on:click|stopPropagation>
                <h3 class="text-2xl font-bold">{slice.primary.team_members.find(member => member.name === selectedBio)?.name}</h3>
                <p class="text-sm pt-4">
				<PrismicRichText field={slice.primary.team_members.find(member => member.name === selectedBio)?.biography} />
                </p>
				<button class="absolute top-2 right-2 text-gray-600" on:click={closeBio}>X</button>
            </div>
        </div>
    {/if}
</div>

<style>
    .team-members {
        display: flex;
        flex-wrap: wrap;
        gap: 20px; /* Adjusts spacing between cards */
    }

    .member-card {
        position: relative;
        width: calc(33.33% - 20px);
        padding-bottom: 35%; /* 4:3 aspect ratio */
        background-size: cover;
        max-height: 300px;
        background-position: top;
        overflow: hidden;
    }

    .member-card::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-size: cover;
        background-position: center;
        filter: grayscale(100%);
        transition: filter 0.3s;
    }

    .member-card:hover {
        filter: grayscale(0%); /* Show color on hover */
        transform: translateY(-2px); /* Slight lift effect on hover */
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5); /* Overlay for readability */
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s;
    }

    .member-card:hover .overlay {
        opacity: 1; /* Show overlay on hover */
    }

    .bio-popup {
        z-index: 100; /* Ensure the popup is above other elements */
    }

    .bio-card {
        max-width: 400px; /* Set max width for the pop-up */
        width: 100%; /* Allow full width up to max */
        margin: 0 auto; /* Center the pop-up */
        position: relative; /* For positioning close button */
    }
</style>
