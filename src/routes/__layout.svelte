<script>
    import "../app.css";
    
    // SMUI imports
    import TopAppBar, { Row, Section } from '@smui/top-app-bar';
    import Switch from '@smui/switch';

    // UI states
    export let menuSelect = 1;
    // Default to light mode 
    let darkMode = false;
</script>

<!-- Theme toggling -->
<!-- https://github.com/hperrin/svelte-material-ui/issues/248#issuecomment-1011522759 -->
<svelte:head>
  {#if darkMode}
  <link rel="stylesheet" href="/smui-dark.css" />
  {:else}
  <link rel="stylesheet" href="/smui.css" />
  {/if}
</svelte:head>

<!-- Theme wrapper -->
<div class:dark={darkMode} class:light={!darkMode}>
    <!-- Nav bar -->
    <div class="font-body bg-gradient-to-br
        from-[#d9a865] via-[#edb05c] to-[#a8631e]
        dark:from-[#263065] dark:via-sky-600 dark:to-cyan-500"
    >
        <!--Sticky nav bar-->
        <TopAppBar variant="fixed" color="primary">
            <Row>
                <Section>
                    <a href="/" class="w-1/4 lg:w-1/5 xl:w-1/6 h-auto px-0 sm:px-4 hover:brightness-90">
                        <img src='/src/lib/assets/25 logo.png' alt='25 To Life logo'>
                    </a>
                    <ul id="menu" class="font-header text-sm sm:text-xl md:text-2xl text-primary-light dark:text-primary-dark">
                        <li class="inline">
                            <a href="/" 
                                on:click={() => menuSelect = 1}
                                class:selected="{menuSelect === 1}"
                                class="hover:text-accent-primary-light dark:hover:text-white ml-4 "
                            >HOME</a>
                        </li>
                        <li class="inline">
                            <a href="/install" 
                                on:click={() => menuSelect = 2}
                                class:selected="{menuSelect === 2}"
                                class="hover:text-accent-primary-light dark:hover:text-white ml-4 "
                            >INSTALL</a>
                        </li>
                        <li class="inline">
                            <a href="/leaderboard" 
                                on:click={() => menuSelect = 3}
                                class:selected="{menuSelect === 3}"
                                class="hover:text-accent-primary-light dark:hover:text-white ml-4 "
                            >LEADERBOARD</a>
                        </li>
                        <li class="inline">
                            <a href="/stats" 
                                on:click={() => menuSelect = 4}
                                class:selected="{menuSelect === 4}"
                                class="hover:text-accent-primary-light dark:hover:text-white ml-4 "
                            >STATS</a>
                        </li>
                        <li class="inline">
                            <a href="/faq" 
                                on:click={() => menuSelect = 5}
                                class:selected="{menuSelect === 5}"
                                class="hover:text-accent-primary-light dark:hover:text-white ml-4 "
                            >FAQ</a>
                        </li>
                    </ul>
                </Section>
                <Section align="end" toolbar>
                    <div class="flex flex-row items-center">
                        <div class="flex flex-row items-center mr-[25px] sm:mr-[50px]">
                            <Switch bind:checked={darkMode} color="secondary" icons={false} />
                            {#if !darkMode}
                            <img src='/src/lib/assets/icons/badge_icon.png'
                                alt='Badge icon'
                                class="w-6 h-6"
                            >
                            {:else}
                            <img src='/src/lib/assets/icons/pistol_icon.png'
                                alt='Pistol icon'
                                class="w-6 h-6"
                            >
                            {/if}
                        </div>
                            
                        <a href="https://discord.gg/eKKhz4sKRS" target="_blank" class="w-7 lg:w-8 w-min-[10px] h-min-[10px] mr-2 sm:mr-4 md:mr-7
                            transition ease-in-out delay-50 hover:-translate-1 hover:scale-125 duration-200">
                            <img src='/src/lib/assets/Discord-Logo-White.png'
                                alt='25 To Life: Classic Discord'
                                class="w-7 lg:w-8"
                            >
                        </a>
                        
                        <a href="https://github.com/michal-kapala/25tolife-website" target="_blank" class="w-6 md:w-7 lg:w-8 w-min-[10px] h-min-[10px] mr-3
                            transition ease-in-out delay-50 hover:-translate-1 hover:scale-125 duration-200">
                            <img src='/src/lib/assets/GitHub-Mark-Light-32px.png'
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
    <div class="flex flex-row justify-center text-sm shadow-top dark:shadow-none
        text-primary-light dark:text-primary-dark bg-bg-primary-light dark:bg-bg-primary-dark p-3">
        <div class="flex flex-row m-auto items-center py-5">
            <a href="https://phoenixnetwork.net" class="mr-4 hover:brightness-90">
                <img src='/src/lib/assets/Phoenix_logo.png' 
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
                <a href="https://phoenixnetwork.net/terms" class="hover:text-accent-primary-light dark:hover:text-accent-secondary-dark">
                    <h2>
                        <b>Terms of Use</b>
                    </h2>
                </a>
                <a href="/faq" class="hover:text-accent-primary-light dark:hover:text-accent-secondary-dark">
                    <h2>
                        <b>FAQ</b>
                    </h2>
                </a>
            </div>
        </div>
    </div>
</div>
