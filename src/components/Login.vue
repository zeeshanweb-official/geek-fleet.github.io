<template>
  <div class="page-wrapper full-page">
    <div class="page-content d-flex align-items-center justify-content-center">
      <div class="row w-100 mx-0 auth-page">
        <div class="col-md-8 col-xl-6 mx-auto">
          <div class="card">
            <div class="row">
              <div class="col-md-4 pr-md-0">
                <div class="auth-left-wrapper"></div>
              </div>
              <div class="col-md-8 pl-md-0">
                <div class="auth-form-wrapper px-4 py-5">
                  <a href="#" class="noble-ui-logo d-block mb-2"
                    >Geek<span>Fleet</span></a
                  >
                  <h5 class="text-muted font-weight-normal mb-4">
                    Welcome back! Log in to your account.
                  </h5>
                  <form class="forms-sample" @submit="formSubmitted">
                    <div class="form-group">
                      <label for="email">E-Mail Address</label>
                      <input
                        id="email"
                        type="email"
                        class="form-control"
                        name="email"
                        required
                        v-model="form.email"
                        autocomplete="email"
                        autofocus
                      />
                    </div>
                    <div class="form-group">
                      <label for="password">Password</label>
                      <input
                        id="password"
                        type="password"
                        class="form-control"
                        name="password"
                        v-model="form.password"
                        required
                        autocomplete="current-password"
                      />
                    </div>
                    <div class="form-check form-check-flat form-check-primary">
                      <label class="form-check-label">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          name="remember"
                          id="remember"
                        />
                        Remember Me
                      </label>
                    </div>
                    <div class="mt-3">
                      <button
                        type="submit"
                        class="btn btn-primary mr-2 mb-2 mb-md-0 text-white"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import database from '@/db'
export default {
  data () {
    return {
      form: {}
    }
  },

  methods: {
    formSubmitted (e) {
      e.preventDefault()
      this.$store.dispatch('LOGINACTION', this.form).then(user => {
        console.log(user)
        if (user) {
          database.db
            .collection('user')
            .where('userID', '==', user.uid)
            .get()
            .then(querySnapshot => {
              if (querySnapshot.docs.length < 1) {
                let usertype = 'admin'
                this.$store.dispatch('USERTYPEACTION', usertype)
                localStorage.setItem('USERTYPE', usertype)
              } else {
                querySnapshot.forEach(doc => {
                  let usertype = doc.data().userType
                  this.$store.dispatch('USERTYPEACTION', usertype)
                  localStorage.setItem('USERTYPE', usertype)
                })
              }
            })
            .then(() => {
              localStorage.setItem('login', JSON.stringify(user))
              this.$router.push('/dashboard')
            })
        }
      })
    }
  }
}
</script>

<style>
@import '../assets/css/demo_1/style.css';
</style>
