<template>
  <div class="wizard" v-if="allData.hasOwnProperty('name')">
    <div>
      <div class="title">Summary</div>
      <div class="title-sm">{{allData.name}},</div>
      <div class="description">
        <div>Name: {{allData.name}}</div>
        <div>Age: {{allData.age}}</div>
        <div>Where do you live: {{allData.country.name}}</div>
        <div>Package: {{allData.package}}</div>
        <div>Premium: {{allData.price}}{{allData.country.currency}}</div>
      </div>
      <div class="btn-group">
        <Button withBorder width="small" @click="prevPage">Back</Button>
        <Button width="small" @click="nextPage">Buy</Button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import Button from "@/components/Button";

export default {
  name: "wizard-3",
  components: {Button},
  computed: {
    ...mapState(['allData'])
  },
  methods: {
    ...mapActions(['updatePage']),
    nextPage() {
      this.updatePage(1)
    },
    prevPage() {
      this.updatePage(2)
    }
  },
  mounted() {
    console.log(this.allData)
  }
}
</script>

<style scoped>
.description div {
  margin: 10px;
}
</style>
