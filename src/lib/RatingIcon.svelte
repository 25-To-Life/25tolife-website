<script>
    import Tooltip, { Wrapper } from '@smui/tooltip';

    // player's rating
    export let rating;

    const starIcons = [
        '/icons/Star1.PNG',
        '/icons/Star2.PNG',
        '/icons/Star3.PNG',
        '/icons/Star4.PNG',
        '/icons/Star5.PNG',
    ];
</script>

<!-- Display if rating is 1600 or more -->
{#if 1600 <= rating}
    <Wrapper>
        <!-- 1 star -->
        {#if 1600 <= rating && rating < 1700}
        <div class="flex flex-row justify-center items-center ">
            <img src={starIcons[0]} alt="1-star icon" class="w-4 md:w-8 h-4 md:h-8">
        </div>
        <Tooltip>Player reached rating 1600</Tooltip>
        {/if}
        <!-- 2 stars -->
        {#if 1700 <= rating && rating < 1800}
        <div class="flex flex-row justify-center items-center">
            <img src={starIcons[1]} alt="2-star icon" class="w-4 md:w-8 h-4 md:h-8">
        </div>
        <Tooltip>Player reached rating 1700</Tooltip>
        {/if}
        <!-- 3 stars -->
        {#if 1800 <= rating && rating < 2000}
        <div class="flex flex-row justify-center items-center">
            <img src={starIcons[2]} alt="3-star icon" class="w-4 md:w-8 h-4 md:h-8">
        </div>
        <Tooltip>Player reached rating 1800</Tooltip>
        {/if}
        <!-- 4 stars -->
        {#if 2000 <= rating && rating < 2200}
        <div class="flex flex-row justify-center items-center">
            <img src={starIcons[3]} alt="4-star icon" class="w-4 md:w-8 h-4 md:h-8">
        </div>
        <Tooltip>Player reached rating 2000</Tooltip>
        {/if}
        <!-- 5 stars -->
        {#if 2200 <= rating}
        <div class="flex flex-row justify-center items-center">
            <img src={starIcons[4]} alt="5-star icon" class="w-4 md:w-8 h-4 md:h-8">
        </div>
        <Tooltip>Player reached rating 2200</Tooltip>
        {/if}
    </Wrapper>
{/if}

