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
    import DataTable, {
        Head,
        Body,
        Row,
        Cell,
        Label,
    } from '@smui/data-table';
    import Rank from '../lib/Rank.svelte';
    import Side from '../lib/Side.svelte';
    
    // player list
    export let players;
</script>

<svelte:head>
    <title>Leaderboard | 25 To Life Classic</title>
</svelte:head>

<!--Main container-->
<div class="flex flex-col justify-center items-center">
    <!--Centered container-->
    <div class="flex flex-col justify-center w-1/2">
        <!--Paragraphs-->
        <div class="flex flex-col justify-center items-center text-center text-primary-light dark:text-primary-dark mt-[6rem] mb-6">
            <h1 class="font-header text-6xl sm:text-7xl md:text-8xl xl:text-8xl mt-4 mb-2 md:mb-3">ranking system</h1>
            <p class="text-base text-center md:text-xl lg:text-2xl mt-8">Win games to climb. Don't lose. And always use the radios.</p>
            <p class="text-base text-center md:text-xl lg:text-2xl mt-2">We keep it OG. The ranking system is back unchanged.</p>
            <p class="text-base text-center md:text-xl lg:text-2xl mt-2">You can read on the ELO rating calculation specifics
                <a class="hover:text-accent-primary-light dark:hover:text-accent-secondary-dark"
                    href="https://web.archive.org/web/20071223122600/http://stats.25tolife.com/faq/#qprating">
                    <b>here</b>.
                </a>
            </p>
            <h1 class="font-header text-6xl sm:text-7xl md:text-8xl xl:text-8xl mt-4 mb-2 md:mb-3">PC</h1>
            <p class="font-body text-base text-center md:text-xl lg:text-2xl mt-8 mb-2 md:mb-3">Keyboard-smashing GOATs and OGs.</p>
        </div>
    
        <!--PC Table-->
        <div class="flex flex-col justify-center items-center">
            <DataTable table$aria-label="PC player leaderboard">
                <Head>
                    <Row>
                        <Cell columnId="rank">
                            <Label>Rank</Label>
                        </Cell>
                        <Cell columnId="player">
                            <Label>Player</Label>
                        </Cell>
                        <Cell columnId="side">
                            <Label>Side</Label>
                        </Cell>
                        <Cell>Clan</Cell>
                        <Cell columnId="wins">
                            <Label>Wins</Label>
                        </Cell>
                        <Cell columnId="losses">
                            <Label>Losses</Label>
                        </Cell>
                        <Cell columnId="score">
                            <Label>Rating</Label>
                        </Cell>
                    </Row>
                </Head>
                <Body>
                    {#each players.pc as player, i}
                        <Row>
                            <Cell>
                                <Rank rank={i+1} />
                            </Cell>
                            <Cell numeric>
                                <a href={`/stats/${player.username}`} class="hover:text-accent-primary-light dark:hover:text-accent-secondary-dark">
                                    {player.username}
                                </a>
                            </Cell>
                            <Cell>
                                <Side stats={player.stats_pc} hyphened />
                            </Cell>
                            <Cell numeric>{player.clan_tag ?? '-'}</Cell>
                            <Cell>{player.stats_pc.crim_victories + player.stats_pc.law_victories}</Cell>
                            <Cell>{player.stats_pc.crim_defeats + player.stats_pc.law_defeats}</Cell>
                            <Cell>{player.stats_pc.ranking}</Cell>
                        </Row>
                    {/each}
                </Body>
            </DataTable>
        </div>

        <!-- PS2 -->
        <div class="flex flex-col justify-center items-center text-center text-primary-light dark:text-primary-dark mb-6">
            <h1 class="font-header text-6xl sm:text-7xl md:text-8xl xl:text-8xl mt-4 mb-2 md:mb-3">PS2</h1>
            <p class="font-body text-base text-center md:text-xl lg:text-2xl mt-8 mb-2 md:mb-3">Controller-wielding winnaz.</p>
        </div>

        <!--PS2 Table-->
        <div class="flex flex-col justify-center items-center">
            <DataTable table$aria-label="PS2 player leaderboard">
                <Head>
                    <Row>
                        <Cell columnId="rank">
                            <Label>Rank</Label>
                        </Cell>
                        <Cell columnId="player">
                            <Label>Player</Label>
                        </Cell>
                        <Cell columnId="side">
                            <Label>Side</Label>
                        </Cell>
                        <Cell>Clan</Cell>
                        <Cell columnId="wins">
                            <Label>Wins</Label>
                        </Cell>
                        <Cell columnId="losses">
                            <Label>Losses</Label>
                        </Cell>
                        <Cell columnId="score">
                            <Label>Rating</Label>
                        </Cell>
                    </Row>
                </Head>
                <Body>
                    {#each players.ps2 as player, i}
                        <Row>
                            <Cell>
                                <Rank rank={i+1} />
                            </Cell>
                            <Cell numeric>
                                <a href={`/stats/${player.username}`} class="hover:text-accent-primary-light dark:hover:text-accent-secondary-dark">
                                    {player.username}
                                </a>
                            </Cell>
                            <Cell>
                                <Side stats={player.stats_ps2} hyphened />
                            </Cell>
                            <Cell numeric>{player.clan_tag ?? '-'}</Cell>
                            <Cell>{player.stats_ps2.crim_victories + player.stats_ps2.law_victories}</Cell>
                            <Cell>{player.stats_ps2.crim_defeats + player.stats_ps2.law_defeats}</Cell>
                            <Cell>{player.stats_ps2.ranking}</Cell>
                        </Row>
                    {/each}
                </Body>
            </DataTable>
        </div>

    </div>
</div>
