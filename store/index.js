import React from 'react'
import { observable, computed, action } from 'mobx'
import { observer } from 'mobx-react'

import localforage from 'localforage'
import FontFaceObserver from 'fontfaceobserver'

let store = null

class Store {
  @observable login = false
  someValue = 10
  @observable fontLoaded = false

  constructor() {

  }

  // @action
  async initializeClientSide() {
    this.localStorage = localforage.createInstance({
      name: 'layout'
    })

    await this.handleFontLoading()
  }

  async handleFontLoading() {
    const fontA = new FontFaceObserver('Comfortaa')
    const fontB = new FontFaceObserver('Noto Sans TC')

    try {
      let isFontLoaded = await this.localStorage.getItem('fontLoaded')
      if (isFontLoaded === null || isFontLoaded === 'false') {
        let loaded = await Promise.all([fontA.load(), fontB.load()])
        // console.log(loaded)

        await this.localStorage.setItem('fontLoaded', true.toString())
      }

      this.fontLoaded = true
    } catch (err) {
      console.log(err)
    }
  }
}

export function initStore() {
  if (store === null) {
    console.log(`no store, create a store`)
    store = new Store()
  }

  console.log(`has store, return one`)
  return store
}
