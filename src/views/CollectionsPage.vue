<template>
  <div class="page-title p-5">
    <h1 class="heading-1">Baza svih kolekcija koje aplikacija koristi</h1>
    <ButtonInfo />
  </div>
  <CollectionsList />
</template>

<script>
import ButtonInfo from "@/components/buttons/ButtonInfo.vue";
import CollectionsList from "@/components/CollectionsList.vue";
export default {
  components: {
    ButtonInfo,
    CollectionsList,
  },
};
</script>
