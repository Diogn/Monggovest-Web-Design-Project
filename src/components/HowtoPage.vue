<template>
  <b-container fluid class="content pb-5">
    <the-navbar />
    <h1 class="my-5">Cara Kerja</h1>
    <hr />
    <b-container class="py-5 my-2">
      <b-row>
        <b-col v-for="step in steps" :key="step.index" cols="12" sm="3">
          <img :src="step.icon" :alt="step.alt" />
          <br />
          <p class="mx-4 pb-4">{{ step.desc }}</p>
        </b-col>
      </b-row>
    </b-container>
    <the-footer copy-only />
  </b-container>
</template>

<script>
import TheNavbar from './TheNavbar'
import TheFooter from './TheFooter'

export default {
  name: 'HowtoPage',
  components: {
      TheNavbar,
      TheFooter
  },
  data() {
    return {
      steps: [
        {icon: require('../assets/icon-invest.svg'), desc: 'Pilih Instrumen Investasi', alt: 'invest icon'},
        {icon: require('../assets/icon-pay.svg'), desc: 'Lakukan Pembayaran', alt: 'payment icon'},
        {icon: require('../assets/icon-cow.svg'), desc: 'Modal sampai pada peternak', alt: 'cow icon'},
        {icon: require('../assets/icon-result.svg'), desc: 'Pilih Instrumen Investasi', alt: 'result icon'}     
      ],
      topItems: []
    };
  }
}
</script>

<style lang="scss" scoped>
</style>
