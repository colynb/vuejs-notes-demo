export default {
  saving: false,
  note: {
    id: null,
    title: null,
    body: null,
    lastSaved: null
  },
  /* eslint-disable no-undef */
  notes: JSON.parse(localStorage.getItem('notes')) || []
}
