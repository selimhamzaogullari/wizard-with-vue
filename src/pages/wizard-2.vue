<template>
  <div class="wizard-second">
    <div class="title">Tell us about yourself</div>
    <div class="form">
      <Input v-model="data.name" label-name="Name"/>
      <Input v-model="data.age" label-name="Age" class="age-input" />
      <Select id="select-country" class="select" title="Where do you live"
          :data="countries" @update="e => data.country = e" />
    </div>
    <div class="bottom">
      <div class="select-package">
        <Input type="radio" label-name="Standard" radio-name="package" :checked="true" @click.native="data.package = 'Standard'"/>
        <Input type="radio" :label-name="`Safe (+${totalPrice / 2}${data.country.currency}, 50%)`" radio-name="package" class="radio-btn" @click.native="data.package = 'Safe'"/>
        <Input type="radio" :label-name="`Super Safe (+${totalPrice / 4 * 3}${data.country.currency}, 75%)`" radio-name="package" @click.native="data.package = 'Super Safe'"/>
      </div>
      <div class="title">Your premium is:
        {{totalPrice + (data.package === 'Standard' ? 0 : (data.package === 'Safe' ? totalPrice / 2 : totalPrice / 4 * 3))}}
        {{data.country.currency}}
      </div>
      <div class="btn-group">
        <Button withBorder width="small" @click="prevPage">Back</Button>
        <Button width="small" @click="nextPage">Next</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input";
import Select from "@/components/Select";
import Button from "@/components/Button";
import {mapActions} from "vuex";
export default {
  name: "wizard-2",
  components: {Button, Select, Input},
  computed: {
    totalPrice() {
      console.log('asdasd')
      return 10 * this.data.age * this.data.country.rate
    }
  },
  data() {
    return {
      countries: [
        {name: 'Hong Kong', currency: 'HKD', rate: 1},
        {name: 'USA', currency: 'USD', rate: 2},
        {name: 'Australia', currency: 'AUD', rate: 3}
      ],
      data: {
        name: '',
        age: 0,
        country: {},
        package: 'Standard',
      }
    }
  },
  methods: {
    ...mapActions(['updatePage', 'updateAllData']),
    nextPage() {
      this.updatePage(this.data.age >= 100 ? 4 : 3)
    },
    prevPage() {
      this.updatePage(1)
    },
  },
  destroyed() {
    this.updateAllData({...this.data,
      price: this.totalPrice + (this.data.package === 'Standard' ? 0 : (this.data.package === 'Safe' ? this.totalPrice / 2 : this.totalPrice / 4 * 3))})
  }
}
</script>

<style scoped>
  .wizard-second {
    width: 700px;
    margin: 7% auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .form {
    width: 222px;
    text-align: left;
  }
  .age-input, .select {
    margin-top: 15px;
  }
  .bottom {
    background-color: var(--color-light-grey);
    width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    border-radius: 3px;
    padding: 15px 10px 30px 10px;
  }
  .bottom .title {
    margin-top: 7%;
  }
  .select-package {
    width: 222px;
    text-align: left;
  }
  .select-package input{
    margin-top: 10px;
  }
  .radio-btn {
    margin: 20px 0;
  }
  .btn-group {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ::v-deep button.small {
    margin: 0 10px!important;
  }
</style>
