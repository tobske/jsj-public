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

        background-color: #e7b556;
        background-image: url("/background-man.jpg"), url("/background.jpg");
        background-position: center 315px, center top;
        background-repeat: no-repeat;
    }

	.container {
	    max-width: 1004px;
	}

	.content {
	    padding: 6px 18px;
	}
</style>

<div class="container">
    <NavBar></NavBar>
    <div class="content">
        <Router {routes}></Router>
    </div>
</div>

