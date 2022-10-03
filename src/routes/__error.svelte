<script context="module">
    export function load({ error, status }) {
        const message = error.message ?? 'No error description';
        return {
            props: {
                status: status,
                error: message
            }
        };
    }
</script>

<script>
    export let status;
    export let error;
</script>

<svelte:head>
    <title>{status} | 25 To Life Classic</title>
</svelte:head>

<div class="flex flex-col justify-center items-center h-full">
    <div class="flex flex-col justify-center items-center mt-[5rem] text-primary-light dark:text-primary-dark">
        <div class="flex flex-col justify-center items-center mb-[100px]">
            <a href="/" class="flex hover:brightness-90 justify-center">
                <img src='/ttlc_logo.png'
                    alt='25 To Life Classic logo'
                    class="mt-[50px] mb-9 mx-4 w-3/4"
                >
            </a>
            <h1 class="font-header text-9xl mt-8">{status}</h1>
                <h2 class="font-body text-6xl mt-[60px]">Whoops!</h2>
            <!-- 404 -->
            {#if status == 404}
                <h2 class="font-body text-6xl mt-4">The page was not found</h2>
            {/if}
            <!-- 500 -->
            {#if status == 500}
                <h2 class="font-body text-4xl mt-8">Server error: {error}</h2>
            {/if}
        </div>
    </div>
</div>
