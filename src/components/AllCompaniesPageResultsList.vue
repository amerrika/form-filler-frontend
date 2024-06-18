<template>
  <div class="companies-results-list">
    <!-- Header -->
    <div
      class="companies-results-list__header p-2 bg-primary-500 br-10 flex-start g-4"
    >
      <div class="companies-results-list__header-content_big fs-100 fw-500">
        ID broj
      </div>
      <div class="companies-results-list__header-content fs-100 fw-500">
        PDV obveznik
      </div>
      <div class="companies-results-list__header-content_big fs-100 fw-500">
        Skraćeni naziv
      </div>
      <div class="companies-results-list__header-content fs-100 fw-500">
        Mjesto sjedišta
      </div>
      <div class="companies-results-list__header-content fs-100 fw-500">
        Telefon
      </div>
      <div class="companies-results-list__header-content_big fs-100 fw-500">
        E-mail
      </div>
    </div>
    <!-- Body -->
    <div class="companies-results-list__body mb-start-4">
      <!-- Row -->
      <div
        class="companies-results-list__data-row"
        v-for="company in companies"
      >
        <router-link
          to="/collections/companies/id"
          class="companies-results-list__data-row-link txt-neutral-800 p-2 flex-start g-4"
        >
          <div class="companies-results-list__data-content_big fs-200">
            {{ company.companyId }}
          </div>
          <div class="companies-results-list__data-content fs-200">
            {{ company.companyIsTaxPayer ? "Da" : "Ne" }}
          </div>
          <div class="companies-results-list__data-content_big fs-200">
            {{ company.companyShortName }}
          </div>
          <div class="companies-results-list__data-content fs-200">
            {{ company.companyOffice.city }}
          </div>
          <div class="companies-results-list__data-content fs-200">
            {{ company.companyContact.phone }}
          </div>
          <div class="companies-results-list__data-content_big fs-200">
            {{ company.companyContact.email }}
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    companies: Array,
  },
};
</script>
