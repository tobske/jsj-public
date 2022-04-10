<script>
    import { fade } from 'svelte/transition';
</script>

<div in:fade>
    <h1>Termine</h1>
    <div class="row">
        <div class="column">
            <h4>Wöchentliche Treffen von Selbsthilfegruppen</h4>
            <p>Ab Januar 2022<br /> Dienstag von 09:30 Uhr bis 12:00 Uhr</p>
            <h4>Hand in Hand mit Anne Steinmann</h4>
            <p>Mittwochs in der Holzmühle</p>
            <h4>Einzeltermine nach Absprache und Anmeldung</h4>
            <p>
                Silke Heinisch<br />
                0151 68128102 - jsj-silke@gmx.de<br />
                Praxisadresse: Hofgut Holzmühle - 67368 Westheim (Pfalz)
            </p>
        </div>
        <div class="column">
            <div class="date">
                <h4>JSJ-Seminar</h4>
            <p>04.06.2022<br />10 - 18 Uhr In der Holzmühle</p>
            </div>
                        <div class="date">
                <h4>Strömtreff</h4>
            <p>30.04.2022<br />10 - 12:30 Uhr In der Holzmühle</p>
            </div>
            
                        <div class="date">
                <h4>Intensivströmen</h4>
            <p>04. - 08.05.2022<br />In der Holzmühle</p>
            </div>

        </div>
    </div>
</div>

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
