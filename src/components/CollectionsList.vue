<template>
  <div class="collections-list p-5 mb-start-5">
    <!-- Head -->
    <div class="collections-list__head bg-primary-500 br-10 pb-2">
      <div class="collections-list__icon"></div>
      <div class="collections-list__data fs-100 fw-500">Kolekcija</div>
      <div class="collections-list__data fs-100 fw-500">Dokumenata</div>
      <div class="collections-list__data fs-100 fw-500">...</div>
    </div>
    <!-- Body -->
    <div class="collections-list__body">
      <!-- Row -->
      <div class="collections-list__row">
        <router-link to="/collections/companies">
          <div class="collections-list__icon_company"></div>
          <div class="collections-list__data fs-200">Kompanije</div>
          <div class="collections-list__data fs-200">
            {{ companiesTotalCount }}
          </div>
        </router-link>
      </div>
      <!-- Row -->
      <div class="collections-list__row">
        <router-link to="/collections/employees">
          <div class="collections-list__icon_employees"></div>
          <div class="collections-list__data fs-200">Zaposlenici</div>
          <div class="collections-list__data fs-200">160</div>
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
