<template>
  <DocumentPrintBaseLetter>
    <!-- HEADER -->
    <ul class="letter-header mb-end-6">
      <li><span class="print-page__data-holder">Građevinski obrt "Dato"</span></li>
      <li><span class="print-page__data-holder">vl. Ružnić Asmir</span></li>
      <li><span class="print-page__data-holder">Šturlić bb</span></li>
    </ul>
    <div class="txt-center">
      Na osnovu člana 94. tačke g. Zakona o radu-ZOR ( „Sl.novine FBiH“, broj
      26/16 ), te ugovora o radu, vlasnik građevinskog obrta “DATO“ vl. Ružnić
      Asmir donosi:
    </div>
    <div class="print-page__heading uppercase mb-8">Rješenje</div>
    <div>
      o prestanku radnog odnosa za radnika
      <span class="print-page__data-holder">{{ form.personName }}</span> zaključno s
      danom <span class="print-page__data-holder">{{ form.date }}</span> godine.
    </div>
    <div class="letter-title mb-6">Obrazloženje</div>
    <div class="txt-center">
      Radniku <span class="print-page__data-holder">{{ form.personName }}</span>
      prestaje radni odnos dana
      <span class="print-page__data-holder">{{ form.date }}</span> zbog isteka
      perioda na koji je ugovor o radu zaključen
    </div>
    <div class="mb-4 txt-center">
      Na ovo rješenje radnik može uložiti prigovor u roku od
      <span class="print-page__data-holder">{{ form.complainDays }}</span> dana.
    </div>
    <div class="flex-between">
      <div class="">
        Dostavljeno:
        <ul>
          <li class="print-page__list">radniku</li>
          <li class="print-page__list">knjigovodstvu</li>
          <li class="print-page__list">arhiv</li>
        </ul>
      </div>
      <div>Komponenta za potpis</div>
    </div>
  </DocumentPrintBaseLetter>
</template>

<script>
// Import Vue components
import DocumentPrintBaseLetter from "./DocumentPrintBaseLetter.vue";

export default {
  components: {
    DocumentPrintBaseLetter,
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
