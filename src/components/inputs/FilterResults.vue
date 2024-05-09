<template>
  <div :class="['filter_' + getTheme]" role="listbox">
    <button
      :class="['filter__btn-toggle_' + getTheme]"
      ref="selectButton"
      aria-label="Filter companies"
      @click="toggleData(this, 'isMenuOpen')"
    >
      <span>Filtriraj kompanije</span>
      <div class="filter__arrow"></div>
    </button>
    <Transition v-show="isMenuOpen">
      <ul
        :class="['filter__menu_' + getTheme]"
        ref="selectMenu"
        role="presentation"
      >
        <li
          v-for="group in filterData"
          :class="['filter__item_' + getTheme]"
          :key="group.id"
        >
          <ul :class="['filter__submenu_' + getTheme]">
            <p class="filter__submenu-title">{{ group.title }}</p>
            <li
              v-for="option in group.options"
              role="option"
              :key="option.id"
              :aria-selected="option.isSelected"
              :class="['filter__option_' + getTheme]"
              @click="handleMakingSelection(option, group)"
            >
              {{ option.option }}
            </li>
          </ul>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script>
export default {
  props: {
    propTheme: {
      type: String,
      default: "primary",
    },
    filterData: {
      type: Object,
    },
  },
  emits: {
    selectedOptions: Array,
  },
  data() {
    return {
      isMenuOpen: false,
      filterOptions: [
        ...this.filterData.group1.options,
        ...this.filterData.group2.options,
      ],
    };
  },
  methods: {
    toggleData(objName, propString) {
      objName[propString] = !objName[propString];
    },
    handleMakingSelection(selectedOption, group) {
      // toggle isSelected of the clicked option
      this.toggleData(selectedOption, "isSelected");
      // set other options of the group as unselected
      group.options.forEach((option) => {
        if (option !== selectedOption) {
          option.isSelected = false;
        }
      });
      // emit selected options
      this.$emit("selectedOptions", this.getSelectedOptions);
    },
  },
  computed: {
    getSelectedOptions() {
      return this.filterOptions.filter((option) => option.isSelected);
    },
    getTheme() {
      return this.propTheme;
    },
  },
};
</script>
