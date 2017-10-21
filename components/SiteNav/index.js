import React from 'react'

import Link from 'next/link'
import Head from 'next/head'

import { inject, observer } from 'mobx-react'

//
// import Layout from '../SitewideLayout'

const StyledUl = ({ children }) => (
  <ul>
    {children}
    <style jsx>{`
      list-style-type: none;
      display: float;
    `}</style>
  </ul>
)

const StyledLi = ({ children }) => (
  <li>
    {children}
    <style jsx>{`
      margin-right: 1em;
    `}</style>
  </li>
)

export default inject(
  'store'
)(observer(({ children, store }) => {
  const adjustedStore = store || {}

  return (
    <section>
      <nav>
        {adjustedStore.login ?
          <div>
            Login already
          </div> :
          <StyledUl>
            <StyledLi>
              <Link href={`/`}>
                首頁
              </Link>
            </StyledLi>
            <StyledLi>
              <Link href={`/signup`}>
                註冊
              </Link>
            </StyledLi>
            <StyledLi>
              <Link href={`/login`}>
                登入
              </Link>
            </StyledLi>
          </StyledUl>
        }
      </nav>
      {/* {children} */}
      <style jsx>{`
        padding: 1vh 0;
        color: #FFFFFF;
        background-color: #E65100;
      `}</style>
    </section>
  )
}))
