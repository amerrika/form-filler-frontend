<template>
  <div class="form-group">
    <label class="form-group__label" :for="id">{{ label }}</label>
    <div class="form-group__input-wrapper">
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
        <span class="form-group__error-icon"></span>
        <p class="form-group__error-message">{{ errorMessage }}</p>
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
