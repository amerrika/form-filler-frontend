<template>
  <div class="home">
    <PageTitle title="Početna stranica aplikacije" icon-src="/icon-home.png" />
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
import HomeFavList from "../components/HomeFavList.vue";
import HomeFavActions from "../components/HomeFavActions.vue";
import PageTitle from "@/components/PageTitle.vue";

export default {
  components: {
    PageTitle,
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
