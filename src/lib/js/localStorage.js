import { writable } from 'svelte/store'
import {  browser } from '$app/env'
export const createStorage = (key, startValue) => {
  //console.log("createStorage", key, startValue)
 
  const { subscribe, set } = writable(startValue)

  return {
    subscribe,
    set,
    useLocalStorage: () => {
      const json = browser && localStorage.getItem(key)
      if (json) {
        set(JSON.parse(json))
      }

      subscribe((current) => {
        if (current) {
          browser && localStorage.setItem(key, JSON.stringify(current))
        }
      })
    },
  }
  
}
