<script>
    import Paper, { Title, Content } from '@smui/paper';

    // QA data
    export let QA;
</script>

<div class="mb-4 lg:mb-8">
    <Paper color="primary">
        <Title>
            <h2 class="text-primary-light dark:text-primary-dark">{QA.question}</h2>
        </Title>
        <Content>
            <div class="flex flex-col text-justify w-5/6 px-[5%]">
                {#each QA.answer as paragraph}
                    <div class="md:my-1">
                        <p class="text-lg lg:text-xl">{paragraph}</p>
                    </div>
                {/each}
            </div>
        </Content>
    </Paper>
</div>
