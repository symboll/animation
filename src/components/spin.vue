<template>
  <v-overlay :value="spining">
    <v-progress-circular indeterminate size="64"></v-progress-circular>
  </v-overlay>
</template>
<script>
export default {
  props: {
    spining: {
      type: Boolean,
      required: true
    }
  }
}
</script>
