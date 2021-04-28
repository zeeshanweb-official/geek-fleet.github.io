<template>
  <div>
    <div
      class="d-flex justify-content-between align-items-center flex-wrap grid-margin"
    >
      <nav class="page-breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/dashboard">Dashboard</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Users</li>
        </ol>
      </nav>
      <div class="d-flex align-items-center flex-wrap text-nowrap">
        <router-link to="/usercreate" class="btn btn-primary btn-icon-text">
          <i class="btn-icon-prepend" data-feather="plus"></i>
          Create User
        </router-link>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h6 class="card-title">User</h6>
            <p class="card-description">All the users are listed here.</p>
            <div class="table-responsive">
              <table id="dataTableExample" class="table" style="width:100%">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>phone</th>
                    <th>Address</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(user, index) in users" :key="index">
                    <td>
                      {{
                        user.id.length > 5
                          ? user.id.substring(0, 12) + '...'
                          : user.id
                      }}
                    </td>
                    <td>
                      {{
                        user.name
                          ? user.name
                          : user.first_name
                          ? user.first_name + ' ' + user.last_name
                          : ''
                      }}
                    </td>
                    <td>{{ user.phone }}</td>
                    <td>{{ user.address }}</td>

                    <td>
                      <form class="d-inline-block">
                        <button
                          @click="deleteuser(user.id, $event)"
                          id="id"
                          class="btn btn-danger btn-icon-text"
                        >
                          <i class="btn-icon-prepend" data-feather="trash"></i>
                          Delete
                        </button>
                      </form>
                      <router-link
                        :to="'/useredit/' + user.id"
                        class="btn btn-warning btn-icon-text"
                      >
                        <i class="btn-icon-prepend" data-feather="edit"></i>
                        Edit
                      </router-link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import db from '@/db'
export default {
  name: 'userList',
  data () {
    return {}
  },
  computed: {
    users () {
      return this.$store.getters.USERS
    }
  },
  mounted () {
    this.$store.dispatch('GETUSERSACTION')
  },
  //   watch: {
  //     $route: "fetchData",
  //   },
  methods: {
    async deleteuser (id, event) {
      event.preventDefault()
      this.$store.dispatch('DELETEUSERACTION', id)
    }
  }
}
</script>
