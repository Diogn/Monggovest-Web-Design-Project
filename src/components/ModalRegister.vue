<template>
  <div>
    <b-modal id="registerModal" title="DAFTAR" centered>
      <b-container>
        <b-form v-on:submit.prevent="signUp">
          <b-form-group id="fieldName" label="Nama Lengkap" label-for="inputName" class="text-left">
            <b-form-input id="inputName" type="text" placeholder="Joko Sembodo" v-model="name" />
          </b-form-group>
          <b-form-group id="fieldEmail" label="Email" label-for="inputEmail" class="text-left">
            <b-form-input id="inputEmail" type="text" placeholder="contoh@mail.com" v-model="email" />
          </b-form-group>
          <b-form-group id="fieldPassword" label="Password" label-for="inputPassword" class="text-left">
            <b-form-input id="inputPassword" type="password" placeholder="password" v-model="password" />
          </b-form-group>
          <b-button type="submit" variant="gradient" size="lg" class="px-4 mt-3 mb-5">Lanjutkan</b-button>
        </b-form>
      </b-container>
      <div slot="modal-footer" class="w-100">
        <p class="my-0">Sudah punya akun? <b-link class="link-modal" v-b-modal.loginModal>Masuk di sini</b-link></p>
      </div>
    </b-modal>
  </div>
</template>

<script>
import firebase from 'firebase'

import ModalLogin from './ModalLogin'

export default {
  components: {
    ModalLogin
  },
  name: 'ModalRegister',
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    signUp: function() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        function(user) {
          alert('Congratulations! You can now try logging in.');
        },
        function(err) {
          alert('Oops, ' + err.message)
        }
      )
    }
  }
}
</script>

