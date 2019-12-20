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

        background-color: #e7b556;
        background-image: url("background-man.jpg"), url("background.jpg");
        background-position: center 312px, center -2px;
        background-repeat: repeat-y;
    }

	.container {
	    width: 100%;
	    max-width: 1004px;
	}

	.header {
	    height: 312px;
	    background-image: url("signs.png"), url("background-hands.jpg");
        background-position: center top, center top;
        background-repeat: no-repeat;

        display: flex;
        flex-direction: column;
        justify-content: end;
	}

	.content {
	    padding: 6px 18px;
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

