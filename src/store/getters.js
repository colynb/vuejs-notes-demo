export const note = state => state.note
export const saving = state => state.saving
export const notes = state => {
  return state.notes.sort((a, b) => a['lastSaved'] < b['lastSaved'])
}
