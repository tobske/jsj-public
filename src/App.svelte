<script>
    import NavBar from './NavBar.svelte'
    import Home from './pages/Home.svelte';

	let other = 'x';
</script>

<style>
    :global(body) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

	.container {
	    max-width: 950px;
	}
</style>

<div class="container">
    <NavBar></NavBar>
    <Home></Home>
</div>

