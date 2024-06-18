<template>
  <div class="home">
    <PageTitle
      title="Početna stranica aplikacije"
      icon-src="/icons/icon-home.svg"
    />
    <!-- Section -->
    <section class="home__section p-5 br-10 mb-start-5">
      <SectionTitle
        title="Često korišteni dokumenti"
        icon-src="/icons/icon-favorite.svg"
      />
      <div class="even-columns">
      </div>
    </section>
    <!-- Section -->
    <section class="home__section p-5 br-10 mb-start-5">
      <SectionTitle
        title="Često korištene radnje"
        icon-src="/icons/icon-favorite.svg"
      />
      <!-- List Box -->
      <div class="list-box-fav br-10">
        <!-- Header -->
        <div class="list-box-fav__header pi-4 pb-2 bg-primary-500">
          <h3 class="fs-500 fw-500 txt-neutral-600">Dodaj u bazu</h3>
          <button class="btn-icon_settings"></button>
        </div>
        <!-- Main -->
        <ul class="list-box-fav__menu p-3 bg-neutral-100">
          <li role="button" class="list-box-fav__item fs-300 p-2">
            <AddButton
              icon-src="/icons/icon-add-employee.svg"
              btn-text="Novog zaposlenog"
              link-to="/collections/employees/new"
            />
          </li>
          <li role="button" class="list-box-fav__item fs-300 p-2">
            <AddButton
              icon-src="/icons/icon-add-company.svg"
              btn-text="Novu kompaniju"
              link-to="/collections/companies/new"
            />
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import AddButton from "@/components/AddButton.vue";

export default {
  components: {
    AddButton,
    PageTitle,
    SectionTitle,
  },
};
</script>
