<template>
  <div class="sidebar">
    <div v-if="notes.length">
      <note v-for="note in notes" :key="note.id" :note="note"></note>
      <div class="sidebar__content">
        <a href="#" v-on:click.prevent="clearCurrentNote">create one</a>
      </div>
    </div>
    <div class="sidebar__content" v-else>
      No notes
    </div>
    
  </div>
</template>

<script>
  import Note from './Note'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'notes'
      ])
    },
    methods: {
      ...mapActions(['clearCurrentNote'])
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
