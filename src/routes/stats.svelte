<script>
    export let test;
</script>

<h1 class="font-bold">Stats soonTM</h1>
<div>
    <p1>Test stats for player {test.pid}<br></p1>
    <p1>Ranking points: {test.ranking}<br></p1>
    <p1>Kills: {test.law_kills + test.crim_kills}<br></p1>
    <p1>Deaths: {test.law_deaths + test.crim_deaths}<br></p1>
</div>
