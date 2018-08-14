<template>
  <b-link :to="{ name: 'investment', params: { id: id }}" class="card-container">
    <div class="card-image" v-bind:style="{ backgroundImage: getBgImage(image) }">
    </div>
    <div class="card-content">
      <div class="info">
        <p><strong>{{name}}</strong></p>
        <p>{{address}}</p>
      </div>
      <div class="price">
        <h3>{{addCurrency(price)}}</h3>
      </div>
    </div>
    <div class="card-footer">
      <div class="roi">
        <b-img :src="icon.roi" />
        <p class="pl-3">{{roi}}</p>
      </div>
      <div class="period">
        <p class="pr-3">{{period}}</p>
        <b-img :src="icon.period" />
      </div>
    </div>
  </b-link>
</template>

<script>
export default {
  name: 'cardItem',
  data() {
    return {
      icon: {
        roi: require('../assets/icon-roi.svg'),
        period: require('../assets/icon-period.svg')
      }
    }
  },
  props: {
    id: { type: Number },
    name: { type: String },
    address: { type: String },
    price: { type: Number },
    roi: { type: String },
    period: { type: String },
    image: { type: String }
  },
  methods: {
    addCurrency: function (i) {
      return 'Rp' + i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    getBgImage: function(url) {
      return `url(${url})`
    },
    getUrl: (id) => {
      return `investment/${id}`
    }
  }
}
</script>

<style lang="scss" scoped>
.card-container{
  display: block;
  width: 362px;
  border: 1px solid rgba(197, 226, 250, 1);
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(7, 112, 200, .1);
  transition: box-shadow .25s cubic-bezier(0, 0, 0, 1);
  &:hover{
    box-shadow: 0 10px 20px rgba(5, 79, 140, .2);
    text-decoration: none;
    .card-image{
      opacity: .9;
    }
  }
  p{
    color: #02050F;
    margin: 0;
  }
  h3{
    margin: 0;
  }
}
.card-image{
  width: 360px;
  height: 270px;
  border-radius: 9px 9px 0 0;
  background-size: cover;
  background-position: center;
  opacity: .8;
  transition: all .25s cubic-bezier(0, 0, 0, 1);
}
.card-content{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 180px;
  padding: 1.25rem;
}
.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #F5FAFF;
  border-top: 1px solid rgba(197, 226, 250, .5);
  border-radius: 0 0 9px 9px;
  :last-child{
    border-radius: 0 0 9px 9px;
  }
}
.roi, .period{
  display: inline-flex;
  p{
    color: #18467A;
    font-size: .8rem;
  }
}
</style>
