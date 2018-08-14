<template>
  <div>
    <b-modal id="loginModal" title="MASUK" centered>
      <b-container>
        <b-form v-on:submit.prevent="signIn">
          <b-form-group id="fieldEmail" label="Email" label-for="loginEmail" class="text-left">
            <b-form-input id="loginEmail" type="text" placeholder="contoh@mail.com" v-model="email" />
          </b-form-group>
          <b-form-group id="fieldPassword" label="Password" label-for="loginPassword" class="text-left">
            <b-form-input id="loginPassword" type="password" placeholder="password" v-model="password" />
          </b-form-group>
          <b-button type="submit" variant="gradient" size="lg" class="px-4 mt-3 mb-5">Lanjutkan</b-button>
        </b-form>
      </b-container>
      <div slot="modal-footer" class="w-100">
        <p class="my-0">Belum punya akun? <b-link class="link-modal" v-b-modal.registerModal>Daftar di sini</b-link></p>
      </div>
    </b-modal>
    <modal-register />
  </div>
</template>

<script>
import firebase from 'firebase'

import ModalRegister from './ModalRegister'

export default {
  name: 'ModalLogin',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  components: {
    ModalRegister
  },
  methods: {
    signIn: function() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        function(user) {
          alert('You are now connected!');
        },
        function(err) {
          alert('Sorry, ' + err.message);
        }
      )
    }
  }
}
</script>
