<template>
  <div class="b-container" fluid>
    <the-navbar />
    <h1 class="my-5">Daftar Instrumen Investasi</h1>
    
    <b-container>
      <b-row class="search-row" cols="12" md="4">
        <b-col  >
          <label for="ddown-left">Provinsi</label>
          <b-dropdown id="ddown-left" text="D.I. Yogyakarta" variant="outline-primary" class="m-2">
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here</b-dropdown-item>
          </b-dropdown>
        </b-col>
        <b-col >
          <label for="ddown-right">Urutkan berdasarkan</label>
          <b-dropdown id="ddown-right" text="Popularitas" variant="outline-primary" class="m-1">
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here</b-dropdown-item>
          </b-dropdown>
        </b-col>
        
        <b-col  class="search-col">
          <label for="search">Pencarian</label>
          <b-input-group>
            <b-form-input placeholder="Kata kunci" id="search"></b-form-input>
            <b-input-group-append>
              <b-btn variant="outline-primary" placeholder="Kata Kunci">
                <b-img :src="icon.search" />
              </b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-col>
      </b-row>
    </b-container>
    
    <b-container class="mb-5">
      <b-row v-for="row in 3" :key="row.index" class="my-5">
        <b-col v-for="card in getRowItems(row,getPageItems(page,items))" :key="card.index" cols="12" md="4" class="card-item px-0 my-5 my-md-0" >
          <card-item
            :id="card.id"
            :name="card.name" 
            :address="card.address" 
            :price="card.price" 
            :roi="card.roi" 
            :period="card.period"
            :image="card.thumbnail"
            />
        </b-col>
      </b-row>
    </b-container>
    
    <b-row class="my-5 mx-0">
      <b-col cols="12">
        <b-pagination-nav align="center" use-router base-url="" :number-of-pages="getPageAmounts(items)" :v-model="page" />
      </b-col>
    </b-row>
    <the-footer />
  </div> 
</template>

<script>
import axios from 'axios'
import TheNavbar from './TheNavbar'
import TheFooter from './TheFooter'
import CardItem from './CardItem'

export default {
  name: 'BrowsePage',
  beforeMount() {
    axios.get('https://private-09c8c-monggovestdummy.apiary-mock.com/investments/1')
    .then((response) => {
      this.items = response.data
    }) 
    .catch((error) => {
      console.log(error.message)
    })
  },
  components: {
    TheNavbar,
    TheFooter,
    CardItem
  },
  data() {
    return {
      icon: {
        search: require('../assets/icon-search.svg')
      },
      page: this.$route.params.page,
      items: []
    };
  },
  methods: {
    getPageItems: (page,items) => {
      if (items.length >= 9) {
        const startItem = (page - 1) * 9
        return items.slice(startItem,startItem+9)
      } else {
        return items
      }
    },
    getRowItems: (row,items) => {
      const startItem = (row - 1) * 3
      return items.slice(startItem,startItem+3)
    },
    getPageAmounts: (items) => {
      return Math.ceil(items.length / 9)
    }
  }
}
</script>

<style lang="scss" scoped>
input[id="search"]{
  border-radius: 2rem;
}
label {
  display: block;
}
.btn-toolbar{
  justify-content: center;
  .btn{
    border-radius: 0;
    background-color: rgba(0,0,0,0);
    border: 1px solid #1782D9;
    color: #1782D9;
    &:hover{
      background-color: #1782D9;
      color: white;
    }
  }
}
</style>

