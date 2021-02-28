<script>
    import { fade } from 'svelte/transition'
</script>

<style>
    .row {
        display: flex;
    }

    @media (max-width: 576px) {
      .row {
        flex-direction: column;
      }
    }


    .column {
        flex: 1 1 0;
        text-align: center;
    }

    .date {
        margin-bottom: 25px;
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
    <h1>Termine</h1>
    <div class="row">
        <div class="column">
            <h4>Einzeltermine nach persönlicher Absprache</h4>
            <p>oder</p>
            <h4>Wöchentliche Treffen von Selbsthilfegruppen</h4>
            <p>Dienstag von 09:30 Uhr bis 12:00 Uhr</p>
            <p>von 19.00 Uhr bis 21.30 Uhr</p>
            <h4>Terminabsprache und Anmeldung</h4>
            <p>
                Silke Heinisch
                0151 68128102
                jsj-silke@gmx.de
            </p>
        </div>
        <div class="column">
            <div class="date">
                <h4>Hand in Hand mit Anne Steinmann</h4>
                <p>Mittwochs in der Holzmühle</p>
            </div>
        </div>
    </div>
</div>
