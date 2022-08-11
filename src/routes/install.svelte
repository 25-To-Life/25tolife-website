<script>
    import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';    
</script>

<svelte:head>
    <title>Install | 25 To Life Classic</title>
</svelte:head>

<!--Main container-->
<div class="flex flex-col justify-center items-center mx-4 text-[#c1c1c1]">
    <!-- Headlines -->
    <div class="flex flex-col justify-center items-center mt-[6rem] md:mt-[7rem]">
        <div class="flex flex-col justify-center items-center text-center mb-2 md:mb-3">
            <h1 class="font-header text-5xl sm:text-7xl md:text-8xl xl:text-8xl ">Installation</h1>
        </div>
    </div>
    <div class="flex flex-col justify-center text-center w-3/4 xl:w-1/2 max-w-3/4 mb-6">
        <p class="text-lg md:text-xl lg:text-2xl my-4 md:my-6 xl:my-10">To install the game and get ready to play follow the steps below.</p>
        <div class="text-center">
            <Accordion>
                <Panel color="primary">
                    <Header>
                        <b>Download Phoenix Network launcher</b>
                    </Header>
                    <Content class="text-justify items-center">
                        <div class="flex flex-row items-center my-2">
                            <p class="w-full ml-6 mr-4">Phoenix Launcher is required to download the game - download and run the installer.
                                We do not support your own copy of the game. The launcher requires Windows 7 or newer.
                            </p>
                            <div class="flex flex-row justify-center items-center w-1/3 mx-4 sm:mx-1">
                                <a href="https://cdn.phoenixnetwork.net/updater/versions/client/Launcher/PhoenixInstaller.exe" class="my-1 md:my-2 items-end">
                                    <button class="font-body text-[#c1c1c1] sm:text-xl bg-orange-600 hover:bg-orange-500 px-4 py-2 rounded-md shadow-md">
                                        Download
                                    </button>
                                </a>
                            </div>
                        </div>
                    </Content>
                </Panel>
                <Panel color="primary">
                    <Header>
                        <b>Register Phoenix account</b>
                    </Header>
                    <Content>
                        <div class="flex flex-col justify-center items-center text-justify my-2 mx-4">
                            <div class="w-full max-w-[80%] justify-start text-justify ">
                                <p class="w-auto mx-4">
                                    Create your Phoenix account using the launcher and log in afterwards.
                                </p>
                            </div>
                            <div class="w-full max-w-[80%] text-justify ">
                                <p class="w-auto mx-4 mt-2 ">
                                    This account is <b>not</b> your in-game account.
                                </p>
                            </div>
                        </div>
                        
                    </Content>
                </Panel>
                <Panel color="primary">
                    <Header>
                        <b>Download the game</b>
                    </Header>
                    <Content>
                        <div class="flex flex-col justify-center items-center text-justify my-2">
                            <p class="w-auto max-w-[75%] mx-4">
                                After you log into the launcher, go to <u>Games/25 To Life</u> tab and click 'Update' to download and install the game.
                            </p>
                            <div class="w-full max-w-[75%] justify-start mx-4">
                                <p class="w-auto mt-2">
                                    The game's installation path is available in <u>Settings</u> tab.
                                </p>
                            </div>
                        </div>
                    </Content>
                </Panel>
                <Panel color="primary">
                    <Header>
                        <b>Forward game's port</b>
                    </Header>
                    <Content>
                        <div class="flex flex-col justify-center items-center text-justify my-2">
                            <p class="w-auto max-w-[75%] mx-4">
                                The game requires port <b>4659 (UDP)</b> to be forwarded. You will not be able to register your in-game account without this.
                            </p>
                            <p class="w-auto max-w-[75%] mx-4 mt-2">
                                The launcher will show your game port availability along with the
                                <a href="https://en.wikipedia.org/wiki/Network_address_translation"
                                    class="hover:text-orange-400"
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
                    <div class="flex flex-col justify-center items-center text-justify my-2">
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
        <!-- <div class="flex flex-col justify-center items-center text-center mx-10 mt-4 xl:mt-10 ">
            <h2 class="font-header text-3xl sm:text-7xl md:text-8xl xl:text-8xl mb-2 md:mb-4 xl:mb-8">Tech support</h2>
            <p class="font-body text-center text-base sm:text-lg md:text-xl lg:text-2xl my-4 xl:my-8 ">
                Should you have any problems or questions, go ahead and share them on our Discord support channel.
                We're happy to help you!
            </p>
        </div>    -->
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