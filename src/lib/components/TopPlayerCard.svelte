<script>
    // player data
    export let player;

    // rank
    export let rank;

    // nav path
    const path = `/stats/${player.username}`;

    // rank icon path
    const iconPath = `/src/lib/assets/icons/Rank${rank}.png`;

    // wins
    const wins = player.stats.law_victories + player.stats.crim_victories;

    // wins text
    const winsText = wins != 1 ? 'wins' : 'win' ;
</script>

<a href={path} class="flex flex-row justify-center items-center mx-2 my-4 px-2 py-6 bg-[#333] hover:brightness-125 text-[#c1c1c1] border-[1px] border-[#333] rounded-md shadow-md">
    <img src={iconPath}
        alt='Player rank icon'
        class="mx-2 lg:w-9 lg:h-9"
    >
    <div class="flex flex-col text-left lg:ml-1">
        <h2><b>{player.username}</b></h2>
        <p class="text-sm">Wins: {player.stats.law_victories + player.stats.crim_victories}</p>
        <p class="text-sm">Ranking: {player.stats.ranking}</p>
    </div>
    
</a>
