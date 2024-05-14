<template>
  <div :class="['select-single_' + getTheme]" role="listbox">
    <button
      :class="['select-single__btn-toggle_' + getTheme]"
      @click="toggleData(this, 'isMenuOpen')"
    >
      <span v-if="!selectedOption">{{ btnText }}</span>
      <span v-else>{{ selectedOption.name }}</span>
      <div class="select-single__arrow"></div>
    </button>
    <Transition v-show="isMenuOpen">
      <ul :class="['select-single__menu_' + getTheme]" role="presentation">
        <li
          v-for="option in selectOptions"
          :class="['select-single__option_' + getTheme]"
          role="option"
          :aria-selected="option.isSelected"
          @click="handleMakingSelection(option)"
        >
          {{ option.name }}
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
    selectOptions: {
      type: Array,
    },
  },
  data() {
    return {
      isMenuOpen: false,
      selectedOption: false,
    };
  },
  methods: {
    toggleData(objName, propString) {
      objName[propString] = !objName[propString];
    },
    handleMakingSelection(clickedOption) {
      // toggle isSelected of the clicked option
      this.toggleData(clickedOption, "isSelected");
      // save clicked option
      this.selectedOption = clickedOption;
      // set other options as unselect
      this.selectOptions.forEach((option) => {
        if (option !== clickedOption) {
          option.isSelected = false;
        }
      });
      // emit selected option
      this.$emit("selectedOption", this.selectedOption);
    },
  },
  computed: {
    getTheme() {
      return this.propTheme;
    },
  },
};
</script>
