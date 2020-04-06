<template>
  <v-dialog
    v-model="visible"
    width="800px"
    persistent
  >
    <v-card class="elevation-12">
      <!-- <v-card-title class="blue darken-3">
        Create contact
      </v-card-title> -->
      <v-toolbar
        color="primary"
        dark
      >
        <v-toolbar-title>Create contact</v-toolbar-title>
      </v-toolbar>
      <v-container>
        <v-row class="mx-2">
          <v-col
            class="align-center justify-space-between"
            cols="12"
          >
            <v-row
              align="center"
              class="mr-0"
            >
              <v-avatar
                size="40px"
                class="mx-3"
              >
                <img
                  src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                  alt=""
                >
              </v-avatar>
              <v-text-field
                placeholder="Name"
              />
            </v-row>
          </v-col>
          <v-col cols="6">
            <v-text-field
              prepend-icon="mdi-account-card-details-outline"
              placeholder="Company"
            />
          </v-col>
          <v-col cols="6">
            <v-text-field
              placeholder="Job title"
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              prepend-icon="mdi-mail"
              placeholder="Email"
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              type="tel"
              prepend-icon="mdi-phone"
              placeholder="(000) 000 - 0000"
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              prepend-icon="mdi-text"
              placeholder="Notes"
            />
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-btn
          text
          color="primary"
        >More</v-btn>
        <v-spacer />
        <v-btn
          text
          color="primary"
          @click="changModalState(true)"
        >Cancel</v-btn>
        <v-btn
          text
          @click="changModalState(false)"
        >Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: 'Dialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    changModalState (bool) {
      this.$emit('changModalState', bool)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
