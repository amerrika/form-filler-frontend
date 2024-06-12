<template>
  <div class="form-group">
    <label class="form-group__label" :for="id">{{ label }}</label>
    <div>
      <input
        class="form-group__input"
        :type="type"
        :id="id"
        :placeholder="placeholder"
        :autocomplete="autoComplete"
        :maxlength="maxlength"
        :aria-required="required"
        :aria-invalid="isInvalid.toString()"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <span v-if="isInvalid" class="form-group__error">
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
        <p>{{ errorMessage }}</p>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      default: "primary",
    },
    autoComplete: {
      type: String,
      required: false,
      default: "off",
    },
    id: {
      type: String,
      required: true,
      default: "name",
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
    label: {
      type: String,
      required: true,
      default: "Name",
    },
    modelValue: {
      type: String,
      required: true,
      default: "",
    },
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
    required: {
      type: Boolean,
      required: false,
      default: true,
    },
    type: {
      type: String,
      required: false,
      default: "text",
    },
    maxlength: {
      type: String,
      required: false,
    },
  },
  emits: ["update:modelValue"],
};
</script>
