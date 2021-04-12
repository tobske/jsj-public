<script>
    import Router from 'svelte-spa-router'

    import NavBar from './shared/NavBar.svelte'
    import { routes } from './shared/routes'
</script>

<style>
    :global(body) {
        display: flex;
        flex-direction: column;
        align-items: center;

        background-color: #333;
    }

	.container {
	    width: 100%;
	    max-width: 1004px;
        flex: 1 1 auto;

        background-color: #fff;
	}

	.header {
	    height: 312px;
	    background-image: url("signs.png");
        background-position: center top;
        background-repeat: no-repeat;

        display: flex;
        flex-direction: column;
        justify-content: flex-end;
	}

	.content {
	    padding: 6px 30px;
        height: 100%;

        background-image: url("background-man-circle.jpg");
        background-repeat: no-repeat;
        background-position: center top;
	}
</style>

<div class="container">
    <div class="header">
        <NavBar></NavBar>
    </div>
    <div class="content">
        <Router {routes}></Router>
    </div>
</div>

