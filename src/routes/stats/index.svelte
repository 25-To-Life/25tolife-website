<script context="module">
    
    export async function load({ fetch }) {
        // Fetch sorted players from /api/players
        let res = await fetch('api/players');
        const players = await res.json();

        return {
            props: {
                players,
            }
        };
    }
    
</script>

<script>
    import Autocomplete from '@smui-extra/autocomplete';
    import LayoutGrid, { Cell } from '@smui/layout-grid';
    import TopPlayerCard from '../../lib/TopPlayerCard.svelte';

    // UI states

    // player data
    export let players;

    // player names for autocompletion
    let autocompleted = [];

    // player set is the same on PC and PS2
    players.pc.map(player => {
        autocompleted.push(player.username);
    });
    autocompleted.sort();
    
    // input text
    let input = '';

    // top 9 pc players
    let topPcPlayers = players.pc.slice(0,3);

    // top 9 ps2 players
    let topPs2Players = players.ps2.slice(0,3);

    // Handlers
    function handleSearch() {
        // Update input value to whatever is typed in on button click
        input = document.getElementsByClassName("mdc-text-field__input")[0].value;
    }
</script>

<svelte:head>
    <title>Stats | 25 To Life Classic</title>
</svelte:head>

<!--Main container-->
<div class="flex flex-col justify-center items-center mx-4 text-primary-light dark:text-primary-dark">
    <!-- Stats -->
    <div id='faq' class="flex flex-col justify-center items-center mt-[6rem] md:mt-[7rem]">
        <div class="flex flex-col justify-center items-center text-center mb-2 md:mb-3">
            <h1 class="font-header text-5xl sm:text-7xl md:text-8xl xl:text-8xl">
                Stats
            </h1>
        </div>
    </div>
    <div class="flex flex-col justify-center text-center w-3/4 xl:w-1/2 max-w-3/4 ">
        <p class="text-lg md:text-xl lg:text-2xl my-4 md:my-6 xl:my-10">
            Search for a player profile.
        </p>
        <div class="flex flex-row justify-center items-center mb-6">
            <Autocomplete 
                options={autocompleted}
                textfield$variant="outlined"
                bind:value={input}
                label="Player"
            />
            <!-- See stats button-->
            <a href={`/stats/${input}`} class="mx-4 mb-0 h-full font-body text-white dark:text-primary-dark text-base sm:text-xl xl:text-2xl"> 
                {#if input !== '' && input !== undefined}
                    <button on:click={handleSearch} class="transition bg-accent-primary-light hover:bg-accent-secondary-light dark:bg-accent-primary-dark dark:hover:bg-accent-secondary-dark h-full px-4 pb-2 pt-2 rounded-md shadow-md">
                        See stats
                    </button>  
                {:else}
                    <button disabled class="transition bg-bg-secondary-light dark:bg-bg-secondary-dark text-primary-dark dark:text-primary-dark h-full px-4 pb-2 pt-2 rounded-md shadow-md">
                        See stats
                    </button>
                {/if}
            </a>
        </div>
        <h2 class="text-2xl sm:text-4xl md:text-5xl mt-4">Top 3 (PC)</h2>
        <div class="flex flex-row justify-center items-center">
            <LayoutGrid>
                {#each topPcPlayers as player, i}
                    <Cell>
                        <TopPlayerCard {player} stats={player.stats_pc} rank={i+1} />
                    </Cell>
                {/each}
            </LayoutGrid>
        </div>
        <h2 class="text-2xl sm:text-4xl md:text-5xl">Top 3 (PS2)</h2>
        <div class="flex flex-row justify-center items-center mb-5">
            <LayoutGrid>
                {#each topPs2Players as player, i}
                    <Cell>
                        <TopPlayerCard {player} stats={player.stats_ps2} rank={i+1} />
                    </Cell>
                {/each}
            </LayoutGrid>
        </div>
    </div>
</div>