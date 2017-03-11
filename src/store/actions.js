export const saveNote = ({commit, dispatch, state}) => {
  if (state.note.id === null) {
    commit('setCurrentNoteId', Date.now())
    commit('addToNotes', state.note)
  }
  dispatch('storeNotes')
}

export const storeNotes = ({commit, dispatch, state}) => {
  console.log('storing...')
  commit('storeNotes', state.note)
}
