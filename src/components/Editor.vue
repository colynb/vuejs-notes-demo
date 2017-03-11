<template>
  <div class="editor">
    <input type="text" class="editor__title" placeholder="Untitled Note" v-model="note.title" v-on:keydown="save">
    <textarea class="editor__text" placeholder="Start writing" v-model="note.body" v-on:keydown="save"></textarea>

    <footer class="editor__footer">
      <ul class="editor__footer-items">
        <li class="editor__footer-item">Words: {{ wordCount }}</li>
        <li class="editor__footer-item editor__footer-item--right">
          <span v-if="saving"><em>Saving...</em></span>
          Last saved: {{ lastSaved }}
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import debounce from 'debounce'
  export default {
    created () {
      this.save = debounce(this.saveNote, 500)
    },
    computed: {
      ...mapGetters([
        'note',
        'saving',
        'lastSaved',
        'wordCount'
      ])
    },
    methods: {
      ...mapActions(['saveNote'])
    }
  }
</script>

<style lang="sass" scoped>
  
  @import '../assets/sass/placeholders'

  .editor
    flex: 4
    display: flex
    flex-direction: column

    &__title
      width: 100%
      border: 0
      font: inherit
      font-size: 1.6em
      outline: none
      padding: 25px 30px 20px

    &__text
      flex: 1
      width: 100%
      margin: 0
      padding: 20px 30px
      font: inherit
      outline: none
      resize: none
      border: 0
      line-height: 2

      mask-image: linear-gradient(to bottom, transparent 0%, #fff 5%, #fff 95%, transparent 100%)

    &__footer
      padding: 20px 30px

  .editor__footer-items
    @extend %inline-list

  .editor__footer-item
    flex: 1
    font-size: .9em

    &--right
      margin-left: auto
      text-align: right


</style>
