<template>
  <div class="main-wrapper" id="app">
    <template v-if="login">
      <Sidebar />
      <div class="page-wrapper">
        <!-- partial:partials/_navbar.html -->
        <Navbar />
        <!-- partial -->
        <div class="page-content">
          <router-view />
        </div>
        <!-- partial:partials/_footer.html -->

        <!-- partial -->
      </div>
    </template>
    <template v-else>
      <div class="page-wrapper mx-auto">
        <div class="page-content mt-0 py-0">
          <router-view />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar
  },
  data () {
    return {}
  },

  computed: {
    login () {
      return this.$store.getters.LOGIN
    }
  }
}
</script>

<style>
@import './assets/css/demo_1/style.css';
</style>
