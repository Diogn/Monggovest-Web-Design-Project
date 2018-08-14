<template>
  <b-container fluid class="content pb-5">
    <ava-navbar />
    <h1 class="my-5">Bantuan</h1>
    <hr>
    <b-container>
      <b-row class="my-4 mx-2">
        <h3>Apa itu Monggovest?</h3>
        <p>Monggovest menyediakan kesempatan kepada Anda untuk berkolaborasi di dunia peternakan. Monggovest membantu peternak yang kesulitan mencari biaya. Begitupula, kami dapat membantu Anda yang ingin mengalokasikan dana seiring dengan memberikan dampak sosial yang nyata. Medium yang kami tawarkan menjadi jembatan kerja sama untuk satu visi eskalasi produksi peternakan.</p>
      </b-row>
      <b-row class="my-4 mx-2">
        <h3>Bagaimana langkah untuk berkolaborasi?</h3>
        <ul>
          <li>Anda hanya melakukan registrasi online melalui website monggovest dengan melengkapi data pribadi seperti e-mail, nama dan password untuk akun Anda.</li>
          <li>Anda dapat mengeksplor komoditas yang kami sediakan dan menganalisa potensinya.</li>
          <li>Anda bisa mengalokasi dana anda dengan rentang lot yang sangat terjangkau.</li>
        </ul>
      </b-row>
      <b-row class="my-4 mx-2">
        <h3>Apa itu Lot?</h3>
        <p>Lot adalah satuan paket yang menjadi parameter alokasi dana anda. Setiap lot yang terkumpul sangat berarti untuk peternak yang ada di Indonesia. Di zaman teknologi ini, kami percaya bahwa setiap individu dapat berkontribusi dalam peningkatan produksi peternakan. Oleh karena itu jumlah biaya dalam satu lot dimulai dari harga yang sangat terjangkau.</p>
      </b-row>
      <b-row class="my-4 mx-2">
        <h3>Bagaimana sistem bagi hasil?</h3>
        <p>Hasil bersih adalah hasil keuntungan produksi komoditas sejenis yang dikelola dikurangi dengan production cost langsung yang terkait dengan komoditas tersebut. Hasil bersih tersebut secara umum akan dibagikan ke pengelola peternakan. 
        Perlu diingat bahwa sektor peternakan memiliki prinsip alokasi dana yang sama dengan sektor riil lainnya. Fluktuasi inflasi selalu terjadi setiap tahunnya, dikarenakan jumlah permintaan yang selalu berubah. Satu hal yang perlu anda pertimbangan, anda akan memilih sektor yang selalu ada permintaannya (seperti Qurban untuk Idul Adha dan Idul Fitri). Sistem bagi hasil yang kami tawarkan adalah bentuk prediksi yang telah diteliti berdasarkan tren masyarakat.
        Prediksi kami berdasarkan dengan statistik sapi sejenis. Maka untuk bayi sapi perah misalnya dengan biaya pemeliharaan termasuk sewa lahan jangka panjang 5 tahun, bayi sapi sebesar Rp 8 juta untuk 3 tahun, sapi mulai memproduksi susu. Diharapkan pada bulan ke 3 (pada tahun pertama) dan terus meningkat sampai tahun ketiga kemudian stabil setelah itu sampai tahun ke-5. Dengan pola demikian, tingkat bagi hasil rata-ratanya diperkirakan mencapai sekitar 18% per tahun.</p>
      </b-row>
      <b-row class="my-4 mx-2">
        <h3>Apakah saya bisa menawarkan komoditas saya dimasukkan ke dalam database monggovest?</h3>
        <p>Semua data komoditas yang tersedia pada platform kami harus melalui proses verifikasi. Anda dapat menawarkan komoditas anda untuk diverifikasi, dengan cara menghubungi kami di bagian Kontak Kami.</p>
      </b-row>
    </b-container>
    <the-footer copy-only />
  </b-container>
</template>

<script>
import AvaNavbar from './AvaNavbar'
import TheFooter from './TheFooter'

export default {
  name: 'HelpPage',
  components: {
    AvaNavbar,
    TheFooter
  }
}
</script>

<style lang="scss" scoped>
p, li, h3{
  text-align: left;
}
p{
  text-indent: 1rem;
}
</style>

