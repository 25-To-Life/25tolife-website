<script>
    import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';    
</script>

<svelte:head>
    <title>Install | 25 To Life Classic</title>
    <meta name="description" content="Installation guide for 25 To Life Classic.">
    <meta name="og:site_name" content="25 To Life Classic">
    <meta name="og:image" content="/ttlc_logo_bg.png">
    <meta name="og:image:alt" content="25 To Life Classic logo">
</svelte:head>

<!--Main container-->
<div class="flex flex-col justify-center items-center mx-4 text-primary-light dark:text-primary-dark">
    <!-- Headlines -->
    <div class="flex flex-col justify-center items-center mt-[6rem] md:mt-[7rem]">
        <div class="flex flex-col justify-center items-center text-center mb-2 md:mb-3">
            <h1 class="font-header text-5xl sm:text-7xl md:text-8xl xl:text-8xl ">Installation</h1>
        </div>
    </div>
    <div class="flex flex-col justify-center text-center w-3/4 xl:w-1/2 max-w-3/4 mb-6">
        <p class="text-lg md:text-xl lg:text-2xl my-4 md:my-6 xl:my-10">To install the game and get ready to play follow the steps below.</p>
        <h2 class="font-header text-4xl sm:text-5xl md:text-6xl xl:text-6xl mb-4 md:mb-6 xl:mb-10">PC</h2>
        <div class="text-center">
            <Accordion>
                <Panel color="primary">
                    <Header>
                        <b>Download Phoenix Network launcher</b>
                    </Header>
                    <Content class="text-justify items-center">
                        <div class="flex flex-row items-center mb-2">
                            <p class="w-full ml-6 mr-4">To install <i>25 To Life</i> download <b>Phoenix Launcher</b>.
                                We do not support your own copy of the game. The launcher requires Windows 7 or newer.
                            </p>
                            <div class="flex flex-row justify-center items-center w-1/3 mx-4 sm:mx-1">
                                <a href="https://cdn.phoenixnetwork.net/updater/PhoenixLauncherInstaller.exe" class="my-1 md:my-2 items-end">
                                    <button class="font-body transition text-white dark:text-primary-dark sm:text-xl bg-accent-primary-light hover:bg-accent-secondary-light
                                        dark:bg-accent-primary-dark dark:hover:bg-accent-secondary-dark px-4 py-2 rounded-md shadow-md">
                                        Download
                                    </button>
                                </a>
                            </div>
                        </div>
                    </Content>
                </Panel>
                <Panel color="primary">
                    <Header>
                        <b>Run the launcher</b>
                    </Header>
                    <Content>
                        <div class="flex flex-row justify-center items-center text-justify mb-2 mx-4">
                            <div class="flex flex-col">
                                <div class="w-full justify-start text-justify ">
                                    <p class="w-auto mx-4">
                                        Start the launcher from this website using <b>Play now</b> button.
                                    </p>
                                </div>
                                <div class="w-full text-justify ">
                                    <p class="w-auto mx-4 mt-2 ">
                                        The browser will ask you for permissions, you need to allow it to run Phoenix Launcher application.
                                    </p>
                                </div>
                            </div>
                            <div class="flex flex-row justify-center items-center w-1/3 mx-4 sm:mx-1">
                                <a href="phoenixgame://startGame/Ttl&ignore&ignore" class="my-1 md:my-2 items-end">
                                    <button class="font-body transition text-white dark:text-primary-dark sm:text-xl bg-accent-primary-light hover:bg-accent-secondary-light
                                        dark:bg-accent-primary-dark dark:hover:bg-accent-secondary-dark px-4 py-2 rounded-md shadow-md">
                                        Play now
                                    </button>
                                </a>
                            </div>
                        </div>
                        
                    </Content>
                </Panel>
                <Panel color="primary">
                    <Header>
                        <b>Download the game</b>
                    </Header>
                    <Content>
                        <div class="flex flex-col justify-center items-center text-justify mb-2">
                            <p class="w-auto mx-4">
                                The launcher will download the game files on its first run. 
                            </p>
                            <p class="w-auto mx-4 mt-2">
                                The game will be installed at <i>Phoenix Launcher/Phoenix Games/Ttl</i>.
                            </p>
                            <p class="w-auto mx-4 mt-2">
                                <b>Before you start playing</b> make sure you finish the steps below.
                            </p>
                        </div>
                    </Content>
                </Panel>
                <Panel color="primary">
                    <Header>
                        <b>Forward game's port</b>
                    </Header>
                    <Content>
                        <div class="flex flex-col justify-center items-center text-justify mb-2">
                            <p class="w-auto max-w-[75%] mx-4">
                                The game requires port <b>4659 (UDP)</b> to be forwarded. You will not be able to register your in-game account without this.
                            </p>
                            <p class="w-auto max-w-[75%] mx-4 mt-2">
                                The launcher will show your game port availability along with the
                                <a href="https://en.wikipedia.org/wiki/Network_address_translation"
                                    class="hover:text-accent-primary-light dark:hover:text-accent-secondary-dark"
                                >
                                    <b>NAT type</b></a> of your ISP.
                            </p>
                            <p class="w-auto max-w-[75%] mx-4 mt-2">
                                Forward the port using your router's interface page <b>and</b> in your VPN settings if you're using one. VPN use is <b>not</b> required.
                            </p>
                            <p class="w-auto max-w-[75%] mx-4 mt-2">
                                Even though it's not a big vulnerability to forward your port, we recommend that you disable port forwarding after you finish playing <i>25 To Life Classic</i> to keep your network security at its best.
                            </p>
                        </div>
                    </Content>
                </Panel>
                <Panel color="primary">
                    <Header>
                        <b>Register in-game account</b>
                    </Header>
                 <Content>
                    <div class="flex flex-col justify-center items-center text-justify mb-2">
                        <p class="w-auto max-w-[75%] mx-4">
                            Press 'Start' to run the game. Running the game from the launcher is <b>required</b> to connect to the game servers.
                        </p>
                        <p class="w-auto max-w-[75%] mx-4 mt-2">
                            Create a local profile and head to 'Multiplayer Online' menu. Choose 'Create account' and fill in the registration form. 
                        </p>
                        <p class="w-auto max-w-[75%] mx-4 mt-2">
                            The provided online name and password are your in-game credentials. Your online name is also the one displayed both in-game and on this site.
                        </p>
                        <div class="w-full max-w-[75%] justify-start mx-4">
                            <p class="w-auto mt-2">
                                Submit the form. It takes a while and may hang your game for a couple seconds.
                            </p>
                        </div>
                        <p class="w-auto max-w-[75%] mx-4 mt-2">
                            If you've done everything correctly, you should now see 'Your account was successfully created on the server' message. Click 'OK' and agree to override your local profile settings so you don't have to recover the account the next time.
                        </p>
                        <div class="w-full max-w-[75%] justify-start mx-4">
                            <p class="w-auto mt-2">
                                You can now log in and enjoy the multiplayer mode!
                            </p>
                        </div>
                        
                    </div>
                 </Content>
                </Panel>
            </Accordion>
        </div>
        <h2 class="font-header text-4xl sm:text-5xl md:text-6xl xl:text-6xl m-4 md:m-6 xl:m-10">PS2</h2>
        <div class="text-center">
            <Accordion>
                <Panel color="primary">
                    <Header>
                        <b>Configure DNS</b>
                    </Header>
                    <Content class="text-justify items-center">
                        <div class="flex flex-row items-center mb-2">
                            <p class="w-full ml-6 mr-4">To be able to connect to <i>25 To Life Classic</i> game servers your console needs custom DNS configuration.<br>
                                Set <b>Primary DNS</b> server address entry to <b>45.7.228.197</b> in the console's network settings.
                            </p>
                        </div>
                    </Content>
                </Panel>
                <Panel color="primary">
                    <Header>
                        <b>Apply DNAS patch</b>
                    </Header>
                    <Content>
                        <div class="flex flex-row justify-center items-center text-justify mb-2 mx-4">
                            <div class="flex flex-col">
                                <div class="w-full justify-start text-justify ">
                                    <p class="w-auto mx-4">
                                        To bypass legacy DNAS check you can either apply a patch yourself or use a prepatched image of the game.
                                    </p>
                                </div>
                                <div class="w-full text-justify ">
                                    <span class="w-auto mx-4 mt-2 ">
                                        Required information on DNAS bypassing is available in
                                        <a href='https://docs.google.com/spreadsheets/d/1bbxOGm4dPxZ4Vbzyu3XxBnZmuPx3Ue-cPqBeTxtnvkQ'
                                            class="hover:text-accent-primary-light dark:hover:text-accent-secondary-dark"
                                        >
                                            <b>this spreadsheet</b>
                                        </a>.
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                    </Content>
                </Panel>
                <Panel color="primary">
                    <Header>
                        <b>Forward game's port</b>
                    </Header>
                    <Content>
                        <div class="flex flex-col justify-center items-center text-justify mb-2">
                            <p class="w-auto max-w-[75%] mx-4">
                                The game requires port <b>4659 (UDP)</b> to be forwarded. You will not be able to register your in-game account without this.
                            </p>
                            <p class="w-auto max-w-[75%] mx-4 mt-2">
                                Log into your router's interface and create a forwarding rule for the above port and your console's IP address.
                            </p>
                            <p class="w-auto max-w-[75%] mx-4 mt-2">
                                Even though it's not a big vulnerability to forward your port, we recommend that you disable port forwarding after you finish playing <i>25 To Life Classic</i> to keep your network security at its best.
                            </p>
                        </div>
                    </Content>
                </Panel>
                <Panel color="primary">
                    <Header>
                        <b>Register in-game account</b>
                    </Header>
                 <Content>
                    <div class="flex flex-col justify-center items-center text-justify mb-2">
                        <p class="w-auto max-w-[75%] mx-4 mt-2">
                            Create a local profile and head to 'Multiplayer Online' menu. Choose 'Create account' and fill in the registration form. 
                        </p>
                        <p class="w-auto max-w-[75%] mx-4 mt-2">
                            The provided online name and password are your in-game credentials. Your online name is also the one displayed both in-game and on this site.
                        </p>
                        <div class="w-full max-w-[75%] justify-start mx-4">
                            <p class="w-auto mt-2">
                                Submit the form. It takes a while and may hang your game for a couple seconds.
                            </p>
                        </div>
                        <p class="w-auto max-w-[75%] mx-4 mt-2">
                            If you've done everything correctly, you should now see 'Your account was successfully created on the server' message. Click 'OK' and agree to override your local profile settings so you don't have to recover the account the next time.
                        </p>
                        <div class="w-full max-w-[75%] justify-start mx-4">
                            <p class="w-auto mt-2">
                                You can now log in and enjoy the multiplayer mode!
                            </p>
                        </div>
                    </div>
                 </Content>
                </Panel>
            </Accordion>
        </div>
    </div>
    <div class="flex flex-col justify-center items-center mt-4 xl:mt-10">
        <div class="flex flex-col justify-center items-center w-3/4 xl:w-1/2 text-center mb-2 md:mb-3">
            <h1 class="font-header text-5xl sm:text-7xl md:text-8xl xl:text-8xl mb-2 md:mb-4 xl:mb-8">Tech support</h1>
            <p class="font-body text-center text-lg md:text-xl lg:text-2xl my-6 xl:my-8 ">
                Should you have any problems or questions, go ahead and share them on our Discord support channel.
                We're happy to help you!
            </p>
        </div>
    </div>
</div>
