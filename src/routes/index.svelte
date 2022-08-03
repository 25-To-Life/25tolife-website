<script>
	// SMUI imports
    import Button, { Label } from '@smui/button';
    import IconButton from '@smui/icon-button';
    import List, { Item, Text, Graphic, Separator, Subheader } from '@smui/list';
	// Custom imports
    import Carousel from 'svelte-carousel/src/components/Carousel/Carousel.svelte';

	// UI states
    let carousel; // for calling methods of the carousel instance
    
	// Handlers

</script>

<svelte:head>
    <title>Home | 25 To Life Classic</title>
</svelte:head>

<!--Main container-->
<div class="flex flex-col justify-center items-center">
    <!-- Headlines -->
    <div class="flex flex-col justify-center items-center mt-[5rem] text-[#c1c1c1]">
        <div class="flex flex-row justify-center items-center">
            <h1 class="font-header text-8xl pt-8 pr-5">25</h1>
            <h1 class="font-header text-8xl "> To Life Classic</h1>
        </div>
        <p class="text-2xl mt-6">13 years after its shutdown, <i>25 To Life</i> multiplayer mode has come back.</p>
        <p class="text-2xl mt-2">Choose your side in action-packed street battles between gangsters and the police.</p>
        <p class="text-2xl mt-2">The game is available on Phoenix Network launcher.</p>
    </div>

    <!--Download button-->
    <a href="https://phoenixnetwork.net">
        <div class="font-body text-[#c1c1c1] text-2xl bg-orange-600 hover:bg-orange-500 px-4 pb-2 pt-2 mt-4 rounded-md shadow-md">
            Install now
        </div>
    </a>
    
    <!-- Carousel -->
    <div class="w-2/3 my-6">
        <Carousel
            autoplay
            autoplayDuration={7000}
            pauseOnFocus
            arrows={false}
        >   
            <div class="flex justify-center items-center bg-[#333] h-[400px]">1</div>
            <div class="flex justify-center items-center bg-[#333]">2</div>
            <div class="flex justify-center items-center bg-[#333]">3</div>
        </Carousel>
    </div>     
</div>
        