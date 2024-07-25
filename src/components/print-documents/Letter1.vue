<template>
  <DocumentPrintBaseLetter>
    <!-- HEADER -->
    <ul class="letter-header letter-paragraph mb-end-6">
      <li>Građevinski obrt "Dato"</li>
      <li>vl. Ružnić Asmir</li>
      <li>Šturlić bb</li>
    </ul>
    <div class="letter-paragraph_center">
      Na osnovu člana 94. tačke g. Zakona o radu-ZOR ( „Sl.novine FBiH“, broj
      26/16 ), te ugovora o radu, vlasnik građevinskog obrta “DATO“ vl. Ružnić
      Asmir donosi:
    </div>
    <div class="letter-title_uppercase mb-8">Rješenje</div>
    <div class="letter-paragraph">
      o prestanku radnog odnosa za radnika
      <DocumentDataHolder :data="form.personName" /> zaključno s danom
      {{ form.date }} godine.
    </div>
    <div class="letter-title mb-6">Obrazloženje</div>
    <div class="letter-paragraph txt-center">
      Radniku <DocumentDataHolder :data="form.personName" /> prestaje radni
      odnos dana {{ form.date }} zbog isteka perioda na koji je ugovor o radu
      zaključen
    </div>
    <div class="letter-paragraph mb-4 txt-center">
      Na ovo rješenje radnik može uložiti prigovor u roku od
      {{ form.complainDays }} dana.
    </div>
    <div class="flex-between">
      <div class="letter-paragraph">
        Dostavljeno:
        <ul>
          <li class="letter-list">radniku</li>
          <li class="letter-list">knjigovodstvu</li>
          <li class="letter-list">arhiv</li>
        </ul>
      </div>
      <div>Komponenta za potpis</div>
    </div>
  </DocumentPrintBaseLetter>
</template>

<script>
// Import Vue components
import DocumentPrintBaseLetter from "./DocumentPrintBaseLetter.vue";
import DocumentDataHolder from "./DocumentDataHolder.vue";

export default {
  components: {
    DocumentPrintBaseLetter,
    DocumentDataHolder,
  },

  data: () => ({
    form: {
      personName: "Dizdarević Nurija",
      date: "30.11.2023.",
      complainDays: 8,
    },
  }),
};
</script>
