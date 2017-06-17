export const loadState = (reducer) => {
  try {
    const state = localStorage.getItem(reducer)
    if (state == null) {
      return []
    }
    return JSON.parse(state)
  } catch (err) {
    return []
  }
}

export const saveState = (key, state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(key, serializedState)
  } catch (err) {
		//
  }
}
