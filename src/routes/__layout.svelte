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

<!--Sticky nav bar-->
<TopAppBar variant="fixed">
	<Row>
		<Section>
			<img src='src/lib/assets/25 logo.png'
				alt='25 To Life logo'
				class="w-1/12 h-1/12 mx-4"
			>
			<ul id="menu">
				<li class="inline">
					<a href="/" 
						on:click={() => menuSelect = 1}
						class:selected="{menuSelect === 1}"
                        class="nav-tab"
					>HOME</a>
				</li>
				<li class="inline">
					<a href="/leaderboard" 
						on:click={() => menuSelect = 2}
						class:selected="{menuSelect === 2}"
                        class="nav-tab"
					>LEADERBOARD</a>
				</li>
			</ul>
		</Section>
		<Section align="end" toolbar>
            <div style="display: flex; flex-direction: flex-row;  align-items: center; margin-right: 50px;">
                <Switch bind:checked={darkMode} color="primary" icons={false} />
                {#if !darkMode}
                    <img src='src/lib/assets/pistol_icon.png'
                        alt='Pistol icon'
                        class="w-6 h-6"
                    >
                {:else}
                    <img src='src/lib/assets/badge_icon.png'
                        alt='Badge icon'
                        class="w-6 h-6"
                    >
                {/if}
            </div>
            
			<a href="https://discord.gg/eKKhz4sKRS" class="mr-3">
				<img src='src/lib/assets/Discord-Logo-White.png'
					alt='25 To Life: Classic Discord'
                    class="w-full h-auto"
				>
			</a>
			<a href="https://github.com/michal-kapala/25tolife-website" class="mr-3">
				<img src='src/lib/assets/GitHub-Mark-Light-32px.png'
					alt='25 To Life: Classic GitHub'
                    class="w-full h-auto"
				>
			</a>
		</Section>
	</Row>
</TopAppBar>

<!--Page content-->
<div class="bg-gradient-to-br from-[#263065] via-violet-500 to-pink-300">
    <slot />
</div>

<!--Footer-->
<div class="flex flex-row justify-center text-sm text-[#c1c1c1] bg-[#333]">
    <div class="flex flex-row m-auto items-center">
        <a href="https://phoenixnetwork.net" class="mr-4">
            <img src='src/lib/assets/Phoenix_logo.png' 
                alt='Phoenix Network logo'
                class="w-full h-auto"
            >
        </a>
        <div class="flex flex-col p-6">
            <h1>© Phoenix Network 2022</h1>
            <p>Phoenix Network Ltd. is not affiliated with or endorsed by Eidos Interactive, Avalanche Software, Square Enix, Embracer Group or any of their subsidiaries or affiliates.</p>
            <p>All product and company names are the registered trademarks of their original owners.</p>
            <p>The use of any trade name or trademark is for identification and reference purposes only and does not imply any association with the trademark holders.</p>
        </div>
    </div>
    
</div>
