<template>
    <b-container fluid class="hero pt-5 text-left" text-variant="white">
        <b-container>
        <b-row class="py-5">
            <b-col cols="12" md="6" lg="4" class="mt-md-5">
            <h1>Semua Orang Bisa Beternak</h1>
            <br />
            <h3>Kelola keuangan anda dengan instrumen investasi yang terjangkau dan rendah resiko</h3>            
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="4">
            <b-button variant="light" size="lg" class="px-4" :to="'browse'">Mulai Beternak</b-button>
            </b-col>
        </b-row>
        </b-container>
    </b-container>
</template>

<script>
export default {
  name: 'theHero'
}
</script>

<style lang="scss" scoped>
.hero{
  height: 40rem;
  background-image: url("../assets/hero-bg.jpg");
  background-size: cover;
}
h1, h3{
  color: white;
}
</style>
