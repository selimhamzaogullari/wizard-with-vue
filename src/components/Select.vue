<template>
  <div>
    <div class="select-box-title">{{title}}</div>
    <div class="select-box" :class="{'active': activeClass}" @click="activeClass = !activeClass" :id="id">
      {{activeItem.name}}
      <img src="../assets/icons/arrow-down.svg" alt="arrow-down" />
      <div class="select-box-content">
        <div class="item" v-for="(item, i) of data" :key="'item-' + i" :class="{'active' : i === activeIndex}" @click="emitData(item, i)">
          {{item.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: {
    id: {
      type: String,
      default: 'select'
    },
    data: {
      type: Array,
      default: []
    },
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      activeIndex: 0,
      activeClass: false,
      activeItem: null
    }
  },
  methods: {
    emitData(item, i) {
      this.$emit('update', item)
      this.activeItem = item
      this.activeIndex = i
    },
    clickOutside() {
      const specifiedElement = document.getElementById(this.id);
      document.addEventListener("click", (event) => {
        const isClickInside = specifiedElement.contains(event.target);
        if (!isClickInside) {
          this.activeClass = false
        }
      });
    }
  },
  created() {
    this.$emit('update', this.data[0])
    this.activeItem = this.data[0]
  },
  mounted() {
    this.clickOutside()
  }
}
</script>

<style scoped>
  .select-box {
    width: 200px;
    border: 1px solid var(--color-border);
    padding: 10px;
    font-family: 'Roboto', sans-serif;
    font-size: var(--size-font);
    position: relative;
    border-radius: 3px;
    cursor: pointer;
  }
  .select-box-title {
    margin-bottom: 10px;
  }
  .select-box.active .select-box-content {
    visibility: visible;
    opacity: 1;
  }
  .select-box img {
    position: absolute;
    right: 6px;
    top: 7px;
  }
  .select-box-content {
    padding: 10px;
    position: absolute;
    top: 40px;
    z-index: 5;
    left: 0;
    height: fit-content;
    width: calc(100% - 20px);
    visibility: hidden;
    opacity: 0;
    box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
    cursor: pointer;
    transition: all .2s ease-in-out;
    border-radius: 3px;
    background-color: var(--color-white);
  }
  .select-box-content .item {
    padding: 8px 10px;
    border-radius: 3px;
  }
  .select-box-content .item.active {
    background-color: var(--color-grey);
  }
</style>
