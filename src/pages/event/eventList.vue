<template>
  <div>
    <div
      class="d-flex justify-content-between align-items-center flex-wrap grid-margin"
    >
      <nav class="page-breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="">Dashboard</a></li>
          <li class="breadcrumb-item active" aria-current="page">Categories</li>
        </ol>
      </nav>
      <div class="d-flex align-items-center flex-wrap text-nowrap">
        <router-link
          to="/categoriescreate"
          class="btn btn-primary btn-icon-text"
        >
          <i class="btn-icon-prepend" data-feather="plus"></i>
          Create Categories
        </router-link>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h6 class="card-title">Event</h6>
            <p class="card-description">All the Event are listed here.</p>
            <div class="table-responsive">
              <table id="dataTableExample" class="table">
                <thead>
                  <tr>
                    <th>
                      #
                    </th>
                    <th>
                      Event Title
                    </th>
                    <th>
                      Event Time
                    </th>
                    <th>
                      Number of Guests
                    </th>
                    <th>
                      Description
                    </th>
                    <th>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(event, index) in events" :key="index">
                    <td>{{ event.id }}</td>
                    <td>{{ event.title }}</td>
                    <td>{{ event.time }}</td>
                    <td>{{ event.guest }}</td>
                    <td>{{ event.description }}</td>
                    <td>
                      <form class="d-inline-block">
                        <button
                          @click="deleteEvent(event.id, $event)"
                          class="btn btn-danger btn-icon-text"
                        >
                          <i class="btn-icon-prepend" data-feather="trash"></i>
                          Delete
                        </button>
                      </form>
                      <router-link
                        :to="'/eventedit/' + event.id"
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
import db from '@/db/index'
export default {
  name: 'categoriesList',
  data () {
    return {}
  },
  mounted () {
    this.$store.dispatch('GETITEMSACTION', 'events')
  },
  //   watch: {
  //     $route: "fetchData",
  //   },
  computed: {
    events () {
      return this.$store.getters.ITEMS
    },
    USERTYPE () {
      return this.$store.getters.USERTYPE
    }
  },
  methods: {
    fetchData () {
      db.collection('categories')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.id = doc.id
            this.name = doc.data().name
          })
        })
    },
    async deleteEvent (id, event) {
      event.preventDefault()
      this.$store.dispatch('DELETEITEMACTION', { collection: 'events', id })
    }
  }
}
</script>
