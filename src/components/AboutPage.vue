<template>
  <b-container fluid class="content pb-5">
    <the-navbar />
    <h1 class="my-5">Tentang Kami</h1>
    <hr />
    <b-container>
      <b-row class="mx-5 my-0 ">
        <p>Indonesia adalah negara yang mempunyai keberagaman yang luar biasa. Diversitas penduduk yang terbesar di seluruh penjuru, membuat kita seakan lupa betapa besarnya negara ini. Satu hal yang menarik bahwa persebaran penduduk di perkotaan dan pedesaan hampir serupa. Hal ini menandakan bahwa klasifikasi tempat tinggal masyarakat bukan menjadi hal yang utama. Jika kita berbicara tentang peternakan, pada hakikatnya swasembada lah yang kita harapkan. Perbandingan permintaan dan penawaran daging yang bernilai 1:3 (BPS, 2017), membuat pemerintah harus berlomba mencari daging sapi yang murah ke negeri-negeri tetangga. Memang ego dan preferensi sektor perkotaan maupun pedesaan, sedari dulu hanya membuat masalah baru yang berlarut saja. Seakan saling menyalahkan tanpa menggali solusi dari potensi yang ada.</p>
        <p>Seringkali permasalahan yang ditemui oleh setiap peternak adalah tingginya production cost. Oleh karena masalah biaya, peternak sering melupakan sektor peternakan dan tidak memahami potensinya. Tindakan harus diambil, sebuah platform yang menghubungkan peternak dan penyedia modal adalah solusi yang kami tawarkan.</p>
        <p>Monggovest hadir sebagai medium kolaborasi untuk satu visi yang sama. Kami percaya bahwa kesempatan untuk berkontribusi kepada bangsa adalah milik semua orang. Kami bertekad untuk memberi kesepatan yang sama kepada setiap individu. Dengan satu tujuan, eskalasi produksi peternakan.</p>
      </b-row>
    </b-container>
    <the-footer copy-only />
  </b-container>
</template>

<script>
import TheNavbar from './TheNavbar'
import TheFooter from './TheFooter'

export default {
  name: 'AboutPage',
  components: {
    TheNavbar,
    TheFooter
  }
}

</script>

<style lang="scss" scoped>
p {
  text-align: left;
  text-indent: 1rem;
}
</style>

