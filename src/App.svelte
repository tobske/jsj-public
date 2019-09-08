<script>
    import Router from 'svelte-spa-router'

    import NavBar from './NavBar.svelte'
    import Home from './pages/Home.svelte';
    import UeberMich from './pages/UeberMich.svelte'
    import JinShinJyutsu from './pages/JinShinJyutsu.svelte'

    const routes = {
      '/': Home,
      '/ueber-mich': UeberMich,
      '/jin-shin-jyutsu': JinShinJyutsu,
      '*': Home
    }
</script>

<style>
    :global(body) {
        display: flex;
        justify-content: center;

        background-color: #e7b556;
        background-image: url("/background-man.jpg"), url("/background.jpg");
        background-position: center 315px, center top;
        background-repeat: repeat-y;
    }

	.container {
	    flex: 0 1 1004px;
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

