<script>
    import Tooltip, { Wrapper } from '@smui/tooltip';

    // rank number
    export let rank;
    // if a hash should be added in front of 11+ ranks
    export let hashed;

    const rankIcons = [
        '/src/lib/assets/icons/Rank1.png',
        '/src/lib/assets/icons/Rank2.png',
        '/src/lib/assets/icons/Rank3.png',
        '/src/lib/assets/icons/Rank4.png',
        '/src/lib/assets/icons/Rank5.png',
        '/src/lib/assets/icons/Rank6.png',
        '/src/lib/assets/icons/Rank7.png',
        '/src/lib/assets/icons/Rank8.png',
        '/src/lib/assets/icons/Rank9.png',
        '/src/lib/assets/icons/Rank10.png'
    ];
</script>

<Wrapper>
    {#if rank <= 10}
        <div class="flex flex-row justify-center items-center ">
            <img src={rankIcons[rank-1]} alt="Rank icon" class="h-4 md:h-8 w-4 md:w-8">
        </div>
    {:else}
        <div class="flex flex-row justify-center items-center">
            {#if hashed}
                #{rank}
            {:else}
                {rank}
            {/if}
        </div>
    {/if}
    <Tooltip>Rank {rank}</Tooltip>
</Wrapper>