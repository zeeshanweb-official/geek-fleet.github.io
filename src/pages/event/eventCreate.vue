<template>
  <div>
    <div
      class="d-flex justify-content-between align-items-center flex-wrap grid-margin"
    >
      <nav class="page-breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="">Dashboard</a></li>
          <li class="breadcrumb-item"><a href="">Event</a></li>
          <li class="breadcrumb-item active" aria-current="page">
            Create Event
          </li>
        </ol>
      </nav>
    </div>

    <div class="row">
      <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h6 class="card-title">New Event</h6>
            <form @submit.prevent="saveEvent" class="forms-sample">
              <div class="form-group">
                <label for="name"> Event Title</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="eventForm.title"
                  id="name"
                  autocomplete="off"
                  placeholder="Title for the event"
                  name="name"
                />
              </div>
              <div class="form-group">
                <label for="name"> Event Time</label>
                <input
                  type="time"
                  class="form-control"
                  v-model="eventForm.time"
                  id="name"
                  autocomplete="off"
                  placeholder="name"
                  name="name"
                />
              </div>
              <div class="form-group">
                <label for="name"> Number of Guests</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="eventForm.guests"
                  id="name"
                  autocomplete="off"
                  placeholder="name"
                  name="name"
                />
              </div>

              <div class="form-group">
                <label for="name"> Description </label>
                <textarea
                  v-model="eventForm.description"
                  class="form-control"
                  id="description"
                  name="description"
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
  name: 'categoriesCreate',
  data () {
    return {
      eventForm: {}
    }
  },
  mounted () {
    if (this.$route.params.id) {
      this.$store
        .dispatch('GETSINGLEITEMTOEDITACTION', {
          collection: 'events',
          id: this.$route.params.id
        })
        .then(category => {
          this.eventForm = category
        })
    }
  },
  methods: {
    saveEvent () {
      this.$store.dispatch(
        this.$route.params.id ? 'UPDATEITEMACTION' : 'CREATEITEMACTION',
        {
          collection: 'events',
          item: this.eventForm,
          id: this.$route.params.id ? this.$route.params.id : null
        }
      )
    }
  }
}
</script>
