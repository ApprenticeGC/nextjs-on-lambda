import React from 'react'
import Link from 'next/link'

//
import SiteNav from '../components/SiteNav'
import SiteFooter from '../components/SiteFooter'
import Layout from '../components/SitewideLayout'

//
const HeroSection = ({ children }) => (
  <section>
    {children}
    <style jsx>{`
      padding: 20vh 0.5em;
      background-color: #FB8C00;
    `}</style>
  </section>
)

const OverviewSection = ({ children }) => (
  <section>
    {children}
    <style jsx>{`
    `}</style>
  </section>
)

//
export default (props) => (
  <Layout>

    <SiteNav>
    </SiteNav>

    <HeroSection>
    </HeroSection>

    <OverviewSection>
    </OverviewSection>

    <SiteFooter>
    </SiteFooter>
  </Layout>
)
