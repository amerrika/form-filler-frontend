<template>
  <!-- For styles look at home-fav.scss -->
  <div class="even-columns">
    <div class="home-fav">
      <div class="home-fav__header pi-4 pb-2">
        <h3 class="fs-500 fw-500 txt-neutral-600">Dodati u bazu</h3>
      </div>
      <ul class="home-fav__menu p-3">
        <li class="home-fav__item">
          <ButtonAddEmployee />
        </li>
        <li role="button" class="home-fav__item">
          <ButtonAddCompany />
        </li>
      </ul>
    </div>
    <div class="home-fav">
      <div class="home-fav__header pi-4 pb-2">
        <h3 class="fs-500 fw-500 txt-neutral-600">
          Pretražiti - Search Inputs
        </h3>
      </div>
      <ul class="home-fav__menu p-3">
        <li role="button" class="home-fav__item">Pronađi kompaniju</li>
        <li role="button" class="home-fav__item">Pronađi zaposlenog</li>
      </ul>
    </div>
  </div>
</template>
<script>
import ButtonAddEmployee from "./buttons/ButtonAddEmployee.vue";
import ButtonAddCompany from "./buttons/ButtonAddCompany.vue";
export default {
  components: {
    ButtonAddEmployee,
    ButtonAddCompany,
  },
};
</script>
