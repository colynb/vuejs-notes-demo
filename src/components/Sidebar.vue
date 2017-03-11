<template>
  <div class="sidebar">

    <note></note>
    <note></note>
    <note></note>
    <!-- <div class="sidebar__content">
      No notes, <a href="#">create one</a>
    </div> -->
  </div>
</template>

<script>
  import Note from './Note'

  export default {
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
