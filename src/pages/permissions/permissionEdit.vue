<template>
  <div>
    <div
      class="d-flex justify-content-between align-items-center flex-wrap grid-margin"
    >
      <nav class="page-breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link :to="{ name: 'home' }">Dashboard</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link :to="{ name: 'permissionList' }">
              Permissions
            </router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Edit Permission
          </li>
        </ol>
      </nav>
    </div>

    <div class="row">
      <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h6 class="card-title">Permission Form</h6>
            <form
              @submit.prevent="update"
              class="forms-sample"
              @keydown="form.onKeydown($event)"
            >
              <div class="form-group">
                <label for="permission_name">Permission Name</label>
                <input
                  v-model="form.name"
                  :class="{ 'is-invalid': form.errors.has('permission_name') }"
                  type="text"
                  class="form-control"
                  id="permission_name"
                  autocomplete="off"
                  placeholder="Permission Name"
                  name="permission_name"
                  value=""
                />
                <has-error :form="form" field="permission_name" />
              </div>

              <button type="submit" class="btn btn-primary mr-2">Submit</button>
              <router-link
                :to="{ name: 'permissionList' }"
                class="btn btn-light"
                >Cancel</router-link
              >
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "vform";
// import { mapGetters } from "vuex";

export default {
  data: () => ({
    form: new Form({
      permission_name: "",
    }),
  }),

  // computed: mapGetters({
  //   user: "auth/user",
  // }),

  created() {
    // Fill the form with user data.
    this.form.keys().forEach((key) => {
      this.form[key] = this.user[key];
    });
  },

  methods: {
    async update() {
      await this.form.patch("/api/permissions/" + this.user.id);
      this.$router.push({ name: "permissionList" });
    },
  },
};
</script>
