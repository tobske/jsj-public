<script>
    import { fade } from 'svelte/transition';
</script>

<div in:fade>
    <h1>Termine</h1>
    <div class="row">
        <div class="column">
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
                <h4>offene JSJ-Gruppe </h4>
            <p>27.08.2022<br />10 - 12:30 Uhr</p>
            </div>
            
                        <div class="date">
                <h4>Intensivbegleitung nach persönlicher Absprache für Intensivströmen </h4>
            </div>
                        <div class="date">
                <h4>JSJ-Seminar</h4>
            <p>30.07.2022 / 24.09.2022 / 26.11.2022<br />10 - 18 Uhr</p>
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
