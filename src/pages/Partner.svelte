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
            <p><a href="http://anne-steinmann.de/">www.anne-steinmann.de</a></p>
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
            <p><a href="http://ulrichbold.com">http://ulrichbold.com</a></p>
        </div>
        <div class="partner">
            <img src="vera.jpg" alt="Vera Frohberg" width="120px" height="120px">
              <h4>Vera Frohberg</h4>
            <p>Heilpraktikerin</p>
            <p>0721/4708588</p>
            <p><a href="http://hpbohnen.avior.uberspace.de/">www.hp-frohberg.de</a></p>
        </div>
    <div class="partners">
        <div class="partner">
            <h4>Christian Grygas</h4>
            <p>Jin Shin Jyutsu in Dresden            </p>
            <p><a href="http://www.jsj-in-dresden.de/">http://www.jsj-in-dresden.de/</a></p>
        </div>
   </div>
    </div>
</div>
