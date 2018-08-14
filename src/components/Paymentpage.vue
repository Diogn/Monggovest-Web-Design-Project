<template>
  <div class="main-payment-div">
    <!-- HEADER -->
    <the-navbar />
    <div class="row head-nav-payment">
      <!-- HEAD NAVBAR PAYMENT -->
    </div>

    <!-- CAPTION -->
    <b-row class="my-5">
      <b-col cols="5">
        <b-link v-bind:to="'complete'" variant="outline-primary">
          <h4><strong>Lengkapi Data Diri</strong></h4>
        </b-link>
      </b-col>
      <b-col cols="2">&mdash;</b-col>
      <b-col cols="5" >
        <b-link v-bind:to="'payment'">
          <h4><strong>Pembayaran</strong></h4>
        </b-link>
      </b-col>
    </b-row>
    <div class="mx-0">
      <div class="my-4">
        <h4>Pilih Metode Pembayaran</h4>
        <hr>
      </div>
    </div>
    <div class="row-6 method-text ">
      <div class="col method-text" align="left">
        <p>Metode Pembayaran</p>
      </div>
    </div>
    <div class="form-row method-payment col-6">
      <select class="form-control ">
        <option >Kartu Kredit / Online Debit</option>
        <option >Transfer Bank</option>
      </select>
    </div>
    <div class="form-row card-number col-6">
      <label for="cardNumber">Nomor Kartu</label>
      <input type="number" class="form-control" id="userCardNumber" placeholder="111 222 333 444">
    </div>
    <div class="form-row card-name col-6">
      <label for="cardName">Nama Pada Kartu*</label>
      <input type="text" class="form-control" id="userCardName" placeholder="Joko Widodo">
    </div>
    <div class="form-row card-due-dat col-6">
      <div class="col-8" align="left">
        <label for="cardDueDate">Masa berakhir kartu (DD/MM/YY)*</label>
        <input type="date" class="form-control" id="userDueDate" placeholder="DD/MM/YY">
      </div>
      <div class="form-col col-4">
        <label for="CVV*">CVV*</label>
        <input type="text" class="form-control" id="CVV" placeholder="XXX">
      </div>
    </div>
    <div class="row payment-btn">
      <div class="col payment-btn">
        <b-button variant="gradient" size="lg" class="px-4 mt-5">Lakukan Pembayaran</b-button>
      </div>
    </div>
    <div class="row nav-footer-payment">
      <div class="col nav-footer-payment">
        <!-- NAV-FOOTER -->
      </div>
    </div>
  </div>
</template>

<script>
import TheNavbar from './TheNavbar'

export default {
  name: 'PaymentPage',
  components: {
    TheNavbar
  }
}
</script>

<style lang="scss" scoped>
li {
  list-style: none;
}
a{
  color: black;
  text-decoration: none;
  transition: all .25s cubic-bezier(0, 0, 0, 1);
  &:hover{
    background-color: rgba(255,255,255,.75);
    img{
      opacity: .75;
    }
  }
  img{
    opacity: .5;
    transition: all .25s cubic-bezier(0, 0, 0, 1);
  }
}
</style>
