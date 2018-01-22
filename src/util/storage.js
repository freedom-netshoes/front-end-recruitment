import storage from '../storage'

export const getItemFromStorage = key => storage.getItem(key)
export const setItemInStorage = (key, value) => storage.setItem(key, value)
export const removeItemFromStorage = key => storage.removeItem(key)
