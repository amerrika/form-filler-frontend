<template>
  <div class="collections-list p-5 mb-start-5 br-10">
    <!-- Header -->
    <div
      class="collections-list__header flex-start g-4 bg-primary-500 br-10 p-2"
    >
      <div class="collections-list__header-icon"></div>
      <div class="collections-list__header-content fs-100 fw-500">
        Kolekcija
      </div>
      <div class="collections-list__header-content fs-100 fw-500">
        Dokumenata
      </div>
      <div class="collections-list__header-content fs-100 fw-500">...</div>
    </div>
    <!-- Body -->
    <div class="collections-list__body mb-start-4">
      <!-- Row -->
      <div class="collections-list__row">
        <router-link
          to="/collections/companies"
          class="collections-list__row-link flex-start g-4 txt-neutral-800 p-2"
        >
          <div class="collections-list__row-icon_company"></div>
          <div class="collections-list__row-content fs-200">Kompanije</div>
          <div class="collections-list__row-content fs-200">
            {{ companiesTotalCount }}
          </div>
        </router-link>
      </div>
      <!-- Row -->
      <div class="collections-list__row">
        <router-link
          to="/collections/employees"
          class="collections-list__row-link flex-start g-4 txt-neutral-800 p-2"
        >
          <div class="collections-list__row-icon_employees"></div>
          <div class="collections-list__row-content fs-200">Zaposlenici</div>
          <div class="collections-list__row-content fs-200">160</div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>

import { RouterLink } from "vue-router";
export default {
  props: {
    companiesTotalCount: Number,
  },
};
</script>
