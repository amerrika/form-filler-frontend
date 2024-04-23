<template>
  <div class="home">
    <!-- Section -->
    <section class="p-6">
      <div class="section-title">
        <h2 class="heading-2">Brza traka</h2>
        <ButtonInfo />
      </div>
      <div class="even-columns">
        <HomeFavList title="Obrasci" :list="forms" />
        <HomeFavList title="Ugovori" :list="forms" />
        <HomeFavList title="Dokumenti" :list="forms" />
      </div>
    </section>
  </div>
</template>

<script>
import ButtonInfo from "../components/buttons/ButtonInfo.vue";
import HomeFavList from "../components/HomeFavList.vue";

export default {
  components: {
    ButtonInfo,
    HomeFavList,
  },
  data() {
    return {
      forms: [
        { title: "Obrazac - 100" },
        { title: "Obrazac - 200" },
        { title: "Obrazac - 300" },
      ],
    };
  },
};
</script>
