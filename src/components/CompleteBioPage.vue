<template>
  <div class="b-container mx-2 my-2" fluid>
    <!-- HEADER HERE -->
    <the-navbar />
    
    <b-row class="my-5">
      <b-col cols="5"><h4><strong>Lengkapi Data Diri</strong></h4></b-col>
      <b-col cols="2">&mdash;</b-col>
      <b-col cols="5" ><b-link v-bind:to="'payment'"
              ><h4><strong>Pembayaran</strong></h4></b-link>
      </b-col>
    </b-row>

    <!-- FORM DETAIL  -->
    <div class="mx-0">
      <div class="my-4">
        <h4>Informasi Pribadi</h4>
        <hr>
      </div>
    </div>
<!-- <div class="col-8" align="left">
        <label for="bornDate">Tanggal Lahir</label>
        <input type="date" class="form-control" id="userDueDate" placeholder="DD/MM/YY">
      </div> -->
    <div cols="12">
      <form cols="6" >
        <div class="row row-1-form">
          <div class="col-6" align="left">
            <p class="my-2">Nama Lengkap*</p>
            <input type="text" class="form-control" placeholder="Binar Academy">
          </div>
          <div class="col-6 my-2" align="left">
            <label for="bornDate">Tanggal Lahir</label>
            <input type="date" class="form-control" id="userDueDate" placeholder="DD/MM/YY">
          </div>
        </div>
  
        <div class="row row-2-form">
          <div class="col col-1-form" align="left">
            <p class="my-2">No. identitas*</p>
            <input type="text" class="form-control" placeholder="36032xxx . . .">
          </div>
          <div class="col col-2-form" align="left">
            <p class="my-2">Jenis Identitas</p>
            <b-form-select v-model="identityType" class="mb-3">
              <option :value="identityType">Pilih Identitas</option>
              <option value="01">KTP</option>
              <option value="02">SIM</option>
              <option value="03">NPWP</option>
            </b-form-select>
          </div>
        </div>

        <div class="row row-3-form">
          <div class="col address-col" align="left">
            <p class="my-2">Alamat*</p>
            <input type="text" class="form-control" placeholder="Jl. Jenderal Arthur, No. 99, Kotabaru">
          </div>
          <div class="col prov-col" align="left">  
            <p class="my-2">Provinsi</p>
            <b-form-select v-model="identityProvince" class="mb-3">            
              <option :value="identityProvince">Pilih Provinsi</option>
              <option value="a">Aceh</option>
              <option value="b">Bali</option>
              <option value="c">Banten</option>
              <option value="d">Bengkulu</option>
              <option value="e">Gorontalo</option>
              <option value="f">Jakarta</option>
              <option value="g">Jambi</option>
              <option value="h">Jawa Barat</option>
              <option value="i">Jawa Tengah</option>
              <option value="j">jawa Timur</option>
              <option value="k">Kalimantan Barat</option>
              <option value="l">Kalimantan Selatan</option>
              <option value="m">Kalimantan Tengah</option>
              <option value="n">Kalimantan Timur</option>
              <option value="o">Kalimantan Utara</option>
              <option value="p">Kepulauan Bangka Belitung</option>
              <option value="q">Kepulauan Riau</option>
              <option value="r">Lampung</option>
              <option value="s">Maluku</option>
              <option value="t">Maluku Utara</option>
              <option value="u">Nusa Tenggara Barat</option>
              <option value="v">Nusa Tenggara Timur</option>
              <option value="w">Papua</option>
              <option value="x">Papua Barat</option>
              <option value="y">Riau</option>
              <option value="z">Sulawesi Barat</option>
              <option value="aa">Sulawesi Selatan</option>
              <option value="ab">Sulawesi Tengah</option>
              <option value="ac">Sulawesi Sulawesi Tenggara</option>
              <option value="ad">Sulawesi Utara</option>
              <option value="ae">Sumatera Barat</option>
              <option value="af">Sumatera Selatan</option>
              <option value="ag">Sumatera Utara</option>
              <option value="ah">Yogyakarta</option>
            </b-form-select>  
          </div>
        </div>
      </form>
    </div>

    <!-- Contact INFO -->
    <div> 
      <div class="row contact">
        <div class="col contact-title-line" align="left">
          <h4 class="my-2">Informasi Kontak</h4>
        </div>  
      </div>
      <div class="row">  
        <div class="col contact-info" align="left">
          <p class="my-0">Telepon*</p>
        </div>
      </div>
      <div class="row number-col">
        <div class="col-6 user-number">
          <input type="number" class="form-control user-number" placeholder="0800 1111 2222">
        </div>
      </div>
      <div class="row email-title">
        <div class="col email-title" align="left">
          <p class="my-2">Email*</p>
        </div>
      </div>
      <div class="row email-form">
        <div class="col-6 user-email">
          <input type="text" class="form-control user-email" placeholder="Andrew.w@gmail.com">
        </div>
      </div>
      <div class="row salarys">
        <div class="col salary" align="left">
          <h4 class="my-2">Informasi Penghasilan</h4>
        </div>
      </div>
      <div class="row text-data">
        <div class="col" align="left">
          <p class="my-0">Jumlah Penghasilan Per Bulan*</p>
        </div>
      </div>
      <div class="row salary-form">
        <div class="col-6 salary-form">
          <b-form-select v-model="rangePrice" class="mb-3">
            <option :value="rangePrice">Rp 5.000.000 &mdash; Rp 9.999.999</option>
              <option value="za">Rp 10.000.000 &mdash; Rp 19.999.999</option>
              <option value="za">Rp 20.000.000 &mdash; Rp 29.999.999</option>
              <option value="zb">Rp 30.000.000 &mdash; Rp 39.999.999</option>
              <option value="zc">Rp 40.000.000 &mdash; Rp 49.999.999</option>
              <option value="zd">Rp 50.000.000 &mdash; Ke Atas </option>    
          </b-form-select>
        </div>
        <div class="col-4 salary-source">
          <b-form-select v-model="salarySource" class="mb-3">
            <option :value="salarySource">Gaji</option>
              <option value="ze">Hasil Usaha</option>
              <option value="zf">Tabungan</option>
              <option value="zg">Warisan</option>
              <option value="zh">Lotre</option>
              <option value="zi">Lainnya</option>
          </b-form-select>
        </div>
      </div>
      <div class="row save-data">
        <div class="col my-2 ml-4" align="left">
          <b-form-checkbox id="check save-bio"
          :value="accepted"
          unchecked-value="not_accepted">
            <strong>Simpan data ke Profile</strong>
          </b-form-checkbox>
        </div>
      </div>
      <div class="row next-payment-btn">
        <div class="col" >
          <b-button :to="'payment'" variant="gradient" size="lg" class="px-4 mb-5" >Lanjut ke Pembayaran</b-button> 
        </div>
      </div>
    </div>
  <the-footer />
  </div>
</template>



<script>
import Datepicker from 'vuejs-datepicker';
import TheNavbar from './TheNavbar'
import TheFooter from './TheFooter'
var state = {
  date: new Date(2018,4,13)
}
export default {
  name: 'CompleteBioPage',
  data () {
    selected: ''
    return {
      date: null,
      format: 'yyyy MM dd',
      calendarButton: true,
      option: 'value',
      accepted: 'value',
      selected: 'value'
      }
    },
  components: {
    Datepicker,
    TheNavbar,
    TheFooter
  }
}
</script>

<style lang="scss" scoped>
input[type=date] {
  -webkit-appearance: menulist;
}
li {
  list-style: none;
}
h4 {
  color: black;
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
a[data-v-5ebfb15e] {
  color: #FFF;
}

</style>
