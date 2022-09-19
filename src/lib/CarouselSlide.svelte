<script>
    // Slide data prop
    export let slide;

    // Image file path
    const imgPath = `/carousel/${slide.image}`;
    // Url flag
    const renderUrl = slide.url != null && slide.url != '';
</script>

<div class="flex flex-col bg-bg-primary-light dark:bg-bg-primary-dark overflow-clip ">
    {#if renderUrl}
    <a class="w-full h-full h-max-[400px] hover:brightness-125"href={slide.url}>
        <img class="w-full h-full " src={imgPath} alt={slide.alt}>
    </a>
    {:else}
        <img class="w-full h-full h-max-[400px]" src={imgPath} alt={slide.alt}>
    {/if}
</div>
<div class="flex flex-col bg-bg-primary-light dark:bg-bg-primary-dark justify-center items-center">
    <div class="text-center dark:opacity-50 text-primary-light dark:text-primary-dark w-full px-4">
        <h1 class="font-header sm:text-2xl md:text-3xl lg:text-5xl"><b>{slide.title}</b></h1>
        {#each slide.paragraphs as paragraph, i }
            {#if i == 0}
                <p class="font-body text-sm sm:text-lg md:text-2xl sm:mt-2 md:mt-6 md:mb-2">{paragraph}</p>
            {:else}
                <p class="font-body text-sm sm:text-lg md:text-2xl sm:mb-0 md:mb-2">{paragraph}</p>
            {/if}
        {/each}
    </div>
</div>