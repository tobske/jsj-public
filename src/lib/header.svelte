<script lang="ts">
    import { page } from '$app/stores';
</script>

<div class="header">
    <div class="nav-bar-container">
        <div class="nav-bar">
            <div class="nav-element">
                <a sveltekit:prefetch class:active={$page.path === '/'} href="/">Home</a>
            </div>
            <div class="nav-element">
                <a sveltekit:prefetch class:active={$page.path === '/ueber-mich'} href="/ueber-mich"
                >Über Mich</a
                >
            </div>
            <div class="nav-element">
                <a
                    sveltkit:prefetch
                    class:active={$page.path === '/jin-shin-jyutsu'}
                    href="/jin-shin-jyutsu">Jin Shin Jyutsu®</a
                >
            </div>
            <div class="nav-element">
                <a
                    sveltkit:prefetch
                    class:active={$page.path === '/blockaden-loesen'}
                    href="/blockaden-loesen">Blockaden Lösen</a
                >
            </div>
            <div class="nav-element">
                <a sveltkit:prefetch class:active={$page.path === '/partner'} href="/partner">Partner</a
                >
            </div>
            <div class="nav-element">
                <a sveltkit:prefetch class:active={$page.path === '/termine'} href="/termine">Termine</a
                >
            </div>
            <div class="nav-element">
                <a sveltkit:prefetch class:active={$page.path === '/kontakt'} href="/kontakt">Kontakt</a
                >
            </div>
            <div class="nav-element">
                <a sveltkit:prefetch class:active={$page.path === '/impressum'} href="/impressum"
                >Impressum</a
                >
            </div>
        </div>
    </div>
</div>

<style>
    .header {
        height: 312px;
        background-image: url('signs.png'), url('background-hands.jpg');
        background-position: center top, center top;
        background-repeat: no-repeat;

        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .nav-bar-container {
        display: flex;
        justify-content: center;
    }

    .nav-bar {
        overflow: auto;
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
