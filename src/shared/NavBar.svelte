<script>
    import active from 'svelte-spa-router/active'

    import { routeObjects } from './routes'

    const fullRoutesOnly = routeObjects.filter(route => !!route.name);
</script>

<style>
    .nav-bar-container {
	    display: flex;
        justify-content: center;
    }

	.nav-bar {
	    overflow-x: scroll;

	    display: flex;
	    align-items: end;
	}

	.nav-element {
	    margin-left: 6px;
	    margin-right: 6px;
	    margin-bottom: 12px;
	}

	.nav-element:first-child {
	    margin-left: 18px;
	}

	.nav-element:last-child {
	    margin-right: 18px;
	}

	a {
        color: #333;
        font-weight: bold;
        white-space: nowrap;
	}

	:global(a.active) {
	    font-style: italic;
	    color: #ba0000;
	}
</style>

<div class="nav-bar-container">
    <div class="nav-bar">
        {#each fullRoutesOnly as route}
            <div class="nav-element">
                <a href="#{route.route}" use:active>{route.name}</a>
            </div>
        {/each}
    </div>
</div>
