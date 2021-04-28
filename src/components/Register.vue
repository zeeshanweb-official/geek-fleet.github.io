<template>
  <div class="main-wrapper">
    <div class="page-wrapper full-page">
      <div
        class="page-content d-flex align-items-center justify-content-center"
      >
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
                      Create a free account.
                    </h5>
                    <form @submit.prevent="saveUser" class="forms-sample">
                      <div class="form-group">
                        <label for="Name">First Name</label>
                        <input
                          v-model="form.first_name"
                          type="text"
                          class="form-control"
                          placeholder="First Name"
                        />
                      </div>
                      <div class="form-group">
                        <label for="Name">Last Name</label>
                        <input
                          v-model="form.last_name"
                          type="text"
                          class="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                      <div class="form-group">
                        <label for="Name">Email</label>
                        <input
                          v-model="form.email"
                          type="email"
                          class="form-control"
                          placeholder="Email"
                        />
                      </div>
                      <div class="form-group">
                        <label for="Name">Password</label>
                        <input
                          v-model="form.password"
                          type="password"
                          class="form-control"
                          placeholder="*******"
                        />
                      </div>

                      <div class="form-group">
                        <label for="phone_no">Phone No</label>
                        <div class="input-group-prepend">
                          <input
                            v-model="form.phone"
                            type="text"
                            class="form-control"
                            placeholder="+13352968699"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="business_email">Address</label>
                        <input
                          v-model="form.address"
                          type="text"
                          class="form-control"
                          autocomplete="off"
                          placeholder="Address"
                        />
                      </div>

                      <button type="submit" class="btn btn-primary mr-2">
                        Submit
                      </button>
                      <div
                        @click.prevent="$router.go(-1)"
                        class="btn btn-light"
                      >
                        Cancel
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        first_name: null,
        last_name: null,
        phone: null,
        address: null,
        email: null,
        password: null,
        userImage: null,
        userType: 'professional'
      }
    }
  },
  methods: {
    saveUser () {
      this.$store
        .dispatch('REGISTERUSERACTION', this.form)
        .then(success => {
          this.$router.go(-1)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
<style></style>
