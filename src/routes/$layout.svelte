<script lang="ts">
    import '../app.css';
    import Header from '../lib/header.svelte';
</script>

<main>
    <Header />
    <div class="content">
        <slot />
    </div>
</main>

<style>
    main {
        width: 100%;
        max-width: 1004px;
    }

    .content {
        padding: 6px 30px;
    }
</style>
