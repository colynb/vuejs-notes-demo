import moment from 'moment'

export const note = state => state.note
export const saving = state => state.saving
export const notes = state => {
  return state.notes.sort((a, b) => a['lastSaved'] < b['lastSaved'])
}
export const lastSaved = state => {
  if (!state.note.lastSaved) {
    return 'Never'
  }

  return moment(state.note.lastSaved).calendar()
}

export const wordCount = state => {
  if (!state.note.body || state.note.body.trim() === '') {
    return 0
  }
  return state.note.body.trim().split(' ').length
}
