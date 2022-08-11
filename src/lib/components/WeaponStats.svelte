<script>
    import LayoutGrid, { Cell } from '@smui/layout-grid';
    import Stat from './Stat.svelte';
    import StatRow from './StatRow.svelte';

    // stat data
    export let stats;
    // total/criminals/LE tab
    export let activeTab;
    // weapon category tab
    export let activeWeaponTab;

    // K/D - criminals
    const crim_kd_ar = stats.crim_deaths_ar > 0
        ? (stats.crim_kills_ar / stats.crim_deaths_ar).toFixed(2)
        : 'Perfect';
    const crim_kd_mp = stats.crim_deaths_mp > 0
        ? (stats.crim_kills_mp / stats.crim_deaths_mp).toFixed(2)
        : 'Perfect';
    const crim_kd_nonauto = stats.crim_deaths_nonauto > 0
        ? (stats.crim_kills_nonauto / stats.crim_deaths_nonauto).toFixed(2)
        : 'Perfect';
    const crim_kd_shotgun = stats.crim_deaths_shotgun > 0
        ? (stats.crim_kills_shotgun / stats.crim_deaths_shotgun).toFixed(2)
        : 'Perfect';
    const crim_kd_melee = stats.crim_deaths_melee > 0
        ? (stats.crim_kills_melee / stats.crim_deaths_melee).toFixed(2)
        : 'Perfect';
    const crim_kd_grenade = stats.crim_deaths_grenade > 0
        ? (stats.crim_kills_grenade / stats.crim_deaths_grenade).toFixed(2)
        : 'Perfect';
    // K/D - law enforcement
    const law_kd_ar = stats.law_deaths_ar > 0
        ? (stats.law_kills_ar / stats.law_deaths_ar).toFixed(2)
        : 'Perfect';
    const law_kd_mp = stats.law_deaths_mp > 0
        ? (stats.law_kills_mp / stats.law_deaths_mp).toFixed(2)
        : 'Perfect';
    const law_kd_nonauto = stats.law_deaths_nonauto > 0
        ? (stats.law_kills_nonauto / stats.law_deaths_nonauto).toFixed(2)
        : 'Perfect';
    const law_kd_shotgun = stats.law_deaths_shotgun > 0
        ? (stats.law_kills_shotgun / stats.law_deaths_shotgun).toFixed(2)
        : 'Perfect';
    const law_kd_melee = stats.law_deaths_melee > 0
        ? (stats.law_kills_melee / stats.law_deaths_melee).toFixed(2)
        : 'Perfect';
    const law_kd_grenade = stats.law_deaths_grenade > 0
        ? (stats.law_kills_grenade / stats.law_deaths_grenade).toFixed(2)
        : 'Perfect';
    // K/D - total
    const total_deaths_ar = stats.crim_deaths_ar + stats.law_deaths_ar;
    const total_kd_ar = total_deaths_ar > 0
        ? ((stats.crim_kills_ar + stats.law_kills_ar) / total_deaths_ar).toFixed(2)
        : 'Perfect';
    const total_deaths_mp = stats.crim_deaths_mp + stats.law_deaths_mp;
    const total_kd_mp = total_deaths_mp > 0
        ? ((stats.crim_kills_mp + stats.law_kills_mp) / total_deaths_mp).toFixed(2)
        : 'Perfect';
    const total_deaths_nonauto = stats.crim_deaths_nonauto + stats.law_deaths_nonauto;
    const total_kd_nonauto = total_deaths_nonauto > 0
        ? ((stats.crim_kills_nonauto + stats.law_kills_nonauto) / total_deaths_nonauto).toFixed(2)
        : 'Perfect';
    const total_deaths_shotgun = stats.crim_deaths_shotgun + stats.law_deaths_shotgun;
    const total_kd_shotgun = total_deaths_shotgun > 0
        ? ((stats.crim_kills_shotgun + stats.law_kills_shotgun) / total_deaths_shotgun).toFixed(2)
        : 'Perfect';
    const total_deaths_melee = stats.crim_deaths_melee + stats.law_deaths_melee;
    const total_kd_melee = total_deaths_melee > 0
        ? ((stats.crim_kills_melee + stats.law_kills_melee) / total_deaths_melee).toFixed(2)
        : 'Perfect';
    const total_deaths_grenade = stats.crim_deaths_grenade + stats.law_deaths_grenade;
    const total_kd_grenade = total_deaths_grenade > 0
        ? ((stats.crim_kills_grenade + stats.law_kills_grenade) / total_deaths_grenade).toFixed(2)
        : 'Perfect';
</script>

<div>
    <StatRow>
        <LayoutGrid>
            <!-- Kills -->
            <Cell span={6}>
                {#if activeTab == 'Criminals'}
                    {#if activeWeaponTab == 'AR'}
                        <Stat name={'Kills'} value={stats.crim_kills_ar}
                            desc="Assault rifle kills as criminals"
                        />
                    {:else if activeWeaponTab == 'MP'}
                        <Stat name={'Kills'} value={stats.crim_kills_mp}
                            desc="Machine pistol kills as criminals"
                        />
                    {:else if activeWeaponTab == 'SR and pistol'}
                        <Stat name={'Kills'} value={stats.crim_kills_nonauto}
                            desc="Sniper rifle and pistol kills as criminals"
                        />
                    {:else if activeWeaponTab == 'Shotgun'}
                        <Stat name={'Kills'} value={stats.crim_kills_shotgun}
                            desc="Shotgun kills as criminals"
                        />
                    {:else if activeWeaponTab == 'Melee'}
                        <Stat name={'Kills'} value={stats.crim_kills_melee}
                            desc="Melee kills as criminals"
                        />
                    {:else}
                        <Stat name={'Kills'} value={stats.crim_kills_grenade}
                            desc="Grenade kills as criminals"
                        />
                    {/if}
                {:else if activeTab == 'Law Enforcement'}
                    {#if activeWeaponTab == 'AR'}
                        <Stat name={'Kills'} value={stats.law_kills_ar}
                            desc="Assault rifle kills as law enforcement"
                        />
                    {:else if activeWeaponTab == 'MP'}
                        <Stat name={'Kills'} value={stats.law_kills_mp}
                            desc="Machine pistol kills as law enforcement"
                        />
                    {:else if activeWeaponTab == 'SR and pistol'}
                        <Stat name={'Kills'} value={stats.law_kills_nonauto}
                            desc="Sniper rifle and pistol kills as law enforcement"
                        />
                    {:else if activeWeaponTab == 'Shotgun'}
                        <Stat name={'Kills'} value={stats.law_kills_shotgun}
                            desc="Shotgun kills as law enforcement"
                        />
                    {:else if activeWeaponTab == 'Melee'}
                        <Stat name={'Kills'} value={stats.law_kills_melee}
                            desc="Melee kills as law enforcement"
                        />
                    {:else}
                        <Stat name={'Kills'} value={stats.law_kills_grenade}
                            desc="Grenade kills as law enforcement"
                        />
                    {/if}
                {:else}
                    {#if activeWeaponTab == 'AR'}
                        <Stat name={'Kills'} value={stats.crim_kills_ar + stats.law_kills_ar}
                            desc="Total assault rifle kills"
                        />
                    {:else if activeWeaponTab == 'MP'}
                        <Stat name={'Kills'} value={stats.crim_kills_mp+ stats.law_kills_mp}
                            desc="Total machine pistol kills"
                        />
                    {:else if activeWeaponTab == 'SR and pistol'}
                        <Stat name={'Kills'} value={stats.crim_kills_nonauto + stats.law_kills_nonauto}
                            desc="Total sniper rifle and pistol kills"
                        />
                    {:else if activeWeaponTab == 'Shotgun'}
                        <Stat name={'Kills'} value={stats.crim_kills_shotgun + stats.law_kills_shotgun}
                            desc="Total shotgun kills"
                        />
                    {:else if activeWeaponTab == 'Melee'}
                        <Stat name={'Kills'} value={stats.crim_kills_melee + stats.law_kills_melee}
                            desc="Total melee kills"
                        />
                    {:else}
                        <Stat name={'Kills'} value={stats.crim_kills_grenade + stats.law_kills_grenade}
                            desc="Total grenade kills"
                        />
                    {/if}
                {/if}
            </Cell>
            <!-- Deaths -->
            <Cell span={6}>
                {#if activeTab == 'Criminals'}
                    {#if activeWeaponTab == 'AR'}
                        <Stat name={'Deaths'} value={stats.crim_deaths_ar}
                            desc="Deaths from assault rifles as criminals"
                        />
                    {:else if activeWeaponTab == 'MP'}
                        <Stat name={'Deaths'} value={stats.crim_deaths_mp}
                            desc="Deaths from machine pistols as criminals"
                        />
                    {:else if activeWeaponTab == 'SR and pistol'}
                        <Stat name={'Deaths'} value={stats.crim_deaths_nonauto}
                            desc="Deaths from sniper rifles and pistols as criminals"
                        />
                    {:else if activeWeaponTab == 'Shotgun'}
                        <Stat name={'Deaths'} value={stats.crim_deaths_shotgun}
                            desc="Deaths from shotguns as criminals"
                        />
                    {:else if activeWeaponTab == 'Melee'}
                        <Stat name={'Deaths'} value={stats.crim_deaths_melee}
                            desc="Deaths from melee weapons as criminals"
                        />
                    {:else}
                        <Stat name={'Deaths'} value={stats.crim_deaths_grenade}
                            desc="Deaths from grenades as criminals"
                        />
                    {/if}
                {:else if activeTab == 'Law Enforcement'}
                    {#if activeWeaponTab == 'AR'}
                        <Stat name={'Deaths'} value={stats.law_deaths_ar}
                            desc="Deaths from assault rifles as law enforcement"
                        />
                    {:else if activeWeaponTab == 'MP'}
                        <Stat name={'Deaths'} value={stats.law_deaths_mp}
                            desc="Deaths from machine pistols as law enforcement"
                        />
                    {:else if activeWeaponTab == 'SR and pistol'}
                        <Stat name={'Deaths'} value={stats.law_deaths_nonauto}
                            desc="Deaths from sniper rifles and pistols as law enforcement"
                        />
                    {:else if activeWeaponTab == 'Shotgun'}
                        <Stat name={'Deaths'} value={stats.law_deaths_shotgun}
                            desc="Deaths from shotguns as law enforcement"
                        />
                    {:else if activeWeaponTab == 'Melee'}
                        <Stat name={'Deaths'} value={stats.law_deaths_melee}
                            desc="Deaths from melee weapons as law enforcement"
                        />
                    {:else}
                        <Stat name={'Deaths'} value={stats.law_deaths_grenade}
                            desc="Deaths from grenades as law enforcement"
                        />
                    {/if}
                {:else}
                    {#if activeWeaponTab == 'AR'}
                        <Stat name={'Deaths'} value={stats.crim_deaths_ar + stats.law_deaths_ar}
                            desc="Total deaths from assault rifles"
                        />
                    {:else if activeWeaponTab == 'MP'}
                        <Stat name={'Deaths'} value={stats.crim_deaths_mp+ stats.law_deaths_mp}
                            desc="Total deaths from machine pistols"
                        />
                    {:else if activeWeaponTab == 'SR and pistol'}
                        <Stat name={'Deaths'} value={stats.crim_deaths_nonauto + stats.law_deaths_nonauto}
                            desc="Total deaths from sniper rifles and pistols"
                        />
                    {:else if activeWeaponTab == 'Shotgun'}
                        <Stat name={'Deaths'} value={stats.crim_deaths_shotgun + stats.law_deaths_shotgun}
                            desc="Total deaths from shotguns"
                        />
                    {:else if activeWeaponTab == 'Melee'}
                        <Stat name={'Deaths'} value={stats.crim_deaths_melee + stats.law_deaths_melee}
                            desc="Total deaths from melee weapons"
                        />
                    {:else}
                        <Stat name={'Deaths'} value={stats.crim_deaths_grenade + stats.law_deaths_grenade}
                            desc="Total deaths from grenades"
                        />
                    {/if}
                {/if}
            </Cell>
            <!-- K/D -->
            <Cell span={6}>
                {#if activeTab == 'Criminals'}
                    {#if activeWeaponTab == 'AR'}
                        <Stat name={'K/D'} value={crim_kd_ar}
                            desc="Assault rifle kills with/killed by ratio as criminals"
                        />
                    {:else if activeWeaponTab == 'MP'}
                        <Stat name={'K/D'} value={crim_kd_mp}
                            desc="Machine pistol kills with/killed by ratio as criminals"
                        />
                    {:else if activeWeaponTab == 'SR and pistol'}
                        <Stat name={'K/D'} value={crim_kd_nonauto}
                            desc="Sniper rifle and pistol kills with/killed by ratio as criminals"
                        />
                    {:else if activeWeaponTab == 'Shotgun'}
                        <Stat name={'K/D'} value={crim_kd_shotgun}
                            desc="Shotgun kills with/killed by ratio as criminals"
                        />
                    {:else if activeWeaponTab == 'Melee'}
                        <Stat name={'K/D'} value={crim_kd_melee}
                            desc="Melee weapon kills with/killed by ratio as criminals"
                        />
                    {:else}
                        <Stat name={'K/D'} value={crim_kd_grenade}
                        desc="Grenade kills with/killed by ratio as criminals"
                        />
                    {/if}
                {:else if activeTab == 'Law Enforcement'}
                    {#if activeWeaponTab == 'AR'}
                        <Stat name={'K/D'} value={law_kd_ar}
                            desc="Assault rifle kills with/killed by ratio as law enforcement"
                        />
                    {:else if activeWeaponTab == 'MP'}
                        <Stat name={'K/D'} value={law_kd_mp}
                            desc="Machine pistol kills with/killed by ratio as law enforcement"
                        />
                    {:else if activeWeaponTab == 'SR and pistol'}
                        <Stat name={'K/D'} value={law_kd_nonauto}
                            desc="Sniper rifle and pistol kills with/killed by ratio as law enforcement"
                        />
                    {:else if activeWeaponTab == 'Shotgun'}
                        <Stat name={'K/D'} value={law_kd_shotgun}
                            desc="Shotgun kills with/killed by ratio as law enforcement"
                        />
                    {:else if activeWeaponTab == 'Melee'}
                        <Stat name={'K/D'} value={law_kd_melee}
                            desc="Melee weapon kills with/killed by ratio as law enforcement"
                        />
                    {:else}
                        <Stat name={'K/D'} value={law_kd_grenade}
                            desc="Grenade kills with/killed by ratio as law enforcement"
                        />
                    {/if}
                {:else}
                    {#if activeWeaponTab == 'AR'}
                        <Stat name={'K/D'} value={total_kd_ar}
                            desc="Assault rifle kills with/killed by ratio"
                        />
                    {:else if activeWeaponTab == 'MP'}
                        <Stat name={'K/D'} value={total_kd_mp}
                            desc="Machine pistol kills with/killed by ratio"
                        />
                    {:else if activeWeaponTab == 'SR and pistol'}
                        <Stat name={'K/D'} value={total_kd_nonauto}
                            desc="Sniper rifle and pistol kills with/killed by ratio"
                        />
                    {:else if activeWeaponTab == 'Shotgun'}
                        <Stat name={'K/D'} value={total_kd_shotgun}
                            desc="Shotgun kills with/killed by ratio"
                        />
                    {:else if activeWeaponTab == 'Melee'}
                        <Stat name={'K/D'} value={total_kd_melee}
                            desc="Melee weapon kills with/killed by ratio"
                        />
                    {:else}
                        <Stat name={'K/D'} value={total_kd_grenade}
                            desc="Grenade kills with/killed by ratio"
                        />
                    {/if}
                {/if}
            </Cell>
            <!-- Deaths holding -->
            <Cell span={6}>
                {#if activeTab == 'Criminals'}
                    {#if activeWeaponTab == 'AR'}
                        <Stat name={'Deaths holding'} value={stats.crim_hdeaths_ar}
                            desc="Deaths while holding assault rifles as criminals"
                        />
                    {:else if activeWeaponTab == 'MP'}
                        <Stat name={'Deaths holding'} value={stats.crim_hdeaths_mp}
                            desc="Deaths while holding machine pistols as criminals"
                        />
                    {:else if activeWeaponTab == 'SR and pistol'}
                        <Stat name={'Deaths holding'} value={stats.crim_hdeaths_nonauto}
                            desc="Deaths while holding sniper rifles or pistols as criminals"
                        />
                    {:else if activeWeaponTab == 'Shotgun'}
                        <Stat name={'Deaths holding'} value={stats.crim_hdeaths_shotgun}
                            desc="Deaths while holding shotguns as criminals"
                        />
                    {:else if activeWeaponTab == 'Melee'}
                        <Stat name={'Deaths holding'} value={stats.crim_hdeaths_melee}
                            desc="Deaths while holding melee weapons as criminals"
                        />
                    {:else}
                        <Stat name={'Deaths holding'} value={stats.crim_hdeaths_grenade}
                            desc="Deaths while holding grenades as criminals"
                        />
                    {/if}
                {:else if activeTab == 'Law Enforcement'}
                    {#if activeWeaponTab == 'AR'}
                        <Stat name={'Deaths holding'} value={stats.law_hdeaths_ar}
                            desc="Deaths while holding assault rifles as law enforcement"
                        />
                    {:else if activeWeaponTab == 'MP'}
                        <Stat name={'Deaths holding'} value={stats.law_hdeaths_mp}
                            desc="Deaths while holding machine pistols as law enforcement"
                        />
                    {:else if activeWeaponTab == 'SR and pistol'}
                        <Stat name={'Deaths holding'} value={stats.law_hdeaths_nonauto}
                            desc="Deaths while holding sniper rifles or pistols as law enforcement"
                        />
                    {:else if activeWeaponTab == 'Shotgun'}
                        <Stat name={'Deaths holding'} value={stats.law_hdeaths_shotgun}
                            desc="Deaths while holding shotguns as law enforcement"
                        />
                    {:else if activeWeaponTab == 'Melee'}
                        <Stat name={'Deaths holding'} value={stats.law_hdeaths_melee}
                            desc="Deaths while holding melee weapons as law enforcement"
                        />
                    {:else}
                        <Stat name={'Deaths holding'} value={stats.law_hdeaths_grenade}
                            desc="Deaths while holding grenades as law enforcement"
                        />
                    {/if}
                {:else}
                    {#if activeWeaponTab == 'AR'}
                        <Stat name={'Deaths holding'} value={stats.crim_hdeaths_ar + stats.law_hdeaths_ar}
                            desc="Total deaths while holding assault rifles"
                        />
                    {:else if activeWeaponTab == 'MP'}
                        <Stat name={'Deaths holding'} value={stats.crim_hdeaths_mp + stats.law_hdeaths_mp}
                            desc="Total deaths while holding machine pistols"
                        />
                    {:else if activeWeaponTab == 'SR and pistol'}
                        <Stat name={'Deaths holding'} value={stats.crim_hdeaths_nonauto + stats.law_hdeaths_nonauto}
                            desc="Total deaths while holding sniper rifles or pistols"
                        />
                    {:else if activeWeaponTab == 'Shotgun'}
                        <Stat name={'Deaths holding'} value={stats.crim_hdeaths_shotgun + stats.law_hdeaths_shotgun}
                            desc="Total deaths while holding shotguns"
                        />
                    {:else if activeWeaponTab == 'Melee'}
                        <Stat name={'Deaths holding'} value={stats.crim_hdeaths_melee + stats.law_hdeaths_melee}
                            desc="Total deaths while holding melee weapons"
                        />
                    {:else}
                        <Stat name={'Deaths holding'} value={stats.crim_hdeaths_grenade + stats.law_hdeaths_grenade}
                            desc="Total deaths while holding grenades"
                        />
                    {/if}
                {/if}
            </Cell>
        </LayoutGrid>
    </StatRow>
</div>
