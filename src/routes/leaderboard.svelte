<script>
    import DataTable, {
        Head,
        Body,
        Row,
        Cell,
        Label,
    } from '@smui/data-table';
    import IconButton from '@smui/icon-button';
    import Rank from '../lib/components/Rank.svelte';
    import Side from '../lib/components/Side.svelte';
    
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
        <div class="flex flex-col justify-center items-center text-center text-[#c1c1c1] mt-[6rem] mb-6">
            <h1 class="font-header text-6xl sm:text-7xl md:text-8xl xl:text-8xl mt-4 mb-2 md:mb-3">ranking system</h1>
            <p class="text-base text-center md:text-xl lg:text-2xl mt-8">Win games to climb. Don't lose. And always use the radios.</p>
            <p class="text-base text-center md:text-xl lg:text-2xl mt-2">We keep it OG. The ranking system is back unchanged.</p>
            <p class="text-base text-center md:text-xl lg:text-2xl mt-2">You can read on the ELO rating calculation specifics
                <a class="hover:text-[#3f3f46]"
                    href="https://web.archive.org/web/20071223122600/http://stats.25tolife.com/faq/#qprating">
                    <b>here</b>.
                </a>
            </p>
            <h1 class="font-header text-6xl sm:text-7xl md:text-8xl xl:text-8xl mt-4 mb-2 md:mb-3">leaderboard</h1>
            <p class="font-body text-base text-center md:text-xl lg:text-2xl mt-8 mb-2 md:mb-3">The GOATs and OGs. Tryharding nerds. Da winnaz.</p>
        </div>
    
        <!--Table-->
        <div class="flex flex-col justify-center items-center">
            <DataTable table$aria-label="Player leaderboard">
                <Head>
                    <Row>
                        <!--
                            Note: whatever you supply to "columnId" is
                            appended with "-status-label" and used as an ID
                            for the hidden label that describes the sort
                            status to screen readers.
    
                            You can localize those labels with the
                            "sortAscendingAriaLabel" and
                            "sortDescendingAriaLabel" props on the DataTable.
                        -->
                        <Cell columnId="rank">
                            <!-- For numeric columns, icon comes first. -->
                            <!-- <IconButton class="material-icons">arrow_upward</IconButton> -->
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
                            <Label>Elo</Label>
                        </Cell>
                    </Row>
                </Head>
                <Body>
                    {#each players as player, i}
                        <Row>
                            <Cell>
                                <Rank rank={i} />
                            </Cell>
                            <Cell numeric>{player.username}</Cell>
                            <Cell>
                                <Side {player} />
                            </Cell>
                            <Cell numeric>{player.clan_tag ?? '-'}</Cell>
                            <Cell>{player.stats.crim_victories + player.stats.law_victories}</Cell>
                            <Cell>{player.stats.crim_defeats + player.stats.law_defeats}</Cell>
                            <Cell>{player.stats.ranking}</Cell>
                        </Row>
                    {/each}
                </Body>
            </DataTable>
        </div>
    </div>
</div>

