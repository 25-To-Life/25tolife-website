<script>
    import FaqCard from "../lib/FaqCard.svelte";
    // QA data
    const QAs = [
        {
            question: 'Can I play now?',
            answer: [
                'Yes. Both on PC and PS2. Welcome back.',
            ]
        },
        {
            question: 'Is this free?',
            answer: [
                'Absolutely. We are not allowed to make profits off the game.',
            ]
        },
        {
            question: 'Is this official?',
            answer: [
                'Sadly it ain\'t.',
                'The online services were brought back by Phoenix Network. We are not connected with any of the original developers or the game owners, namely Eidos Interactive, Square Enix or currently Embracer Group.',
                'We revive online game services which have been officially shut down by the original publishers, in compliance with Abandonware and Fair Use policies. You can read more on that in our Terms of Use if you\'re interested in legals.',
                'If you can help us with making this project approved by the game owners please contact us on Discord, we\'d much appreciate your help.'
            ]
        },
        {
            question: 'Can I play singleplayer or lan multiplayer mode too?',
            answer: [
                'We intentionally locked down both singleplayer and LAN multiplayer modes. These modes are still available and we do not provide them.',
                'You have to use your original game copy to play these.',
                'Note that we do not support standalone copies as authentication to Phoenix services is required.',
                'All the player clothing is unlocked and can be used in-game.',
            ]
        },
        {
            question: 'Modding?',
            answer: [
                'Phoenix Launcher checks your game files for modifications. Please do not mod or else you won\'t be able to play.',
                'And for formal reasons - cheating is a bannable offense.',
                'On the other hand, if you\'d like to help us fix the original game bugs or introduce new content don\'t be afraid. We\'re open for fair contributors.'
            ]
        },
        {
            question: 'How is this even possible?',
            answer: [
                'We built our game servers from scratch. They emulate the behaviour of the original game servers. Not the same, but it seems close enough.',
                'The games themeselves are played peer-to-peer and hosted by the players, as it ever was.',
            ]
        },
    ];

    // Feature support data
    const features = [
        {
            question: 'Matchmaking',
            answer: [
                'Obviously we support matchmaking. Kinda an important feature.',
                'We support host migrations. When a lobby host leaves, player who joined the lobby first becomes the new host (when there are at least 2 players left).',
                'Currently we do not support private lobbies. You should always make a public one.',
                'All other lobby options are supported.',
            ]
        },
        {
            question: 'Accounts',
            answer: [
                'We fully support in-game account management. You can use the original create, edit, recover and delete account features.',
                'Deleting your account from the game only deletes it from your local profile. If you want to delete it permanently, request us to do so on Discord.',
                'You need not supply your real personal data. We do not process, sell or publish the data collected by 25 To Life Classic services. For details read our Terms of Use.',
                'Recover option only lets you pull your account data from the server and save it locally in case you don\'t have it saved. In case you forgot your password and would like to change it, message an administrator on Discord.',
            ]
        },
        {
            question: 'Stats',
            answer: [
                'We support stats. All of them. About 80.',
                'In-game player leaderboard works fine but the view is limited to 4 players.',
                'You can see the full leaderboard and player stats here on the site.',
                '\'Most Played Mode\' stat doesn\'t display correctly in-game.',
                'Unranked games will not affect your ranking and stats.'
            ]
        },
        {
            question: 'Friends',
            answer: [
                'You can manage your in-game friends and see their online status.',
                'Match invitation notifications work but there\'s no way for your friend to interact with them.',
                'Currently you cannot view friend game information.'
            ]
        },
        {
            question: 'Clans',
            answer: [
                'Due to the game crashing on clans screen we disabled the clan menu for PC.',
                'We do support in-game clan tags though. Request yours on Discord after you make an account.',
                'We aim to support clans for PS2 version of the game.'
            ]
        },
        {
            question: 'Lobby',
            answer: [
                'All the features available from inside a lobby are supported.',
                'We can even support chat filtering. We decided not to. Prove us right and be a kind chatter.',
            ]
        },
    ];
</script>

<svelte:head>
    <title>FAQ | 25 To Life Classic</title>
    <meta name="description" content="Frequently asked questions regarding 25 To Life Classic.">
    <meta name="og:site_name" content="25 To Life Classic">
    <meta name="og:image" content="/ttlc_logo_bg.png">
    <meta name="og:image:alt" content="25 To Life Classic logo">
</svelte:head>

<!--Main container-->
<div class="flex flex-col justify-center items-center mx-4 text-primary-light dark:text-primary-dark">
    <!-- FAQ -->
    <div id='faq' class="flex flex-col justify-center items-center mt-[6rem] md:mt-[7rem]">
        <div class="flex flex-col justify-center items-center text-center mb-2 md:mb-3">
            <h1 class="font-header text-5xl sm:text-7xl md:text-8xl xl:text-8xl">
                Faq
            </h1>
        </div>
    </div>
    <div class="flex flex-col justify-center text-center w-3/4 xl:w-1/2 max-w-3/4 ">
        <p class="text-lg md:text-xl lg:text-2xl my-4 md:my-6 xl:my-8">
            Need answers? We have some.
        </p>
        <div>
            {#each QAs as QA}
                <FaqCard {QA} />
            {/each}
        </div>
    </div>
    <!-- Supported features -->
    <div id='feature_support' class="flex flex-col justify-center items-center my-2">
        <div class="flex flex-col justify-center items-center text-center mb-2 md:mb-3">
            <h1 class="font-header text-5xl sm:text-7xl md:text-8xl xl:text-8xl ">
                Feature support 
            </h1>
        </div>
    </div>
    <div class="flex flex-col justify-center text-center w-3/4 xl:w-1/2 max-w-3/4 ">
        <p class="text-lg md:text-xl lg:text-2xl mt-4 md:mt-6 xl:mt-8">
            We tried our best to support as many of the online features as possible.
        </p>
        <p class="text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 lg:mb-8">
            Here is what we managed to come up with.
        </p>
        {#each features as feature}
        <FaqCard QA={feature} />
    {/each}
    </div>
</div>