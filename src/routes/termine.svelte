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
            <p>25.02.2024 10.00-15.00 Uhr: Selbst-Hilfe-Kurs: Die 26 Sicherheitsenergieschlösser / Kirchbergstrasse 2 in Gondelsheim</p>
            <p>16.03.2024 10.00-17.00 Uhr : Blockaden Lösen  bei Dahn</p>
            <p>24.03.2024 : JSJ Praxistag bei Dahn</p>
            <p>20./21.04.2024 : 26 Sicherheitsenergieschlösser bei Potsdam</p>
            <p>28./29.09.2024 : 26 Sicherheitsenergieschlösser bei Dahn</p>
            <p>19./20.10.2024 : 26 Sicherheitsenergieschlösser bei Dahn</p>
            <h4>JSJ-Gruppe </h4>
            <p>24.02. / 23.03. / 27.04. / 25.05. / 29.06.</p>
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
