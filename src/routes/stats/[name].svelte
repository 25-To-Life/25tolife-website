<script>
    // SMUI imports
    import Tab, { Label } from '@smui/tab';
    import TabBar from '@smui/tab-bar';
    import Paper from '@smui/paper';
    import Tooltip, { Wrapper } from '@smui/tooltip';

    // Custom imports
    import Rank from '../../lib/Rank.svelte';
    import RatingIcon from '../../lib/RatingIcon.svelte';
    import Side from '../../lib/Side.svelte';
    import StatsContent from '../../lib/StatsContent.svelte';
    
    // faction state
    let factionTab = 'Total';

    // platform state
    let platformTab = 'PC';
    
    // player data
    export let player;

    // player PC rank
    export let rankPC;

    // player PS2 rank
    export let rankPS2;

    // Available platform tabs
    const platformTabs = ['PC', 'PS2'];

    // Available faction tabs
    const factionTabs = ['Total', 'Criminals', 'Law Enforcement'];
    
    // page title
    const title = player != null ? player.username : '404';
</script>

<svelte:head>
    <title>{title} | 25 To Life Classic</title>
    <meta name="description" content={"Ranked game statistics for " + title + "."}>
    <meta name="og:site_name" content="25 To Life Classic">
    <meta name="og:image" content="/ttlc_logo_white.png">
    <meta name="og:image:alt" content="25 To Life Classic logo">
</svelte:head>

{#if player != null}
    
    <!-- Stats page -->
    <div class="flex flex-col justify-center items-center mx-4 text-primary-light dark:text-primary-dark">
        <div class="flex flex-col justify-center items-center mt-[6rem] md:mt-[7rem] w-3/4">
            <div class="flex flex-col justify-center items-center text-center mb-2 md:mb-3 w-full">
                <!-- Stats container -->
                <div class="w-full sm:my-4 xl:my-6">
                    <!-- Stats card -->
                    <Paper color="primary">
                        <div class="flex flex-col items-center">
                            <!-- Platform tab bar -->
                            <div class="flex flex-col justify-center items-center sm:mt-2 w-full">
                                <TabBar tabs={platformTabs} let:tab bind:active={platformTab}>
                                    <Tab {tab} minWidth>
                                        <Label>
                                            <div class="xl:text-3xl">
                                                {tab}
                                            </div>
                                        </Label>
                                    </Tab>
                                </TabBar>
                            </div>
                            <!-- Header bar -->
                            <div class="flex flex-row justify-center items-center mt-2 xl:mt-4 xl:mb-8 w-full">
                                <!-- Name -->
                                <div class="flex flex-row font-header text-4xl sm:text-5xl md:text-7xl xl:text-8xl text-primary-light dark:text-primary-dark">
                                    {#if player.clan_tag != null}
                                    <div class="flex flex-row items-center">
                                        <Wrapper>
                                            <h1 class="font-body text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mr-2 xl:mr-5">
                                                [{player.clan_tag}]
                                            </h1>
                                            <Tooltip>Clan {player.clan_tag}</Tooltip>
                                        </Wrapper>
                                        <h1 class="text-2xl md:text-4xl lg:text-6xl xl:text-7xl pb-2 xl:pb-6">
                                            {player.username}
                                        </h1>
                                    </div>
                                    {:else}
                                    <h1 class="text-2xl md:text-4xl lg:text-6xl xl:text-7xl pb-2 xl:pb-6">
                                        {player.username}
                                    </h1>
                                    {/if}
                                    <div class="flex flex-col justify-center items-center text-primary-light dark:text-primary-dark mx-2 xl:mx-5">
                                        <!-- Icons row -->
                                        <div class="flex flex-row items-center mx-1">
                                            <div class="mr-1">
                                                <Rank rank={platformTab === "PC" ? rankPC : rankPS2} hashed />    
                                            </div>
                                            <div class="mr-1">
                                                <RatingIcon 
                                                    rating={platformTab === "PC"
                                                        ? player.stats_pc.ranking
                                                        : player.stats_ps2.ranking}
                                                />
                                            </div>
                                            <Side hyphened={false}
                                                stats={platformTab === "PC" ? player.stats_pc : player.stats_ps2}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Faction tab bar -->
                            <div class="flex flex-col justify-center items-center sm:mt-2 w-full">
                                <TabBar tabs={factionTabs} let:tab bind:active={factionTab}>
                                    <Tab {tab} minWidth>
                                        <Label>
                                            <div class="xl:text-3xl">
                                                {tab}
                                            </div>
                                        </Label>
                                    </Tab>
                                </TabBar>
                            </div>
                            <!-- Tab content -->
                            <div class="flex flex-col xl:w-3/4 w-full">
                                <StatsContent {factionTab} stats={platformTab === "PC" ? player.stats_pc : player.stats_ps2} />
                            </div>
                        </div>
                    </Paper>
                  </div>
            </div>
        </div>
    </div>
{:else}
    <!-- 404: player does not exist -->
    <div class="flex flex-col justify-center items-center h-full">
        <div class="flex flex-col justify-center items-center mt-[5rem] text-primary-light dark:text-primary-dark">
            <div class="flex flex-col justify-center items-center mb-[100px]">
                <a href="/" class="flex hover:brightness-90 justify-center">
                    <img src='/25 logo.png'
                        alt='25 To Life Classic logo'
                        class="mt-[50px] mb-9 mx-4 w-3/4"
                    >
                </a>
                <h1 class="font-header text-9xl mt-8">{title}</h1>
                <h2 class="font-body text-6xl mt-[60px]">Whoops!</h2>
                <h2 class="font-body text-6xl mt-4">This player does not exist.</h2>
            </div>
        </div>
    </div>
{/if}
