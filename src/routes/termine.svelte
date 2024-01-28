<script>
    import { fade } from 'svelte/transition';
</script>

<div in:fade>
    <h1>Termine</h1>
    <div class="row">
        <div class="column">
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
            <p>04.02.2024 10.30-12.30 Uhr : JSJ für Hunde zum Kennenlernen  / Steinhalderstrasse, 66999 Hinterweidenthal (Hundesportverein)</p>
            <p>03.02.2024 10.00-15.00 Uhr: Selbst-Hilfe-Kurs: Die 26 Sicherheitsenergieschlösser / Kirchbergstrasse 2 in Gondelsheim</p>
            <h4>JSJ-Gruppe </h4>
            <p>24.02. / 23.03. / 27.04. / 25.05. / 29.05.</p>
         <p></p>
                        </div>
        <div class="date">
                <h4>  </h4>
                <p> </p>
                       
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
