<template>
  <div id="app">
    <Wizard1 v-if="page === 1"/>
    <Wizard2 v-if="page === 2"/>
    <WizardError v-if="page === 4"/>
  </div>
</template>

<script>

import Button from "@/components/Button";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Wizard1 from "@/pages/wizard-1";
import {mapState} from "vuex";
import WizardError from "@/pages/wizard-error";
import Wizard2 from "@/pages/wizard-2";
export default {
  name: 'App',
  components: {
    Wizard2,
    WizardError,
    Wizard1,
    Select,
    Input,
    Button
  },
  computed: {
    ...mapState(['page'])
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
:root {
  --color-bg: #c8c8c8;
  --color-font: #333333;
  --color-white: #ffffff;
  --color-border: #a4a4a4;
  --color-grey: #dfdfdf;
  --color-light-grey: #fafafa;
  --size-font: 16px;
  --size-font-title: 26px;
}
body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  color: var(--color-font);
  font-size: var(--size-font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.wizard {
  width: 700px;
  background-color: var(--color-light-grey);
  height: 350px;
  border-radius: 3px;
  margin: 7% auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wizard .description {
  margin-bottom: 20px;
  line-height: 20px;
}
.title {
  font-size: var(--size-font-title);
  font-weight: bold;
  margin-bottom: 26px;
}

</style>
