<script>
    import Tooltip, { Wrapper } from '@smui/tooltip';

    // rank number
    export let rank;
    // if a hash should be added in front of 11+ ranks
    export let hashed;

    const rankIcons = [
        '/icons/Rank1.png',
        '/icons/Rank2.png',
        '/icons/Rank3.png',
        '/icons/Rank4.png',
        '/icons/Rank5.png',
        '/icons/Rank6.png',
        '/icons/Rank7.png',
        '/icons/Rank8.png',
        '/icons/Rank9.png',
        '/icons/Rank10.png'
    ];
</script>

<Wrapper>
    {#if rank <= 10}
        <div class="flex flex-row justify-center items-center ">
            <img src={rankIcons[rank-1]} alt="Rank icon" class="h-4 md:h-8 w-4 md:w-8">
        </div>
    {:else}
        {#if hashed}
        <div class="flex flex-row justify-center items-center text-base md:text-xl font-body">
            #{rank}
        </div>
        {:else}
        <div class="flex flex-row justify-center items-center">
            {rank}
        </div>
        {/if}
    {/if}
    <Tooltip>Rank {rank}</Tooltip>
</Wrapper>