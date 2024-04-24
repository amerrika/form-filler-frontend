<template>
  <div class="companies-toolbar mb-4">
    <div>Search input</div>
    <div>Search by</div>
    <SelectSingle :prop-options="optionsList" />
    <ButtonAddCompany />
  </div>
</template>
<script>
import ButtonAddCompany from "./buttons/ButtonAddCompany.vue";
import SelectSingle from "./inputs/SelectSingle.vue";

export default {
  components: {
    SelectSingle,
    ButtonAddCompany,
  },
  data() {
    return {
      optionsList: [
        {
          id: 1,
          option: "Gradu",
          value: "a",
          color: "red",
          isSelected: false,
        },
        {
          id: 2,
          option: "Samo PDV obveznike",
          value: "b",
          color: "yellow",
          isSelected: false,
        },
      ],
    };
  },
};
</script>
