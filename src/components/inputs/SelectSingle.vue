<template>
  <div :class="['select-single_theme-' + returnTheme]" role="listbox">
    <button
      :class="['select-single__btn-toggle_' + returnTheme]"
      ref="selectButton"
      aria-label="Select priority for the task"
      @click="handleBtnToggle"
    >
      <span v-if="!selectedOption">Filtriraj prema</span>
      <span v-else>{{ selectedOption.option }}</span>
      <img src="../assets/icon-dropdown.svg" alt="" />
    </button>
    <Transition v-show="isMenuOpen">
      <ul
        :class="['select-single__list_' + returnTheme]"
        ref="selectMenu"
        role="presentation"
      >
        <li
          :class="['select-single__option_' + returnTheme]"
          role="option"
          v-for="option in propOptions"
          :key="option.id"
          :aria-selected="option.isSelected"
          @click="handleSelectingOption(option)"
        >
          <div
            :class="['w-3 h-3 br-50 bg-priority-' + option.color]"
            aria-hidden="true"
          ></div>
          <p>{{ option.option }}</p>
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
    propOptions: {
      type: Array,
    },
  },
  emits: ["selectedPriority"],
  data() {
    return {
      isMenuOpen: false,
      selectedOption: null,
    };
  },
  methods: {
    handleBtnToggle() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleSelectingOption(option) {
      // toggle isSelected
      option.isSelected = !option.isSelected;
      // unselect other options
      this.propOptions.forEach((item) => {
        if (item.id !== option.id) {
          item.isSelected = false;
        }
      });
      // update selectedOption
      this.selectedOption = this.returnSelectedOption;
      // if option selected, emit its priority value
      if (this.selectedOption) {
        this.$emit("selectedPriority", this.selectedOption.value);
        // if no option selected, emit default value
      } else {
        this.$emit("selectedPriority", "c");
      }
      // close the menu
      this.isMenuOpen = false;
    },
  },
  computed: {
    returnSelectedOption() {
      return this.propOptions.find((option) => option.isSelected === true);
    },
    returnTheme() {
      return this.propTheme;
    },
  },
};
</script>
