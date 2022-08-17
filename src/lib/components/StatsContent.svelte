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
    
    // Player stats data
    export let player;
    const stats = player.stats;

    // Active tab
    export let activeTab;

    // Weapon tabs
    const weapons = ['AR', 'MP', 'SR/pistol', 'Shotgun', 'Melee', 'Grenade'];
    let activeWeaponTab = 'AR';

    // Game mode tabs
    const gameModes = ['War', 'Tag', 'Robbery', 'Raid'];
    let activeGameModeTab = 'War';

    // Stats - games
    const crim_games = stats.crim_victories + stats.crim_draws + stats.crim_defeats;
    const crim_winrate = crim_games > 0
        ? (stats.crim_victories * 100 / crim_games).toFixed(0)
        : 'N/A';
    const law_games = stats.law_victories + stats.law_draws + stats.law_defeats;
    const law_winrate = law_games > 0
        ? (stats.law_victories * 100 / law_games).toFixed(0)
        : 'N/A';
    const total_victories = stats.crim_victories + stats.law_victories;
    const total_defeats = stats.crim_defeats + stats.law_defeats;
    const total_draws = stats.crim_draws + stats.law_draws;
    const total_games = total_victories + total_defeats + total_draws;
    const total_winrate = total_games > 0 
        ? (total_victories * 100 / 
        (total_games)).toFixed(0)
        : 'N/A';
    // Stats - k/d
    const crim_kd = stats.crim_deaths > 0 
        ? (stats.crim_kills / stats.crim_deaths).toFixed(2)
        : 'Perfect';
    const law_kd = stats.law_deaths > 0 
        ? (stats.law_kills / stats.law_deaths).toFixed(2)
        : 'Perfect';
    const total_kd = stats.crim_deaths + stats.law_deaths > 0
        ? ((stats.crim_kills + stats.law_kills) / (stats.crim_deaths + stats.law_deaths)).toFixed(2)
        : 'Perfect';
    // Stats - accuracy
    const crim_accuracy = stats.crim_shots_fired > 0
        ? (stats.crim_shots_hit * 100 / stats.crim_shots_fired).toFixed(0)
        : 'N/A';
    const law_accuracy = stats.law_shots_fired > 0
        ? (stats.law_shots_hit * 100 / stats.law_shots_fired).toFixed(0)
        : 'N/A';
    const total_shots_hit = stats.crim_shots_hit + stats.law_shots_hit;
    const total_shots_fired = stats.crim_shots_fired + stats.law_shots_fired;
    const total_accuracy = total_shots_fired > 0
        ? (total_shots_hit * 100 / total_shots_fired).toFixed(0)
        : 'N/A';
    // Stats - head/fired
    const crim_head_to_fired = stats.crim_shots_fired > 0 
        ? (stats.crim_headshots * 100 / stats.crim_shots_fired).toFixed(0)
        : 'N/A';
    const law_head_to_fired = stats.law_shots_fired > 0 
        ? (stats.law_headshots * 100 / stats.law_shots_fired).toFixed(0)
        : 'N/A';
    const total_head_to_fired = total_shots_fired > 0 
        ? ((stats.crim_headshots + stats.law_headshots) * 100 / total_shots_fired).toFixed(0)
        : 'N/A';
    // Stats - head/hit
    const crim_head_to_hit = stats.crim_shots_hit > 0 
        ? (stats.crim_headshots * 100 / stats.crim_shots_hit).toFixed(0)
        : 'N/A';
    const law_head_to_hit = stats.law_shots_hit > 0 
        ? (stats.law_headshots * 100 / stats.law_shots_hit).toFixed(0)
        : 'N/A';
    const total_head_to_hit = total_shots_hit > 0 
        ? ((stats.crim_headshots + stats.law_headshots) * 100 / total_shots_hit).toFixed(0)
        : 'N/A';
    // Stats - game mode winrates
    const total_war_winrate = stats.cmn_war_games > 0
        ? (stats.cmn_war_wins * 100 / stats.cmn_war_games).toFixed(0)
        : 'N/A';
    const total_tag_winrate = stats.cmn_tag_games > 0
        ? (stats.cmn_tag_wins * 100 / stats.cmn_tag_games).toFixed(0)
        : 'N/A';
    const total_robbery_winrate = stats.cmn_robbery_games > 0
        ? (stats.cmn_robbery_wins * 100 / stats.cmn_robbery_games).toFixed(0)
        : 'N/A';
    const total_raid_winrate = stats.cmn_raid_games > 0
        ? (stats.cmn_raid_wins * 100 / stats.cmn_raid_games).toFixed(0)
        : 'N/A';
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
                    {#if activeTab == 'Criminals'}
                    <Stat name={'Winrate'} value={crim_winrate} ratio
                        desc="Win percentage as criminals"
                    />
                    {:else if activeTab == 'Law Enforcement'}
                    <Stat name={'Winrate'} value={law_winrate} ratio
                        desc="Win percentage as law enforcement"
                    />
                    {:else}
                    <Stat name={'Winrate'} value={total_winrate} ratio
                        desc="Total win percentage"
                    />
                    {/if}
                </Cell>
                <!-- Games -->
                <Cell>
                    {#if activeTab == 'Criminals'}
                    <Stat name={'Games'} value={crim_games} 
                        desc="Games played as criminals"
                    />
                    {:else if activeTab == 'Law Enforcement'}
                    <Stat name={'Games'} value={law_games} 
                        desc="Games played as law enforcement"
                    />
                    {:else}
                    <Stat name={'Games'} value={total_games} 
                        desc="Total games played"
                    />
                    {/if}
                </Cell>
                <!-- Wins -->
                <Cell>
                    {#if activeTab == 'Criminals'}
                    <Stat name={'Wins'} value={stats.crim_victories}
                        desc="Games won as criminals"
                    />
                    {:else if activeTab == 'Law Enforcement'}
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
                    {#if activeTab == 'Criminals'}
                    <Stat name={'Draws'} value={stats.crim_draws}
                        desc="Draws as criminals"
                    />
                    {:else if activeTab == 'Law Enforcement'}
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
                    {#if activeTab == 'Criminals'}
                    <Stat name={'Losses'} value={stats.crim_defeats}
                        desc="Games lost as criminals"
                    />
                    {:else if activeTab == 'Law Enforcement'}
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
            {#if activeTab == 'Criminals'}
            <PlayedForStat seconds={stats.crim_time}/>
            {:else if activeTab == 'Law Enforcement'}
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
                {#if activeTab == 'Criminals'}
                <Cell>
                    <Stat name={'Kills'} value={stats.crim_kills}
                        desc="Kills as criminal"
                    />
                </Cell>
                {:else if activeTab == 'Law Enforcement'}
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
                    {#if activeTab == 'Criminals'}
                    <Stat name={'Deaths'} value={stats.crim_deaths}
                        desc="Deaths as criminal"
                    />
                    {:else if activeTab == 'Law Enforcement'}
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
                {#if activeTab == 'Criminals'}
                <Cell>
                    <Stat name={'K/D'} value={crim_kd} 
                        desc="Kills/deaths ratio as criminals"
                    />
                </Cell>
                {:else if activeTab == 'Law Enforcement'}
                <Cell>
                    <Stat name={'K/D'} value={law_kd}
                        desc="Kills/deaths ratio as law enforcement"
                    />
                </Cell>
                {:else}
                <Cell>
                    <Stat name={'K/D'} value={total_kd}
                        desc="Kills/deaths ratio"
                    />
                </Cell>
                {/if}
                <!-- Suicides -->
                {#if activeTab == 'Criminals'}
                <Cell>
                    <Stat name={'Suicides'} value={stats.crim_suicides} 
                        desc="Suicides as criminals"
                    />
                </Cell>
                {:else if activeTab == 'Law Enforcement'}
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
                {#if activeTab == 'Criminals'}
                <Cell>
                    <Stat name={'Hostage kills'} value={stats.crim_hostages_killed}
                        desc="Hostages killed as criminal"
                    />
                </Cell>
                {:else if activeTab == 'Law Enforcement'}
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
                {#if activeTab == 'Law Enforcement'}
                <Cell>
                    <Stat name={'Apprehensions'} value={stats.law_apprehensions}
                        desc="Apprehensions as law enforcement"
                    />
                </Cell>
                {:else if activeTab == 'Criminals'}
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
                    {#if activeTab == 'Criminals'}
                    <Stat name={'Shots fired'} value={stats.crim_shots_fired} 
                        desc="Shots fired as criminals (melee attacks included)"
                    />
                    {:else if activeTab == 'Law Enforcement'}
                    <Stat name={'Shots fired'} value={stats.law_shots_fired} 
                        desc="Shots fired as law enforcement (melee attacks included)"
                    />
                    {:else}
                    <Stat name={'Shots fired'} value={total_shots_fired} 
                        desc="Total shots fired (melee attacks included)"
                    />
                    {/if}
                </Cell>
                <!-- Shots hit-->
                <Cell>
                    {#if activeTab == 'Criminals'}
                    <Stat name={'Shots hit'} value={stats.crim_shots_hit} 
                        desc="Shots hit as criminals (melee attacks included)"
                    />
                    {:else if activeTab == 'Law Enforcement'}
                    <Stat name={'Shots hit'} value={stats.law_shots_hit} 
                        desc="Shots hit as law enforcement (melee attacks included)"
                    />
                    {:else}
                    <Stat name={'Shots hit'} value={total_shots_hit} 
                        desc="Total shots hit (melee attacks included)"
                    />
                    {/if}
                </Cell>
                <!-- Accuracy -->
                <Cell>
                    {#if activeTab == 'Criminals'}
                    <Stat name={'Accuracy'} value={crim_accuracy} ratio
                        desc="Accuracy as criminals"
                    />
                    {:else if activeTab == 'Law Enforcement'}
                    <Stat name={'Accuracy'} value={law_accuracy} ratio
                        desc="Accuracy as law enforcement"
                    />
                    {:else}
                    <Stat name={'Accuracy'} value={total_accuracy} ratio
                        desc="Total accuracy"
                    />
                    {/if}
                </Cell>
                <!-- Headshots-->
                <Cell>
                    {#if activeTab == 'Criminals'}
                    <Stat name={'Headshots'} value={stats.crim_headshots}
                        desc="Headshots hit as criminals"
                    />
                    {:else if activeTab == 'Law Enforcement'}
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
                    {#if activeTab == 'Criminals'}
                    <Stat name={'Head/fired'} value={crim_head_to_fired} ratio
                        desc="Headshots/shots fired ratio as criminals"
                    />
                    {:else if activeTab == 'Law Enforcement'}
                    <Stat name={'Head/fired'} value={law_head_to_fired} ratio
                        desc="Headshots/shots fired ratio as law enforcement"
                    />
                    {:else}
                    <Stat name={'Head/fired'} value={total_head_to_fired} ratio
                        desc="Headshots/shots fired ratio"
                    />
                    {/if}
                </Cell>
                <!-- Head/hit rate-->
                <Cell>
                    {#if activeTab == 'Criminals'}
                    <Stat name={'Head/hit'} value={crim_head_to_hit} ratio
                        desc="Headshots/shots hit ratio as criminals"
                    />
                    {:else if activeTab == 'Law Enforcement'}
                    <Stat name={'Head/hit'} value={law_head_to_hit} ratio
                        desc="Headshots/shots hit ratio as law enforcement"
                    />
                    {:else}
                    <Stat name={'Head/hit'} value={total_head_to_hit} ratio
                        desc="Headshots/shots hit ratio"
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
        <WeaponStats {stats} {activeTab} {activeWeaponTab} />
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
                    <Stat name={'Winrate'} value={total_war_winrate} ratio
                        desc="Win percentage in War mode"
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
                    <Stat name={'Winrate'} value={total_tag_winrate} ratio
                        desc="Win percentage in Tag mode"
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
                    <Stat name={'Winrate'} value={total_robbery_winrate} ratio
                        desc="Win percentage in Robbery mode"
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
                    <Stat name={'Winrate'} value={total_raid_winrate} ratio
                        desc="Win percentage in Raid mode"
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
