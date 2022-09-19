<script>
    // time value in seconds
    export let seconds;

    function formatTime(seconds) {
        if(seconds < 30)
            return '0 min';
        if(seconds < 60)
            return `${seconds}s`;
        if(seconds < 3600)
            return `${(seconds / 60).toFixed(0)} min`;
        return `${(seconds / 3600).toFixed(0)}h`;
    }
</script>

<div class="flex flex-row font-body justify-center items-center text-center lg:text-2xl mx-8 mb-2">
    <p class="flex p-2">
        Played for {formatTime(seconds)}
    </p>
</div>
