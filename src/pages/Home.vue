<template>
  <div class="home">
    <PageTitle title="Početna stranica aplikacije" icon-src="/icons/icon-home.png" />
    <!-- Section -->
    <section class="home__section p-5 br-10 mb-start-5">
      <SectionTitle
        title="Često korišteni dokumenti"
        icon-src="/icon-favorite.svg"
      />
      <div class="even-columns">
        <HomeFavList title="Obrasci" :list="forms" />
        <HomeFavList title="Ugovori" :list="forms" />
        <HomeFavList title="Dokumenti" :list="forms" />
      </div>
    </section>
    <!-- Section -->
    <section class="home__section p-5 br-10 mb-start-5">
      <SectionTitle
        title="Često korištene radnje"
        icon-src="/icon-favorite.svg"
      />
      <HomeFavActions />
    </section>
  </div>
</template>

<script>
import HomeFavList from "../components/HomeFavList.vue";
import HomeFavActions from "../components/HomeFavActions.vue";
import PageTitle from "@/components/PageTitle.vue";
import SectionTitle from "@/components/SectionTitle.vue";

export default {
  components: {
    PageTitle,
    SectionTitle,
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
