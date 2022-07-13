<template>
    <div>
      <label v-if="type === 'radio'" class="label-content"> Text
        <input type="radio" name="radio">
        <span class="checked"></span>
      </label>
      <input type="text" v-else/>
    </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    type: {
      type: String,
      default: 'text'
    }
  }
}
</script>

<style scoped>
  /* Text */
  input {
    width: 200px;
    border: 1px solid var(--color-border);
    padding: 10px 6px;
    font-family: 'Roboto', sans-serif;
    font-size: var(--size-font);
    border-radius: 3px;
  }
  input:focus {
    outline: none;
  }
  /* Radio */
  .label-content {
    display: block;
    position: relative;
    padding-left: 25px;
    margin-bottom: 12px;
    font-size: var(--size-font);
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  input[type='radio'] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  .checked {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
    border-radius: 50%;
  }
  .label-content:hover input ~ .checked {
    background-color: #ccc;
  }
  .label-content input:checked ~ .checked {
    background-color: #2196F3;
  }
  .checked:after {
    content: "";
    position: absolute;
    display: none;
  }
  .label-content input:checked ~ .checked:after {
    display: block;
  }
  .label-content .checked:after {
    top: 5px;
    left: 5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: white;
  }
</style>
