<script>
    import Tooltip, { Wrapper } from '@smui/tooltip';

    // Stat name
    export let name;
    // Tooltip description
    export let desc = "";
    // Stat value
    export let value;
    // Ratio flag for % sign
    export let ratio = false;
</script>

<div class="flex flex-row font-body justify-center items-center text-center text-lg xl:text-2xl 2xl:text-4xl ">
    <!-- Name -->
    {#if desc != ""}
    <Wrapper>
        <p class="flex p-2 text-center">
            {name}:
        </p>
        <Tooltip>{desc}</Tooltip>
    </Wrapper>
    {:else}
    <p class="flex p-2 text-center">
        {name}:
    </p>
    {/if}
    
    <!-- Value -->
    <div class="flex flex-col justify-center text-center ">
        <div>
            {#key value}
                <p class="flex p-2 " >
                    {#if ratio && value != 'N/A'}
                        {value}%
                    {:else}
                        {value}
                    {/if}
                </p>
            {/key}
        </div>
    </div>
</div>
