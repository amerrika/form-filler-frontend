<template>
  <div
    :id="selectSingleId"
    :class="['select-single_' + propTheme]"
    role="listbox"
  >
    <button
      :class="['select-single__btn-toggle_' + propTheme]"
      @click="toggleData(this, 'isMenuOpen')"
    >
      <span v-if="!selectedOption">{{ btnText }}</span>
      <span v-else>{{ selectedOption.name }}</span>
      <div class="select-single__arrow"></div>
    </button>
    <Transition v-show="isMenuOpen">
      <ul :class="['select-single__menu_' + propTheme]" role="presentation">
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
    <div class="select-single__message mb-start-1">
      <svg
        fill="#c60243"
        height="12px"
        width="12px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 511.76 511.76"
        xml:space="preserve"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0" />

        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        />

        <g id="SVGRepo_iconCarrier">
          <g>
            <g>
              <path
                d="M436.896,74.869c-99.84-99.819-262.208-99.819-362.048,0c-99.797,99.819-99.797,262.229,0,362.048 c49.92,49.899,115.477,74.837,181.035,74.837s131.093-24.939,181.013-74.837C536.715,337.099,536.715,174.688,436.896,74.869z M361.461,331.317c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251 l-75.413-75.435l-75.392,75.413c-4.181,4.16-9.643,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251 c-8.341-8.341-8.341-21.845,0-30.165l75.392-75.413l-75.413-75.413c-8.341-8.341-8.341-21.845,0-30.165 c8.32-8.341,21.824-8.341,30.165,0l75.413,75.413l75.413-75.413c8.341-8.341,21.824-8.341,30.165,0 c8.341,8.32,8.341,21.824,0,30.165l-75.413,75.413L361.461,331.317z"
              />
            </g>
          </g>
        </g>
      </svg>
      <p>Please provide correct data</p>
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
    selectSingleId: {
      type: String,
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
        return;
      }
    },
  },
  computed: {
    selectedOption() {
      // filter returns array
      const filteredOptions = this.selectOptions.filter((o) => o.isSelected);
      // we only get a single option
      return filteredOptions[0];
    },
  },
};
</script>
