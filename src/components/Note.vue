<template>
  <div class="note">
    <div class="note__content">
      <a href="" class="note__title">One note Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse incidunt corrupti ea necessitatibus earum vitae vel deleniti at, quam aspernatur porro doloremque cum, quisquam ipsum culpa adipisci quibusdam. Iste, sapiente.</a>
      <p class="note__body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum tempora rerum obcaecati doloremque eos est, laudantium sequi, minus libero quae cupiditate, necessitatibus. Obcaecati fugiat labore animi repellendus rem numquam suscipit.
      </p>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="sass" scoped>
  .note
    display: flex
    color: inherit
    text-decoration: none
    border-bottom: 1px solid #eee
    flex-direction: row
    max-width: 100%
    
    &__content
      padding: 30px
      flex: 2
      overflow: hidden

    &__title
      display: block
      font-size: 1em
      font-weight: 500
      text-decoration: none
      margin: 0
      color: inherit
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis

      &:hover
        text-decoration: underline

    &__body
      font-size: .9em
      margin-bottom: 0
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis

</style>
