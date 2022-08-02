<script>
    export let player;
    const stats = player.stats;
    
    const criminalWins = stats.crim_victories > stats.law_victories;
    const winsDraw = stats.crim_victories == stats.law_victories;
    const criminalTime = stats.crim_time > stats.law_time;
    const timeDraw = stats.crim_time == stats.law_time;
</script>

{#if winsDraw && timeDraw}
    <div class="flex flex-row justify-center items-center pb-[4px]">
        -
    </div>
{:else if (winsDraw && criminalTime) || (!winsDraw && criminalWins) }
    <div class="flex flex-row justify-center items-center">
        <img src='src/lib/assets/icons/pistol_icon.png'
            alt='Pistol icon'
            class="w-6 h-6 "
        >
    </div>
{:else}
    <div class="flex flex-row justify-center items-center">
        <img src='src/lib/assets/icons/badge_icon.png'
            alt='Badge icon'
            class="w-6 h-6 "
        >
    </div> 
{/if}