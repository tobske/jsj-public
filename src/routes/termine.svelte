<script>
    import { fade } from 'svelte/transition';
</script>

<div in:fade>
    <h1>Termine</h1>
    <div class="row">
        <div class="column">
            <h4>Hand in Hand mit Anne Steinmann</h4>
            <p>Mittwochs in der Holzmühle</p>
            <h4>Einzeltermine nach Absprache und Anmeldung sowie Strömprogramm für individuelle Beschwerden per Telefon</h4>
            <p>
       
                Silke Heinisch<br />
                0151 68128102 - jsj-silke@gmx.de<br />
                Praxisadresse: Hofgut Holzmühle - 67368 Westheim (Pfalz)
            </p>
        </div>
        <div class="column">
                        <div class="date">
                <h4>JSJ-Termine </h4>
            <p>22.04.2023: JSJ-Gruppe 10-13 Uhr / Seminar 14-18 Uhr</p>
            <p>17.06.2023: JSJ-Gruppe 10-13 Uhr / Bachblüten Tänze 14-16 Uhr</p>
            <p>29.07.2023: JSJ-Gruppe 10-13 Uhr / Seminar 14-18 Uhr</p>
            <p>26.08.2023: JSJ-Gruppe 10-13 Uhr / Bachblüten Tänze 14-16 Uhr</p>
            <p>23.09.2023: JSJ-Gruppe 10-13 Uhr / Seminar 14-18 Uhr</p>
            <p>28.10.2023: JSJ-Gruppe 10-13 Uhr / Bachblüten Tänze 14-16 Uhr</p>
            <p>18.11.2023: JSJ-Gruppe 10-13 Uhr / Seminar 14-18 Uhr</p>
            </div>
            
                         <div class="date">
                <h4>Heilreise - Geburt des eigenen Kindes heilen</h4>
            <p>26.02.2023 mit Raffaela Stefini (Hebamme)</p>
            </div>
                   <div class="date">
                <h4>Tagesseminar Hormonyoga</h4>
            <p>13.05.2023 mit Gabriele Hogeforster</p>
            </div>
        <div class="date">
                <h4>Intensivbegleitung nach persönlicher Absprache für Intensivströmen </h4>
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
