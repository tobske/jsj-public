<script>
    import { fade } from 'svelte/transition'
</script>

<style>
    .partners {
        display: flex;
    }

    @media (max-width: 576px) {
      .partners {
        flex-direction: column;
      }
    }

    .partner {
        flex: 1 1 0;
        text-align: center;
    }

    .partner img {
        border-radius: 5px;
    }
</style>

<div in:fade>
    <h1>Partner</h1>
    <div class="partners">
        <div class="partner">
            <img src="anne.jpg" alt="Anne Steinmann" width="120px" height="120px">
            <h4>Anne Steinmann</h4>
            <p>
                TherapeuticTouch - Meditation - Heilsame Klangkunst -
                Wahrnehmungsschulung
            </p>
            <p>0173-9836738 / info@anne-steinmann.de</p>
            <p>www.anne-steinmann.de</p>
            <p>
                Kurse und Einzelbehandlungen in der Praxis im
                Hofgut Holzmühle, 67368 Westheim
            </p>
        </div>
        <div class="partner">
            <img src="ulrich.jpg" alt="Ulrich Böld" width="120px" height="120px">
            <h4>Ulrich Böld</h4>
            <p>Heilpraktiker für Psychotherapie</p>
            <p>ulrichbold@aol.com</p>
            <p>http://ulrichbold.com</p>
        </div>
        <div class="partner">
            <img src="vera.jpg" alt="Vera Frohberg" width="120px" height="120px">
              <h4>Vera Frohberg</h4>
            <p>Heilpraktikerin</p>
            <p>0721/4708588</p>
            <p><a href="www.hp-frohberg.de">www.hp-frohberg.de</a></p>
        </div>

    </div>
</div>
