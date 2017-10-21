import React from 'react'

import Link from 'next/link'
import Head from 'next/head'

import { inject, observer } from 'mobx-react'

//
// import Layout from '../SitewideLayout'

export default ({ children }) => (
  <section>
    {children}
    <style jsx>{`
      padding: 3vh 0.5em;
      color: #FFFFFF;
      background-color: #E65100;
    `}</style>
  </section>
)
