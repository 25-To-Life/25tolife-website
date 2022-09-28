<script>
    // SMUI imports
    import LayoutGrid, { Cell } from '@smui/layout-grid';
    import Tab, { Label } from '@smui/tab';
    import TabBar from '@smui/tab-bar';
    import Tooltip, { Wrapper } from '@smui/tooltip';
    // Custom imports
    import Stat from './Stat.svelte';
    import StatRow from './StatRow.svelte';
    import PlayedForStat from './PlayedForStat.svelte';
    import WeaponStats from './WeaponStats.svelte';

    // Faction tab
    export let factionTab;

    // Active stats
    export let stats;

    // Weapon tabs
    const weapons = ['AR', 'MP', 'SR/pistol', 'Shotgun', 'Melee', 'Grenade'];
    let activeWeaponTab = 'AR';

    // Game mode tabs
    const gameModes = ['War', 'Tag', 'Robbery', 'Raid'];
    let activeGameModeTab = 'War';

    // Math functions
    function gamesPlayed(victories, draws, defeats) {
        return victories + draws + defeats;
    }

    function winrate(victories, draws, defeats) {
        const games = victories + draws + defeats;
        return games > 0
            ? (victories * 100 / games).toFixed(0)
            : 'N/A';
    }

    function winrateMode(wins, games) {
        return games > 0
            ? (wins * 100 / games).toFixed(0)
            : 'N/A';
    }

    function kd(kills, deaths) {
        return deaths > 0 
        ? (kills / deaths).toFixed(2)
        : 'Perfect';
    }

    function accuracy(fired, hit) {
        return fired > 0
            ? (hit * 100 / fired).toFixed(0)
            : 'N/A';
    }

    function headRatio(headshots, shots) {
        return shots > 0 
            ? (headshots * 100 / shots).toFixed(0)
            : 'N/A';
    }
</script>

<div class="mt-4 xl:mt-8">
    <div class="flex flex-col font-body text-primary-light dark:text-primary-dark lg:text-4xl ">
        <!-- Overview title -->
        <div class="flex justify-center items-center">
            <Wrapper>
                <h2 class="text-center text-2xl md:text-4xl lg:text-5xl 2xl:text-7xl p-2">
                    General
                </h2>
                <Tooltip>Player's general stats</Tooltip>
            </Wrapper>
        </div>
        <!-- Overview stats -->
        <StatRow>
            <LayoutGrid>
                <!-- Rating -->
                <Cell>
                    <Stat name={'Rating'} value={stats.ranking} 
                        desc="Player's ELO rating"
                    />
                </Cell>
                <!-- Winrate -->
                <Cell>
                    {#if factionTab == 'Criminals'}
                    <Stat name={'Winrate'} value={winrate(stats.crim_victories, stats.crim_draws, stats.crim_defeats)} ratio
                        desc="Win percentage as criminals"
                    />
                    {:else if factionTab == 'Law Enforcement'}
                    <Stat name={'Winrate'} value={winrate(stats.law_victories, stats.law_draws, stats.law_defeats)} ratio
                        desc="Win percentage as law enforcement"
                    />
                    {:else}
                    <Stat name={'Winrate'}
                        value={
                            winrate(
                                stats.law_victories + stats.crim_victories,
                                stats.law_draws + stats.crim_draws,
                                stats.law_defeats + stats.crim_defeats
                        )}
                        ratio
                        desc="Total win percentage"
                    />
                    {/if}
                </Cell>
                <!-- Games -->
                <Cell>
                    {#if factionTab == 'Criminals'}
                    <Stat name={'Games'} value={gamesPlayed(stats.crim_victories, stats.crim_draws, stats.crim_defeats)} 
                        desc="Games played as criminals"
                    />
                    {:else if factionTab == 'Law Enforcement'}
                    <Stat name={'Games'} value={gamesPlayed(stats.law_victories, stats.law_draws, stats.law_defeats)} 
                        desc="Games played as law enforcement"
                    />
                    {:else}
                    <Stat name={'Games'}
                        value={
                            gamesPlayed(
                                stats.law_victories + stats.crim_victories,
                                stats.law_draws + stats.crim_draws,
                                stats.law_defeats + stats.crim_defeats
                        )}
                        desc="Total games played"
                    />
                    {/if}
                </Cell>
                <!-- Wins -->
                <Cell>
                    {#if factionTab == 'Criminals'}
                    <Stat name={'Wins'} value={stats.crim_victories}
                        desc="Games won as criminals"
                    />
                    {:else if factionTab == 'Law Enforcement'}
                    <Stat name={'Wins'} value={stats.law_victories}
                        desc="Games won as law enforcement"
                    />
                    {:else}
                    <Stat name={'Wins'} value={stats.crim_victories + stats.law_victories}
                        desc="Total games won"
                    />
                    {/if}
                </Cell>
                <!-- Draws -->
                <Cell>
                    {#if factionTab == 'Criminals'}
                    <Stat name={'Draws'} value={stats.crim_draws}
                        desc="Draws as criminals"
                    />
                    {:else if factionTab == 'Law Enforcement'}
                    <Stat name={'Draws'} value={stats.law_draws} 
                        desc="Draws as law enforcement"
                    />
                    {:else}
                    <Stat name={'Draws'} value={stats.crim_draws + stats.law_draws}
                        desc="Draws total"
                    />
                    {/if}
                </Cell>
                <!-- Losses -->
                <Cell>
                    {#if factionTab == 'Criminals'}
                    <Stat name={'Losses'} value={stats.crim_defeats}
                        desc="Games lost as criminals"
                    />
                    {:else if factionTab == 'Law Enforcement'}
                    <Stat name={'Losses'} value={stats.law_defeats}
                        desc="Games lost as law enforcement"
                    />
                    {:else}
                    <Stat name={'Losses'} value={stats.crim_defeats + stats.law_defeats}
                        desc="Total games lost"
                    />
                    {/if}
                </Cell>
            </LayoutGrid>
        </StatRow>
        <StatRow>
            <!-- Time spent -->
            {#if factionTab == 'Criminals'}
            <PlayedForStat seconds={stats.crim_time}/>
            {:else if factionTab == 'Law Enforcement'}
            <PlayedForStat seconds={stats.law_time}/>
            {:else}
            <PlayedForStat seconds={stats.crim_time + stats.law_time}/>
            {/if}
        </StatRow>
    </div>
    <div class="flex flex-col font-body text-primary-light dark:text-primary-dark lg:text-4xl mt-5">
        <!-- K/D title -->
        <div class="flex justify-center items-center">
            <Wrapper>
                <h2 class="text-center text-2xl md:text-4xl lg:text-5xl 2xl:text-7xl p-2">
                    K/D
                </h2>
                <Tooltip>Kills and deaths stats</Tooltip>
            </Wrapper>
        </div>
        <!-- K/D stats -->
        <StatRow>
            <LayoutGrid>
                <!-- Kills -->
                {#if factionTab == 'Criminals'}
                <Cell>
                    <Stat name={'Kills'} value={stats.crim_kills}
                        desc="Kills as criminal"
                    />
                </Cell>
                {:else if factionTab == 'Law Enforcement'}
                <Cell>
                    <Stat name={'Kills'} value={stats.law_kills}
                        desc="Kills as law enforcement"
                    />
                </Cell>
                {:else}
                <Cell>
                    <Stat name={'Kills'} value={stats.crim_kills + stats.law_kills}
                        desc="Total kills"
                    />
                </Cell>
                {/if}
                <!-- Deaths -->
                <Cell>
                    {#if factionTab == 'Criminals'}
                    <Stat name={'Deaths'} value={stats.crim_deaths}
                        desc="Deaths as criminal"
                    />
                    {:else if factionTab == 'Law Enforcement'}
                    <Stat name={'Deaths'} value={stats.law_deaths} 
                        desc="Deaths as law enforcement"
                    />
                    {:else}
                    <Stat name={'Deaths'} value={stats.crim_deaths + stats.law_deaths}
                        desc="Total deaths"
                    />
                    {/if}
                </Cell>
                <!-- K/D -->
                {#if factionTab == 'Criminals'}
                <Cell>
                    <Stat name={'K/D'} value={kd(stats.crim_kills, stats.crim_deaths)} 
                        desc="Kills/deaths ratio as criminals"
                    />
                </Cell>
                {:else if factionTab == 'Law Enforcement'}
                <Cell>
                    <Stat name={'K/D'} value={kd(stats.law_kills, stats.law_deaths)}
                        desc="Kills/deaths ratio as law enforcement"
                    />
                </Cell>
                {:else}
                <Cell>
                    <Stat name={'K/D'} value={kd(stats.law_kills + stats.crim_kills, stats.law_deaths + stats.crim_deaths)}
                        desc="Kills/deaths ratio"
                    />
                </Cell>
                {/if}
                <!-- Suicides -->
                {#if factionTab == 'Criminals'}
                <Cell>
                    <Stat name={'Suicides'} value={stats.crim_suicides} 
                        desc="Suicides as criminals"
                    />
                </Cell>
                {:else if factionTab == 'Law Enforcement'}
                <Cell>
                    <Stat name={'Suicides'} value={stats.law_suicides}
                        desc="Suicides as law enforcement"
                    />
                </Cell>
                {:else}
                <Cell span={6}>
                    <Stat name={'Suicides'} value={stats.crim_suicides + stats.law_suicides} 
                        desc="Total suicides"
                    />
                </Cell>
                {/if}
                <!-- Hostage kills -->
                {#if factionTab == 'Criminals'}
                <Cell>
                    <Stat name={'Hostage kills'} value={stats.crim_hostages_killed}
                        desc="Hostages killed as criminal"
                    />
                </Cell>
                {:else if factionTab == 'Law Enforcement'}
                <Cell>
                    <Stat name={'Hostage kills'} value={stats.law_hostages_killed}
                        desc="Hostages killed as law enforcement"
                    />
                </Cell>
                {:else}
                <Cell span={6}>
                    <Stat name={'Hostage kills'} value={stats.crim_hostages_killed + stats.law_hostages_killed}
                        desc="Total hostages killed"
                    />
                </Cell>
                {/if}
                <!-- Apprehensions/Apprehended -->
                {#if factionTab == 'Law Enforcement'}
                <Cell>
                    <Stat name={'Apprehensions'} value={stats.law_apprehensions}
                        desc="Apprehensions as law enforcement"
                    />
                </Cell>
                {:else if factionTab == 'Criminals'}
                <Cell>
                    <Stat name={'Apprehended'} value={stats.crim_apprehended} 
                        desc="Times player got apprehended as criminals"
                    />
                </Cell>
                {:else}
                <Cell span={6}>
                    <Stat name={'Apprehensions'} value={stats.law_apprehensions}
                        desc="Apprehensions as law enforcement"
                    />
                </Cell>
                <Cell span={6}>
                    <Stat name={'Apprehended'} value={stats.crim_apprehended} 
                        desc="Times player got apprehended as criminals"
                    />
                </Cell>
                {/if}
                <!-- Team kills -->
                {#if factionTab == 'Law Enforcement'}
                <Cell span={6}>
                    <Stat name={'Team kills'} value={stats.law_teamkills}
                        desc="Team kills committed as law enforcement"
                    />
                </Cell>
                {:else if factionTab == 'Criminals'}
                <Cell span={6}>
                    <Stat name={'Team kills'} value={stats.crim_teamkills}
                        desc="Team kills committed as criminals"
                    />
                </Cell>
                {:else}
                <Cell span={6}>
                    <Stat name={'Team kills'} value={stats.crim_teamkills + stats.law_teamkills}
                        desc="Total team kills committed"
                    />
                </Cell>
                {/if}
                <!-- Team deaths -->
                {#if factionTab == 'Law Enforcement'}
                <Cell span={6}>
                    <Stat name={'Team deaths'} value={stats.law_teamkilled}
                        desc="Team deaths suffered as law enforcement"
                    />
                </Cell>
                {:else if factionTab == 'Criminals'}
                <Cell span={6}>
                    <Stat name={'Team deaths'} value={stats.crim_teamkilled}
                        desc="Team deaths suffered as criminals"
                    />
                </Cell>
                {:else}
                <Cell span={6}>
                    <Stat name={'Team deaths'} value={stats.crim_teamkilled + stats.law_teamkilled}
                        desc="Total team deaths suffered"
                    />
                </Cell>
                {/if}
            </LayoutGrid>
        </StatRow>
    </div>
    <div class="flex flex-col font-body text-primary-light dark:text-primary-dark lg:text-4xl mt-5">
        <!-- Shooting title -->
        <div class="flex justify-center items-center">
            <Wrapper>
                <h2 class="text-center text-2xl md:text-4xl lg:text-5xl 2xl:text-7xl p-2">
                    Shooting
                </h2>
                <Tooltip yPos="above">Shooting proficiency stats</Tooltip>
            </Wrapper>
        </div>
        <!-- Shooting stats -->
        <StatRow>
            <LayoutGrid>
                <!-- Shots fired-->
                <Cell>
                    {#if factionTab == 'Criminals'}
                    <Stat name={'Shots fired'} value={stats.crim_shots_fired} 
                        desc="Shots fired as criminals (melee attacks included)"
                    />
                    {:else if factionTab == 'Law Enforcement'}
                    <Stat name={'Shots fired'} value={stats.law_shots_fired} 
                        desc="Shots fired as law enforcement (melee attacks included)"
                    />
                    {:else}
                    <Stat name={'Shots fired'} value={stats.crim_shots_fired + stats.law_shots_fired} 
                        desc="Total shots fired (melee attacks included)"
                    />
                    {/if}
                </Cell>
                <!-- Shots hit-->
                <Cell>
                    {#if factionTab == 'Criminals'}
                    <Stat name={'Shots hit'} value={stats.crim_shots_hit} 
                        desc="Shots hit as criminals (melee attacks included)"
                    />
                    {:else if factionTab == 'Law Enforcement'}
                    <Stat name={'Shots hit'} value={stats.law_shots_hit} 
                        desc="Shots hit as law enforcement (melee attacks included)"
                    />
                    {:else}
                    <Stat name={'Shots hit'} value={stats.crim_shots_hit + stats.law_shots_hit} 
                        desc="Total shots hit (melee attacks included)"
                    />
                    {/if}
                </Cell>
                <!-- Accuracy -->
                <Cell>
                    {#if factionTab == 'Criminals'}
                    <Stat name={'Accuracy'} 
                        value={accuracy(stats.crim_shots_fired, stats.crim_shots_hit)}
                        desc="Accuracy as criminals"
                        ratio
                    />
                    {:else if factionTab == 'Law Enforcement'}
                    <Stat name={'Accuracy'} 
                        value={accuracy(stats.law_shots_fired, stats.law_shots_hit)}
                        desc="Accuracy as law enforcement"
                        ratio
                    />
                    {:else}
                    <Stat name={'Accuracy'}
                        value={
                            accuracy(
                                stats.law_shots_fired + stats.crim_shots_fired,
                                stats.law_shots_hit + stats.crim_shots_hit
                        )}
                        desc="Total accuracy"
                        ratio
                    />
                    {/if}
                </Cell>
                <!-- Headshots-->
                <Cell>
                    {#if factionTab == 'Criminals'}
                    <Stat name={'Headshots'} value={stats.crim_headshots}
                        desc="Headshots hit as criminals"
                    />
                    {:else if factionTab == 'Law Enforcement'}
                    <Stat name={'Headshots'} value={stats.law_headshots}
                        desc="Headshots hit as law enforcement"
                    />
                    {:else}
                    <Stat name={'Headshots'} value={stats.crim_headshots + stats.law_headshots}
                        desc="Total headshots hit"
                    />
                    {/if}
                </Cell>
                <!-- Head/fired rate-->
                <Cell>
                    {#if factionTab == 'Criminals'}
                    <Stat name={'Head/fired'} 
                        value={headRatio(stats.crim_headshots, stats.crim_shots_fired)}
                        desc="Headshots/shots fired ratio as criminals"
                        ratio
                    />
                    {:else if factionTab == 'Law Enforcement'}
                    <Stat name={'Head/fired'} 
                        value={headRatio(stats.law_headshots, stats.law_shots_fired)}
                        desc="Headshots/shots fired ratio as law enforcement"
                        ratio
                    />
                    {:else}
                    <Stat name={'Head/fired'}
                        value={headRatio(stats.law_headshots + stats.crim_headshots, stats.law_shots_fired + stats.crim_shots_fired)}
                        desc="Headshots/shots fired ratio"
                        ratio
                    />
                    {/if}
                </Cell>
                <!-- Head/hit rate-->
                <Cell>
                    {#if factionTab == 'Criminals'}
                    <Stat name={'Head/hit'} 
                        value={headRatio(stats.crim_headshots, stats.crim_shots_hit)}
                        desc="Headshots/shots hit ratio as criminals"
                        ratio
                    />
                    {:else if factionTab == 'Law Enforcement'}
                    <Stat name={'Head/hit'} 
                        value={headRatio(stats.law_headshots, stats.law_shots_hit)}
                        desc="Headshots/shots hit ratio as law enforcement"
                        ratio
                    />
                    {:else}
                    <Stat name={'Head/hit'}
                        value={
                            headRatio(
                                stats.law_headshots + stats.crim_headshots,
                                stats.law_shots_hit + stats.crim_shots_hit
                        )}
                        desc="Headshots/shots hit ratio"
                        ratio
                    />
                    {/if}
                </Cell>
            </LayoutGrid>
        </StatRow>
    </div>
    <!-- Weapons -->
    <div class="flex flex-col font-body text-primary-light dark:text-primary-dark lg:text-4xl mt-5">
        <!-- Weapons title -->
        <div class="flex justify-center items-center">
            <Wrapper>
                <h2 class="text-center text-2xl md:text-4xl lg:text-5xl 2xl:text-7xl p-2">Weapons</h2>
                <Tooltip yPos="above">Weapon category stats</Tooltip>
            </Wrapper>
        </div>
        <!-- Weapons tabs -->
        <div class="flex flex-col justify-center items-center mt-2">
            <TabBar tabs={weapons} let:tab bind:active={activeWeaponTab}>
                <Tab {tab} minWidth>
                    <Label>
                        <div class="xl:text-xl">{tab}</div>
                    </Label>
                </Tab>
            </TabBar>
        </div>
        <!-- Weapon stats -->
        <WeaponStats {stats} {factionTab} {activeWeaponTab} />
    </div>
    <!-- Game modes -->
    <div class="flex flex-col font-body text-primary-light dark:text-primary-dark lg:text-4xl mt-5">
        <!-- Game mode title -->
        <div class="flex justify-center items-center">
            <Wrapper>
                <h2 class="text-center text-2xl md:text-4xl lg:text-5xl 2xl:text-7xl p-2">Game modes</h2>
                <Tooltip yPos="above">Total game mode stats</Tooltip>
            </Wrapper>
        </div>
        <!-- Game mode tabs -->
        <div class="flex flex-col justify-center items-center mt-2">
            <TabBar tabs={gameModes} let:tab bind:active={activeGameModeTab}>
                <Tab {tab} minWidth>
                    <Label>
                        <div class="xl:text-xl">{tab}</div>
                    </Label>
                </Tab>
            </TabBar>
        </div>
        <!-- Game mode stats -->
        <StatRow>
            <LayoutGrid>
                <!-- Games -->
                {#if activeGameModeTab == 'War'}
                <Cell>
                    <Stat name={'Wins'} value={stats.cmn_war_wins} 
                        desc="Total games won in War mode"
                    />
                </Cell>
                <Cell>
                    <Stat name={'Games'} value={stats.cmn_war_games}
                        desc="Total games played in War mode"
                    />
                </Cell>
                <Cell>
                    <Stat name={'Winrate'}
                        value={winrateMode(stats.cmn_war_wins, stats.cmn_war_games)}
                        desc="Win percentage in War mode"
                        ratio
                    />
                </Cell>
                {:else if activeGameModeTab == 'Tag'}
                <Cell>
                    <Stat name={'Wins'} value={stats.cmn_tag_wins}
                        desc="Total games won in Tag mode"
                    />
                </Cell>
                <Cell>
                    <Stat name={'Games'} value={stats.cmn_tag_games}
                        desc="Total games played in Tag mode"
                    />
                </Cell>
                <Cell>
                    <Stat name={'Winrate'}
                        value={winrateMode(stats.cmn_tag_wins, stats.cmn_tag_games)}
                        desc="Win percentage in Tag mode"
                        ratio
                    />
                </Cell>
                <Cell span={12}>
                    <Stat name={'Tags'} value={stats.cmn_tags}
                        desc="Total tags made in Tag mode"
                    />
                </Cell>
                {:else if activeGameModeTab == 'Robbery'}
                <Cell>
                    <Stat name={'Wins'} value={stats.cmn_robbery_wins}
                        desc="Total games won in Robbery mode"
                    />
                </Cell>
                <Cell>
                    <Stat name={'Games'} value={stats.cmn_robbery_games}
                        desc="Total games played in Robbery mode"
                    />
                </Cell>
                <Cell>
                    <Stat name={'Winrate'}
                        value={winrateMode(stats.cmn_robbery_wins, stats.cmn_robbery_games)}
                        desc="Win percentage in Robbery mode"
                        ratio
                    />
                </Cell>
                <Cell span={12}>
                    <Stat name={'Goods'} value={stats.crim_goods}
                        desc="Goods smuggled in Robbery mode"
                    />
                </Cell>
                {:else}
                <Cell>
                    <Stat name={'Wins'} value={stats.cmn_raid_wins}
                        desc="Total games won in Raid mode"
                    />
                </Cell>
                <Cell>
                    <Stat name={'Games'} value={stats.cmn_raid_games}
                        desc="Total games played in Raid mode"
                    />
                </Cell>
                <Cell>
                    <Stat name={'Winrate'} 
                        value={winrateMode(stats.cmn_raid_wins, stats.cmn_raid_games)}
                        desc="Win percentage in Raid mode"
                        ratio
                    />
                </Cell>
                <Cell span={12}>
                    <Stat name={'Evidence'} value={stats.law_evidence}
                        desc="Evidence secured in Raid mode"
                    />
                </Cell>
                {/if}
            </LayoutGrid>
        </StatRow>
        <StatRow>
            {#if activeGameModeTab == 'War'}
            <PlayedForStat seconds={stats.cmn_war_time} />
            {:else if activeGameModeTab == 'Tag'}
            <PlayedForStat seconds={stats.cmn_tag_time} />
            {:else if activeGameModeTab == 'Robbery'}
            <PlayedForStat seconds={stats.cmn_robbery_time} />
            {:else}
            <PlayedForStat seconds={stats.cmn_raid_time} />
            {/if}
        </StatRow>
    </div>
</div>
