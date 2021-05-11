<template>
  <div>
    <h4>Dashboard</h4>
    <div class="container">
      <div class="row no-gutters">
        <div class="col-md-3 p-2" v-for="item in documents" :key="item.index">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-center">
                total {{ Object.keys(item)[0] }}
              </h5>
              <p class="text-center">
                {{ item[Object.keys(item)[0]] }}
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-3"></div>
        <div class="col-md-3"></div>
        <div class="col-md-3"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { DASHBOARDCOUNTS } from '@/store/constants'
export default {
  data () {
    return {
      adminlist: [
        'categories',
        'devices',
        'events',
        'messages',
        'notes',
        'tickets',
        'user'
      ],
      professionallist: ['devices', 'events', 'tickets'],
      documents: []
    }
  },
  mounted () {
    this[this.userType + 'list'].map(item => {
      this.$store.dispatch(DASHBOARDCOUNTS, item).then(success => {
        this.documents.push({ [item]: success })
      })
    })
  },
  computed: {
    userType () {
      return this.$store.getters.USERTYPE
    }
  }
}
</script>
