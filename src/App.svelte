<script>
    import Router from 'svelte-spa-router'

    import NavBar from './NavBar.svelte'
    import { plainRoutes } from './routes'

    const routes = plainRoutes
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

