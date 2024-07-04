<template>
  <div class="select-single">
    <label class="select-single__label" :for="id">{{ label }}</label>
    <div
      :id="id"
      :class="['select-single__listbox_' + propTheme]"
      :data-invalid="isInvalid"
      role="listbox"
    >
      <button
        type="button"
        :class="['select-single__btn-toggle_' + propTheme]"
        @click="toggleData(this, 'isMenuOpen')"
      >
        <span v-if="!selectedOption">{{ btnText }}</span>
        <span v-else>{{ selectedOption.name }}</span>
        <div class="select-single__icon"></div>
      </button>
      <Transition v-show="isMenuOpen">
        <ul
          :class="['select-single__list-container_' + propTheme]"
          role="presentation"
        >
          <li
            v-for="option in selectOptions"
            :class="['select-single__option_' + propTheme]"
            role="option"
            :aria-selected="option.isSelected"
            @click="handleMakingSelection(option)"
          >
            {{ option.name }}
          </li>
        </ul>
      </Transition>
      <span v-if="isInvalid" class="select-single__error mb-start-1">
        <span class="select-single__error-icon"></span>
        <p class="select-single-message">{{ errorMessage }}</p>
      </span>
    </div>
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
    id: {
      type: String,
    },
    label: {
      type: String,
    },
    isInvalid: {
      type: Boolean,
      required: false,
      default: false,
    },
    errorMessage: {
      type: String,
      required: false,
      default: "This field is required",
    },
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleData(objName, propString) {
      objName[propString] = !objName[propString];
    },
    handleMakingSelection(clickedOption) {
      // toggle isMenuOpen
      this.toggleData(this, "isMenuOpen");
      // toggle isSelected of the clicked option
      this.toggleData(clickedOption, "isSelected");
      // only single selected option is possible
      // set other options as unselect
      this.selectOptions.forEach((option) => {
        if (option !== clickedOption) {
          option.isSelected = false;
        }
      });
      // emit the selected option
      if (this.selectedOption !== undefined) {
        this.$emit("selectedOption", this.selectedOption);
      } else {
        // if nothing selected, return empty string
        this.$emit("selectedOption", "");
      }
    },
  },
  computed: {
    selectedOption() {
      // filter() returns array
      const filteredOptions = this.selectOptions.filter((o) => o.isSelected);
      // we only get a single option
      return filteredOptions[0];
    },
  },
};
</script>
