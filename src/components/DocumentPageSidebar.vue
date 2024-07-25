<template>
  <div class="document-page__sidebar" :class="minimizedStyle">
    <!-- Header -->
    <div class="document-page__sidebar-header bg-primary-500">
      <img
        src="/icons/icon-select-data.svg"
        class="document-page__sidebar-header-icon"
        alt=""
      />
      <h2
        class="document-page__sidebar-header-title"
        :class="[!isMinimized ? 'enter-active' : 'leave-active']"
      >
        Popunjavanje dokumenta
      </h2>
    </div>
    <!-- Toggle Button -->
    <div class="document-page__sidebar-toggle-wrapper">
      <button
        :class="isMinimized ? 'btn__icon_arrow-left' : 'btn__icon_arrow-right'"
        @click="toggleSidebar"
      ></button>
    </div>
    <!-- Main -->
    <div
      class="document-page__sidebar-main"
      :class="[isMinimized ? 'leave-active' : 'enter-active']"
    >
      <Dropdown title="Podaci iz baze">
        <SelectSingle
          class="g-2"
          id="donosiocrješenja"
          flex-direction="column"
          label="Izaberite donosioca rješenja"
          btn-text="Izaberite opciju"
          :select-options="selectOptions.city"
        />
        <SelectSingle
          class="g-2 mb-start-4"
          id="donosiocrješenja2"
          flex-direction="column"
          label="Izaberite primaoca rješenja"
          btn-text="Izaberite opciju"
          :select-options="selectOptions.isTaxpayer"
        />
      </Dropdown>
      <Dropdown title="Podaci iz baze">
        <SelectSingle
          class="g-2 txt-neutral-800"
          id="primaocrješenja"
          flex-direction="column"
          label="Izaberite primaoca rješenja"
          btn-text="Izaberite opciju"
          :select-options="selectOptions.isTaxpayer"
        />
      </Dropdown>
    </div>
  </div>
</template>

<script>
// Import Vue Components
import Dropdown from "./Dropdown.vue";
import SelectSingle from "./SelectSingle.vue";

export default {
  components: { Dropdown, SelectSingle },
  data() {
    return {
      isMinimized: false,
      // data for input components (select)
      selectOptions: {
        isTaxpayer: [
          {
            name: "Da",
            value: true,
            isSelected: false,
          },
          {
            name: "Ne",
            value: false,
            isSelected: false,
          },
        ],
        companyType: [
          {
            name: "Društvo sa ograničenom odgovornošću",
            value: "doo",
            isSelected: false,
          },
          {
            name: "Obrt",
            value: "obrt",
            isSelected: false,
          },
        ],
        city: [
          {
            name: "Bihać",
            value: "bihać",
            isSelected: false,
          },
          {
            name: "Cazin",
            value: "cazin",
            isSelected: false,
          },
        ],
      },
    };
  },
  methods: {
    toggleSidebar() {
      this.isMinimized = !this.isMinimized;
    },
  },
  computed: {
    minimizedStyle() {
      if (this.isMinimized) {
        return "minimized";
      }
    },
  },
};
</script>
