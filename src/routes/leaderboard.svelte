<script>
    import DataTable, {
        Head,
        Body,
        Row,
        Cell,
        Label,
        SortValue,
    } from '@smui/data-table';
    import IconButton from '@smui/icon-button';
    
    export let test;

    function handleSort() {
        test.sort();
        test = test;
  }
</script>

<div class="flex justify-center">
    <DataTable
        sortable
        on:SMUIDataTable:sorted={handleSort}
        table$aria-label="User list"
    >
        <Head>
            <Row>
                <!--
                    Note: whatever you supply to "columnId" is
                    appended with "-status-label" and used as an ID
                    for the hidden label that describes the sort
                    status to screen readers.

                    You can localize those labels with the
                    "sortAscendingAriaLabel" and
                    "sortDescendingAriaLabel" props on the DataTable.
                -->
                <Cell numeric columnId="id">
                    <!-- For numeric columns, icon comes first. -->
                    <!-- <IconButton class="material-icons">arrow_upward</IconButton> -->
                    <Label>ID</Label>
                </Cell>
                <Cell columnId="username">
                    <Label>Username</Label>
                    <!-- <IconButton class="material-icons">arrow_upward</IconButton> -->
                </Cell>
                <Cell columnId="email" l>
                    <Label>Email</Label>
                    <!-- <IconButton class="material-icons">arrow_upward</IconButton> -->
                </Cell>
                <!-- You can turn off sorting for a column. -->
                <Cell sortable={false}>Clan tag</Cell>
            </Row>
        </Head>
        <Body>
            {#each test as user (user.id)}
                <Row>
                    <Cell numeric>{user.pid}</Cell>
                    <Cell>{user.username}</Cell>
                    <Cell>{user.email}</Cell>
                    <Cell>{user.clan_tag}</Cell>
                </Row>
            {/each}
        </Body>
    </DataTable>
</div>

