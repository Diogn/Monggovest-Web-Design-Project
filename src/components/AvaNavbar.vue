<template>
  <b-navbar class="fixed-top" toggleable="md" type="dark" variant="gradient">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand>
        <b-link :to="{name: 'home'}">
          <img height="40px" src="../assets/Logo-White@2x.png" alt="Monggovest Logo">
        </b-link> 
      </b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav id="nav-links">
        <b-nav-item v-for="link in links" :key="link.id" :to="link.path" class="px-1" >{{link.name}}</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="ID" class="pr-2">
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ID</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown  class="pr-2">
          <b-dropdown-item href="#">EN</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-button class="btn-outline-light px-4" type="button" v-b-modal.loginModal>Keluar</b-button>
      </b-navbar-nav>
    </b-collapse>
    <modal-login />
  </b-navbar>
</template>

<script>
import ModalLogin from './ModalLogin'

export default {
  components:{
    ModalLogin
  },
  name: 'AvaNavbar',
  data () {
    return {
        links: [
            { name: 'Investasi', path: '/browse' },
            { name: 'Cara Kerja', path: '/howto' },
            { name: 'Tentang', path: '/about' },
            { name: 'Bantuan', path: '/help' }
        ]
      };
    }
}
</script>

<style lang="scss" scoped>
btn-outline-light {
    border-width: 2px;
}
</style>
