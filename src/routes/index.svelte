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

	// Custom imports
    import CarouselSlide from '../lib/CarouselSlide.svelte';

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
    <div class="flex flex-col justify-center items-center mt-[6rem] md:mt-[7rem] text-primary-light dark:text-primary-dark">
        <div class="flex sm:flex-col md:flex-row justify-center items-center text-center mb-10 md:mb-8">
            <h1 class="font-header text-7xl sm:text-7xl md:text-8xl xl:text-8xl pt-3 pr-4 sm:pt-8 md:pr-5">25</h1>
            <h1 class="font-header text-7xl sm:text-7xl md:text-8xl xl:text-8xl "> To Life Classic</h1>
        </div>
        <p class="text-base text-center md:text-xl lg:text-2xl ">13 years after its shutdown, <i>25 To Life</i> multiplayer mode has come back.</p>
        <p class="text-base text-center md:text-xl lg:text-2xl mt-2">Choose your side in action-packed street battles between gangsters and the police.</p>
        <p class="text-base text-center md:text-xl lg:text-2xl mt-2">The game is available on Phoenix Network launcher.</p>
    </div>

    <!--Download button-->
    <a href="/install" class="my-10 md:my-6">
        <button class="font-body transition text-white dark:text-primary-dark text-2xl rounded-md shadow-md
            bg-accent-primary-light hover:bg-accent-secondary-light dark:bg-accent-primary-dark dark:hover:bg-accent-secondary-dark px-4 pb-2 pt-2">
            Install now
        </button>
    </a>
    
    <!-- Carousel -->
    <div class="w-2/3 xl:mt-4 mb-[80px] sm:mb-[80px] md:mb-[80px] lg:mb-[40px] xl:mb-[15px] 2xl:mb-[10px] 
        max-h-[200px] sm:max-h-[250px] md:max-h-[270px] lg:max-h-[290px] xl:max-h-[300px] 2xl:max-h-[400px]">
        <svelte:component this={Carousel} {...props}>
            {#each slides as slide }
                <CarouselSlide {slide} />
            {/each}
        </svelte:component>
    </div>
    
    <!-- Headlines -->
    <div class="flex flex-col text-primary-light dark:text-primary-dark items-center w-2/3 xs:mt-30 sm:mt-20 xl:mt-6 mb-14">
        <div class="flex flex-row justify-center text-center w-full">
            <div class="flex flex-col w-1/2 mx-4 lg:mx-10">
                <h2 class="font-header text-2xl sm:text-3xl lg:text-6xl xl:text-6xl">About</h2>
                <p class="font-body text-sm text-justify sm:text-lg md:text-xl lg:text-2xl mt-8">Eidos Interactive terminated online services for <i>25 To Life</i> in 2009.</p>
                <p class="font-body text-justify text-sm sm:text-lg md:text-xl lg:text-2xl mt-2">
                    <i>25 To Life Classic</i> is a revival project for 25 To Life online multiplayer mode (PC) led by 
                    <a href="https://phoenixnetwork.net" class="hover:text-accent-primary-light dark:hover:text-accent-secondary-dark">
                        <b>Phoenix Network</b>.
                    </a>
                    We developed our own servers to emulate the original service and happily host them for you. For free.
                </p>
            </div>
            <div class="flex flex-col w-1/2 mx-10">
                <h2 class="font-header text-2xl sm:text-3xl lg:text-6xl xl:text-6xl">Download</h2>
                <p class="font-body text-justify text-sm sm:text-lg md:text-xl lg:text-2xl mt-8">Download the Phoenix Network launcher, then register and log into your Phoenix account to install the online version of the game.</p>
                <p class="font-body text-justify text-sm sm:text-lg md:text-xl lg:text-2xl mt-2">Before you do, make sure to read our <a href="/install" class="hover:text-accent-primary-light dark:hover:text-accent-secondary-dark"><b>installation guide</b>.</a></p>
                
            </div>
        </div>
        <div class="flex flex-col justify-center items-center text-center w-1/2 m-10 ">
            <h2 class="font-header text-2xl sm:text-3xl lg:text-6xl xl:text-6xl">Credits</h2>
            <p class="font-body text-sm text-justify sm:text-lg md:text-xl lg:text-2xl mt-8">Special thanks to these online people below whose contributions and initiative were essential for this project:</p>
            <h3 class="font-header text-center text-lg md:text-xl lg:text-4xl mt-3">
                Warranty Voider
            </h3>
            <h3 class="font-header text-center text-lg md:text-xl lg:text-4xl mt-3">
                xXBeefyDJXx
            </h3>
            <h3 class="font-header text-center text-lg md:text-xl lg:text-4xl mt-3">
                LifeCoder
            </h3>
            <h3 class="font-header text-center text-lg md:text-xl lg:text-4xl mt-3">
                Hayzrem
            </h3>
            <h3 class="font-header text-center text-lg md:text-xl lg:text-4xl mt-3">
                Ozzymer
            </h3>
        </div>
    </div>
</div>
        