<template>
  <div>
    <nav class="sidebar">
      <div class="sidebar-header">
        <router-link to="/dashboard" class="sidebar-brand">
          Geek<span>Fleet</span>
        </router-link>
        <div class="sidebar-toggler not-active">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="sidebar-body">
        <ul class="nav">
          <li class="nav-item nav-category">Main</li>
          <li class="nav-item">
            <router-link to="/dashboard" class="nav-link">
              <i class="link-icon" data-feather="box"></i>
              <airplay-icon size="20" class="custom-class"></airplay-icon>
              <span class="link-title text-uppercase">Dashboard</span>
            </router-link>
          </li>
          <template v-for="item in routes">
            <span :key="item.index" class="my-2">
              <li class="nav-item nav-category text-uppercase">
                {{ item.name }}
              </li>
              <li
                class="nav-item"
                v-for="dropdown in item.dropdowns"
                :key="dropdown.index"
              >
                <a
                  class="nav-link"
                  data-toggle="collapse"
                  :href="'#' + dropdown.name"
                  role="button"
                  aria-expanded="false"
                  aria-controls="emails"
                >
                  <!-- <i class="link-icon" data-feather="mail"></i> -->
                  <vue-material-icon :name="dropdown.icon"></vue-material-icon>
                  <span class="link-title text-capitalize">{{
                    dropdown.name
                  }}</span>
                  <i class="link-arrow" data-feather="chevron-down"></i>
                </a>
                <div class="collapse" :id="dropdown.name">
                  <ul class="nav sub-menu ml-4">
                    <li
                      v-for="child in dropdown.children"
                      :key="child.index"
                      class="nav-item"
                    >
                      <router-link
                        :to="child.route"
                        class="nav-link text-capitalize"
                        >{{ child.name }}</router-link
                      >
                    </li>
                  </ul>
                </div>
              </li>
            </span>
          </template>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
import { AirplayIcon, AtSignIcon } from 'vue-feather-icons'
export default {
  components: {
    AirplayIcon
  },
  data () {
    return {
      routes: [
        {
          name: 'user',
          dropdowns: [
            {
              name: 'users',
              icon: 'account_circle',
              children: [
                {
                  name: 'list user',
                  route: '/userlist'
                },

                {
                  name: 'create user',
                  route: '/usercreate'
                }
              ]
            }
          ]
        },
        {
          name: 'web apps',
          dropdowns: [
            {
              name: 'tickets',
              icon: 'local_activity',
              children: [
                {
                  name: 'list tickets',
                  route: '/ticketlist'
                },

                {
                  name: 'create ticket',
                  route: '/ticketcreate'
                }
              ]
            },
            {
              name: 'categories',
              icon: 'indeterminate_check_box',
              children: [
                {
                  name: 'list categories',
                  route: '/categorieslist'
                },

                {
                  name: 'create category',
                  route: '/categoriescreate'
                }
              ]
            },
            {
              name: 'devices',
              icon: 'devices_other',
              children: [
                {
                  name: 'list devices',
                  route: '/devicelist'
                },

                {
                  name: 'create devices',
                  route: '/devicecreate'
                }
              ]
            },
            {
              name: 'events',
              icon: 'event',
              children: [
                {
                  name: 'list event',
                  route: '/eventlist'
                },

                {
                  name: 'create event',
                  route: '/eventcreate'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  mounted () {}
}
</script>
