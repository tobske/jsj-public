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
            <p>24.03.2024 : JSJ Praxistag bei Dahn</p>
   <p>19.04.2024 : Einführung in die Grundlagen des JSJ - 19 Uhr Heilpraxis Meilenweit</p>
            <p>20./21.04.2024 : 26 Sicherheitsenergieschlösser bei Potsdam</p>
     <p>22.04.2024 : Einführung in die Grundlagen des JSJ - 19 Uhr Geburtshaus am Neuen Garten</p>
 <p>24.04.2024 : Fingerströmen in der Schwangerschaft - 19.30 Uhr Geburtshaus am Neuen Garten</p>
 <p>27./28.04.2024 : 26 Sicherheitsenergieschlösser bei Potsdam (10-18 Uhr)</p>           
<p>28./29.09.2024 : 26 Sicherheitsenergieschlösser bei Dahn</p>
            <p>19./20.10.2024 : 26 Sicherheitsenergieschlösser bei Dahn</p>
           

            <h4>JSJ-Gruppe </h4>
            <p>24.02. / 23.03. / 13.04. / 25.05. / 29.06.</p>
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
