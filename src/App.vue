<template>
  <div id="app">
    <Button>Text</Button>
    <Input type="radio"/>
    <Select id="select-1" :data="[{name: 'selim', value: 1}, {name: 'besim', value: 2}, {name: 'adem', value: 3}]"/>
  </div>
</template>

<script>

import Button from "@/components/Button";
import Input from "@/components/Input";
import Select from "@/components/Select";
export default {
  name: 'App',
  components: {
    Select,
    Input,
    Button
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
:root {
  --color-bg: #c8c8c8;
  --color-font: #333333;
  --color-white: #ffffff;
  --color-border: #a4a4a4;
  --color-light-grey: #eeeeee;
  --size-font: 16px
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

</style>
