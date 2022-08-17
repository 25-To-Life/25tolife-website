<script>
    // SMUI imports
    import Tab, { Label } from '@smui/tab';
    import TabBar from '@smui/tab-bar';
    import Paper from '@smui/paper';
    import Tooltip, { Wrapper } from '@smui/tooltip';

    // Custom imports
    import Rank from '../../lib/components/Rank.svelte';
    import RatingIcon from '../../lib/components/RatingIcon.svelte';
    import Side from '../../lib/components/Side.svelte';
    import StatsContent from '../../lib/components/StatsContent.svelte';
    
    // tab state
    let activeTab = 'Total';
    
    // player data
    export let player;

    // player rank
    export let rank;

    // Available tabs
    const tabs = ['Total', 'Criminals', 'Law Enforcement'];
    
    // page title
    const title = player != null ? player.username : '404';
</script>

<svelte:head>
    <title>{title} | 25 To Life Classic</title>
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
                                        <h1>{player.username}</h1>
                                    {/if}
                                    <div class="flex flex-col justify-center items-center text-primary-light dark:text-primary-dark mx-2 xl:mx-5">
                                        <!-- Icons row -->
                                        <div class="flex flex-row items-center mx-1">
                                            <div class="mr-1">
                                                <Rank {rank} hashed />    
                                            </div>
                                            <div class="mr-1">
                                                <RatingIcon rating={player.stats.ranking} />
                                            </div>
                                            <Side {player} hyphened={false}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Tab bar -->
                            <div class="flex flex-col justify-center items-center sm:mt-2 w-full">
                                <TabBar tabs={tabs} let:tab bind:active={activeTab}>
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
                                <StatsContent {player} {activeTab} />
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
                    <img src='/src/lib/assets/25 logo.png'
                        alt='25 To Life logo'
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
