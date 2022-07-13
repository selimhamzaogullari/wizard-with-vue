<template>
    <div>
      <label v-if="type === 'radio'" class="label-radio"> {{labelName}}
        <input type="radio" :name="radioName" :checked="checked">
        <span class="checked"></span>
      </label>
      <template v-else>
        <label class="label-text">{{labelName}}</label>
        <input type="text" @input="handleInput"/>
      </template>
    </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    type: {
      type: String,
      default: 'text'
    },
    labelName: {
      type: String,
      default: ''
    },
    radioName: {
      type: String,
      default: ''
    },
    checked: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      text: ''
    }
  },
  methods: {
    handleInput(e) {
      this.text = e.target.value
      this.$emit('input', this.text)
    }
  }
}
</script>

<style scoped>
  /* Text */
  input {
    width: 200px;
    border: 1px solid var(--color-border);
    padding: 10px;
    font-family: 'Roboto', sans-serif;
    font-size: var(--size-font);
    border-radius: 3px;
  }
  input:focus {
    outline: none;
  }
  .label-text {
    display: block;
    margin-bottom: 10px;
  }
  /* Radio */
  .label-radio {
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
  .label-radio:hover input ~ .checked {
    background-color: #ccc;
  }
  .label-radio input:checked ~ .checked {
    background-color: #2196F3;
  }
  .checked:after {
    content: "";
    position: absolute;
    display: none;
  }
  .label-radio input:checked ~ .checked:after {
    display: block;
  }
  .label-radio .checked:after {
    top: 5px;
    left: 5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: white;
  }
</style>
