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

export const openNote = ({commit}, note) => {
  commit('setCurrentNote', note)
}

export const clearCurrentNote = ({ commit, dispatch }) => {
  commit('setCurrentNote', null)
}

export const startSaveTimeout = ({ commit, dispatch, state }) => {
  if (state.saveTimeout !== null) {
    return
  }

  commit('setSaveTimeout', {
    callback () {
      dispatch('saveNote')
      dispatch('stopSaveTimeout')
    },
    delay: 1000
  })
}

export const stopSaveTimeout = ({ commit, dispatch, state }) => {
  commit('clearSaveTimeout')
}

export const deleteNote = ({ commit, dispatch, state }, note) => {
  if (note.id === state.note.id) {
    dispatch('clearCurrentNote')
  }

  commit('deleteNote', note)

  dispatch('storeNotes')
}
