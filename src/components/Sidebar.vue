<template>
  <div class="sidebar">
    <div v-if="notes.length">
      <note v-for="note in notes" :key="note.id" :note="note"></note>
    </div>
    <div class="sidebar__content" v-else>
      No notes, <a href="#">create one</a>
    </div>
  </div>
</template>

<script>
  import Note from './Note'
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'notes'
      ])
    },
    components: {
      Note
    }
  }
</script>

<style lang="sass" scoped>
  .sidebar
    background-color: #f9f9f9
    flex: 1
    height: 100%
    min-width: 28%
    border-right: 1px solid #eee

    &__content
      padding: 30px

      a
        text-decoration: none
        color: inherit

        &:hover
          text-decoration: underline
</style>
