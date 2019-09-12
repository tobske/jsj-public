<script>
    import Router from 'svelte-spa-router'

    import NavBar from './NavBar.svelte'
    import { routes } from './routes'
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

	.header {
	    height: 312px;
	    background-image: url("/signs.png"), url("/background-hands.jpg");
        background-position: center top, center 2px;
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

