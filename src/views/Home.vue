<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <menu-list :items="items" />
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">Google Contacts</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        append-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"
        v-model="searchVal"
        @click:append="handleSearch"
        @keydown.enter="handleSearch"
      />
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn
        icon
        large
      >
        <v-avatar
          size="32px"
          item
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
            alt="Vuetify"
          /></v-avatar>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          {{ name }}
          {{ userId }}
        </v-row>

        <v-row>
          <router-view/>
        </v-row>
      </v-container>
    </v-content>
    <v-btn
      bottom
      color="pink"
      dark
      fab
      fixed
      right
      @click="visible = !visible"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <modal
      :visible="visible"
      @changModalState="changModalState"
    />

    <spin
      :spining="spining"
    />
  </v-app>
</template>

<script>
import Spin from '@/components/spin'
import MenuList from '@/components/menu/menu-list'
import Modal from '@/components/modal'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  props: {
    source: String
  },
  components: {
    Spin,
    MenuList,
    Modal
  },
  data: () => ({
    visible: false,
    searchVal: '',
    drawer: null,
    items: [
      { icon: 'mdi-contacts', text: 'Contacts' },
      { icon: 'mdi-history', text: 'Frequently contacted' },
      { icon: 'mdi-content-copy', text: 'Duplicates' },
      {
        icon: 'mdi-chevron-up',
        'icon-alt': 'mdi-chevron-down',
        text: 'Labels',
        model: true,
        children: [
          { icon: 'mdi-plus', text: 'Create label' }
        ]
      },
      {
        icon: 'mdi-chevron-up',
        'icon-alt': 'mdi-chevron-down',
        text: 'More',
        model: false,
        children: [
          { text: 'Import' },
          { text: 'Export' },
          { text: 'Print' },
          { text: 'Undo changes' },
          { text: 'Other contacts' }
        ]
      },
      { icon: 'mdi-settings', text: 'Settings' },
      { icon: 'mdi-message', text: 'Send feedback' },
      { icon: 'mdi-help-circle', text: 'Help' },
      { icon: 'mdi-cellphone-link', text: 'App downloads' },
      { icon: 'mdi-keyboard', text: 'Go to the old version' }
    ]
  }),
  computed: {
    ...mapState({
      spining: state => state.spining,
      name: state => state.name,
      userId: state => state.userId
    })
  },
  watch: {
    '$route' (to, from) {
      // console.log('to', to)
      // console.log('from', from)
    }
  },
  methods: {
    changModalState (bool) {
      this.visible = bool
    },
    handleSearch () {
      if (this.searchVal !== '') {
        console.log('this.searchVal', this.searchVal)
      }
    }
  }
}
</script>
