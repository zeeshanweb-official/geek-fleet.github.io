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
            <h6 class="card-title">Categories</h6>
            <p class="card-description">All the Categories are listed here.</p>
            <div class="table-responsive">
              <table id="dataTableExample" class="table">
                <thead>
                  <tr>
                    <th>
                      #
                    </th>
                    <th>
                      Categories Name
                    </th>
                    <th>
                      Categories Description
                    </th>

                    <th>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(categories, index) in categories" :key="index">
                    <td>{{ categories.id }}</td>
                    <td>{{ categories.name }}</td>
                    <td>{{ categories.description }}</td>

                    <td>
                      <form class="d-inline-block">
                        <button
                          @click="deletecategories(categories.id, $event)"
                          class="btn btn-danger btn-icon-text"
                        >
                          <i class="btn-icon-prepend" data-feather="trash"></i>
                          Delete
                        </button>
                      </form>
                      <router-link
                        :to="'/categoryedit/' + categories.id"
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
  name: 'categoriesList',
  data () {
    return {}
  },
  mounted () {
    this.$store.dispatch('GETITEMSACTION', 'categories')
  },
  computed: {
    categories () {
      return this.$store.getters.ITEMS
    }
  },

  methods: {
    async deletecategories (id, event) {
      event.preventDefault()
      this.$store.dispatch('DELETEITEMACTION', { collection: 'categories', id })
      // db.collection('categories')
      //   .doc(id)
      //   .delete()
      //   .then(() => {
      //     console.log('Document successfully deleted!')
      //   })
      //   .catch(function (error) {
      //     console.error('Error removing document: ', error)
      //   })
    }
  }
}
</script>
