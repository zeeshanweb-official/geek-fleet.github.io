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
            Update User
          </li>
        </ol>
      </nav>
    </div>

    <div class="row">
      <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h6 class="card-title">User Update Form</h6>
            <form @submit.prevent="updateUser" class="forms-sample" v-if="user">
              <div class="form-group">
                <label for="name"> Name</label>
                <input
                  type="text"
                  v-model="user.name"
                  class="form-control"
                  autocomplete="off"
                  placeholder="Name"
                />
              </div>
              <div class="form-group">
                <label for="email">phone</label>
                <input
                  type="phone"
                  v-model="user.phone"
                  class="form-control"
                  autocomplete="off"
                  placeholder="phone"
                />
              </div>
              <div class="form-group">
                <label for="address">Address</label>
                <input
                  type="text"
                  v-model="user.address"
                  class="form-control"
                  autocomplete="off"
                  placeholder="Address"
                />
              </div>
              <button type="submit" class="btn btn-primary mr-2">Submit</button>
              <div @click="$router.go(-1)" class="btn btn-light">Cancel</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'useredit',
  data () {
    return {
      user: {}
    }
  },
  mounted () {
    this.$store
      .dispatch('GETSINGLEUSERACTION', this.$route.params.id)
      .then(user => {
        this.user = user
      })
  },
  methods: {
    updateUser () {
      this.$store.dispatch('UPDATEAUSERACTION', {
        id: this.$route.params.id,
        user: this.user
      })
    }
  }
}
</script>
