<template>
  <div class="wizard">
    <div>
      <div class="title">Ooops</div>
      <div class="description">
        Your age ove our accepted limit. <br>
        We are sorry but we cannot insure you now
      </div>
      <Button @click="nextPage" width="large">Ok  :(</Button>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";
import {mapActions} from "vuex";
export default {
  name: "wizard-error",
  components: {Button},
  methods: {
    ...mapActions(['updatePage']),
    nextPage() {
      this.updatePage(1)
    }
  }
}
</script>

<style scoped>

</style>
