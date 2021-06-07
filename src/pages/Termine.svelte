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
            <h4>Wöchentliche Treffen von Selbsthilfegruppen</h4>
            <p>Dienstag von 09:30 Uhr bis 12:00 Uhr</p>
            <h4>Hand in Hand mit Anne Steinmann</h4>
            <p>Mittwochs in der Holzmühle</p>
            <h4>Einzeltermine nach Absprache und Anmeldung</h4>
            <p>
                Silke Heinisch<br>
                0151 68128102<br>
                jsj-silke@gmx.de
            </p>
        </div>
        <div class="column">
            <div class="date">
                <h4>24. - 25.07.2021 - Der Boden, der Aufprall und das Lösen</h4>
                <p>10. - 18 Uhr, mit Rene Wermke in der Holzmühle</p>
                <h4>22. - 23.07.2021 - Einzeltermine mit Rene Wermke</h4>
                <p><a href="https://www.interkinetix.de/">https://www.interkinetix.de/</a></p>
            </div>
        </div>
    </div>
</div>
