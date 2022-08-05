<script context="module">
    
    export async function load({ fetch }) {
        // Fetch carousel slides from /api/slides
        let res = await fetch('api/slides');
        const slides = await res.json();

        return {
            props: {
                slides,
            }
        };
    }
</script>

<script>
    // Svelte imports
    import { onMount } from 'svelte';

	// SMUI imports
    import Button, { Label } from '@smui/button';
    import IconButton from '@smui/icon-button';
    import List, { Item, Text, Graphic, Separator, Subheader } from '@smui/list';

	// Custom imports
    import CarouselSlide from '../lib/components/CarouselSlide.svelte';

    // Props
    export let slides;

	// UI states

    // Imported as a dynamic component
    let Carousel; 

    // Carousel props for dynamic component (these control the behaviour)
    let props = {
        autoplay: true,
        autoplayDuration: 7000,
        pauseOnFocus: true,
        arrows: false,
        particlesToShow: 2,
        particlesToScroll: 2,
    };

	// Handlers

    // onMount with Carousel import (needed with SvelteKit)
    // Refer to https://github.com/vadimkorr/svelte-carousel/issues/27#issuecomment-851022295
    onMount(async () => {
        const module = await import('svelte-carousel');
        Carousel = module.default;
    });

</script>

<svelte:head>
    <title>Home | 25 To Life Classic</title>
</svelte:head>

<!--Main container-->
<div class="flex flex-col justify-center items-center mx-4">
    <!-- Headlines -->
    <div class="flex flex-col justify-center items-center mt-[6rem] md:mt-[5rem] text-[#c1c1c1]">
        <div class="flex sm:flex-col md:flex-row justify-center items-center text-center mb-10 md:mb-8">
            <h1 class="font-header text-7xl sm:text-7xl md:text-8xl xl:text-8xl pt-3 pr-4 sm:pt-8 md:pr-5">25</h1>
            <h1 class="font-header text-7xl sm:text-7xl md:text-8xl xl:text-8xl "> To Life Classic</h1>
        </div>
        <p class="text-base md:text-xl lg:text-2xl ">13 years after its shutdown, <i>25 To Life</i> multiplayer mode has come back.</p>
        <p class="text-base md:text-xl lg:text-2xl mt-2">Choose your side in action-packed street battles between gangsters and the police.</p>
        <p class="text-base md:text-xl lg:text-2xl mt-2">The game is available on Phoenix Network launcher.</p>
    </div>

    <!--Download button-->
    <a href="https://phoenixnetwork.net" class="my-10 md:my-6">
        <button class="font-body text-[#c1c1c1] text-2xl bg-orange-600 hover:bg-orange-500 px-4 pb-2 pt-2 rounded-md shadow-md">
            Install now
        </button>
    </a>
    
    <!-- Carousel -->
    <div class="w-2/3  xl:mt-4 mb-[70px] sm:mb-[50px] md:mb-[75px] lg:mb-[80px] xl:mb-[80px] 2xl:mb-[100px] max-h-[200px] sm:max-h-[250px] md:max-h-[270px] lg:max-h-[290px] xl:max-h-[300px] 2xl:max-h-[400px]">
        <svelte:component this={Carousel} {...props}>
            {#each slides as slide }
                <CarouselSlide {slide} />
            {/each}
        </svelte:component>
    </div>     
</div>
        