<template>
  <b-container fluid class="px-0">
    <the-navbar />
    <the-hero />
    <b-container class="py-5">
      <h1 class="my-5">Langkah Mudah Berinvestasi</h1>
      <b-row>
        <b-col v-for="step in steps" :key="step.index" cols="12" sm="3">
          <img :src="step.icon" :alt="step.alt" />
          <br />
          <p class="mt-4">{{ step.desc }}</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-button variant="gradient" size="lg" class="px-4 mt-5" :to="'browse'">Lihat Investasi</b-button>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="mb-5 pb-5">
      <h1 class="my-5">Instrumen Investasi Terpopuler</h1>
      <b-row>
        <b-col v-for="item in topItems" :key="item.index" cols="12" md="4" class="card-item px-0 my-5 my-md-0">
          <card-item 
            :id="item.id"
            :name="item.name" 
            :address="item.address" 
            :price="item.price" 
            :roi="item.roi" 
            :period="item.period"
            :image="item.thumbnail"
            />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-button variant="gradient" size="lg" class="px-4 mt-5" :to="'browse'">Lihat Lebih Banyak</b-button>
        </b-col>
      </b-row>
    </b-container>
    <the-footer />
  </b-container>
</template>

<script>
import TheNavbar from './TheNavbar'
import TheHero from './TheHero'
import CardItem from './CardItem'
import TheFooter from './TheFooter'
import axios from 'axios'

export default {
  name: 'HomePage',
  beforeMount() {
    axios.get('https://private-09c8c-monggovestdummy.apiary-mock.com/investments/top/')
    .then((response) => {
      this.topItems = response.data
    }) 
    .catch((error) => {
      console.log(error.message)
    })
  },
  components: {
    TheNavbar,
    TheHero,
    CardItem,
    TheFooter
  },
  data() {
    return {
      steps: [
        {icon: require('../assets/icon-invest.svg'), desc: 'Pilih Instrumen Investasi', alt: 'invest icon'},
        {icon: require('../assets/icon-pay.svg'), desc: 'Lakukan Pembayaran', alt: 'payment icon'},
        {icon: require('../assets/icon-cow.svg'), desc: 'Modal Sampai ke Peternak', alt: 'cow icon'},
        {icon: require('../assets/icon-result.svg'), desc: 'Tunggu Hasilnya', alt: 'result icon'}
      ],
      topItems: []
    };
  }
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
</style>
