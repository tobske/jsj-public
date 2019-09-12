<script>
    import { fade } from 'svelte/transition'
</script>

<style>
    .person {
        text-align: center;
    }

    .person img {
        border-radius: 5px;
    }

    h4 {
        margin-top: 15px;
        margin-bottom: 10px;
    }

    p {
        margin-top: 5px;
        margin-bottom: 5px;
    }
</style>

<div in:fade>
    <h1>Kontakt</h1>
    <div class="person">
        <img src="/silke.jpg" alt="Silke Heinisch" width="180px" height="180px">
        <h4>Telefon</h4>
        <p>0151 68128102</p>
        <h4>E-Mail</h4>
        <p>jsj-silke@gmx.de</p>
        <p>Anfragen bezüglich Terminen per E-Mail werden schnellstmöglich beantwortet.</p>
    </div>
</div>
