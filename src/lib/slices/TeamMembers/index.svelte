<script lang="ts">
    import type { Content } from '@prismicio/client';
    import { PrismicRichText, PrismicImage } from '@prismicio/svelte';

    export let slice: Content.TeamMembersSlice;
    let selectedBio: string | null = null;

    function showBio(bioId: string) {
        selectedBio = selectedBio === bioId ? null : bioId;
    }

    function closeBio() {
        selectedBio = null;
    }

    function handleKeyDown(event: KeyboardEvent, bioId: string) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            showBio(bioId);
        }
    }
</script>

<div class="container mx-0 py-6 flex flex-col gap-6">
    <div class="team-members w-full flex flex-wrap justify-between gap-6">
        {#each slice.primary.team_members as item}
            <div
                class="member-card flex-1 min-w-[45%] md:min-w-[30%] relative h-80 transition-all duration-300 ease-in-out cursor-pointer"
                on:click={() => showBio(item.name)}
                on:keydown={(e) => handleKeyDown(e, item.name)}
                tabindex="0"
                role="button"
                aria-expanded={selectedBio === item.name}
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
    <div 
        class="bio-panel w-full transform transition-transform duration-[500ms] ease-in z-50 top-0 right-0 fixed h-screen md:w-[420px] bg-slate text-white p-6 flex justify-center items-center"
        on:click={closeBio} 
        class:translate-x-full={!selectedBio}
        class:translate-x-0={selectedBio}
        tabindex="0"
        role="button"
        aria-label="Close bio panel"
        on:keydown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                closeBio();
            }
        }}
    >
            <!-- Bio content wrapper with stopPropagation -->
            <div class="bio-content m-auto w-80 md:w-72 relative" on:click|stopPropagation
                tabindex="0"
                role="button"
                aria-label="Close bio panel"
                on:keydown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        closeBio();
                    }
                }}
            >
                <img class="object-cover object-top rounded-lg drop-shadow-md h-80 w-80 md:h-60 my-6 md:w-72" 
                    alt="Team Member headshot" 
                    src="{slice.primary.team_members.find(member => member.name === selectedBio)?.head_shot.url}" />
                <h3 class="text-2xl font-bold">{slice.primary.team_members.find(member => member.name === selectedBio)?.name}</h3>
                <p class="text-sm pt-6">
                    <PrismicRichText field={slice.primary.team_members.find(member => member.name === selectedBio)?.biography} />
                </p>
                <!-- Close button -->
                <button class="absolute top-4 right-4 text-gray-400" on:click={closeBio}>X</button>
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
        background-size: cover;
        background-position: top;
        padding-bottom: 35%; /* Maintain 4:3 aspect ratio */
        overflow: hidden;
        cursor: pointer;
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
        filter: grayscale(0%);
        transform: translateY(-2px);
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

    .member-card:hover .overlay,
    .member-card:focus .overlay {
        opacity: 1;
    }

    .bio-content button {
        position: fixed;
        top: 10px;
        right: 20px;
        background: transparent;
        border: none;
        cursor: pointer;
        font-size: 1.5rem;
        color: #fff;
    }

    .bio-panel h1, h2, h3, h4, h5 {
        color: white;
        padding-top: 4px;
    }
</style>
