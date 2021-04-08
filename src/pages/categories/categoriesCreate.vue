<template>
  <div>
    <div
      class="d-flex justify-content-between align-items-center flex-wrap grid-margin"
    >
      <nav class="page-breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="">Dashboard</a></li>
          <li class="breadcrumb-item"><a href="">Categories</a></li>
          <li class="breadcrumb-item active" aria-current="page">
            Create Categories
          </li>
        </ol>
      </nav>
    </div>
    <div class="row">
      <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h6 class="card-title">New Categories</h6>
            <form @submit.prevent="saveCategories" class="forms-sample">
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="category.name"
                  id="name"
                  autocomplete="off"
                  placeholder="name"
                  name="name"
                />
              </div>
              <div class="form-group">
                <label for="name">Description</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="category.description"
                  id="id"
                  autocomplete="off"
                  name="id"
                  placeholder="description"
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
  name: 'categoriesCreate',
  data () {
    return {
      category: {
        name: null,
        description: null
      }
    }
  },
  mounted () {
    if (this.$route.params.id) {
      this.$store
        .dispatch('GETSINGLEITEMTOEDITACTION', {
          collection: 'categories',
          id: this.$route.params.id
        })
        .then(category => {
          this.category = category
        })
    }
  },
  methods: {
    saveCategories () {
      this.$store.dispatch(
        this.$route.params.id ? 'UPDATEITEMACTION' : 'CREATEITEMACTION',
        {
          collection: 'categories',
          item: this.category,
          id: this.$route.params.id ? this.$route.params.id : null
        }
      )
    }
  }
}
</script>
