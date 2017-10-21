import React from 'react'
import Link from 'next/link'

import { inject, observer } from 'mobx-react'

//
import SiteNav from '../components/SiteNav'
import SiteFooter from '../components/SiteFooter'
import Layout from '../components/SitewideLayout'

//
export default (props) => (
  <Layout>
    <SiteNav>
    </SiteNav>
    註冊頁面
    <SiteFooter>
    </SiteFooter>
  </Layout>
)
