<script>
    import Tooltip, { Wrapper } from '@smui/tooltip';

    // player data
    export let stats;
    
    // icon size flag
    export let small = false;   
    const iconStyle = small ? "w-3 md:w-6 h-3 md:h-6" : "w-4 md:w-8 h-4 md:h-8";

    // hyphen if draw
    export let hyphened;
</script>

{#if stats.crim_victories == stats.law_victories && stats.crim_time == stats.law_time}
    {#if hyphened}
    <div class="flex flex-row justify-center items-center pb-[4px]">
    -
    </div>
    {/if}
{:else if (stats.crim_victories == stats.law_victories && stats.crim_time > stats.law_time) || (!(stats.crim_victories == stats.law_victories) && stats.crim_victories > stats.law_victories)}
<Wrapper>
    <div class="flex flex-row justify-center items-center">
        <img src='/icons/pistol_icon.png'
            alt='Pistol icon'
            class={iconStyle}
        >
    </div>
    <Tooltip>Prefers criminals</Tooltip>
</Wrapper>
{:else}
<Wrapper>
    <div class="flex flex-row justify-center items-center">
        <img src='/icons/badge_icon.png'
            alt='Badge icon'
            class={iconStyle}
        >
    </div>
    <Tooltip>Prefers law enforcement</Tooltip>
</Wrapper>
{/if}