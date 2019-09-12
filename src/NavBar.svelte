<script>
    import { routeObjects } from './routes'

    const fullRoutesOnly = routeObjects.filter(route => !!route.name);
</script>

<style>
	.nav-bar {
	    height: 312px;
	    background-image: url("/signs.png"), url("/background-hands.jpg");
        background-position: center top, center 2px;
        background-repeat: no-repeat;

	    padding: 6px 18px;
	    display: flex;
	    align-items: end;
	    justify-content: center;
	}

	.nav-element {
	    margin-left: 5px;
	    margin-right: 5px;
	}
</style>


<div class="nav-bar">
    {#each fullRoutesOnly as route}
        <div class="nav-element">
            <a href="#{route.route}">{route.name}</a>
        </div>
    {/each}
</div>
