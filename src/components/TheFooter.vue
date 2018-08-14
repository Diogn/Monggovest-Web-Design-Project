<template>
  <b-container class="footer" :class="{sticky: copyOnly}" fluid> 
    <b-row class="links mb-4 pt-4" v-if="copyOnly === false">
      <b-col cols="12" md="3" class="logo-container">
        <b-link :to="{name: 'home'}">
          <img src="../assets/Logo-White@2x.png" height="45px" alt="Monggovest Logo" />
        </b-link>
      </b-col>
      <b-col cols="12" md="2">
        <ul>
          <li><b-link :to="{ name: 'browse' }">Investasi</b-link></li>
          <li><b-link :to="{ name: 'howto' }">Cara Kerja</b-link></li>
          <li><b-link :to="{ name: 'about' }">Tentang Kami</b-link></li>
        </ul>
      </b-col>
      <b-col cols="12" md="2">
        <ul>
          <li><b-link :to="{ name: 'help' }">Bantuan</b-link></li>
          <li><b-link :to="{ name: 'home' }">Hubungi Kami</b-link></li>
        </ul>
      </b-col>
      <b-col cols="12" md="5"> 
        <h4 class="mb-4">Download Aplikasi Smartphone</h4>
        <div class="download">
          <b-link :to="{name: 'home'}">
            <img src="../assets/App Store.svg" height="60px" alt="App Store Download" />
          </b-link>
          <b-link :to="{name: 'home'}">
            <img src="../assets/Play Store.svg" height="60px" alt="Play Store Download" />
          </b-link>
        </div>
      </b-col>
    </b-row>
    <b-row class="copyright">
      <b-col cols="12" class="text-center">Monggovest &copy; 2018</b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'TheFooter',
  props: {
    copyOnly: Boolean
  },
  methods: {
    getFooterPosition: () => {
      const footer = document.getElementsByClassName('footer')[0].classList
      return (window.innerHeight > document.body.offsetHeight ? footer.add('fixed') : footer.add('absolute'))
    }
  },
  mounted() {
    this.getFooterPosition()
  }
}
</script>


<style lang="scss" scoped>
* {
  color: #f8f9fa;
  text-align: left;
}
.logo-container{
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer{
  background: linear-gradient(to right, #0A3565, #1782D9);
  .copyright{
    background-color: rgba(10, 53, 101, .5);
    line-height: 3rem;
  }
}
li {
  list-style: none;
}
a{
  color: rgba(255,255,255,.5);
  text-decoration: none;
  padding: .5rem;
  transition: all .25s cubic-bezier(0, 0, 0, 1);
  &:hover{
    color: rgba(255,255,255,.75);
    img{
      opacity: .75;
    }
  }
  img{
    opacity: .5;
    transition: all .25s cubic-bezier(0, 0, 0, 1);
  }
}
.col-md-2, .download, h4{
  display: flex;
  justify-content: center;
}
.sticky{
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 3rem;
  &.fixed{
    position: fixed;
  }
  &.absolute{
    position: absolute;
  }
}
</style>

