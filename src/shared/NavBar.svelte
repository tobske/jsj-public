<script>
    import active from 'svelte-spa-router/active'

    import { routeObjects } from './routes'

    const fullRoutesOnly = routeObjects.filter(route => !!route.name);
</script>

<style>
	.nav-bar {
	    padding: 6px 18px;
	    display: flex;
	    flex-wrap: wrap;
	    align-items: end;
	    justify-content: center;
	}

	.nav-element {
	    margin-left: 6px;
	    margin-right: 6px;
	    margin-bottom: 12px;
	}

	a {
        color: #333;
	}

	:global(a.active) {
	    font-weight: bold;
	}
</style>

<div class="nav-bar">
    {#each fullRoutesOnly as route}
        <div class="nav-element">
            <a href="#{route.route}" use:active>{route.name}</a>
        </div>
    {/each}
</div>
