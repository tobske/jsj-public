<script>
    import Router from 'svelte-spa-router'

    import NavBar from './NavBar.svelte'
    import Home from './pages/Home.svelte';
    import UeberMich from './pages/UeberMich.svelte'

    const routes = {
      '/': Home,
      '/ueber-mich': UeberMich,
      '*': Home
    }
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
    <Router {routes}></Router>
</div>

