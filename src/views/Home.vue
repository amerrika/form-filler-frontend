<template>
  <div class="home">
    <div class="page-title">
      <h1 class="heading-1">Početna stranica aplikacije</h1>
      <ButtonInfo />
    </div>
    <!-- Section -->
    <section class="pb-6">
      <div class="section-title">
        <h2 class="heading-2">Često korišteni dokumenti</h2>
        <ButtonInfo />
      </div>
      <div class="even-columns">
        <HomeFavList title="Obrasci" :list="forms" />
        <HomeFavList title="Ugovori" :list="forms" />
        <HomeFavList title="Dokumenti" :list="forms" />
      </div>
    </section>
    <!-- Section -->
    <section class="pb-end-6">
      <div class="section-title">
        <h2 class="heading-2">Često korištene radnje</h2>
        <ButtonInfo />
      </div>
      <HomeFavActions />
    </section>
  </div>
</template>

<script>
import ButtonInfo from "../components/buttons/ButtonInfo.vue";
import HomeFavList from "../components/HomeFavList.vue";
import HomeFavActions from "../components/HomeFavActions.vue";

export default {
  components: {
    ButtonInfo,
    HomeFavList,
    HomeFavActions,
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
