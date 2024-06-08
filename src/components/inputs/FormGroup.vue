<template>
  <div class="form-group">
    <label class="form-group__label" :for="id">{{ label }}</label>
    <input
      class="form-group__input"
      :type="type"
      :id="id"
      :placeholder="placeholder"
      :autocomplete="autoComplete"
      :aria-required="required"
      :aria-invalid="isInvalid.toString()"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <span class="form-group__error">Error Message</span>
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
  },
  emits: ["update:modelValue"],
};
</script>
