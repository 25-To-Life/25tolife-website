<script>
    export let rank;

    const rankIcons = [
        'src/lib/assets/icons/Rank1.png',
        'src/lib/assets/icons/Rank2.png',
        'src/lib/assets/icons/Rank3.png',
        'src/lib/assets/icons/Rank4.png',
        'src/lib/assets/icons/Rank5.png',
        'src/lib/assets/icons/Rank6.png',
        'src/lib/assets/icons/Rank7.png',
        'src/lib/assets/icons/Rank8.png',
        'src/lib/assets/icons/Rank9.png',
        'src/lib/assets/icons/Rank10.png'
    ];
</script>

{#if rank <= 9}
    <div class="flex flex-row justify-center items-center ">
        <img src={rankIcons[rank]} alt="Rank icon" class="h-[32px] w-[32px]">
    </div>
{:else}
    <div class="flex flex-row justify-center items-center">
        {rank+1}
    </div>
{/if}
