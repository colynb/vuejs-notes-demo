import { defaultNoteState } from './defaults'
import { clone } from 'lodash'

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
  },
  touchLastSaved (state) {
    state.note.lastSaved = Date.now()
  },
  setCurrentNote (state, note) {
    if (note === null) {
      state.note = clone(defaultNoteState)
      return
    }
    state.note = note
  },
  setSaveTimeout (state, { callback, delay }) {
    state.saveTimeout = setTimeout(callback, delay)
  },
  clearSaveTimeout (state) {
    clearInterval(state.saveTimeout)
    state.saveTimeout = null
  },
  deleteNote (state, deletedNote) {
    state.notes = state.notes.filter((note) => {
      return note.id !== deletedNote.id
    })
  }
}
