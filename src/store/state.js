import { defaultNoteState } from './defaults'
import { clone } from 'lodash'

export default {
  saving: false,
  note: clone(defaultNoteState),
  /* eslint-disable no-undef */
  notes: JSON.parse(localStorage.getItem('notes')) || [],
  saveTimeout: null
}
