'use strict'

import localforage from 'localforage'

export default localforage.createInstance({
  name: 'netshoes-client-storage',
  driver: localforage.INDEXEDDB
})
