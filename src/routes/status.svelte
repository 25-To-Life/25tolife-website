<script context="module">
    export async function load({ fetch }) {
        // Fetch sorted players from /api/players
        let res = await fetch('api/live');
        const liveData = await res.json();

        return {
            props: {
                players: liveData.players,
                lobbies: liveData.lobbies,
            }
        };
    }
</script>

<script>
    import DataTable, {
        Head,
        Body,
        Row,
        Cell,
        Label,
    } from '@smui/data-table';
    
    // live data from TTL backend
    export let players;
    export let lobbies;

    let backendOnline = players !== null && lobbies !== null;
</script>

<svelte:head>
    <title>Status | 25 To Life Classic</title>
    <meta name="description" content="Live status of 25 To Life Classic game servers.">
    <meta name="og:site_name" content="25 To Life Classic">
    <meta name="og:image" content="/ttlc_logo_white.png">
    <meta name="og:image:alt" content="25 To Life Classic logo">
</svelte:head>

<!--Main container-->
<div class="flex flex-col justify-center items-center mx-4 text-primary-light dark:text-primary-dark">
    <!-- Headlines -->
    <div class="flex flex-col justify-center items-center mt-[6rem] md:mt-[7rem]">
        <a href="/" class="flex hover:brightness-90 justify-center">
            <img src='/ttlc_logo.png'
                alt='25 To Life Classic logo'
                class="mt-[50px] mb-9 mx-4 w-3/4"
            >
        </a>
        <div class="flex flex-col justify-center items-center text-center mb-2 md:mb-3">
            <h1 class="font-header text-5xl sm:text-7xl md:text-8xl xl:text-8xl ">Status</h1>
        </div>
    </div>
    {#if !backendOnline}
    <div class="flex flex-col justify-center text-center w-3/4 xl:w-1/2 max-w-3/4 mb-6">
        <p class="text-lg md:text-xl lg:text-2xl mt-6 md:mt-8 xl:mt-10 mb-4 md:mb-6">The game servers are currently <b>offline</b>.</p>
        <p class="text-lg md:text-xl lg:text-2xl mb-4 md:mb-6">This is likely due to a maintenance.</p>
        <p class="text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 xl:mb-10">Check our Discord for more information.</p>
        <div class="flex flex-col justify-center items-center text-center mb-4 md:mb-4">
            <h1 class="font-header text-5xl sm:text-7xl md:text-8xl xl:text-8xl ">Lobbies</h1>
        </div>
        <p class="text-lg md:text-xl lg:text-2xl mt-6 md:mt-8 xl:mt-10 mb-4 md:mb-6">Currently no lobbies can be created for PC or PS2.</p>
        <p class="text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 xl:mb-10">You will not be able to log into the game's multiplayer menu at the moment.</p>
    </div>
    {:else}
    <div class="flex flex-col justify-center text-center w-3/4 xl:w-1/2 max-w-3/4">
        <p class="text-lg md:text-xl lg:text-2xl mt-4 md:mt-6 xl:mt-10">The game servers are currently <b>{backendOnline ? "online" : "offline"}</b>.</p>
    </div>
    <div class="flex flex-col justify-center text-center w-3/4 xl:w-1/2 max-w-3/4 mb-6">
        <p class="text-lg md:text-xl lg:text-2xl mx-4 mt-2 md:mt-4 xl:mt-6">PC players: {players.filter(p => p.platform == "PC").length}</p>
        <p class="text-lg md:text-xl lg:text-2xl mx-4 mt-2 md:mt-4 xl:mt-5">PS2 players: {players.filter(p => p.platform == "PS2").length}</p>
    </div>
    <!-- PC lobbies -->
    <div class="flex flex-col justify-center items-center text-center mb-4 md:mb-4">
        <h1 class="font-header text-5xl sm:text-7xl md:text-8xl xl:text-8xl ">Lobbies</h1>
    </div>
    <div class="flex flex-col justify-center items-center mt-2 md:mt-4 xl:mt-8">
        <h2 class="text-3xl sm:text-4xl md:text-5xl xl:text-6xl mt-2 mb-4 sm:mb-6">
            PC
        </h2>
        {#if lobbies.filter(l => l.platform == "PC").length == 0}
        <p class="text-lg md:text-xl lg:text-2xl mx-4 mb-6">There are no PC lobbies online right now.</p>
        {:else}
        <DataTable table$aria-label="Player leaderboard">
            <Head>
                <Row>
                    <Cell columnId="lobby">
                        <Label>Lobby</Label>
                    </Cell>
                    <Cell columnId="host">
                        <Label>Host</Label>
                    </Cell>
                    <Cell columnId="map">
                        <Label>Map</Label>
                    </Cell>
                    <Cell columnId="game_mode">
                        <Label>Mode</Label>
                    </Cell>
                    <Cell columnId="players">
                        <Label>Players</Label>
                    </Cell>
                    <Cell columnId="status">
                        <Label>Status</Label>
                    </Cell>
                    <Cell columnId="mmr">
                        <Label>MMR</Label>
                    </Cell>
                </Row>
            </Head>
            <Body>
                {#each lobbies.filter(l => l.platform == "PC") as lobby, i}
                    <Row>
                        <Cell>{lobby.name}</Cell>
                        <Cell>
                            <a href={`/stats/${lobby.owner}`} class="hover:text-accent-primary-light dark:hover:text-accent-secondary-dark">
                                {lobby.owner}
                            </a>
                        </Cell>
                        <Cell>{lobby.map}</Cell>
                        <Cell>{lobby.game_mode}</Cell>
                        <Cell>{lobby.connected_players}/{lobby.max_players}</Cell>
                        <Cell>{lobby.round !== null ? "Playing" : "Pre-game" }</Cell>
                        <Cell>
                            {lobby.ranked 
                                ? (lobby.round != null ? lobby.round.mmr : lobby.mmr)
                                : "Unranked"
                            }
                        </Cell>
                    </Row>
                {/each}
            </Body>
        </DataTable>
        {/if}

        <h2 class="text-3xl sm:text-4xl md:text-5xl xl:text-6xl mt-2 mb-4 sm:mb-6">
            PS2
        </h2>
        {#if lobbies.filter(l => l.platform == "PS2").length == 0}
        <p class="text-lg md:text-xl lg:text-2xl mx-4 mb-6">There are no PS2 lobbies online right now.</p>
        {:else}
        <DataTable table$aria-label="Player leaderboard">
            <Head>
                <Row>
                    <Cell columnId="lobby">
                        <Label>Lobby</Label>
                    </Cell>
                    <Cell columnId="host">
                        <Label>Host</Label>
                    </Cell>
                    <Cell columnId="map">
                        <Label>Map</Label>
                    </Cell>
                    <Cell columnId="game_mode">
                        <Label>Mode</Label>
                    </Cell>
                    <Cell columnId="players">
                        <Label>Players</Label>
                    </Cell>
                    <Cell columnId="status">
                        <Label>Status</Label>
                    </Cell>
                    <Cell columnId="mmr">
                        <Label>MMR</Label>
                    </Cell>
                </Row>
            </Head>
            <Body>
                {#each lobbies.filter(l => l.platform == "PS2") as lobby, i}
                    <Row>
                        <Cell>{lobby.name}</Cell>
                        <Cell>
                            <a href={`/stats/${lobby.owner}`} class="hover:text-accent-primary-light dark:hover:text-accent-secondary-dark">
                                {lobby.owner}
                            </a>
                        </Cell>
                        <Cell>{lobby.map.replace('MP','')}</Cell>
                        <Cell>{lobby.game_mode}</Cell>
                        <Cell>{lobby.connected_players}/{lobby.max_players}</Cell>
                        <Cell>{lobby.round !== null ? "Playing" : "Pre-game" }</Cell>
                        <Cell>
                            {lobby.ranked 
                                ? (lobby.round != null ? lobby.round.mmr : lobby.mmr)
                                : "Unranked"
                            }
                        </Cell>
                    </Row>
                {/each}
            </Body>
        </DataTable>
        {/if}
        
    </div>
    {/if}
    
</div>
