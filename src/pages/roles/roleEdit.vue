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
            <router-link :to="{ name: 'roleList' }">Roles</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Create Role
          </li>
        </ol>
      </nav>
    </div>

    <div class="row">
      <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h6 class="card-title">Role Update Form</h6>
            <form class="forms-sample" method="POST" action="">
              <div class="form-group">
                <label for="role_name">Role Name</label>
                <input
                  v-model="form.role_name"
                  :class="{ 'is-invalid': form.errors.has('role_name') }"
                  type="text"
                  class="form-control"
                  id="role_name"
                  autocomplete="off"
                  placeholder="Role Name"
                  name="role_name"
                  value=""
                />
                <has-error :form="form" field="role_name" />
              </div>
              <div class="form-group">
                <label for="role_name">Permissions</label> <br />

                <div class="form-check form-check-inline">
                  <label class="form-check-label">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      name="permission[]"
                      value="" />

                    <i class="input-frame"></i
                  ></label>
                </div>
              </div>
              <button type="submit" class="btn btn-primary mr-2">Submit</button>
              <router-link :to="{ name: 'roleList' }" class="btn btn-light"
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
      role_name: "",
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
      await this.form.patch("/api/roles/" + this.role.id);
      this.$router.push({ name: "roleList" });
    },
  },
};
</script>
