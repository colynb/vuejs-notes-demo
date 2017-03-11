export default {
  setCurrentNoteId (state, id) {
    state.note.id = id
    console.log(id)
  },
  addToNotes (state, note) {
    state.notes.unshift(note)
  },
  storeNotes (state, note) {
    console.log('saving...')
    state.saving = true
    setTimeout(function () {
      state.saving = false
    }, 500)
  }
}
