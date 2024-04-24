<template>
  <div class="page-title">
    <h1 class="heading-1">Baza svih kolekcija</h1>
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
