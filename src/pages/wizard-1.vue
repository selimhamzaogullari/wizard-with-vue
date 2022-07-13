<template>
  <div class="wizard">
    <div>
      <div class="title">Hello There!</div>
      <div class="description">
        let' buy some insurance. It is going to take only a few steps
      </div>
      <Button @click="nextPage">Start</Button>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";
import {mapActions} from "vuex";
export default {
  name: "wizard-1",
  components: {Button},
  methods: {
    ...mapActions(['updatePage']),
    nextPage() {
      this.updatePage(2)
    }
  }
}
</script>

<style scoped>

</style>
