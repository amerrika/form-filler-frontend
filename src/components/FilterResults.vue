<template>
  <div :class="['filter_' + getTheme]" role="listbox">
    <button
      :class="['btn__dropdown-toggle_' + getTheme]"
      class="p-2 br-5 g-2"
      @click="toggleData(this, 'isExpanded')"
    >
      {{ btnText }}
      <span
        :class="[
          isExpanded ? 'btn__dropdown-icon_up' : 'btn__dropdown-icon_down',
        ]"
      ></span>
    </button>
    <Transition v-show="isExpanded">
      <ul
        :class="['filter__menu_' + getTheme]"
        ref="selectMenu"
        role="presentation"
      >
        <li
          v-for="group in filterData"
          :class="['filter__menu-item_' + getTheme]"
          :key="group.id"
        >
          <ul :class="['filter__submenu_' + getTheme]">
            <li role="heading" class="filter__submenu-title">
              {{ group.title }}
            </li>
            <li
              v-for="option in group.options"
              role="option"
              :key="option.id"
              :aria-selected="option.isSelected"
              :class="['filter__option_' + getTheme]"
              @click="handleMakingSelection(option, group)"
            >
              {{ option.name }}
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
    btnText: {
      type: String,
      default: "Button text",
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
      isExpanded: false,
      allFilterOptions: [
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
      return this.allFilterOptions.filter((option) => option.isSelected);
    },
    getTheme() {
      return this.propTheme;
    },
  },
};
</script>
