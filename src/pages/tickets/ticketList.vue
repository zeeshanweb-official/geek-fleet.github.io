<template>
  <div>
    <div
      class="d-flex justify-content-between align-items-center flex-wrap grid-margin"
    >
      <nav class="page-breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="">Dashboard</a></li>
          <li class="breadcrumb-item active" aria-current="page">tickets</li>
        </ol>
      </nav>
      <div class="d-flex align-items-center flex-wrap text-nowrap">
        <router-link to="/ticketcreate" class="btn btn-primary btn-icon-text">
          <i class="btn-icon-prepend" data-feather="plus"></i>
          Create Ticket
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
                      Summary
                    </th>
                    <th>
                      Assigned to
                    </th>
                    <th>
                      User Device
                    </th>
                    <th>
                      Device Category
                    </th>
                    <th>
                      Ticket Status
                    </th>
                    <th>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(tickets, index) in tickets" :key="index">
                    <td>
                      {{
                        tickets.id.length > 5
                          ? tickets.id.substring(0, 12) + '...'
                          : tickets.id
                      }}
                    </td>
                    <td>{{ tickets.summary }}</td>
                    <td>
                      {{
                        tickets.ticketUserId
                          ? tickets.ticketUserId.length > 5
                            ? tickets.ticketUserId.substring(0, 12) + '...'
                            : tickets.ticketUserId
                          : ''
                      }}
                    </td>
                    <td>{{ tickets.selectedDevice }}</td>
                    <td>{{ tickets.deviceCategory }}</td>
                    <td>{{ tickets.ticketStatus }}</td>

                    <td v-if="USERTYPE === 'admin'">
                      <form class="d-inline-block">
                        <button
                          @click="deleteticket(tickets.id, $event)"
                          class="btn btn-danger btn-icon-text"
                        >
                          <i class="btn-icon-prepend" data-feather="trash"></i>
                          Delete
                        </button>
                      </form>
                      <router-link
                        :to="'/ticketedit/' + tickets.id"
                        class="btn btn-warning btn-icon-text"
                      >
                        <i class="btn-icon-prepend" data-feather="edit"></i>
                        Edit
                      </router-link>
                    </td>
                    <td v-else>
                      <button
                        @click="
                          AssigneTicket(
                            tickets.id,
                            $event,
                            (assign = !ASSIGNABLE(tickets))
                          )
                        "
                        class="btn btn-danger btn-icon-text"
                      >
                        <i class="btn-icon-prepend" data-feather="trash"></i>
                        {{ ASSIGNABLE(tickets) ? 'Remove' : 'Assign' }}
                      </button>
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
  name: 'ticketlist',
  data () {
    return {}
  },
  mounted () {
    this.$store.dispatch('GETITEMSACTION', 'tickets')
  },
  computed: {
    tickets () {
      return this.$store.getters.ITEMS
    },
    USERTYPE () {
      return this.$store.getters.USERTYPE
    }
  },
  methods: {
    ASSIGNABLE (item) {
      return item.assignedTo && item.assignedTo === this.$store.getters.USER.uid
    },
    async deleteticket (id, event) {
      event.preventDefault()
      this.$store.dispatch('DELETEITEMACTION', { collection: 'tickets', id })
    },
    AssigneTicket (id, event, assign) {
      event.preventDefault()
      this.$store
        .dispatch('ASSIGNTICKET', {
          collection: 'tickets',
          id,
          user: assign ? this.$store.getters.USER.uid : null
        })
        .then(() => {
          this.$store.dispatch('GETITEMSACTION', 'tickets')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
