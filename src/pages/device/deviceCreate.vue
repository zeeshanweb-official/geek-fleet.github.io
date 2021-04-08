<template>
  <div>
    <div
      class="d-flex justify-content-between align-items-center flex-wrap grid-margin"
    >
      <nav class="page-breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="">Dashboard</a></li>
          <li class="breadcrumb-item"><a href="">Device</a></li>
          <li class="breadcrumb-item active" aria-current="page">
            Create Device
          </li>
        </ol>
      </nav>
    </div>

    <div class="row">
      <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h6 class="card-title">New Device</h6>
            <form @submit.prevent="saveDevice" class="forms-sample">
              <div class="form-group">
                <label for="name">Device Name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="device.name"
                  id="name"
                  autocomplete="off"
                  placeholder="Summary"
                  name="summary"
                />
              </div>
              <div class="form-group">
                <label>Categories</label>
                <select
                  class="js-example-basic-single w-100"
                  v-model="device.categories"
                >
                  <option value="PC/Laptop">PC/Laptop</option>
                  <option value="Mobile">Mobile</option>
                  <option value="Networking">Networking</option>
                  <option value="Home Device">Home Device</option>
                </select>
              </div>
              <div class="form-group">
                <label for="description">Serial Number</label>
                <textarea
                  class="form-control"
                  id="description"
                  v-model="device.serial_number"
                  name="description"
                  placeholder="Description"
                  rows="5"
                ></textarea>
              </div>
              <div class="form-group">
                <label for="note">Note</label>
                <textarea
                  class="form-control"
                  id="note"
                  v-model="device.note"
                  name="note"
                  placeholder="Description"
                  rows="5"
                ></textarea>
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
  name: 'devicecreate',
  data () {
    return {
      device: {
        name: null,
        categories: null,
        serial_number: null,
        note: null
      }
    }
  },
  mounted () {
    if (this.$route.params.id) {
      this.$store
        .dispatch('GETSINGLEITEMTOEDITACTION', {
          collection: 'devices',
          id: this.$route.params.id
        })
        .then(category => {
          this.device = category
        })
    }
  },
  methods: {
    saveDevice () {
      this.$store.dispatch(
        this.$route.params.id ? 'UPDATEITEMACTION' : 'CREATEITEMACTION',
        {
          collection: 'devices',
          item: this.device,
          id: this.$route.params.id ? this.$route.params.id : null
        }
      )
    }
  }
}
</script>
