<template>
  <b-container fluid class="px-0">
    <the-navbar />
    <b-container fluid class="px-5">
      <h1 class="mt-5">{{name}}</h1>
      <h4 class="mb-5">{{addCurrency(price)}}</h4>
      <b-row>
        <b-col cols="12" lg="6">
          <b-carousel id="carousel" controls indicators :interval="4000">
            <b-carousel-slide v-for="image in images.length" :key="image">
                <img 
                class="d-block img-fluid w-100"
                slot="img"
                :src="images[image-1]" 
                alt="image slot" 
                style="max-height: 480px; height: 520px;">
            </b-carousel-slide>
          </b-carousel>
        </b-col>
        <b-col cols="12" lg="6">
          <b-card no-body d-block>
            <b-tabs card class="text-left">
              <b-tab title="Ringkasan" active>
                <p>Periode Kontrak &emsp; &emsp; : {{contractPeriod}}</p>
                <p>Return yang didapat &ensp; : {{roi}}</p>
                <p>Periode bagi hasil &ensp; &emsp;: {{dividendPeriod}}</p>
              </b-tab>
              <b-tab title="Rincian">
                <p>{{details}}</p>
              </b-tab>
              <b-tab title="Prediksi">
                <b-img src="../assets/Screen Shot 2018-03-06 at 23.17.53.png" fluid-grow/>
              </b-tab>
            </b-tabs>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-button variant="gradient" size="lg" class="px-4 mt-5" v-b-modal.calculatorModal >Lakukan Investasi</b-button>
          <modal-calculator :price="price" />
        </b-col>
      </b-row>
    </b-container>
    <b-container class="mb-5 pb-5">
      <h1 class="my-5">Instrumen Investasi Serupa</h1>
      <b-row>
        <b-col v-for="item in similarItems" :key="item.index" cols="12" lg="4" class="card-item px-0 my-5 my-md-0">
          <card-item
            :id="item.id"
            :name="item.name" 
            :address="item.address" 
            :price="item.price" 
            :roi="item.roi" 
            :period="item.period"
            :image="item.thumbnail" />
        </b-col>
      </b-row>
    </b-container>
    <the-footer />
  </b-container>
</template>

<script>
import TheNavbar from './TheNavbar'
import TheFooter from './TheFooter'
import CardItem from './CardItem'
import ModalCalculator from './ModalCalculator'
import axios from 'axios'

export default {
  name: 'InvestmentPage',
  beforeCreate() {
    let id = this.$route.params.id;
    axios.get(`https://private-09c8c-monggovestdummy.apiary-mock.com/investments/${id}/detail`)
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error.message);
    })
  },
  beforeMount() {
    axios.get('https://private-09c8c-monggovestdummy.apiary-mock.com/investments/top/')
    .then((response) => {
      this.similarItems = response.data
    }) 
    .catch((error) => {
      console.log(error.message)
    })
  },
  data () {
    return {
      name: 'Sapi Perah',
      price: 19000000,
      images: [
        require('../assets/sapi-coklat.jpg'),
        require('../assets/sapi-ternak-gemuk.jpg'),
        require('../assets/sapi_biru_2.jpg')
      ],
      contractPeriod: '10 tahun',
      roi: '15-20% per tahun',
      dividendPeriod: '1 tahun',
      details: 'Telah terdapat 1000 ekor sapi dengan 473 orang 594 slot tersisa. Dalam sejarahnya, sapi penghasil susu dan sapi pedaging tidak memiliki perbedaaan mencolok, dengan induk yang sama dapat digunakan untuk menghasilkan sapi yang menghasilkan susu (sapi betina) maupun daging (umumnya sapi jantan).',
      similarItems: []
    }
  },
  components: {
    TheNavbar,
    TheFooter,
    CardItem,
    ModalCalculator
  },
  methods: {
    addCurrency: function (i) {
      return 'Rp' + i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  }
};

</script>

<style lang="scss" scoped>
</style>
