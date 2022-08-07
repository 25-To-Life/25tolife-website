<script>
    import "../app.css";
    
    // SMUI imports
    import TopAppBar, {
        Row,
        Section,
        Title,
        AutoAdjust,
    } from '@smui/top-app-bar';
    import Switch from '@smui/switch';

    // UI states
    export let menuSelect = 1;
    let darkMode = false;
</script>

<div class="bg-gradient-to-br from-[#263065] via-violet-500 to-pink-300 font-body">
    <!--Sticky nav bar-->
    <TopAppBar variant="fixed">
        <Row>
            <Section>
                <img src='src/lib/assets/25 logo.png'
                    alt='25 To Life logo'
                    class="w-1/4 h-auto lg:w-1/5 xl:w-1/6 px-0 sm:px-4"
                >
                <ul id="menu" class="font-header text-sm sm:text-xl md:text-2xl">
                    <li class="inline">
                        <a href="/" 
                            on:click={() => menuSelect = 1}
                            class:selected="{menuSelect === 1}"
                        >HOME</a>
                    </li>
                    <li class="inline">
                        <a href="/install" 
                            on:click={() => menuSelect = 2}
                            class:selected="{menuSelect === 2}"
                        >INSTALL</a>
                    </li>
                    <li class="inline">
                        <a href="/leaderboard" 
                            on:click={() => menuSelect = 3}
                            class:selected="{menuSelect === 3}"
                        >LEADERBOARD</a>
                    </li>
                    <li class="inline">
                        <a href="/faq" 
                            on:click={() => menuSelect = 4}
                            class:selected="{menuSelect === 4}"
                        >FAQ</a>
                    </li>
                </ul>
            </Section>
            <Section align="end" toolbar>
                <div class="flex flex-row items-center">
                    <div class="flex flex-row items-center mr-[25px] sm:mr-[50px]">
                        <Switch bind:checked={darkMode} color="primary" icons={false} />
                        {#if !darkMode}
                            <img src='src/lib/assets/icons/pistol_icon.png'
                                alt='Pistol icon'
                                class="w-6 h-6"
                            >
                        {:else}
                            <img src='src/lib/assets/icons/badge_icon.png'
                                alt='Badge icon'
                                class="w-6 h-6"
                            >
                        {/if}
                    </div>
                        
                    <a href="https://discord.gg/eKKhz4sKRS" class="w-7 lg:w-8 w-min-[10px] h-min-[10px] mr-2 sm:mr-4 md:mr-7">
                        <img src='src/lib/assets/Discord-Logo-White.png'
                            alt='25 To Life: Classic Discord'
                            class="w-7 lg:w-8"
                        >
                    </a>
                    
                    <a href="https://github.com/michal-kapala/25tolife-website" class="w-6 md:w-7 lg:w-8 w-min-[10px] h-min-[10px] mr-3">
                        <img src='src/lib/assets/GitHub-Mark-Light-32px.png'
                            alt='25 To Life: Classic GitHub'
                            class="w-6 md:w-7 lg:w-8"
                        >
                    </a>
                </div>
            </Section>
        </Row>
    </TopAppBar>

    <!--Page content-->
    <div class="font-body">
        <slot />
    </div>
</div>

<!--Footer-->
<div class="flex flex-row justify-center text-sm text-[#c1c1c1] bg-[#333] p-3">
    <div class="flex flex-row m-auto items-center py-5">
        <a href="https://phoenixnetwork.net" class="mr-4">
            <img src='src/lib/assets/Phoenix_logo.png' 
                alt='Phoenix Network logo'
                class="w-full h-auto"
            >
        </a>
        <div class="flex flex-col font-body text-xs sm:text-base">
            <h1>© Phoenix Network 2022</h1>
            <p class="pt-1">Phoenix Network Ltd. is not affiliated with or endorsed by Eidos Interactive, Avalanche Software, Square Enix, Embracer Group or any of their subsidiaries or affiliates.</p>
            <p class="pt-1">All product and company names are the registered trademarks of their original owners.</p>
            <p class="pt-1">The use of any trade name or trademark is for identification and reference purposes only and does not imply any association with the trademark holders.</p>
        </div>
        <div class="flex flex-col justify-center items-center text-center font-body text-xs sm:text-base ml-4 md:ml-5">
            <a href="https://phoenixnetwork.net/terms" class="hover:text-orange-400">
                <h2>
                    <b>Terms of Use</b>
                </h2>
            </a>
            <a href="/faq" class="hover:text-orange-400">
                <h2>
                    <b>FAQ</b>
                </h2>
            </a>
        </div>
    </div>
    
</div>
