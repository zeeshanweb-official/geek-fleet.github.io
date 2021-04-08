<template>
  <div>
    <div
      class="d-flex justify-content-between align-items-center flex-wrap grid-margin"
    >
      <nav class="page-breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="">Dashboard</a></li>
          <li class="breadcrumb-item active" aria-current="page">Devices</li>
        </ol>
      </nav>
      <div class="d-flex align-items-center flex-wrap text-nowrap">
        <router-link to="/devicecreate" class="btn btn-primary btn-icon-text">
          <i class="btn-icon-prepend" data-feather="plus"></i>
          Create Device
        </router-link>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h6 class="card-title">Tickets</h6>
            <p class="card-description">All the ticket are listed here.</p>
            <div class="table-responsive">
              <table id="dataTableExample" class="table">
                <thead>
                  <tr>
                    <th>
                      #
                    </th>
                    <th>
                      Device Name
                    </th>
                    <th>
                      Categories
                    </th>
                    <th>
                      Serial Number
                    </th>
                    <th>
                      Note
                    </th>
                    <th>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(devices, index) in devices" :key="index">
                    <td>{{ devices.id }}</td>
                    <td>{{ devices.name }}</td>
                    <td>{{ devices.categories }}</td>
                    <td>{{ devices.serial_number }}</td>
                    <td>{{ devices.note }}</td>
                    <td>
                      <form class="d-inline-block">
                        <button
                          @click="deletedevice(devices.id, $event)"
                          class="btn btn-danger btn-icon-text"
                        >
                          <i class="btn-icon-prepend" data-feather="trash"></i>
                          Delete
                        </button>
                      </form>
                      <router-link
                        :to="'/deviceedit/' + devices.id"
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
export default {
  name: 'devicelist',
  data () {
    return {}
  },
  mounted () {
    this.$store.dispatch('GETITEMSACTION', 'devices')
  },
  //   watch: {
  //     $route: "fetchData",
  //   },
  computed: {
    devices () {
      return this.$store.getters.ITEMS
    }
  },
  methods: {
    async deletedevice (id, event) {
      event.preventDefault()
      this.$store.dispatch('DELETEITEMACTION', { collection: 'devices', id })
    }
  }
}
</script>
