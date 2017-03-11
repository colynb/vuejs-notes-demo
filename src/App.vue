<template>
  <div id="app">
    <sidebar></sidebar>
    <editor></editor>
  </div>
</template>

<script>

import Editor from './components/Editor'
import Sidebar from './components/Sidebar'

export default {
  name: 'app',
  components: {
    Sidebar,
    Editor
  }
}
</script>

<style lang="sass">
body, html
  margin: 0
  padding: 0
  height: 100%

body
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50

#app
  display: flex
  height: 100%

</style>
