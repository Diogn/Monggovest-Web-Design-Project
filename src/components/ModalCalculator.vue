<template>
  <b-modal id="calculatorModal" title="LAKUKAN INVESTASI" centered hide-footer>
    <b-container>
      <b-form>
        <b-row>
          <label for="fieldLot" class="text-left">Masukkan Jumlah Lot</label>
        </b-row>
        <b-row class="mb-4">
          <b-col cols="3">
            <b-input id="fieldLot" type="number" v-model.number="lot" :max="maxLot(price, lotPrice)"/>
          </b-col>
          <b-col cols="9" align-self="center">
            <input type="range" min="0" :max="maxLot(price, lotPrice)" v-model.number="lot" class="slider" id="calculator">
          </b-col>
        </b-row>
        <b-row class="text-left">
          <b-col cols="4" offset="2">Harga Per Lot</b-col>
          <b-col cols="4">{{addCurrency(lotPrice)}}</b-col>
        </b-row>
        <b-row class="text-left">
          <b-col cols="4" offset="2">Total Harga</b-col>
          <b-col cols="4">{{addCurrency(totalPrice(lot, lotPrice))}}</b-col>
        </b-row>
        <b-button type="submit" variant="gradient" size="lg" class="px-4 my-4" :to="{name: 'completeBio'}">Lanjutkan</b-button>        
      </b-form>
    </b-container>
  </b-modal>
</template>

<script>
export default {
  name: 'ModalCalculator',
  props: {
    price: {type: Number, default: 1000000}
  },
  data() {
    return {
      lot: 0,
      lotPrice: 500000
    };
  },
  methods: {
    addCurrency: (i) => {
      return 'Rp' + i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    maxLot: (price, lotPrice) => {
      return price / lotPrice;
    },
    totalPrice: function (lot, lotPrice) {
      let total = lotPrice * lot;
      return (total > this.price ? this.price : total);
    }
  }
}
</script>

<style lang="scss" scoped>
.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 10px;
  border: 1px solid #0770C8;
  opacity: 0.7;
  transition: opacity .2s;
  border-radius: 5px;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 25px;
    height: 25px;
    background: linear-gradient(to bottom right, #04274E, #0770C8);
    border-radius: 50%;
    cursor: pointer;
  }
}
</style>
