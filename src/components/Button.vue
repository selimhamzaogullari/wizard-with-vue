<template>
  <div>
    <button @click="$emit('click', $event)" :class="[withBorder ? 'border' : 'bg']">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      default: 'Button'
    },
    withBorder: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
  button {
    border: none;
    padding: 8px 15px;
    font-family: 'Roboto', sans-serif;
    font-size: var(--size-font);
    border-radius: 3px;
    min-width: 150px;
  }
  button.bg {
    background-color: var(--color-font);
    color: var(--color-white);
  }
</style>
