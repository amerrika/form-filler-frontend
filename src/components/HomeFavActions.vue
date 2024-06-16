<template>
  <div class="even-columns">
    <div class="home-fav br-10">
      <div class="home-fav__header pi-4 pb-2 bg-primary-500">
        <h3 class="fs-500 fw-500 txt-neutral-600">Dodati u bazu</h3>
      </div>
      <ul class="home-fav__menu p-3 bg-neutral-100">
        <li class="home-fav__item p-2">
          <AddButton
            icon-src="/icons/icon-add-employee.svg"
            btn-text="Novog zaposlenog"
            link-to="/collections/employees/new"
          />
        </li>
        <li role="button" class="home-fav__item p-2">
          <AddButton
            icon-src="/icons/icon-add-company.svg"
            btn-text="Novu kompaniju"
            link-to="/collections/companies/new"
          />
        </li>
      </ul>
    </div>
    <div class="home-fav br-10">
      <div class="home-fav__header pi-4 pb-2 bg-primary-500">
        <h3 class="fs-500 fw-500 txt-neutral-600">
          Pretražiti bazu
        </h3>
      </div>
      <ul class="home-fav__menu p-3 bg-neutral-100">
        <li role="button" class="home-fav__item p-2">Pronađi kompaniju</li>
        <li role="button" class="home-fav__item p-2">Pronađi zaposlenog</li>
      </ul>
    </div>
  </div>
</template>

<script>
import AddButton from "./AddButton.vue";

export default {
  components: {
    AddButton,
  },
};
</script>
