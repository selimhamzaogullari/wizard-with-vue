<template>
  <div>
    <button @click="$emit('click', $event)" :class="[withBorder ? 'border' : 'bg', width]">
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
    },
    width: {
      type: String,
      default: 'normal'
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
    cursor: pointer;
  }
  button.bg {
    background-color: var(--color-font);
    color: var(--color-white);
  }
  button.large {
    min-width: 300px
  }
</style>
