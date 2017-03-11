export const saveNote = ({commit, dispatch, state}) => {
  commit('touchLastSaved')
  if (state.note.id === null) {
    commit('setCurrentNoteId', Date.now())
    commit('addToNotes', state.note)
  }
  dispatch('storeNotes')
}

export const storeNotes = ({commit, dispatch, state}) => {
  /* eslint-disable no-undef */
  localStorage.setItem('notes', JSON.stringify(state.notes))
}
