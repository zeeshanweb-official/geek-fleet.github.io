<template>
  <div>
    <div
      class="d-flex justify-content-between align-items-center flex-wrap grid-margin"
    >
      <nav class="page-breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="">Dashboard</a></li>
          <li class="breadcrumb-item"><a href="">Users</a></li>
          <li class="breadcrumb-item active" aria-current="page">
            Create User
          </li>
        </ol>
      </nav>
    </div>

    <div class="row">
      <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h6 class="card-title">Users Form</h6>
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

              <button type="submit" class="btn btn-primary mr-2">Submit</button>
              <div @click.prevent="$router.go(-1)" class="btn btn-light">
                Cancel
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'userCreate',
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
  mounted () {
    if (this.$route.params.id) {
      this.$store
        .dispatch('GETSINGLEUSERACTION', this.$route.params.id)
        .then(user => {
          this.form = user
        })
    }
  },
  methods: {
    saveUser () {
      this.$store
        .dispatch(
          this.$route.params.id ? 'UPDATEAUSERACTION' : 'REGISTERUSERACTION',
          this.$route.params.id
            ? {
                id: this.$route.params.id,
                user: this.form
              }
            : this.form
        )
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
