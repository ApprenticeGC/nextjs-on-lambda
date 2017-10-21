import React from 'react'

import Link from 'next/link'
import Head from 'next/head'

import { observable, computed, action } from 'mobx'
import { Provider, inject, observer } from 'mobx-react'

import { initStore } from '../../store'

//
const sitewideTheme = {
  minWidth: 17,
  maxWidth: 60,

  accent: {
    a100: '#F5F5F5',
    a200: '#EEEEEE',
    a400: '#BDBDBD',
    a500: '#919191',
    a600: '#757575',
    a700: '#616161',
    a800: '#424242',
    a850: '#333333',
    a900: '#212121'
  }
}

//
const SitewideLayout = inject(
  'store'
)(observer(({ children, store, theme }) => {
  const adjustedStore = store || {}

  return (
    <div>
      {children}
      <style jsx>{`
        font-family: ${adjustedStore.fontLoaded ?
          '"Comfortaa", "Noto Sans TC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"' :
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
        };
      `}</style>
    </div>
  )
}))

//
export default class _ extends React.Component {
  //
  state = {
    store: {
    }
  }

  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    const store = initStore()

    // console.log(this.props.store)
    await store.initializeClientSide()

    this.setState({
      store: store
    })
  }

  render() {
    const { children } = this.props
    const { store } = this.state

    return (
      <Provider store={store}>
        <SitewideLayout theme={sitewideTheme}>
          {children}
        </SitewideLayout>
      </Provider>
    )
  }
}
